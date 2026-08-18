/**
 * Enquiry endpoint.
 *
 * Rules this file exists to enforce:
 *
 * - The client is not trusted. Everything is re-validated here, because the browser
 *   validation is a courtesy to the buyer, not a gate.
 * - It never reports success it did not achieve. If the API key is missing the response
 *   is a 500 that says the endpoint is not configured; a silent 200 would lose real
 *   enquiries and nobody would find out for weeks.
 * - Nothing that identifies the sender is logged. Failures log a status code and a
 *   stage, never a name, address or message body.
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const LIMITS = {
  name: 120,
  company: 160,
  email: 254,
  port: 160,
  commodity: 80,
  commodityLabel: 120,
  message: 4000,
} as const;

/** 64 KB is far more than the form can produce and small enough to stop a flood. */
const MAX_BODY = 64 * 1024;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Payload = Record<string, unknown>;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const esc = (v: string) =>
  v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * `import.meta.env.X` has to stay a literal member access — Vite only substitutes that
 * exact form at build time, and a computed lookup resolves to undefined at runtime.
 */
function readEnv(name: 'RESEND_API_KEY' | 'ENQUIRY_TO' | 'ENQUIRY_FROM'): string | undefined {
  const fromMeta =
    name === 'RESEND_API_KEY'
      ? import.meta.env.RESEND_API_KEY
      : name === 'ENQUIRY_TO'
        ? import.meta.env.ENQUIRY_TO
        : import.meta.env.ENQUIRY_FROM;
  const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
  const value = (fromMeta as string | undefined) ?? proc?.env?.[name];
  return value && String(value).trim() ? String(value).trim() : undefined;
}

export const POST: APIRoute = async ({ request }) => {
  if (!(request.headers.get('content-type') || '').includes('application/json')) {
    return json({ ok: false, error: 'unsupported_media_type' }, 415);
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return json({ ok: false, error: 'unreadable' }, 400);
  }
  if (raw.length > MAX_BODY) return json({ ok: false, error: 'too_large' }, 413);

  let body: Payload;
  try {
    body = JSON.parse(raw) as Payload;
  } catch {
    return json({ ok: false, error: 'malformed_json' }, 400);
  }
  if (!body || typeof body !== 'object') return json({ ok: false, error: 'malformed_json' }, 400);

  // Honeypot. A real browser leaves this empty; anything in it is a bot.
  if (str(body.website, 200) !== '') {
    return json({ ok: false, error: 'rejected' }, 400);
  }

  const data = {
    name: str(body.name, LIMITS.name),
    company: str(body.company, LIMITS.company),
    email: str(body.email, LIMITS.email),
    port: str(body.port, LIMITS.port),
    commodity: str(body.commodity, LIMITS.commodity),
    commodityLabel: str(body.commodityLabel, LIMITS.commodityLabel),
    message: str(body.message, LIMITS.message),
    lang: str(body.lang, 8) === 'fa' ? 'fa' : 'en',
  };

  const fields: string[] = [];
  if (!data.name) fields.push('name');
  if (!EMAIL.test(data.email)) fields.push('email');
  if (data.message.length < 8) fields.push('message');
  // A header injected through the reply-to address would let a bot relay mail.
  if (/[\r\n]/.test(data.email)) fields.push('email');
  if (fields.length) return json({ ok: false, error: 'invalid', fields }, 400);

  const key = readEnv('RESEND_API_KEY');
  const to = readEnv('ENQUIRY_TO');
  const from = readEnv('ENQUIRY_FROM') || 'RAVOMA enquiries <enquiries@panahandeh.ae>';

  if (!key || !to) {
    console.error('[enquiry] not configured: missing RESEND_API_KEY and/or ENQUIRY_TO');
    return json(
      {
        ok: false,
        error: 'not_configured',
        message:
          'The enquiry endpoint is not configured on this deployment. RESEND_API_KEY and ENQUIRY_TO must be set before enquiries can be delivered.',
      },
      500,
    );
  }

  const label = data.commodityLabel || data.commodity || '—';
  const subject = `Enquiry — ${data.name}${data.company ? ` · ${data.company}` : ''}`;

  const rows: Array<[string, string]> = [
    ['Name', data.name],
    ['Company', data.company || '—'],
    ['Email', data.email],
    ['Destination port', data.port || '—'],
    ['Commodity', label],
    ['Language', data.lang === 'fa' ? 'فارسی' : 'English'],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    data.message,
  ].join('\n');

  const html = [
    '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#171513">',
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">',
    ...rows.map(
      ([k, v]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#5A4F43">${esc(k)}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
    ),
    '</table>',
    '<p style="margin:20px 0 6px;color:#5A4F43">Message</p>',
    `<p style="margin:0;white-space:pre-wrap">${esc(data.message)}</p>`,
    '</div>',
  ].join('');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${key}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      // Status only. The response body can quote the payload back, and the payload is
      // the buyer's contact details.
      console.error('[enquiry] delivery failed, provider status', res.status);
      return json({ ok: false, error: 'delivery_failed' }, 502);
    }
  } catch {
    console.error('[enquiry] delivery failed, provider unreachable');
    return json({ ok: false, error: 'delivery_failed' }, 502);
  }

  return json({ ok: true }, 200);
};

/** Anything that is not a POST is a mistake, and should say so rather than 404. */
export const ALL: APIRoute = ({ request }) =>
  request.method === 'POST'
    ? json({ ok: false, error: 'method_not_allowed' }, 405)
    : new Response(JSON.stringify({ ok: false, error: 'method_not_allowed' }), {
        status: 405,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          allow: 'POST',
          'cache-control': 'no-store',
        },
      });
