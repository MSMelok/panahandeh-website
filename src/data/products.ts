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
  grade: string;
  gradeFa: string;
  gradeAr: string;
  formats: string[];
  hs: string;
  /** One sentence a buyer would actually want. Kept factual — no marketing claims. */
  blurbEn: string;
  blurbFa: string;
  blurbAr: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'saffron',
    en: 'Saffron', fa: 'زعفران', ar: 'زعفران',
    live: true, category: 'spices', img: 'saffron',
    grade: 'Sargol, ISO 3632 category I', gradeFa: 'سرگل، ایزو ۳۶۳۲ درجه یک',
    gradeAr: 'سرغل، الفئة الأولى وفق \u2066ISO 3632\u2069',
    formats: ['10 g', '20 g', '100 g', '200 g', '300 g'],
    hs: '0910.20',
    blurbEn: 'Whole red stigmas with the style removed, graded to category I under ISO 3632 with a laboratory result for every lot. Packed under our own RAVOMA label in five retail formats, from a 10 g pocket dispenser to a 300 g presentation box.',
    blurbFa: 'کلاله‌های سرخ کامل بدون خامه، درجه یک بر پایه ایزو ۳۶۳۲ و همراه با نتیجه آزمایشگاه برای هر محموله. با نشان راوما در پنج بسته‌بندی خرده‌فروشی، از پخش‌کن جیبی ۱۰ گرمی تا جعبه ارائه ۳۰۰ گرمی.',
    blurbAr: 'مياسم حمراء كاملة منزوعة القلم، مُدرَّجة في الفئة الأولى وفق \u2066ISO 3632\u2069 مع نتيجة مختبرية لكل دفعة. تُعبّأ تحت علامتنا RAVOMA في خمس عبوات للتجزئة، من موزّع جيب زنة ١٠ غم إلى علبة تقديم زنة ٣٠٠ غم.',
  },
  {
    slug: 'rice',
    en: 'Rice', fa: 'برنج', ar: 'أرز',
    live: true, category: 'grains', img: 'rice',
    grade: 'Basmati — sella and steam', gradeFa: 'باسماتی — سلا و بخارپز',
    gradeAr: 'بسمتي — سيلا وبخار',
    formats: ['1 kg', '5 kg', '25 kg'],
    hs: '1006.30',
    blurbEn: 'Long-grain basmati in sella and steam processing, in retail and bulk formats.',
    blurbFa: 'باسماتی دانه‌بلند در دو فرآوری سلا و بخارپز، در بسته‌بندی خرده‌فروشی و عمده.',
    blurbAr: 'أرز بسمتي طويل الحبة بمعالجتَي سيلا والبخار، في عبوات تجزئة وعبوات سائبة.',
  },
  {
    slug: 'chickpeas',
    en: 'Chickpeas', fa: 'نخود', ar: 'حمص',
    live: false, category: 'pulses', img: 'chickpeas',
    grade: 'Kabuli, 8–9 mm', gradeFa: 'کابلی، ۸ تا ۹ میلی‌متر',
    gradeAr: 'كابلي، من ٨ إلى ٩ ملم',
    formats: ['1 kg', '25 kg', '50 kg'],
    hs: '0713.20',
    blurbEn: 'Kabuli chickpeas calibrated to 8–9 mm, machine-cleaned and de-stoned.',
    blurbFa: 'نخود کابلی با کالیبر ۸ تا ۹ میلی‌متر، بوجاری‌شده و سنگ‌گیری‌شده.',
    blurbAr: 'حمص كابلي بمعايرة من ٨ إلى ٩ ملم، منظّف آلياً ومنزوع الحصى.',
  },
  {
    slug: 'green-lentils',
    en: 'Green Lentils', fa: 'عدس سبز', ar: 'عدس أخضر',
    live: false, category: 'pulses', img: 'lentils',
    grade: 'Laird, machine-cleaned', gradeFa: 'لِرد، بوجاری‌شده',
    gradeAr: 'ليرد، منظّف آلياً',
    formats: ['1 kg', '25 kg'],
    hs: '0713.40',
    blurbEn: 'Laird-type green lentils, machine-cleaned to contract specification.',
    blurbFa: 'عدس سبز نوع لِرد، بوجاری‌شده مطابق مشخصات قرارداد.',
    blurbAr: 'عدس أخضر من نوع ليرد، منظّف آلياً وفق مواصفات العقد.',
  },
  {
    slug: 'yellow-split-peas',
    en: 'Yellow Split Peas', fa: 'لپه', ar: 'بازلاء صفراء مجروشة',
    live: false, category: 'pulses', img: 'splitpeas',
    grade: 'Split, 99.5% purity', gradeFa: 'لپه، خلوص ۹۹٫۵ درصد',
    gradeAr: 'مجروشة، نقاء ٩٩٫٥ بالمئة',
    formats: ['1 kg', '25 kg'],
    hs: '0713.10',
    blurbEn: 'Split and polished yellow peas at 99.5% purity.',
    blurbFa: 'لپه زرد شکسته و پولیش‌شده با خلوص ۹۹٫۵ درصد.',
    blurbAr: 'بازلاء صفراء مجروشة ومصقولة بنقاء ٩٩٫٥ بالمئة.',
  },
  {
    slug: 'red-kidney-beans',
    en: 'Red Kidney Beans', fa: 'لوبیا قرمز', ar: 'فاصولياء حمراء',
    live: false, category: 'pulses', img: 'kidneybeans',
    grade: 'Dark red, 180–200 per 100 g', gradeFa: 'قرمز تیره، ۱۸۰ تا ۲۰۰ عدد در ۱۰۰ گرم',
    gradeAr: 'حمراء داكنة، من ١٨٠ إلى ٢٠٠ حبة لكل ١٠٠ غم',
    formats: ['1 kg', '25 kg'],
    hs: '0713.33',
    blurbEn: 'Dark red kidney beans counted at 180–200 per 100 g.',
    blurbFa: 'لوبیا قرمز تیره با شمارش ۱۸۰ تا ۲۰۰ عدد در ۱۰۰ گرم.',
    blurbAr: 'فاصولياء حمراء داكنة بعدّ من ١٨٠ إلى ٢٠٠ حبة لكل ١٠٠ غم.',
  },
  {
    slug: 'turmeric',
    en: 'Turmeric', fa: 'زردچوبه', ar: 'كركم',
    live: false, category: 'spices', img: 'turmeric',
    grade: 'Ground, 3.5% curcumin', gradeFa: 'آسیاب‌شده، ۳٫۵ درصد کورکومین',
    gradeAr: 'مطحون، ٣٫٥ بالمئة كركمين',
    formats: ['500 g', '25 kg'],
    hs: '0910.30',
    blurbEn: 'Ground turmeric at 3.5% curcumin content.',
    blurbFa: 'زردچوبه آسیاب‌شده با ۳٫۵ درصد کورکومین.',
    blurbAr: 'كركم مطحون بنسبة كركمين ٣٫٥ بالمئة.',
  },
  {
    slug: 'black-pepper',
    en: 'Black Pepper', fa: 'فلفل سیاه', ar: 'فلفل أسود',
    live: false, category: 'spices', img: 'blackpepper',
    grade: '550 g/l, ASTA cleaned', gradeFa: '۵۵۰ گرم بر لیتر، تمیزشده مطابق ASTA',
    gradeAr: '٥٥٠ غم/لتر، منظّف وفق ASTA',
    formats: ['500 g', '25 kg'],
    hs: '0904.11',
    blurbEn: 'Whole black peppercorns at 550 g/l bulk density, ASTA cleaned.',
    blurbFa: 'فلفل سیاه دانه‌کامل با چگالی ۵۵۰ گرم بر لیتر، تمیزشده مطابق ASTA.',
    blurbAr: 'حبوب فلفل أسود كاملة بكثافة ٥٥٠ غم/لتر، منظّفة وفق ASTA.',
  },
  {
    slug: 'coriander-seeds',
    en: 'Coriander Seeds', fa: 'تخم گشنیز', ar: 'بذور الكزبرة',
    live: false, category: 'spices', img: 'coriander',
    grade: 'Eagle, 99% purity', gradeFa: 'ایگل، خلوص ۹۹ درصد',
    gradeAr: 'إيجل، نقاء ٩٩ بالمئة',
    formats: ['500 g', '25 kg'],
    hs: '0909.21',
    blurbEn: 'Eagle-type coriander seed at 99% purity.',
    blurbFa: 'تخم گشنیز نوع ایگل با خلوص ۹۹ درصد.',
    blurbAr: 'بذور كزبرة من نوع إيجل بنقاء ٩٩ بالمئة.',
  },
];

export const LIVE_PRODUCTS = PRODUCTS.filter((p) => p.live);
export const UPCOMING_PRODUCTS = PRODUCTS.filter((p) => !p.live);

/** Sourcing regions, carried over from the shipped site. */

/** The five real RAVOMA retail formats, from the client's packaging renders. */
export const PACK_FORMATS = [
  { img: 'pack-pocket-dark', en: '10 g pocket dispenser', fa: 'پخش‌کن جیبی ۱۰ گرمی', ar: 'موزّع جيب ١٠ غم' },
  { img: 'pack-drawer', en: '20 g drawer box', fa: 'جعبه کشویی ۲۰ گرمی', ar: 'علبة درج ٢٠ غم' },
  { img: 'pack-tin', en: '100 g round tin', fa: 'قوطی گرد ۱۰۰ گرمی', ar: 'علبة معدنية دائرية ١٠٠ غم' },
  { img: 'pack-gift', en: '200 g gift box', fa: 'جعبه هدیه ۲۰۰ گرمی', ar: 'علبة هدايا ٢٠٠ غم' },
  { img: 'pack-flagship', en: '300 g presentation box', fa: 'جعبه ارائه ۳۰۰ گرمی', ar: 'علبة تقديم ٣٠٠ غم' },
];
