/**
 * The range. Every figure here is carried over from the shipped site and is used both
 * on the product pages and in Product structured data, so it must stay accurate.
 *
 * `live: true` means the line ships today. Only saffron and rice do. Presenting the
 * other seven identically would overstate the range, and a buyer who enquires about
 * chickpeas and is told they do not exist yet does not come back.
 */

export type Product = {
  slug: string;
  en: string;
  fa: string;
  ar: string;
  live: boolean;
  category: 'spices' | 'grains' | 'pulses';
  img: string;
  origin: string;
  originFa: string;
  grade: string;
  gradeFa: string;
  formats: string[];
  hs: string;
  /** One sentence a buyer would actually want. Kept factual — no marketing claims. */
  blurbEn: string;
  blurbFa: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'saffron',
    en: 'Saffron', fa: 'زعفران', ar: 'زعفران',
    live: true, category: 'spices', img: 'saffron-pack',
    origin: 'Iran (Khorasan) · Afghanistan', originFa: 'ایران (خراسان) · افغانستان',
    grade: 'Sargol, ISO 3632 category I', gradeFa: 'سرگل، ایزو ۳۶۳۲ درجه یک',
    formats: ['10 g', '20 g', '100 g', '200 g', '300 g'],
    hs: '0910.20',
    blurbEn: 'Whole red stigmas with the style removed, graded to category I under ISO 3632 with a laboratory result for every lot. Packed under our own RAVOMA label in five retail formats, from a 10 g pocket dispenser to a 300 g presentation box.',
    blurbFa: 'کلاله‌های سرخ کامل بدون خامه، درجه یک بر پایه ایزو ۳۶۳۲ و همراه با نتیجه آزمایشگاه برای هر محموله. با نشان راوما در پنج بسته‌بندی خرده‌فروشی، از پخش‌کن جیبی ۱۰ گرمی تا جعبه ارائه ۳۰۰ گرمی.',
  },
  {
    slug: 'rice',
    en: 'Rice', fa: 'برنج', ar: 'أرز',
    live: true, category: 'grains', img: 'rice',
    origin: 'Pakistan · India', originFa: 'پاکستان · هند',
    grade: 'Basmati — sella and steam', gradeFa: 'باسماتی — سلا و بخارپز',
    formats: ['1 kg', '5 kg', '25 kg'],
    hs: '1006.30',
    blurbEn: 'Long-grain basmati in sella and steam processing, in retail and bulk formats.',
    blurbFa: 'باسماتی دانه‌بلند در دو فرآوری سلا و بخارپز، در بسته‌بندی خرده‌فروشی و عمده.',
  },
  {
    slug: 'chickpeas',
    en: 'Chickpeas', fa: 'نخود', ar: 'حمص',
    live: false, category: 'pulses', img: 'chickpeas',
    origin: 'India · Turkey · Mexico', originFa: 'هند · ترکیه · مکزیک',
    grade: 'Kabuli, 8–9 mm', gradeFa: 'کابلی، ۸ تا ۹ میلی‌متر',
    formats: ['1 kg', '25 kg', '50 kg'],
    hs: '0713.20',
    blurbEn: 'Kabuli chickpeas calibrated to 8–9 mm, machine-cleaned and de-stoned.',
    blurbFa: 'نخود کابلی با کالیبر ۸ تا ۹ میلی‌متر، بوجاری‌شده و سنگ‌گیری‌شده.',
  },
  {
    slug: 'green-lentils',
    en: 'Green Lentils', fa: 'عدس سبز', ar: 'عدس أخضر',
    live: false, category: 'pulses', img: 'lentils',
    origin: 'Turkey · Canada', originFa: 'ترکیه · کانادا',
    grade: 'Laird, machine-cleaned', gradeFa: 'لِرد، بوجاری‌شده',
    formats: ['1 kg', '25 kg'],
    hs: '0713.40',
    blurbEn: 'Laird-type green lentils, machine-cleaned to contract specification.',
    blurbFa: 'عدس سبز نوع لِرد، بوجاری‌شده مطابق مشخصات قرارداد.',
  },
  {
    slug: 'yellow-split-peas',
    en: 'Yellow Split Peas', fa: 'لپه', ar: 'بازلاء صفراء مجروشة',
    live: false, category: 'pulses', img: 'splitpeas',
    origin: 'Canada · Russia · Ukraine', originFa: 'کانادا · روسیه · اوکراین',
    grade: 'Split, 99.5% purity', gradeFa: 'لپه، خلوص ۹۹٫۵ درصد',
    formats: ['1 kg', '25 kg'],
    hs: '0713.10',
    blurbEn: 'Split and polished yellow peas at 99.5% purity.',
    blurbFa: 'لپه زرد شکسته و پولیش‌شده با خلوص ۹۹٫۵ درصد.',
  },
  {
    slug: 'red-kidney-beans',
    en: 'Red Kidney Beans', fa: 'لوبیا قرمز', ar: 'فاصولياء حمراء',
    live: false, category: 'pulses', img: 'kidneybeans',
    origin: 'Ethiopia · Argentina', originFa: 'اتیوپی · آرژانتین',
    grade: 'Dark red, 180–200 per 100 g', gradeFa: 'قرمز تیره، ۱۸۰ تا ۲۰۰ عدد در ۱۰۰ گرم',
    formats: ['1 kg', '25 kg'],
    hs: '0713.33',
    blurbEn: 'Dark red kidney beans counted at 180–200 per 100 g.',
    blurbFa: 'لوبیا قرمز تیره با شمارش ۱۸۰ تا ۲۰۰ عدد در ۱۰۰ گرم.',
  },
  {
    slug: 'turmeric',
    en: 'Turmeric', fa: 'زردچوبه', ar: 'كركم',
    live: false, category: 'spices', img: 'turmeric',
    origin: 'India · Iran', originFa: 'هند · ایران',
    grade: 'Ground, 3.5% curcumin', gradeFa: 'آسیاب‌شده، ۳٫۵ درصد کورکومین',
    formats: ['500 g', '25 kg'],
    hs: '0910.30',
    blurbEn: 'Ground turmeric at 3.5% curcumin content.',
    blurbFa: 'زردچوبه آسیاب‌شده با ۳٫۵ درصد کورکومین.',
  },
  {
    slug: 'black-pepper',
    en: 'Black Pepper', fa: 'فلفل سیاه', ar: 'فلفل أسود',
    live: false, category: 'spices', img: 'blackpepper',
    origin: 'Vietnam · India', originFa: 'ویتنام · هند',
    grade: '550 g/l, ASTA cleaned', gradeFa: '۵۵۰ گرم بر لیتر، تمیزشده مطابق ASTA',
    formats: ['500 g', '25 kg'],
    hs: '0904.11',
    blurbEn: 'Whole black peppercorns at 550 g/l bulk density, ASTA cleaned.',
    blurbFa: 'فلفل سیاه دانه‌کامل با چگالی ۵۵۰ گرم بر لیتر، تمیزشده مطابق ASTA.',
  },
  {
    slug: 'coriander-seeds',
    en: 'Coriander Seeds', fa: 'تخم گشنیز', ar: 'بذور الكزبرة',
    live: false, category: 'spices', img: 'coriander',
    origin: 'India · Iran · Bulgaria', originFa: 'هند · ایران · بلغارستان',
    grade: 'Eagle, 99% purity', gradeFa: 'ایگل، خلوص ۹۹ درصد',
    formats: ['500 g', '25 kg'],
    hs: '0909.21',
    blurbEn: 'Eagle-type coriander seed at 99% purity.',
    blurbFa: 'تخم گشنیز نوع ایگل با خلوص ۹۹ درصد.',
  },
];

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.live);
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => !p.live);

/** Sourcing regions, carried over from the shipped site. */
export const ORIGINS = [
  { en: 'Mashhad', fa: 'مشهد', pEn: 'Saffron', pFa: 'زعفران' },
  { en: 'Qazvin', fa: 'قزوین', pEn: 'Pistachio · Pulses', pFa: 'پسته · حبوبات' },
  { en: 'Kerman', fa: 'کرمان', pEn: 'Cumin · Pistachio', pFa: 'زیره · پسته' },
  { en: 'Herat', fa: 'هرات', pEn: 'Saffron', pFa: 'زعفران' },
  { en: 'Anatolia', fa: 'آناتولی', pEn: 'Chickpeas · Lentils', pFa: 'نخود · عدس' },
  { en: 'Punjab', fa: 'پنجاب', pEn: 'Rice · Turmeric', pFa: 'برنج · زردچوبه' },
  { en: 'Saskatchewan', fa: 'ساسکاچوان', pEn: 'Lentils · Split peas', pFa: 'عدس · لپه' },
  { en: 'Kazakh steppe', fa: 'دشت قزاق', pEn: 'Lentils', pFa: 'عدس' },
  { en: 'Odesa', fa: 'اودسا', pEn: 'Split peas · Grains', pFa: 'لپه · غلات' },
  { en: 'Dak Lak', fa: 'داک‌لاک', pEn: 'Black pepper', pFa: 'فلفل سیاه' },
  { en: 'Oromia', fa: 'اورومیا', pEn: 'Kidney beans', pFa: 'لوبیا قرمز' },
  { en: 'Nile Delta', fa: 'دلتای نیل', pEn: 'Pulses · Grains', pFa: 'حبوبات · غلات' },
];

/** The five real RAVOMA retail formats, from the client's packaging renders. */
export const PACK_FORMATS = [
  { img: 'pack-pocket-dark', en: '10 g pocket dispenser', fa: 'پخش‌کن جیبی ۱۰ گرمی' },
  { img: 'pack-drawer', en: '20 g drawer box', fa: 'جعبه کشویی ۲۰ گرمی' },
  { img: 'pack-tin', en: '100 g round tin', fa: 'قوطی گرد ۱۰۰ گرمی' },
  { img: 'pack-gift', en: '200 g gift box', fa: 'جعبه هدیه ۲۰۰ گرمی' },
  { img: 'pack-flagship', en: '300 g presentation box', fa: 'جعبه ارائه ۳۰۰ گرمی' },
];
