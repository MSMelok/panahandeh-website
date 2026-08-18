import type { Lang } from './site';

/**
 * UI strings. Persian is written to be simple and idiomatic rather than elaborate —
 * a plain construction we are confident in beats an ornate one we are not.
 *
 * Routes carry the language (`/` for English, `/fa/` for Persian) rather than a
 * JavaScript toggle. Real URLs are what hreflang, sitemaps and AI answer engines
 * can actually index; a client-side toggle is invisible to all three.
 */
export const T = {
  'nav.home':        ['Home', 'خانه'],
  'nav.about':       ['About', 'درباره ما'],
  'nav.products':    ['Products', 'محصولات'],
  'nav.quality':     ['Quality', 'کیفیت'],
  'nav.logistics':   ['Logistics', 'حمل و نقل'],
  'nav.contact':     ['Contact', 'تماس'],

  'cta.quote':       ['Request a quote', 'درخواست قیمت'],
  'cta.products':    ['See the products', 'مشاهده محصولات'],
  'cta.all':         ['View the full range', 'مشاهده همه محصولات'],
  'cta.enquire':     ['Enquire about this line', 'استعلام این محصول'],

  'status.live':     ['Shipping now', 'در حال ارسال'],
  'status.soon':     ['Coming soon', 'به‌زودی'],

  'label.origin':    ['Origin', 'مبدأ'],
  'label.grade':     ['Grade', 'درجه'],
  'label.format':    ['Format', 'بسته‌بندی'],
  'label.hs':        ['HS code', 'کد تعرفه'],
  'label.category':  ['Category', 'دسته'],

  'foot.company':    ['Company', 'شرکت'],
  'foot.range':      ['Range', 'محصولات'],
  'foot.reach':      ['Get in touch', 'ارتباط با ما'],
  'foot.rights':     ['All rights reserved', 'تمامی حقوق محفوظ است'],
  'foot.brandline':  ['Saffron, pulses, beans and spices — bought at origin, packed under the RAVOMA label and shipped from Dubai.',
                      'زعفران، حبوبات، لوبیا و ادویه — خرید از مبدأ، بسته‌بندی با نشان راوما و حمل از دبی.'],

  'a11y.skip':       ['Skip to content', 'رفتن به محتوا'],
  'a11y.home':       ['Panahandeh — home', 'پناهنده — خانه'],
  'a11y.menu':       ['Open menu', 'باز کردن منو'],
  'a11y.lang':       ['Language', 'زبان'],

  'transit.title':   ['Indicative transit', 'زمان تقریبی حمل'],
  'transit.region':  ['Destination region', 'منطقه مقصد'],
  'transit.days':    ['days', 'روز'],
  'transit.note':    ['Indicative only. Port-to-port sailing time from Jebel Ali, quoted as a range because it moves with the carrier and the routing. It excludes booking lead time and destination clearance, and is not a contractual delivery date.',
                      'تقریبی است. زمان حرکت کشتی از جبل‌علی تا بندر مقصد، به صورت بازه اعلام می‌شود چون به شرکت حمل و مسیر بستگی دارد. زمان رزرو و ترخیص در مقصد را شامل نمی‌شود و تاریخ تحویل قراردادی نیست.'],

  'form.name':       ['Full name', 'نام و نام خانوادگی'],
  'form.company':    ['Company', 'شرکت'],
  'form.email':      ['Email', 'ایمیل'],
  'form.port':       ['Destination port', 'بندر مقصد'],
  'form.product':    ['Commodity', 'کالا'],
  'form.message':    ['Volume and specification', 'حجم و مشخصات'],
  'form.send':       ['Send enquiry', 'ارسال درخواست'],
  'form.sending':    ['Sending…', 'در حال ارسال…'],
  'form.sent':       ['Thank you — your enquiry has been sent. A trader will respond within one business day.',
                      'سپاسگزاریم — درخواست شما ارسال شد. یکی از همکاران ما ظرف یک روز کاری پاسخ می‌دهد.'],
  'form.failed':     ['That did not send. Please email us directly at info@panahandeh.ae.',
                      'ارسال نشد. لطفاً مستقیماً به info@panahandeh.ae ایمیل بزنید.'],
  'form.select':     ['Select a line…', 'یک کالا را انتخاب کنید…'],
  'form.err.name':   ['Please enter your name.', 'لطفاً نام خود را وارد کنید.'],
  'form.err.email':  ['Please enter a valid email.', 'لطفاً ایمیل معتبر وارد کنید.'],
  'form.err.msg':    ['Please add a few details.', 'لطفاً کمی توضیح بیشتر بنویسید.'],

  /* ------------------------------------------------------------------ *
   * Page copy. Appended for the Home / About / Products / product-detail
   * routes. Every claim here is already true of the data files: nine
   * lines, two shipping, twelve sourcing regions, five RAVOMA formats,
   * six destination regions. Nothing states a price, a date or a volume.
   * ------------------------------------------------------------------ */

  /* -- shared calls to action ----------------------------------------- */
  'cta.line':        ['View the line', 'مشاهده این قلم'],
  'cta.about':       ['About the house', 'درباره ما'],

  /* -- the four stages, used on the home band and the about page ------ */
  'flow.1':          ['Bought in season, at source', 'خرید در فصل و از مبدأ'],
  'flow.1.b':        ['The crop is assessed in season with the grower or the cleaner, and samples are pulled before any commitment is made.',
                      'محصول در فصل و همراه با کشاورز یا بوجارکننده ارزیابی می‌شود و پیش از هر تعهدی نمونه برداشته می‌شود.'],
  'flow.2':          ['Graded before packing, not after', 'درجه‌بندی پیش از بسته‌بندی، نه پس از آن'],
  'flow.2.b':        ['Sieved, de-stoned and colour-sorted to the calibration named in the contract, with moisture and foreign-matter limits fixed in writing.',
                      'الک، سنگ‌گیری و رنگ‌سورت مطابق کالیبر تعیین‌شده در قرارداد، با حدود رطوبت و ناخالصی که در قرارداد تثبیت شده است.'],
  'flow.3':          ['Consolidated at Jebel Ali', 'تجمیع بار در جبل‌علی'],
  'flow.3.b':        ['Containers are built and consolidated in Dubai, so the lot that was bought at origin is the lot that leaves the port.',
                      'کانتینرها در دبی بارگیری و تجمیع می‌شوند تا محموله‌ای که در مبدأ خریداری شده، همان محموله‌ای باشد که از بندر بیرون می‌رود.'],
  'flow.4':          ['Documents issued to the destination', 'صدور اسناد بر اساس مقصد'],
  'flow.4.b':        ['Papers are drawn against the destination market’s requirement rather than a template, and released together with the lot codes.',
                      'اسناد بر پایه الزامات بازار مقصد تنظیم می‌شود، نه از روی نمونه آماده، و همراه با کدهای محموله تحویل داده می‌شود.'],

  /* -- stat row -------------------------------------------------------- */
  'stat.origins':    ['Sourcing regions', 'منطقه تأمین'],
  'stat.lines':      ['Commodity lines', 'قلم کالا'],
  'stat.live':       ['Shipping today', 'در حال ارسال'],
  'stat.markets':    ['Destination regions', 'منطقه مقصد'],
  'stat.formats':    ['RAVOMA retail formats', 'بسته‌بندی خرده‌فروشی راوما'],

  /* -- home ------------------------------------------------------------ */
  'home.kicker':     ['Dubai · United Arab Emirates', 'دبی · امارات متحده عربی'],
  'home.h1a':        ['From the plateau', 'از فلات'],
  'home.h1b':        ['to the port.', 'تا بندر.'],
  /** The opposite-script echo of the headline: Persian under the English
   *  page, Latin under the Persian one. Deliberately not a translation pair. */
  'home.counter':    ['از فلات ایران تا بندر دبی', 'From the plateau to the port'],
  'home.lede':       ['Panahandeh buys saffron, rice, pulses, beans and spices where they grow best, grades them at origin, packs them under our own RAVOMA label and ships them out of Jebel Ali.',
                      'پناهنده زعفران، برنج، حبوبات، لوبیا و ادویه را از بهترین مناطق کشت می‌خرد، در مبدأ درجه‌بندی می‌کند، با نشان راوما بسته‌بندی می‌کند و از جبل‌علی حمل می‌کند.'],
  'home.now.k':      ['Shipping today', 'در حال ارسال'],
  'home.now.h1':     ['Two lines ship today.', 'دو قلم امروز ارسال می‌شود.'],
  'home.now.h2':     ['Seven follow.', 'هفت قلم در راه است.'],
  'home.now.p':      ['Saffron and rice are moving now, packed under the RAVOMA label and documented out of Jebel Ali. The other seven lines are named here because they are next in the range, not because they are on offer today.',
                      'زعفران و برنج هم‌اکنون در حال ارسال است؛ با نشان راوما بسته‌بندی می‌شود و اسناد آن از جبل‌علی صادر می‌شود. هفت قلم دیگر در اینجا آمده‌اند چون در نوبت بعدی هستند، نه اینکه امروز قابل سفارش باشند.'],
  'home.do.k':       ['What we do', 'کاری که می‌کنیم'],
  'home.do.h1':      ['A trading house,', 'یک خانه بازرگانی،'],
  'home.do.h2':      ['not a broker.', 'نه یک واسطه.'],
  'home.do.p':       ['The lot goes from the field to the vessel without changing hands twice.',
                      'محموله از زمین تا کشتی می‌رود، بی‌آنکه دوبار دست‌به‌دست شود.'],

  /* -- origins --------------------------------------------------------- */
  'origins.k':       ['Origins', 'مناطق تأمین'],
  'origins.h1':      ['Where each line', 'هر قلم'],
  'origins.h2':      ['comes from.', 'از کجا می‌آید.'],
  'origins.p':       ['Twelve growing regions, and the same relationships season after season.',
                      'دوازده منطقه کشت و همان روابط، فصل پس از فصل.'],

  /* -- closing band ----------------------------------------------------- */
  'close.k':         ['Enquiries', 'استعلام'],
  'close.h1':        ['Tell us what you need', 'بگویید چه چیزی می‌خواهید'],
  'close.h2':        ['landed.', 'به مقصد برسد.'],
  'close.p':         ['Commodity, grade, format, destination port and target volume. A trader responds within one business day.',
                      'کالا، درجه، بسته‌بندی، بندر مقصد و حجم مورد نظر را بنویسید. یکی از همکاران ما ظرف یک روز کاری پاسخ می‌دهد.'],

  /* -- about ------------------------------------------------------------ */
  'about.k':         ['The house', 'این خانه بازرگانی'],
  'about.h1a':       ['Bought at source.', 'خرید از مبدأ.'],
  'about.h1b':       ['Shipped from Dubai.', 'حمل از دبی.'],
  'about.lede':      ['Panahandeh Foodstuff Trading L.L.C is a Dubai trading house. We buy saffron, rice, pulses, beans and spices at origin, grade them before they are packed, consolidate them at Jebel Ali and issue the documents the destination market asks for.',
                      'شرکت بازرگانی مواد غذایی پناهنده یک خانه بازرگانی در دبی است. زعفران، برنج، حبوبات، لوبیا و ادویه را از مبدأ می‌خریم، پیش از بسته‌بندی درجه‌بندی می‌کنیم، بار را در جبل‌علی تجمیع می‌کنیم و اسنادی را که بازار مقصد می‌خواهد صادر می‌کنیم.'],
  'about.p1':        ['Saffron from Khorasan, chickpeas from Anatolia, lentils from the Kazakh steppe. We buy in season and at source, because that is the only point where quality is still a choice.',
                      'زعفران از خراسان، نخود از آناتولی، عدس از دشت قزاق. ما در فصل و از مبدأ خرید می‌کنیم، چون تنها همان‌جاست که کیفیت هنوز یک انتخاب است.'],
  'about.p2':        ['The company operates from Dubai, an hour’s road from Jebel Ali, so a lot bought at origin can be graded, packed and stuffed without changing hands twice.',
                      'شرکت از دبی فعالیت می‌کند و یک ساعت با جبل‌علی فاصله دارد؛ به این ترتیب محموله‌ای که در مبدأ خریداری می‌شود، بدون دوبار دست‌به‌دست شدن، درجه‌بندی، بسته‌بندی و بارگیری می‌شود.'],
  'about.p3':        ['Nine lines are named on this site. Saffron and rice ship today; the remaining seven are listed because they are next in the range.',
                      'در این سایت نُه قلم کالا معرفی شده است. زعفران و برنج امروز ارسال می‌شود؛ هفت قلم دیگر در نوبت بعدی هستند.'],
  'about.control.k': ['Control points', 'نقاط کنترل'],
  'about.control.h1':['Five stages between', 'پنج مرحله میان'],
  'about.control.h2':['crop and vessel.', 'مزرعه و کشتی.'],
  'about.brand.k':   ['Company and brand', 'شرکت و نشان'],
  'about.brand.h1':  ['Panahandeh trades.', 'پناهنده بازرگانی می‌کند.'],
  'about.brand.h2':  ['RAVOMA is the pack.', 'راوما نشان بسته‌بندی است.'],
  'about.brand.p':   ['Panahandeh Foodstuff Trading L.L.C is the company: it buys the lot, grades it, ships it and signs the documents. RAVOMA is the brand printed on the retail packs, and the saffron formats are packed under it. The two names are not interchangeable.',
                      'شرکت بازرگانی مواد غذایی پناهنده، شرکت است: محموله را می‌خرد، درجه‌بندی می‌کند، حمل می‌کند و اسناد را امضا می‌کند. راوما نشانی است که روی بسته‌های خرده‌فروشی چاپ می‌شود و بسته‌بندی‌های زعفران با آن عرضه می‌شود. این دو نام جای یکدیگر را نمی‌گیرند.'],
  'about.port.k':    ['Port of loading', 'بندر بارگیری'],
  'about.port.h':    ['Jebel Ali, Dubai.', 'جبل‌علی، دبی.'],
  'about.port.p':    ['Every container is built and consolidated at Jebel Ali. Lot codes and shipping documents are released together, so the paperwork and the container describe the same goods.',
                      'هر کانتینر در جبل‌علی بارگیری و تجمیع می‌شود. کد محموله و اسناد حمل با هم تحویل داده می‌شود تا اسناد و کانتینر یک کالا را توصیف کنند.'],

  /* -- products index ---------------------------------------------------- */
  'products.k':      ['The range', 'محصولات'],
  'products.h1a':    ['Nine lines.', 'نُه قلم کالا.'],
  'products.h1b':    ['Two ship today.', 'دو قلم امروز ارسال می‌شود.'],
  'products.lede':   ['Saffron and rice are packed and moving now. The other seven lines carry their origin, grade and HS code so a buyer can specify against them, but they are not on offer yet.',
                      'زعفران و برنج هم‌اکنون بسته‌بندی و ارسال می‌شود. هفت قلم دیگر با مبدأ، درجه و کد تعرفه معرفی شده‌اند تا خریدار بتواند بر پایه آن‌ها مشخصات بدهد، اما هنوز قابل سفارش نیستند.'],
  'products.now.h':  ['Shipping now', 'در حال ارسال'],
  'products.soon.h': ['Next in the range', 'در نوبت بعدی'],
  'products.soon.p': ['Named, specified and sourced — not yet on offer. Send an enquiry and we will tell you when a line opens.',
                      'معرفی‌شده، دارای مشخصات و مبدأ — اما هنوز عرضه نشده است. استعلام بفرستید تا زمان عرضه را به شما اعلام کنیم.'],
  'products.packs.k':['RAVOMA formats', 'بسته‌بندی راوما'],
  'products.packs.h':['Five retail formats.', 'پنج بسته‌بندی خرده‌فروشی.'],
  'products.packs.p':['The RAVOMA saffron packs, from a pocket dispenser to a presentation box. Bulk and private-label formats come off the same lots.',
                      'بسته‌بندی‌های زعفران راوما، از پخش‌کن جیبی تا جعبه ارائه. بسته‌بندی عمده و برند اختصاصی از همان محموله‌ها تأمین می‌شود.'],

  /* -- product detail ----------------------------------------------------- */
  'pd.spec':         ['Specification', 'مشخصات'],
  'pd.overview':     ['This line', 'این قلم'],
  'pd.related':      ['Other lines', 'قلم‌های دیگر'],
  'pd.availability': ['Availability', 'وضعیت عرضه'],
  'pd.live.note':    ['This line ships today. It is packed to the formats listed above and consolidated at Jebel Ali, with lot codes and shipping documents released together.',
                      'این قلم امروز ارسال می‌شود. در بسته‌بندی‌های بالا عرضه و در جبل‌علی تجمیع می‌شود و کد محموله و اسناد حمل با هم تحویل داده می‌شود.'],
  'pd.soon.note':    ['This line is not on offer yet. The origin, grade and calibration above are the specification we source to; send an enquiry and we will tell you when it opens.',
                      'این قلم هنوز عرضه نشده است. مبدأ، درجه و کالیبر بالا همان مشخصاتی است که بر پایه آن تأمین می‌کنیم؛ استعلام بفرستید تا زمان عرضه را اعلام کنیم.'],
  'pd.ravoma':       ['Packed under the RAVOMA label.', 'با نشان راوما بسته‌بندی می‌شود.'],
  'cat.spices':      ['Spices', 'ادویه'],
  'cat.grains':      ['Grains', 'غلات'],
  'cat.pulses':      ['Pulses', 'حبوبات'],

  /* -- page metadata ------------------------------------------------------ */
  'meta.home.title': ['Saffron, rice, pulses and spices from Dubai', 'زعفران، برنج، حبوبات و ادویه از دبی'],
  'meta.home.desc':  ['Panahandeh Foodstuff Trading L.L.C buys saffron, rice, pulses, beans and spices at origin and exports them from Jebel Ali under the RAVOMA label. Saffron and rice ship today; seven further lines follow.',
                      'شرکت بازرگانی مواد غذایی پناهنده زعفران، برنج، حبوبات، لوبیا و ادویه را از مبدأ می‌خرد و با نشان راوما از جبل‌علی صادر می‌کند. زعفران و برنج امروز ارسال می‌شود و هفت قلم دیگر در راه است.'],
  'meta.about.title':['About the trading house', 'درباره این خانه بازرگانی'],
  'meta.about.desc': ['How Panahandeh buys at source, grades before packing, consolidates at Jebel Ali and issues destination documents — and how the RAVOMA pack brand relates to the company.',
                      'اینکه پناهنده چگونه از مبدأ می‌خرد، پیش از بسته‌بندی درجه‌بندی می‌کند، بار را در جبل‌علی تجمیع می‌کند و اسناد مقصد را صادر می‌کند — و نسبت نشان راوما با شرکت.'],
  'meta.products.title': ['Products — nine lines', 'محصولات — نُه قلم کالا'],
  'meta.products.desc':  ['Saffron, rice, chickpeas, green lentils, yellow split peas, red kidney beans, turmeric, black pepper and coriander seed, each with origin, grade, retail format and HS code. Saffron and rice ship today.',
                          'زعفران، برنج، نخود، عدس سبز، لپه، لوبیا قرمز، زردچوبه، فلفل سیاه و تخم گشنیز، هرکدام با مبدأ، درجه، بسته‌بندی و کد تعرفه. زعفران و برنج امروز ارسال می‌شود.'],

  /* ------------------------------------------------------------------ *
   * Quality / Logistics / Contact / 404. Every claim below is already
   * carried by site.ts — the six certifications, the five control points,
   * the three Incoterms and the six transit ranges. Nothing here states a
   * price, a date, a volume or a certification the data does not hold.
   * The closing band reuses close.* above rather than restating it.
   * ------------------------------------------------------------------ */

  /* -- Quality ---------------------------------------------------------- */
  'meta.quality.title': ['Quality & certification', 'کیفیت و گواهی‌ها'],
  'meta.quality.desc':  ['ISO 3632 category I saffron, phytosanitary and origin certificates, halal where the destination requires it, food-grade packing, and a lot code on every retail pouch that resolves to origin, harvest window, cleaning line and packing date.',
                         'زعفران درجه یک ایزو ۳۶۳۲، گواهی بهداشت گیاهی و گواهی مبدأ، حلال در صورت الزام بازار مقصد، بسته‌بندی مواد غذایی، و کد محموله روی هر بسته خرده‌فروشی که به مبدأ، بازه برداشت، خط بوجاری و تاریخ بسته‌بندی می‌رسد.'],
  'q.kicker':        ['Quality', 'کیفیت'],
  'q.h1a':           ['Everything is settled', 'هر چیز پیش از حمل'],
  'q.h1b':           ['before it ships.', 'تعیین می‌شود.'],
  'q.lede':          ['Grade, moisture, foreign matter and the paperwork are agreed before a lot is bought, not argued over once the container has landed. This page sets out what travels with the goods, and where each thing is settled.',
                      'درجه، رطوبت، ناخالصی و اسناد پیش از خرید هر محموله توافق می‌شود، نه هنگام رسیدن کانتینر. این صفحه می‌گوید چه چیزی همراه کالا می‌رود و هر چیز کجا تعیین می‌شود.'],

  'q.certs.k':       ['What travels with the goods', 'آنچه همراه کالا می‌رود'],
  'q.certs.h':       ['What a buyer receives.', 'آنچه خریدار دریافت می‌کند.'],
  'q.certs.p':       ['Certification is prepared for the market the container is going to. Nothing here is a template.',
                      'گواهی‌ها برای همان بازاری تهیه می‌شود که کانتینر به آن می‌رود. هیچ‌کدام از روی الگوی آماده نیست.'],

  'q.ctrl.k':        ['Where each thing is settled', 'هر چیز کجا تعیین می‌شود'],
  'q.ctrl.h':        ['Five points between the crop and the vessel.', 'پنج نقطه میان محصول و کشتی.'],
  'q.ctrl.p':        ['Each of these has a place where it is fixed: at origin, on the cleaning line, in the contract, before the vessel sails, and on the pouch itself.',
                      'هر کدام جایی دارد که در آن تثبیت می‌شود: در مبدأ، روی خط بوجاری، در متن قرارداد، پیش از حرکت کشتی، و روی خود بسته.'],
  'q.where.1':       ['At origin, in season', 'در مبدأ، در فصل'],
  'q.where.2':       ['On the cleaning line', 'روی خط بوجاری'],
  'q.where.3':       ['In the contract', 'در متن قرارداد'],
  'q.where.4':       ['Before the vessel sails', 'پیش از حرکت کشتی'],
  'q.where.5':       ['On the pouch', 'روی خود بسته'],

  'q.trace.k':       ['Traceability', 'ردیابی'],
  'q.trace.h':       ['One code, four answers.', 'یک کد، چهار پاسخ.'],
  'q.trace.p':       ['Every retail pouch carries a lot code. That single code resolves to the origin the lot was bought from, the harvest window it came out of, the cleaning line it ran through, and the date it was packed.',
                      'روی هر بسته خرده‌فروشی یک کد محموله هست. همین یک کد به مبدأ خرید، بازه برداشت، خط بوجاری و تاریخ بسته‌بندی می‌رسد.'],
  'q.trace.origin':  ['Origin', 'مبدأ'],
  'q.trace.harvest': ['Harvest window', 'بازه برداشت'],
  'q.trace.line':    ['Cleaning line', 'خط بوجاری'],
  'q.trace.packed':  ['Packing date', 'تاریخ بسته‌بندی'],

  'q.faq.k':         ['Questions buyers ask', 'پرسش‌های خریداران'],
  'q.faq.h':         ['Answered from the specification.', 'پاسخ بر پایه مشخصات.'],
  'q.faq.q1':        ['Is Panahandeh saffron ISO 3632 certified?', 'آیا زعفران پناهنده گواهی ایزو ۳۶۳۲ دارد؟'],
  'q.faq.a1':        ['Yes. Saffron is graded to category I under ISO 3632, with a laboratory result for every lot. Colouring strength is stated, never estimated.',
                      'بله. زعفران بر پایه ایزو ۳۶۳۲ در درجه یک است، همراه با نتیجه آزمایشگاه برای هر محموله. قدرت رنگی اعلام می‌شود، نه تخمین زده.'],
  'q.faq.q2':        ['What certificates come with a shipment?', 'چه گواهی‌هایی همراه محموله ارسال می‌شود؟'],
  'q.faq.a2':        ['A phytosanitary certificate is issued for every consignment against the plant-health requirements of the destination market. A certificate of origin documents the country of production for customs clearance and preferential duty where it applies. Halal certification is provided where the destination market requires it.',
                      'برای هر محموله گواهی بهداشت گیاهی مطابق الزامات بهداشت گیاهی بازار مقصد صادر می‌شود. گواهی مبدأ کشور تولید را برای ترخیص گمرکی و تعرفه ترجیحی، در صورت وجود، مستند می‌کند. گواهی حلال نیز در صورتی که بازار مقصد الزام کند ارائه می‌شود.'],
  'q.faq.q3':        ['Can I trace a pouch back to its harvest?', 'آیا می‌توان یک بسته را تا زمان برداشت ردیابی کرد؟'],
  'q.faq.a3':        ['Yes. Every retail pouch carries a lot code resolving to origin, harvest window, cleaning line and packing date.',
                      'بله. روی هر بسته خرده‌فروشی کد محموله درج می‌شود که به مبدأ، بازه برداشت، خط بوجاری و تاریخ بسته‌بندی می‌رسد.'],
  'q.faq.q4':        ['Where are moisture and foreign-matter limits agreed?', 'حد رطوبت و ناخالصی کجا تعیین می‌شود؟'],
  'q.faq.a4':        ['In the contract. Limits are fixed in the contract, not negotiated on arrival.',
                      'در قرارداد. حدود مجاز در قرارداد تثبیت می‌شود، نه هنگام تحویل.'],
  'q.faq.q5':        ['Is a shipment inspected before it leaves?', 'آیا محموله پیش از حمل بازرسی می‌شود؟'],
  'q.faq.a5':        ['Yes. Pre-shipment inspection is carried out against destination-market requirements before the vessel sails.',
                      'بله. بازرسی پیش از حمل، پیش از حرکت کشتی و مطابق الزامات بازار مقصد انجام می‌شود.'],
  'q.faq.q6':        ['What packaging does the product ship in?', 'کالا در چه بسته‌بندی‌ای حمل می‌شود؟'],
  'q.faq.a6':        ['All primary packaging is food-grade material, sealed at the packing line.',
                      'تمام بسته‌بندی اولیه از مواد مناسب مواد غذایی است و در خط بسته‌بندی درزبندی می‌شود.'],

  /* -- Logistics -------------------------------------------------------- */
  'meta.logistics.title': ['Shipping & Incoterms', 'حمل و شرایط تحویل'],
  'meta.logistics.desc':  ['Full, part and mixed-commodity containers consolidated at Jebel Ali, sold FOB, CFR or CIF, with indicative port-to-port sailing times to the GCC, South Asia, East Africa, Europe, the United Kingdom and North America.',
                           'کانتینر کامل، کمتر از کانتینر و ترکیبی با تجمیع در جبل‌علی، فروش فوب، سی‌اند‌اف یا سیف، همراه با زمان تقریبی حمل دریایی به کشورهای خلیج فارس، جنوب آسیا، شرق آفریقا، اروپا، بریتانیا و آمریکای شمالی.'],
  'l.kicker':        ['Logistics', 'حمل و نقل'],
  'l.h1a':           ['From Jebel Ali to', 'از جبل‌علی، تا'],
  'l.h1b':           ['your port.', 'بندر شما.'],
  'l.lede':          ['Every container is made up and consolidated at Jebel Ali, so the lot that was bought at origin is the lot that leaves the port. How a load is built, the terms it is sold on, and how long the water takes.',
                      'هر کانتینر در جبل‌علی چیده و تجمیع می‌شود؛ همان محموله‌ای که در مبدأ خریداری شده، همان است که بندر را ترک می‌کند. در ادامه: چیدن بار، شرایط تحویل، و مدت زمان دریا.'],
  'l.port':          ['Jebel Ali, Dubai', 'جبل‌علی، دبی'],
  'l.jebelali':      ['Jebel Ali', 'جبل‌علی'],

  'l.cons.k':        ['Consolidation', 'تجمیع بار'],
  'l.cons.h':        ['Loads are built in Dubai.', 'بار در دبی چیده می‌شود.'],
  'l.cons.p':        ['Containers are made up at Jebel Ali. Full loads and part loads are both handled, and one container can carry more than one commodity.',
                      'کانتینرها در جبل‌علی چیده می‌شود. بار کامل و بار کمتر از کانتینر هر دو انجام می‌شود و یک کانتینر می‌تواند بیش از یک کالا را حمل کند.'],
  'l.cons.fcl':      ['Full container load', 'بار کامل کانتینر'],
  'l.cons.fcl.b':    ['The whole container is yours, made up and consolidated at Jebel Ali.',
                      'تمام کانتینر از آنِ شماست؛ چیدن و تجمیع در جبل‌علی.'],
  'l.cons.lcl':      ['Less than container load', 'بار کمتر از کانتینر'],
  'l.cons.lcl.b':    ['Part of a container, for volumes below a full load.',
                      'بخشی از یک کانتینر، برای حجم‌های کمتر از یک بار کامل.'],
  'l.cons.mix':      ['Mixed-commodity container', 'کانتینر ترکیبی'],
  'l.cons.mix.b':    ['More than one line in the same container, so a smaller buyer still ships a full load.',
                      'بیش از یک کالا در یک کانتینر، تا خریدار کوچک‌تر هم بتواند یک بار کامل بفرستد.'],

  'l.terms.k':       ['Incoterms', 'شرایط تحویل'],
  'l.terms.h':       ['The terms we sell on.', 'شرایطی که بر پایه آن می‌فروشیم.'],
  'l.terms.p':       ['Incoterms 2020. These describe the terms themselves; what applies to a particular shipment is confirmed in the offer.',
                      'اینکوترمز ۲۰۲۰. این‌ها خودِ شرایط را توصیف می‌کنند؛ آنچه برای یک محموله مشخص اعمال می‌شود در پیشنهاد قیمت تأیید می‌گردد.'],

  'l.transit.h':     ['How long the water takes.', 'دریا چقدر طول می‌کشد.'],
  'l.transit.p':     ['Port-to-port sailing time from Jebel Ali, drawn on one shared scale so the regions can be read against each other.',
                      'زمان حرکت کشتی از جبل‌علی تا بندر مقصد، روی یک مقیاس مشترک تا مناطق با هم قابل مقایسه باشند.'],
  'l.transit.scale': ['Days from Jebel Ali', 'روز از جبل‌علی'],
  'l.note.k':        ['A range, not a date', 'یک بازه، نه یک تاریخ'],

  /* -- Contact ---------------------------------------------------------- */
  'meta.contact.title': ['Contact', 'تماس'],
  'meta.contact.desc':  ['Enquiries for saffron, rice, pulses, beans and spices from Panahandeh Foodstuff Trading L.L.C, Dubai. Telephone, email and an enquiry form.',
                         'استعلام زعفران، برنج، حبوبات، لوبیا و ادویه از بازرگانی مواد غذایی پناهنده، دبی. تلفن، ایمیل و فرم استعلام.'],
  'c.kicker':        ['Contact', 'تماس'],
  'c.h1a':           ['Tell us what you need and', 'بگویید چه می‌خواهید و'],
  'c.h1b':           ['where it lands.', 'کجا تحویل شود.'],
  'c.lede':          ['Commodity, grade, format, destination port and target volume. Send those and we come back with an indication and a lead time.',
                      'کالا، درجه، بسته‌بندی، بندر مقصد و حجم مورد نظر. این‌ها را بفرستید تا با یک پیشنهاد اولیه و زمان تحویل پاسخ دهیم.'],
  'c.tel':           ['Telephone', 'تلفن'],
  'c.office':        ['Office', 'دفتر'],
  'c.officev':       ['Dubai, United Arab Emirates', 'دبی، امارات متحده عربی'],
  'c.reply':         ['A trader will respond within one business day.', 'یکی از همکاران ما ظرف یک روز کاری پاسخ می‌دهد.'],
  'c.inc.k':         ['What to include', 'چه چیزی بنویسید'],
  'c.inc.h':         ['Five things that get you a real answer.', 'پنج نکته که پاسخ دقیق‌تری می‌گیرد.'],
  'c.inc.commodity': ['Which line — saffron, rice, a pulse or a spice.', 'کدام کالا — زعفران، برنج، حبوبات یا ادویه.'],
  'c.inc.grade':     ['The grade or calibration you buy on.', 'درجه یا کالیبری که بر پایه آن خرید می‌کنید.'],
  'c.inc.format':    ['Retail pack or bulk, and the weight.', 'بسته خرده‌فروشی یا عمده، و وزن آن.'],
  'c.inc.port':      ['Where it has to land, so the right term can be quoted.', 'بندری که بار باید در آن تخلیه شود، تا شرایط درست پیشنهاد شود.'],
  'c.inc.volume':    ['Target volume', 'حجم مورد نظر'],
  'c.inc.volume.b':  ['Per shipment, and whether it repeats.', 'برای هر محموله، و اینکه تکرار می‌شود یا نه.'],
  'c.form.k':        ['Enquiry', 'استعلام'],
  'c.form.h':        ['Send it from here.', 'از همین‌جا بفرستید.'],

  /* -- 404 -------------------------------------------------------------- */
  'nf.title':        ['Page not found', 'صفحه پیدا نشد'],
  'nf.h1a':          ['That page is not', 'این صفحه'],
  'nf.h1b':          ['in the range.', 'در فهرست نیست.'],
  'nf.p':            ['The link is broken, or the page has moved. The range and the company are both still here.',
                      'پیوند نادرست است یا صفحه جابه‌جا شده. محصولات و شرکت هر دو سر جای خود هستند.'],
} as const;

export type Key = keyof typeof T;

export function t(key: Key, lang: Lang): string {
  return T[key][lang === 'fa' ? 1 : 0];
}

/** `/about` in English, `/fa/about` in Persian. */
export function href(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'fa' ? `/fa${clean === '/' ? '' : clean}` : clean;
}

/** Latin digits to Persian, for numerals shown in Persian copy. */
export function digits(input: string | number, lang: Lang): string {
  const s = String(input);
  return lang === 'fa' ? s.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]) : s;
}
