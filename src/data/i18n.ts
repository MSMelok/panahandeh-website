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

/**
 * Arabic. Formal Modern Standard Arabic in a trade register — the register a Gulf
 * importer's purchasing desk reads, not dialect and not marketing English translated
 * word for word. Where the English is elaborate the Arabic is plain: a simple
 * construction we are confident in beats an ornate one we are not.
 *
 * Two mechanical rules hold this file together:
 *
 * 1. **Latin runs that carry digits are isolated.** `\u2066` is LEFT-TO-RIGHT ISOLATE
 *    and `\u2069` is POP DIRECTIONAL ISOLATE — the character-level equivalent of
 *    `<bdi dir="ltr">`, which is the only form available here because these strings
 *    are rendered as text nodes, not markup. Without it "ISO 3632" can pick up the
 *    surrounding right-to-left run at its edges.
 * 2. **Numerals are Arabic-Indic (U+0660 ٠١٢٣), never Persian (U+06F0 ۰۱۲۳).** They
 *    look alike and are different codepoints; Persian numerals in Arabic copy read as
 *    an error. Ranges are written with "من … إلى …" rather than an en-dash, because a
 *    dash between two Arabic-Indic numerals is bidi-neutral and reverses the pair.
 *
 * Not translated: RAVOMA (the mark printed on the packs), ISO 3632, ASTA, HS codes,
 * and the Incoterm letter codes. The company is written بناهنده throughout — پناهنده
 * is the Persian spelling and the letter پ does not belong to Arabic orthography.
 */
export const AR: Partial<Record<Key, string>> = {
  'nav.home':        'الرئيسية',
  'nav.about':       'من نحن',
  'nav.products':    'المنتجات',
  'nav.quality':     'الجودة',
  'nav.logistics':   'الشحن والنقل',
  'nav.contact':     'اتصل بنا',

  'cta.quote':       'اطلب عرض سعر',
  'cta.products':    'تصفّح المنتجات',
  'cta.all':         'عرض جميع المنتجات',
  'cta.enquire':     'استفسر عن هذا الصنف',

  'status.live':     'يُشحن الآن',
  'status.soon':     'قريباً',

  'label.origin':    'المنشأ',
  'label.grade':     'الدرجة',
  'label.format':    'العبوة',
  'label.hs':        'الرمز الجمركي المنسق',
  'label.category':  'الفئة',

  'foot.company':    'الشركة',
  'foot.range':      'المنتجات',
  'foot.reach':      'تواصل معنا',
  'foot.rights':     'جميع الحقوق محفوظة',
  'foot.brandline':  'زعفران وبقوليات وفاصولياء وتوابل — تُشترى من المنشأ، وتُعبّأ تحت علامة RAVOMA، وتُشحن من دبي.',

  'a11y.skip':       'تخطَّ إلى المحتوى',
  'a11y.home':       'بناهنده — الصفحة الرئيسية',
  'a11y.menu':       'فتح القائمة',
  'a11y.lang':       'اللغة',

  'transit.title':   'مدة الشحن التقديرية',
  'transit.region':  'منطقة الوجهة',
  'transit.days':    'أيام',
  'transit.note':    'تقديرية فقط. هي مدة الإبحار من ميناء إلى ميناء انطلاقاً من جبل علي، وتُعطى نطاقاً لأنها تتغيّر بتغيّر الناقل وخط السير. ولا تشمل مهلة الحجز ولا التخليص الجمركي في الوجهة، وليست تاريخ تسليم تعاقدياً.',

  'form.name':       'الاسم الكامل',
  'form.company':    'الشركة',
  'form.email':      'البريد الإلكتروني',
  'form.port':       'ميناء الوصول',
  'form.product':    'الصنف',
  'form.message':    'الكمية والمواصفات',
  'form.send':       'إرسال الطلب',
  'form.sending':    'جارٍ الإرسال…',
  'form.sent':       'شكراً لك — تم إرسال طلبك. وسيرد عليك أحد تجّارنا خلال يوم عمل واحد.',
  'form.failed':     'تعذّر الإرسال. يرجى مراسلتنا مباشرة على \u2066info@panahandeh.ae\u2069.',
  'form.select':     'اختر صنفاً…',
  'form.err.name':   'يرجى إدخال اسمك.',
  'form.err.email':  'يرجى إدخال بريد إلكتروني صحيح.',
  'form.err.msg':    'يرجى إضافة بعض التفاصيل.',

  /* -- shared calls to action ----------------------------------------- */
  'cta.line':        'عرض هذا الصنف',
  'cta.about':       'عن الشركة',

  /* -- the four stages ------------------------------------------------- */
  'flow.1':          'الشراء في الموسم ومن المنشأ',
  'flow.1.b':        'يُقيَّم المحصول في موسمه مع المزارع أو مع منشأة التنقية، وتُسحب العيّنات قبل أي التزام.',
  'flow.2':          'التدريج قبل التعبئة لا بعدها',
  'flow.2.b':        'غربلة ونزع للحصى وفرز لوني وفق المعايرة المنصوص عليها في العقد، مع حدود للرطوبة وللمواد الغريبة مثبتة كتابةً.',
  'flow.3':          'التجميع في جبل علي',
  'flow.3.b':        'تُجهَّز الحاويات وتُجمَّع في دبي، فتكون الدفعة التي تغادر الميناء هي نفسها الدفعة التي اشتُريت من المنشأ.',
  'flow.4':          'إصدار المستندات وفق الوجهة',
  'flow.4.b':        'تُحرَّر المستندات وفق متطلبات سوق الوجهة لا وفق نموذج جاهز، وتُسلَّم مع رموز الدفعات.',

  /* -- stat row -------------------------------------------------------- */
  'stat.origins':    'مناطق التوريد',
  'stat.lines':      'أصناف السلع',
  'stat.live':       'تُشحن اليوم',
  'stat.markets':    'مناطق الوجهة',
  'stat.formats':    'عبوات التجزئة من RAVOMA',

  /* -- home ------------------------------------------------------------ */
  'home.kicker':     'دبي · الإمارات العربية المتحدة',
  'home.h1a':        'من الهضبة',
  'home.h1b':        'إلى الميناء.',
  /** The opposite-script echo under the headline. Latin under the Arabic page, the
   *  same line the Persian page carries. Deliberately not a translation pair. */
  'home.counter':    'From the plateau to the port',
  'home.lede':       'تشتري بناهنده الزعفران والأرز والبقوليات والفاصولياء والتوابل من المناطق التي تجود بزراعتها، وتُدرِّجها في المنشأ، وتُعبّئها تحت علامتها RAVOMA، وتشحنها من جبل علي.',
  'home.now.k':      'تُشحن اليوم',
  'home.now.h1':     'صنفان يُشحنان اليوم.',
  'home.now.h2':     'وسبعة في الطريق.',
  'home.now.p':      'الزعفران والأرز يُشحنان الآن، معبّأين تحت علامة RAVOMA وبمستندات صادرة من جبل علي. أما الأصناف السبعة الأخرى فذُكرت هنا لأنها التالية في التشكيلة، لا لأنها معروضة اليوم.',
  'home.do.k':       'ما نقوم به',
  'home.do.h1':      'بيت تجاري،',
  'home.do.h2':      'لا وسيط.',
  'home.do.p':       'تنتقل الدفعة من الحقل إلى السفينة دون أن تتداولها الأيدي مرتين.',

  /* -- origins --------------------------------------------------------- */
  'origins.k':       'مناطق التوريد',
  'origins.h1':      'من أين يأتي',
  'origins.h2':      'كل صنف.',
  'origins.p':       'اثنتا عشرة منطقة زراعية، والعلاقات نفسها موسماً بعد موسم.',

  /* -- closing band ----------------------------------------------------- */
  'close.k':         'الاستفسارات',
  'close.h1':        'أخبرنا بما تحتاجه',
  'close.h2':        'وأين يصل.',
  'close.p':         'الصنف والدرجة والعبوة وميناء الوصول والكمية المستهدفة. ويرد أحد تجّارنا خلال يوم عمل واحد.',

  /* -- about ------------------------------------------------------------ */
  'about.k':         'البيت التجاري',
  'about.h1a':       'نشتري من المنشأ.',
  'about.h1b':       'ونشحن من دبي.',
  'about.lede':      'شركة بناهنده لتجارة المواد الغذائية ش.ذ.م.م بيت تجاري في دبي. نشتري الزعفران والأرز والبقوليات والفاصولياء والتوابل من المنشأ، ونُدرِّجها قبل تعبئتها، ونُجمِّعها في جبل علي، ونُصدر المستندات التي يطلبها سوق الوجهة.',
  'about.p1':        'زعفران من خراسان، وحمص من الأناضول، وعدس من سهوب كازاخستان. نشتري في الموسم ومن المنشأ، لأن تلك هي النقطة الوحيدة التي تبقى فيها الجودة اختياراً.',
  'about.p2':        'تعمل الشركة من دبي، على بُعد ساعة بالسيارة من جبل علي، فتُدرَّج الدفعة المشتراة من المنشأ وتُعبّأ وتُحمَّل دون أن تتداولها الأيدي مرتين.',
  'about.p3':        'تسعة أصناف مذكورة في هذا الموقع. الزعفران والأرز يُشحنان اليوم؛ أما السبعة الباقية فمدرجة لأنها التالية في التشكيلة.',
  'about.control.k': 'نقاط الضبط',
  'about.control.h1':'خمس مراحل بين',
  'about.control.h2':'المحصول والسفينة.',
  'about.brand.k':   'الشركة والعلامة',
  'about.brand.h1':  'بناهنده هي الشركة.',
  'about.brand.h2':  'و RAVOMA هي العبوة.',
  'about.brand.p':   'شركة بناهنده لتجارة المواد الغذائية ش.ذ.م.م هي الشركة: تشتري الدفعة وتُدرِّجها وتشحنها وتوقّع مستنداتها. أما RAVOMA فهي العلامة المطبوعة على عبوات التجزئة، وتحتها تُعبّأ أصناف الزعفران. والاسمان لا يحلّ أحدهما محلّ الآخر.',
  'about.port.k':    'ميناء الشحن',
  'about.port.h':    'جبل علي، دبي.',
  'about.port.p':    'تُجهَّز كل حاوية وتُجمَّع في جبل علي. وتُسلَّم رموز الدفعات ومستندات الشحن معاً، حتى تصف الأوراق والحاوية البضاعة نفسها.',

  /* -- products index ---------------------------------------------------- */
  'products.k':      'التشكيلة',
  'products.h1a':    'تسعة أصناف.',
  'products.h1b':    'اثنان يُشحنان اليوم.',
  'products.lede':   'الزعفران والأرز معبّآن ويُشحنان الآن. أما الأصناف السبعة الأخرى فتحمل منشأها ودرجتها ورمزها الجمركي المنسق ليتمكّن المشتري من تحديد مواصفاته على أساسها، غير أنها ليست معروضة بعد.',
  'products.now.h':  'يُشحن الآن',
  'products.soon.h': 'التالي في التشكيلة',
  'products.soon.p': 'مذكورة ومحدَّدة المواصفات ومعروفة المنشأ — غير أنها ليست معروضة بعد. أرسل استفساراً ونُخبرك متى يُفتح الصنف.',
  'products.packs.k':'عبوات RAVOMA',
  'products.packs.h':'خمس عبوات للتجزئة.',
  'products.packs.p':'عبوات زعفران RAVOMA، من موزّع الجيب إلى علبة التقديم. وتُجهَّز العبوات السائبة وعبوات العلامة الخاصة من الدفعات نفسها.',

  /* -- product detail ----------------------------------------------------- */
  'pd.spec':         'المواصفات',
  'pd.overview':     'هذا الصنف',
  'pd.related':      'أصناف أخرى',
  'pd.availability': 'التوافر',
  'pd.live.note':    'يُشحن هذا الصنف اليوم. يُعبّأ بالعبوات المذكورة أعلاه ويُجمَّع في جبل علي، وتُسلَّم رموز الدفعات ومستندات الشحن معاً.',
  'pd.soon.note':    'هذا الصنف ليس معروضاً بعد. والمنشأ والدرجة والمعايرة المذكورة أعلاه هي المواصفات التي نورّد على أساسها؛ أرسل استفساراً ونُخبرك متى يُفتح.',
  'pd.ravoma':       'يُعبّأ تحت علامة RAVOMA.',
  'cat.spices':      'التوابل',
  'cat.grains':      'الحبوب',
  'cat.pulses':      'البقوليات',

  /* -- page metadata ------------------------------------------------------ */
  'meta.home.title': 'زعفران وأرز وبقوليات وتوابل من دبي',
  'meta.home.desc':  'تشتري شركة بناهنده لتجارة المواد الغذائية ش.ذ.م.م الزعفران والأرز والبقوليات والفاصولياء والتوابل من المنشأ، وتُصدّرها من جبل علي تحت علامة RAVOMA. الزعفران والأرز يُشحنان اليوم، وسبعة أصناف أخرى في الطريق.',
  'meta.about.title':'عن البيت التجاري',
  'meta.about.desc': 'كيف تشتري بناهنده من المنشأ، وتُدرِّج قبل التعبئة، وتُجمِّع في جبل علي، وتُصدر مستندات الوجهة — وما علاقة علامة RAVOMA بالشركة.',
  'meta.products.title': 'المنتجات — تسعة أصناف',
  'meta.products.desc':  'زعفران وأرز وحمص وعدس أخضر وبازلاء صفراء مجروشة وفاصولياء حمراء وكركم وفلفل أسود وبذور كزبرة، لكل منها منشأ ودرجة وعبوة تجزئة ورمز جمركي منسق. الزعفران والأرز يُشحنان اليوم.',

  /* -- Quality ---------------------------------------------------------- */
  'meta.quality.title': 'الجودة والشهادات',
  'meta.quality.desc':  'زعفران من الفئة الأولى وفق \u2066ISO 3632\u2069، وشهادة صحية نباتية وشهادة منشأ، وشهادة حلال حيثما اشترطتها الوجهة، وتعبئة بمواد صالحة لملامسة الأغذية، ورمز دفعة على كل كيس تجزئة يقود إلى المنشأ وفترة الحصاد وخط التنقية وتاريخ التعبئة.',
  'q.kicker':        'الجودة',
  'q.h1a':           'كل شيء يُحسم',
  'q.h1b':           'قبل الشحن.',
  'q.lede':          'يُتَّفق على الدرجة والرطوبة والمواد الغريبة والمستندات قبل شراء الدفعة، لا عند وصول الحاوية. وتبيّن هذه الصفحة ما يرافق البضاعة وأين يُحسم كل أمر.',

  'q.certs.k':       'ما يرافق البضاعة',
  'q.certs.h':       'ما يستلمه المشتري.',
  'q.certs.p':       'تُعدّ الشهادات للسوق الذي تقصده الحاوية. ولا شيء هنا مأخوذ عن نموذج جاهز.',

  'q.ctrl.k':        'أين يُحسم كل أمر',
  'q.ctrl.h':        'خمس نقاط بين المحصول والسفينة.',
  'q.ctrl.p':        'لكل واحدة منها موضع تُثبَّت فيه: في المنشأ، وعلى خط التنقية، وفي العقد، وقبل إبحار السفينة، وعلى الكيس نفسه.',
  'q.where.1':       'في المنشأ، في الموسم',
  'q.where.2':       'على خط التنقية',
  'q.where.3':       'في نص العقد',
  'q.where.4':       'قبل إبحار السفينة',
  'q.where.5':       'على الكيس',

  'q.trace.k':       'التتبّع',
  'q.trace.h':       'رمز واحد، أربع إجابات.',
  'q.trace.p':       'يحمل كل كيس تجزئة رمز دفعة. وهذا الرمز وحده يقود إلى المنشأ الذي اشتُريت منه الدفعة، وفترة الحصاد التي خرجت منها، وخط التنقية الذي مرّت به، وتاريخ تعبئتها.',
  'q.trace.origin':  'المنشأ',
  'q.trace.harvest': 'فترة الحصاد',
  'q.trace.line':    'خط التنقية',
  'q.trace.packed':  'تاريخ التعبئة',

  'q.faq.k':         'أسئلة يطرحها المشترون',
  'q.faq.h':         'إجابات من المواصفات.',
  'q.faq.q1':        'هل زعفران بناهنده حاصل على شهادة \u2066ISO 3632\u2069؟',
  'q.faq.a1':        'نعم. يُدرَّج الزعفران في الفئة الأولى وفق \u2066ISO 3632\u2069، مع نتيجة مختبرية لكل دفعة. وتُذكر قوة التلوين ذكراً، لا تقديراً.',
  'q.faq.q2':        'ما الشهادات التي ترافق الشحنة؟',
  'q.faq.a2':        'تُصدر لكل شحنة شهادة صحية نباتية وفق اشتراطات الصحة النباتية في سوق الوجهة. وتوثّق شهادة المنشأ بلد الإنتاج لأغراض التخليص الجمركي والرسوم التفضيلية حيثما انطبقت. وتُقدَّم شهادة حلال حيثما اشترطها سوق الوجهة.',
  'q.faq.q3':        'هل يمكن تتبّع الكيس حتى حصاده؟',
  'q.faq.a3':        'نعم. يحمل كل كيس تجزئة رمز دفعة يقود إلى المنشأ وفترة الحصاد وخط التنقية وتاريخ التعبئة.',
  'q.faq.q4':        'أين يُتَّفق على حدود الرطوبة والمواد الغريبة؟',
  'q.faq.a4':        'في العقد. تُثبَّت الحدود في العقد، ولا يُتفاوض عليها عند الوصول.',
  'q.faq.q5':        'هل تُفحص الشحنة قبل مغادرتها؟',
  'q.faq.a5':        'نعم. يُجرى الفحص قبل الشحن وفق اشتراطات سوق الوجهة قبل إبحار السفينة.',
  'q.faq.q6':        'في أي تعبئة يُشحن المنتج؟',
  'q.faq.a6':        'كل التعبئة الأولية من مواد صالحة لملامسة الأغذية، وتُحكم على خط التعبئة.',

  /* -- Logistics -------------------------------------------------------- */
  'meta.logistics.title': 'الشحن وشروط التسليم',
  'meta.logistics.desc':  'حاويات كاملة وجزئية ومختلطة الأصناف تُجمَّع في جبل علي، وتُباع تسليم ظهر السفينة أو الكلفة وأجرة الشحن أو الكلفة والتأمين وأجرة الشحن، مع مدد إبحار تقديرية من ميناء إلى ميناء نحو دول الخليج وجنوب آسيا وشرق أفريقيا وأوروبا والمملكة المتحدة وأمريكا الشمالية.',
  'l.kicker':        'الشحن والنقل',
  'l.h1a':           'من جبل علي إلى',
  'l.h1b':           'مينائك.',
  'l.lede':          'تُجهَّز كل حاوية وتُجمَّع في جبل علي، فتكون الدفعة التي تغادر الميناء هي نفسها الدفعة التي اشتُريت من المنشأ. وفيما يلي كيف تُبنى الحمولة، وبأي شروط تُباع، وكم تستغرق رحلة البحر.',
  'l.port':          'جبل علي، دبي',
  'l.jebelali':      'جبل علي',

  'l.cons.k':        'تجميع الحمولة',
  'l.cons.h':        'تُبنى الحمولات في دبي.',
  'l.cons.p':        'تُجهَّز الحاويات في جبل علي. ونتعامل مع الحمولة الكاملة ومع الحمولة الجزئية معاً، ويمكن للحاوية الواحدة أن تحمل أكثر من صنف.',
  'l.cons.fcl':      'حمولة حاوية كاملة',
  'l.cons.fcl.b':    'الحاوية كلها لك، تُجهَّز وتُجمَّع في جبل علي.',
  'l.cons.lcl':      'أقل من حمولة حاوية',
  'l.cons.lcl.b':    'جزء من حاوية، للكميات دون الحمولة الكاملة.',
  'l.cons.mix':      'حاوية مختلطة الأصناف',
  'l.cons.mix.b':    'أكثر من صنف في الحاوية نفسها، ليتمكّن المشتري الأصغر من شحن حمولة كاملة.',

  'l.terms.k':       'شروط التسليم',
  'l.terms.h':       'الشروط التي نبيع بها.',
  'l.terms.p':       'إنكوترمز ٢٠٢٠. وهذه تصف الشروط نفسها؛ أما ما ينطبق على شحنة بعينها فيُؤكَّد في عرض السعر.',

  'l.transit.h':     'كم تستغرق رحلة البحر.',
  'l.transit.p':     'مدة الإبحار من ميناء إلى ميناء انطلاقاً من جبل علي، مرسومة على مقياس واحد مشترك ليمكن قياس المناطق بعضها ببعض.',
  'l.transit.scale': 'أيام من جبل علي',
  'l.note.k':        'نطاق، لا تاريخ',

  /* -- Contact ---------------------------------------------------------- */
  'meta.contact.title': 'اتصل بنا',
  'meta.contact.desc':  'استفسارات الزعفران والأرز والبقوليات والفاصولياء والتوابل من شركة بناهنده لتجارة المواد الغذائية ش.ذ.م.م، دبي. هاتف وبريد إلكتروني ونموذج استفسار.',
  'c.kicker':        'اتصل بنا',
  'c.h1a':           'أخبرنا بما تحتاجه',
  'c.h1b':           'وأين يصل.',
  'c.lede':          'الصنف والدرجة والعبوة وميناء الوصول والكمية المستهدفة. أرسل هذه ونعود إليك بمؤشّر سعر ومهلة تجهيز.',
  'c.tel':           'الهاتف',
  'c.office':        'المكتب',
  'c.officev':       'دبي، الإمارات العربية المتحدة',
  'c.reply':         'يرد أحد تجّارنا خلال يوم عمل واحد.',
  'c.inc.k':         'ما ينبغي ذكره',
  'c.inc.h':         'خمسة أمور تمنحك جواباً دقيقاً.',
  'c.inc.commodity': 'أي صنف — زعفران أو أرز أو بقوليات أو توابل.',
  'c.inc.grade':     'الدرجة أو المعايرة التي تشتري على أساسها.',
  'c.inc.format':    'عبوة تجزئة أم سائب، والوزن.',
  'c.inc.port':      'أين يجب أن تصل البضاعة، ليُعرض عليك الشرط المناسب.',
  'c.inc.volume':    'الكمية المستهدفة',
  'c.inc.volume.b':  'لكل شحنة، وهل تتكرّر أم لا.',
  'c.form.k':        'استفسار',
  'c.form.h':        'أرسله من هنا.',

  /* -- 404 -------------------------------------------------------------- */
  'nf.title':        'الصفحة غير موجودة',
  'nf.h1a':          'هذه الصفحة ليست',
  'nf.h1b':          'في التشكيلة.',
  'nf.p':            'الرابط معطوب، أو أن الصفحة قد نُقلت. أما التشكيلة والشركة فما زالتا هنا.',
};

export function t(key: Key, lang: Lang): string {
  if (lang === 'ar') {
    const v = (AR as Partial<Record<Key, string>>)[key];
    // Fall back to English rather than rendering an empty string. A visible English
    // word tells us a key is missing; an empty node hides the gap.
    return v ?? T[key][0];
  }
  return T[key][lang === 'fa' ? 1 : 0];
}

/**
 * Pick a language variant off a data object. Fields are named `x`, `xFa`, `xAr`
 * (or plain `en`/`fa`/`ar` on products), so callers stop writing
 * `lang === 'fa' ? o.fa : o.en` ternaries that silently fall to English for Arabic.
 */
export function L(o: Record<string, any>, lang: Lang, base: string): string {
  if (lang === 'fa') return o[base === 'en' ? 'fa' : base + 'Fa'] ?? o[base];
  if (lang === 'ar') return o[base === 'en' ? 'ar' : base + 'Ar'] ?? o[base === 'en' ? 'fa' : base + 'Fa'] ?? o[base];
  return o[base];
}

/** `/about` in English, `/fa/about` in Persian. */
export function href(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return `/${lang}${clean === '/' ? '' : clean}`;
}

/**
 * Latin digits to the locale's own numerals.
 *
 * Persian and Arabic use DIFFERENT codepoints for the same-looking digits:
 * Persian is U+06F0 ۰۱۲۳۴۵۶۷۸۹, Arabic is U+0660 ٠١٢٣٤٥٦٧٨٩. Rendering Persian
 * numerals inside Arabic copy is a visible error to a native reader, so they are
 * kept apart rather than sharing one map.
 */
const NUMERALS: Record<string, string> = {
  fa: '۰۱۲۳۴۵۶۷۸۹',
  ar: '٠١٢٣٤٥٦٧٨٩',
};

export function digits(input: string | number, lang: Lang): string {
  const s = String(input);
  const map = NUMERALS[lang];
  if (!map) return s;
  const out = s.replace(/\d/g, (d) => map[Number(d)]);

  /* MEASURED, not assumed. Persian numerals are bidi class EN and Arabic-Indic ones
     are AN, and the two are not interchangeable to the bidi algorithm:
     
       - Inside <bdi dir="ltr"> the isolate's start-of-sequence is L, so rule W7 turns
         a Persian EN run into L and "۳–۷" keeps its written order.
       - W7 does not apply to AN. The en-dash between two Arabic-Indic numbers resolves
         to R under N1 (numbers count as R for neutral resolution), the numbers go to a
         higher level than the dash, and L2 reverses the pair — "٣–٧ أيام" was drawn
         "٧–٣", i.e. seven to three days. <bdi dir="ltr"> alone does NOT prevent this.

     Isolating each Arabic number in U+2066 … U+2069 — the character form of
     <bdi dir="ltr">, and the only form available to a plain string — leaves the dash
     sitting between two neutrals instead of between two numbers, and the range keeps
     its order. Around a single number it is a no-op. */
  return lang === 'ar' ? `\u2066${out}\u2069` : out;
}
