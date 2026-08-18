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
  languages: ['en', 'fa', 'ar'] as const,
  defaultLanguage: 'en' as const,
};

export type Lang = (typeof SITE.languages)[number];

/** Incoterms offered. Standard Incoterms 2020 definitions — these describe the terms,
 *  not a Panahandeh-specific commitment. Worth a client check before launch. */
export const INCOTERMS = [
  { code: 'FOB', place: 'Jebel Ali', en: 'Free On Board — we deliver, clear for export and load. Freight and insurance are yours from the rail.', fa: 'تحویل روی عرشه — بارگیری و ترخیص صادراتی با ماست؛ کرایه حمل و بیمه از آن پس با شماست.', ar: 'تسليم ظهر السفينة — نتولّى التسليم والتخليص للتصدير والتحميل. أما أجرة الشحن والتأمين فعليك اعتباراً من ظهر السفينة.' },
  { code: 'CFR', place: null, en: 'Cost and Freight — we contract and pay carriage to your named port. Insurance is yours.', fa: 'هزینه و کرایه حمل — حمل تا بندر مقصد شما با ماست؛ بیمه با شماست.', ar: 'الكلفة وأجرة الشحن — نتعاقد على النقل وندفع أجرته حتى الميناء الذي تسمّيه. والتأمين عليك.' },
  { code: 'CIF', place: null, en: 'Cost, Insurance and Freight — carriage and minimum marine insurance to your named port.', fa: 'هزینه، بیمه و کرایه حمل — حمل و حداقل بیمه دریایی تا بندر مقصد شما.', ar: 'الكلفة والتأمين وأجرة الشحن — النقل والحدّ الأدنى من التأمين البحري حتى الميناء الذي تسمّيه.' },
];

/** Indicative port-to-port sailing time from Jebel Ali. A range, because it moves with
 *  the carrier and the routing. Excludes booking lead time and destination clearance.
 *  Never presented as a contractual delivery date. */
export const TRANSIT = [
  { region: 'GCC', regionFa: 'شورای همکاری خلیج فارس', regionAr: 'دول مجلس التعاون الخليجي', min: 3, max: 7 },
  { region: 'South Asia', regionFa: 'جنوب آسیا', regionAr: 'جنوب آسيا', min: 7, max: 12 },
  { region: 'East Africa', regionFa: 'شرق آفریقا', regionAr: 'شرق أفريقيا', min: 10, max: 14 },
  { region: 'Europe', regionFa: 'اروپا', regionAr: 'أوروبا', min: 18, max: 24 },
  { region: 'United Kingdom', regionFa: 'بریتانیا', regionAr: 'المملكة المتحدة', min: 20, max: 26 },
  { region: 'North America', regionFa: 'آمریکای شمالی', regionAr: 'أمريكا الشمالية', min: 25, max: 35 },
];
export const TRANSIT_MAX = 35;

export const CERTIFICATIONS = [
  {
    id: 'iso3632',
    en: 'ISO 3632 category I',
    fa: 'ایزو ۳۶۳۲ درجه یک',
    enBody: 'Saffron graded to category I under ISO 3632, with a laboratory result for every lot. Colouring strength is stated, never estimated.',
    faBody: 'زعفران بر پایه ایزو ۳۶۳۲ در درجه یک، همراه با نتیجه آزمایشگاه برای هر محموله. قدرت رنگی اعلام می‌شود، نه تخمین زده.',
    ar: 'الفئة الأولى وفق \u2066ISO 3632\u2069',
    arBody: 'زعفران مُدرَّج في الفئة الأولى وفق \u2066ISO 3632\u2069، مع نتيجة مختبرية لكل دفعة. وتُذكر قوة التلوين ذكراً، لا تقديراً.',
  },
  {
    id: 'phyto',
    en: 'Phytosanitary certificate',
    fa: 'گواهی بهداشت گیاهی',
    enBody: 'Issued for every consignment against the plant-health requirements of the destination market.',
    faBody: 'برای هر محموله و مطابق الزامات بهداشت گیاهی بازار مقصد صادر می‌شود.',
    ar: 'الشهادة الصحية النباتية',
    arBody: 'تُصدر لكل شحنة وفق اشتراطات الصحة النباتية في سوق الوجهة.',
  },
  {
    id: 'origin',
    en: 'Certificate of origin',
    fa: 'گواهی مبدأ',
    enBody: 'Documenting the country of production for customs clearance and preferential duty where it applies.',
    faBody: 'کشور تولید را برای ترخیص گمرکی و تعرفه ترجیحی، در صورت وجود، مستند می‌کند.',
    ar: 'شهادة المنشأ',
    arBody: 'توثّق بلد الإنتاج لأغراض التخليص الجمركي والرسوم التفضيلية حيثما انطبقت.',
  },
  {
    id: 'halal',
    en: 'Halal certification',
    fa: 'گواهی حلال',
    enBody: 'Provided where the destination market requires it.',
    faBody: 'در صورتی که بازار مقصد الزام کند، ارائه می‌شود.',
    ar: 'شهادة حلال',
    arBody: 'تُقدَّم حيثما اشترطها سوق الوجهة.',
  },
  {
    id: 'foodgrade',
    en: 'Food-grade packing',
    fa: 'بسته‌بندی مواد غذایی',
    enBody: 'All primary packaging is food-grade material, sealed at the packing line.',
    faBody: 'تمام بسته‌بندی اولیه از مواد مناسب مواد غذایی است و در خط بسته‌بندی درزبندی می‌شود.',
    ar: 'تعبئة صالحة لملامسة الأغذية',
    arBody: 'كل التعبئة الأولية من مواد صالحة لملامسة الأغذية، وتُحكم على خط التعبئة.',
  },
  {
    id: 'docs',
    en: 'Destination documentation',
    fa: 'اسناد مقصد',
    enBody: 'Prepared against the destination market’s requirement rather than a template, and released together with the lot codes.',
    faBody: 'بر اساس الزامات بازار مقصد تهیه می‌شود، نه از روی الگوی آماده، و همراه با کدهای محموله تحویل داده می‌شود.',
    ar: 'مستندات الوجهة',
    arBody: 'تُعدّ وفق متطلبات سوق الوجهة لا وفق نموذج جاهز، وتُسلَّم مع رموز الدفعات.',
  },
];

/** The five controlled stages between crop and vessel. */
export const CONTROL_POINTS = [
  { en: 'Crop selection', fa: 'انتخاب محصول', enFixed: 'Assessed in-season with the grower or cleaner. Samples pulled before any commitment.', faFixed: 'در فصل و همراه با کشاورز یا بوجارکننده ارزیابی می‌شود. نمونه پیش از هر تعهدی گرفته می‌شود.', ar: 'اختيار المحصول', arFixed: 'يُقيَّم في موسمه مع المزارع أو مع منشأة التنقية. وتُسحب العيّنات قبل أي التزام.' },
  { en: 'Calibration', fa: 'کالیبراسیون', enFixed: 'Sieved, de-stoned and colour-sorted to the calibration named in the contract.', faFixed: 'الک، سنگ‌گیری و رنگ‌سورت مطابق کالیبر تعیین‌شده در قرارداد.', ar: 'المعايرة', arFixed: 'غربلة ونزع للحصى وفرز لوني وفق المعايرة المنصوص عليها في العقد.' },
  { en: 'Moisture & foreign matter', fa: 'رطوبت و ناخالصی', enFixed: 'Limits fixed in the contract, not negotiated on arrival.', faFixed: 'حدود مجاز در قرارداد تثبیت می‌شود، نه هنگام تحویل.', ar: 'الرطوبة والمواد الغريبة', arFixed: 'حدود مثبتة في العقد، لا يُتفاوض عليها عند الوصول.' },
  { en: 'Pre-shipment inspection', fa: 'بازرسی پیش از حمل', enFixed: 'Against destination-market requirements before the vessel sails.', faFixed: 'پیش از حرکت کشتی و مطابق الزامات بازار مقصد.', ar: 'الفحص قبل الشحن', arFixed: 'وفق اشتراطات سوق الوجهة قبل إبحار السفينة.' },
  { en: 'Lot traceability', fa: 'ردیابی محموله', enFixed: 'Every retail pouch carries a lot code resolving to origin, harvest window, cleaning line and packing date.', faFixed: 'روی هر بسته کد محموله درج می‌شود که به مبدأ، بازه برداشت، خط بوجاری و تاریخ بسته‌بندی می‌رسد.', ar: 'تتبّع الدفعة', arFixed: 'يحمل كل كيس تجزئة رمز دفعة يقود إلى المنشأ وفترة الحصاد وخط التنقية وتاريخ التعبئة.' },
];
