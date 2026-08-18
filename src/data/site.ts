/**
 * Single source of truth for company facts.
 *
 * Everything here appears on the public site and in structured data, so it must be
 * true. Nothing in this file may be invented — if a value is not confirmed by the
 * client, leave it out rather than guessing. Search engines and AI answer engines
 * treat this as fact about a real business.
 */

export const SITE = {
  url: 'https://panahandeh.devsource.dev',
  /** Legal entity. Never merged with the product brand. */
  legalName: 'Panahandeh Foodstuff Trading L.L.C',
  shortName: 'Panahandeh',
  /** Product brand printed on the packs. */
  brand: 'RAVOMA',
  tagline: 'Premium Iranian Saffron',
  founded: null as string | null, // not supplied by the client — do not invent
  email: 'info@panahandeh.ae',
  phone: '+971 50 123 4567',
  phoneHref: '+971501234567',
  address: {
    locality: 'Dubai',
    country: 'AE',
    countryName: 'United Arab Emirates',
  },
  port: 'Jebel Ali, Dubai',
  languages: ['en', 'fa'] as const,
  defaultLanguage: 'en' as const,
};

export type Lang = (typeof SITE.languages)[number];

/** Incoterms offered. Standard Incoterms 2020 definitions — these describe the terms,
 *  not a Panahandeh-specific commitment. Worth a client check before launch. */
export const INCOTERMS = [
  { code: 'FOB', place: 'Jebel Ali', en: 'Free On Board — we deliver, clear for export and load. Freight and insurance are yours from the rail.', fa: 'تحویل روی عرشه — بارگیری و ترخیص صادراتی با ماست؛ کرایه حمل و بیمه از آن پس با شماست.' },
  { code: 'CFR', place: null, en: 'Cost and Freight — we contract and pay carriage to your named port. Insurance is yours.', fa: 'هزینه و کرایه حمل — حمل تا بندر مقصد شما با ماست؛ بیمه با شماست.' },
  { code: 'CIF', place: null, en: 'Cost, Insurance and Freight — carriage and minimum marine insurance to your named port.', fa: 'هزینه، بیمه و کرایه حمل — حمل و حداقل بیمه دریایی تا بندر مقصد شما.' },
];

/** Indicative port-to-port sailing time from Jebel Ali. A range, because it moves with
 *  the carrier and the routing. Excludes booking lead time and destination clearance.
 *  Never presented as a contractual delivery date. */
export const TRANSIT = [
  { region: 'GCC', regionFa: 'شورای همکاری خلیج فارس', min: 3, max: 7 },
  { region: 'South Asia', regionFa: 'جنوب آسیا', min: 7, max: 12 },
  { region: 'East Africa', regionFa: 'شرق آفریقا', min: 10, max: 14 },
  { region: 'Europe', regionFa: 'اروپا', min: 18, max: 24 },
  { region: 'United Kingdom', regionFa: 'بریتانیا', min: 20, max: 26 },
  { region: 'North America', regionFa: 'آمریکای شمالی', min: 25, max: 35 },
];
export const TRANSIT_MAX = 35;

export const CERTIFICATIONS = [
  {
    id: 'iso3632',
    en: 'ISO 3632 category I',
    fa: 'ایزو ۳۶۳۲ درجه یک',
    enBody: 'Saffron graded to category I under ISO 3632, with a laboratory result for every lot. Colouring strength is stated, never estimated.',
    faBody: 'زعفران بر پایه ایزو ۳۶۳۲ در درجه یک، همراه با نتیجه آزمایشگاه برای هر محموله. قدرت رنگی اعلام می‌شود، نه تخمین زده.',
  },
  {
    id: 'phyto',
    en: 'Phytosanitary certificate',
    fa: 'گواهی بهداشت گیاهی',
    enBody: 'Issued for every consignment against the plant-health requirements of the destination market.',
    faBody: 'برای هر محموله و مطابق الزامات بهداشت گیاهی بازار مقصد صادر می‌شود.',
  },
  {
    id: 'origin',
    en: 'Certificate of origin',
    fa: 'گواهی مبدأ',
    enBody: 'Documenting the country of production for customs clearance and preferential duty where it applies.',
    faBody: 'کشور تولید را برای ترخیص گمرکی و تعرفه ترجیحی، در صورت وجود، مستند می‌کند.',
  },
  {
    id: 'halal',
    en: 'Halal certification',
    fa: 'گواهی حلال',
    enBody: 'Provided where the destination market requires it.',
    faBody: 'در صورتی که بازار مقصد الزام کند، ارائه می‌شود.',
  },
  {
    id: 'foodgrade',
    en: 'Food-grade packing',
    fa: 'بسته‌بندی مواد غذایی',
    enBody: 'All primary packaging is food-grade material, sealed at the packing line.',
    faBody: 'تمام بسته‌بندی اولیه از مواد مناسب مواد غذایی است و در خط بسته‌بندی درزبندی می‌شود.',
  },
  {
    id: 'docs',
    en: 'Destination documentation',
    fa: 'اسناد مقصد',
    enBody: 'Prepared against the destination market’s requirement rather than a template, and released together with the lot codes.',
    faBody: 'بر اساس الزامات بازار مقصد تهیه می‌شود، نه از روی الگوی آماده، و همراه با کدهای محموله تحویل داده می‌شود.',
  },
];

/** The five controlled stages between crop and vessel. */
export const CONTROL_POINTS = [
  { en: 'Crop selection', fa: 'انتخاب محصول', enFixed: 'Assessed in-season with the grower or cleaner. Samples pulled before any commitment.', faFixed: 'در فصل و همراه با کشاورز یا بوجارکننده ارزیابی می‌شود. نمونه پیش از هر تعهدی گرفته می‌شود.' },
  { en: 'Calibration', fa: 'کالیبراسیون', enFixed: 'Sieved, de-stoned and colour-sorted to the calibration named in the contract.', faFixed: 'الک، سنگ‌گیری و رنگ‌سورت مطابق کالیبر تعیین‌شده در قرارداد.' },
  { en: 'Moisture & foreign matter', fa: 'رطوبت و ناخالصی', enFixed: 'Limits fixed in the contract, not negotiated on arrival.', faFixed: 'حدود مجاز در قرارداد تثبیت می‌شود، نه هنگام تحویل.' },
  { en: 'Pre-shipment inspection', fa: 'بازرسی پیش از حمل', enFixed: 'Against destination-market requirements before the vessel sails.', faFixed: 'پیش از حرکت کشتی و مطابق الزامات بازار مقصد.' },
  { en: 'Lot traceability', fa: 'ردیابی محموله', enFixed: 'Every retail pouch carries a lot code resolving to origin, harvest window, cleaning line and packing date.', faFixed: 'روی هر بسته کد محموله درج می‌شود که به مبدأ، بازه برداشت، خط بوجاری و تاریخ بسته‌بندی می‌رسد.' },
];
