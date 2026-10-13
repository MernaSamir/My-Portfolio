/* All content for Mirna (Merna) Samir Mosaad's portfolio, in English and Arabic.
   Facts come from her CV (PDF) and her LinkedIn profile (headline, dates, education, skills and
   assessments); company context was checked with public sources (Oct 2026). Nothing here is invented:
   where a company could not be verified publicly, the "about" line only repeats what her CV says. */
import type { Lang } from '../i18n';
type T = Record<Lang, string>;
const t = (en: string, ar: string): T => ({ en, ar });

export const PERSON = {
  name: t('Mirna Samir Mosaad', 'ميرنا سمير مسعد'),
  full: t('Mirna Samir Mosaad', 'ميرنا سمير مسعد'),
  short: t('Mirna', 'ميرنا'),
  role: t('Senior Front-End Developer · React · Next.js · TypeScript', 'مطوّرة واجهات أمامية أولى · React · Next.js · TypeScript'),
  email: 'mernasamir66@gmail.com',
  phone: '+20 120 313 2640',
  tel: '+201203132640',
  linkedin: 'https://www.linkedin.com/in/mirna-samir-mosaad/',
  github: '',
  location: t('Cairo, Egypt', 'القاهرة، مصر'),
};

export const META = {
  title: t('Mirna Samir Mosaad · Senior Front-End Developer (React, Next.js, TypeScript, React Native)', 'ميرنا سمير مسعد · مطوّرة واجهات أمامية أولى (React و Next.js و TypeScript و React Native)'),
  desc: t('Mirna (Merna) Samir Mosaad, Senior Front-End Developer in Cairo with 6+ years building web and mobile apps in React, Next.js, TypeScript and React Native: training platforms, a Saudi ministry system, booking and ordering platforms, e-commerce, POS and real-time dashboards. Open to new opportunities.',
          'ميرنا سمير مسعد، مطوّرة واجهات أمامية أولى في القاهرة بخبرة تزيد على 6 سنوات في بناء تطبيقات الويب والجوال باستخدام React و Next.js و TypeScript و React Native: منصات تدريب، ونظام لوزارة سعودية، ومنصات حجز وطلبات، وتجارة إلكترونية، وأنظمة نقاط بيع، ولوحات بيانات لحظية. متاحة لفرص جديدة.'),
};

export const NAV = {
  about: t('About', 'نبذة'), skills: t('Skills', 'المهارات'), projects: t('Work', 'الأعمال'),
  career: t('Career', 'المسيرة'), contact: t('Contact', 'تواصل'), video: t('Video', 'فيديو'),
  services: t('Services', 'الخدمات'), certs: t('Certificates', 'الشهادات'),
};

export const HERO = {
  hello: t("Hi, I'm Mirna", 'مرحبًا، أنا ميرنا'), open: t('Open to new opportunities', 'متاحة لفرص جديدة'),
  l1: t('I build', 'أبني تطبيقات ويب وجوال'), l2a: t('', ''), words: t('clean|responsive|scalable', 'أنيقة|متجاوبة|قابلة للتوسع'), l2b: t(' web & mobile apps,', ''),
  l2pre: t('', ''), l3: t('from training platforms to POS systems.', 'من منصات التدريب إلى أنظمة نقاط البيع.'),
  lede: t('Senior Front-End Developer with <b>6+ years</b> in <b>React, Next.js and TypeScript</b>. At <b>PTway</b> I led the front end of <b>Taawoni</b>, a training-opportunity platform, and a <b>Saudi Ministry of Industry</b> system. Before that I built <b>booking and ordering platforms</b>, <b>e-commerce</b>, <b>POS and real-time dashboards</b>, and <b>React Native</b> apps.',
          'مطوّرة واجهات أمامية أولى بخبرة تزيد على <b>6 سنوات</b> في <b>React و Next.js و TypeScript</b>. في <b>PTway</b> قدت تطوير الواجهات الأمامية لمنصة <b>تعاوني</b> لفرص التدريب، ولنظام <b>وزارة الصناعة السعودية</b>. وقبل ذلك بنيت <b>منصات حجز وطلبات</b> و<b>متاجر إلكترونية</b> و<b>أنظمة نقاط بيع ولوحات بيانات لحظية</b> وتطبيقات <b>React Native</b>.'),
  cta1: t('See my work', 'شاهد أعمالي'), cta2: t('Download CV', 'تحميل السيرة الذاتية'), cta3: t('Email me', 'راسليني'),
};

export const BENTO = {
  hand: t('let’s build ✦', 'لنبنِ معًا ✦'), avail: t('Open to work', 'متاحة للعمل'),
  exp: t('Shipping since', 'أبني منذ'), years: t('6+ years across PTway, Eden, Rowaad, Back & Front and freelance clients', 'أكثر من 6 سنوات بين PTway و Eden و Rowaad و Back & Front وعملاء مستقلين'),
  nowk: t('Latest · PTway (Nov 2023 – Feb 2026)', 'الأحدث · PTway (نوفمبر 2023 – فبراير 2026)'),
  now: t('Led front-end work on Taawoni and a Saudi Ministry of Industry system', 'قدت تطوير الواجهات لمنصة تعاوني ولنظام وزارة الصناعة السعودية'),
  chips: [t('Next.js & TypeScript', 'Next.js و TypeScript'), t('i18next localization', 'تعريب بـ i18next'), t('Code-splitting & caching', 'تقسيم الكود والتخزين المؤقت'), t('Framer Motion UI', 'واجهات Framer Motion')],
  clock: t('Local time · Cairo', 'الوقت المحلي · القاهرة'), tz: t('On-site, hybrid or remote', 'في الموقع أو هجين أو عن بُعد'),
  stack: t('Tools I ship with', 'أدوات أعمل بها'),
  certk: t('Education', 'التعليم'), cert: t('B.Sc. Computer Science', 'بكالوريوس علوم الحاسب'), certs: t('Ain Shams University · FCIS · 2014–2018', 'جامعة عين شمس · كلية الحاسبات والمعلومات · 2014–2018'),
  a11yk: t('Accessibility', 'إمكانية الوصول'), a11y: t('Try this site your way', 'جرّب الموقع على طريقتك'), a11ySub: t('Contrast, text size, motion, Arabic RTL.', 'التباين وحجم النص والحركة والعربية.'), a11yGo: t('Open settings →', 'فتح الإعدادات ←'),
};

export const VIDEO = {
  k: t('in 40 seconds', 'في 40 ثانية'), t: t('From POS systems to a Saudi ministry platform', 'من أنظمة نقاط البيع إلى منصة وزارة سعودية'),
  p: t('A short reel of the companies, products and stack behind my work.', 'لقطات قصيرة عن الشركات والمنتجات والتقنيات خلف عملي.'),
};

export const ABOUT = {
  k: t('who am I?', 'من أنا؟'), t: t('About Me', 'نبذة عنّي'),
  badge: t('📍 Cairo · Egypt', '📍 القاهرة · مصر'),
  h: t('Clean UI, solid architecture, production-ready code ✨', 'واجهات أنيقة ومعمارية متينة وكود جاهز للإنتاج ✨'),
  p1: t('I am a front-end developer from Cairo with a B.Sc. in Computer Science from the Faculty of Computer and Information Sciences at Ain Shams University (2018). For more than six years I have built web and mobile apps with React.js, Next.js and TypeScript, with a strong eye for clean UI, responsive design and front-end architecture that scales.',
        'أنا مطوّرة واجهات أمامية من القاهرة، أحمل بكالوريوس علوم الحاسب من كلية الحاسبات والمعلومات بجامعة عين شمس (2018). على مدى أكثر من ست سنوات بنيت تطبيقات ويب وجوال باستخدام React.js و Next.js و TypeScript، مع اهتمام كبير بالواجهات الأنيقة والتصميم المتجاوب ومعمارية واجهات قابلة للتوسع.'),
  p2: t('My work spans training platforms, a Saudi ministry system, booking and ordering platforms, e-commerce, POS and real-time dashboards. I started full-stack, with React, Django and PostgreSQL, and I still work with Node.js and GraphQL, so I collaborate easily across the stack. I keep learning (ISTQB Foundation is in progress), and outside work I enjoy reading and acting, which keep me creative, focused and clear when I communicate.',
        'تشمل أعمالي منصات تدريب، ونظامًا لوزارة سعودية، ومنصات حجز وطلبات، وتجارة إلكترونية، وأنظمة نقاط بيع، ولوحات بيانات لحظية. بدأت مطوّرة متكاملة باستخدام React و Django و PostgreSQL، وما زلت أعمل مع Node.js و GraphQL، لذا أتعاون بسهولة مع فرق الخوادم. أواصل التعلم (أدرس حاليًا لشهادة ISTQB Foundation)، وخارج العمل أحب القراءة والتمثيل، فهما يبقيانني مبدعة ومركّزة وواضحة في التواصل.'),
  name: t('Name', 'الاسم'), loc: t('Location', 'الموقع'), locs: t('Open to on-site, hybrid or remote roles', 'متاحة للعمل في الموقع أو هجينًا أو عن بُعد'),
  email: t('Email', 'البريد الإلكتروني'), phone: t('Mobile', 'الجوال'), li: t('LinkedIn', 'LinkedIn'), gh: t('GitHub', 'GitHub'),
  edu: t('Education', 'التعليم'), eduv: t('B.Sc. Computer Science', 'بكالوريوس علوم الحاسب'), edus: t('Ain Shams University · FCIS · 2014–2018', 'جامعة عين شمس · كلية الحاسبات والمعلومات · 2014–2018'),
  lang: t('Status', 'الحالة'), langv: t('Open to new opportunities', 'متاحة لفرص جديدة'), langs: t('Senior front-end and React Native roles', 'وظائف الواجهات الأمامية الأولى و React Native'),
  principles: [
    { t: t('Clean, reusable UI', 'واجهات أنيقة قابلة لإعادة الاستخدام'), p: t('Typed components, custom hooks and predictable state that teams can build on.', 'مكوّنات مكتوبة الأنواع وخطافات مخصّصة وحالة متوقعة يبني عليها الفريق.') },
    { t: t('Fast for every user', 'سريعة لكل مستخدم'), p: t('Responsive layouts, localization with i18next, code-splitting and caching.', 'تخطيطات متجاوبة وتعريب بـ i18next وتقسيم للكود وتخزين مؤقت.') },
    { t: t('One team, one product', 'فريق واحد ومنتج واحد'), p: t('Close work with back-end engineers and designers, in Agile, for consistent UX.', 'تعاون وثيق مع مهندسي الخوادم والمصممين بأسلوب Agile لتجربة استخدام متسقة.') },
  ],
};

/* Every skill from her CV's "Technical Skills", plus the stacks named in her experience and every skill
   on her LinkedIn profile. Verified = passed LinkedIn Skill Assessment. */
export const SKILLS = {
  k: t('what I bring', 'ما أقدّمه'), t: t('Skills', 'المهارات'), p: t('React and Next.js depth, mobile with React Native, and full-stack roots.', 'عمق في React و Next.js، وتطبيقات جوال بـ React Native، وجذور في التطوير المتكامل.'),
  verified: t('LinkedIn Skill Assessment passed', 'اجتازت تقييم المهارات في LinkedIn'),
  groups: [
    { icon: '⚛️', t: t('Front-end', 'الواجهات الأمامية'), items: [['react', 'React.js ✓'], ['nextdotjs', 'Next.js'], ['typescript', 'TypeScript'], ['javascript', 'JavaScript (ES6+) ✓'], ['html5', 'HTML5 ✓'], ['react', 'React Native'], ['expo', 'Expo']] },
    { icon: '🎨', t: t('Styling', 'التنسيق'), items: [['css3', 'CSS3'], ['sass', 'Sass / SCSS'], ['less', 'Less'], ['styledcomponents', 'Styled Components'], ['bootstrap', 'Bootstrap'], ['tailwindcss', 'Tailwind CSS'], ['mui', 'Material UI']] },
    { icon: '🧠', t: t('State management', 'إدارة الحالة'), items: [['redux', 'Redux'], ['redux', 'Redux Toolkit'], ['', 'Zustand'], ['', 'Context API'], ['', 'Custom Hooks']] },
    { icon: '🧰', t: t('Tools & libraries', 'الأدوات والمكتبات'), items: [['axios', 'Axios'], ['lodash', 'Lodash'], ['framer', 'Framer Motion'], ['i18next', 'i18next'], ['', 'Formik'], ['reacthookform', 'React Hook Form'], ['chartdotjs', 'Chart.js'], ['plotly', 'Plotly'], ['', 'Moment.js']] },
    { icon: '🧩', t: t('Back-end & data', 'الخوادم والبيانات'), items: [['nodedotjs', 'Node.js'], ['django', 'Django'], ['graphql', 'GraphQL'], ['', 'REST APIs'], ['postgresql', 'PostgreSQL'], ['microsoftsqlserver', 'Microsoft SQL Server'], ['', 'SQL']] },
    { icon: '💻', t: t('Languages & CS', 'لغات البرمجة وعلوم الحاسب'), items: [['cplusplus', 'C++'], ['', 'C#'], ['', 'OOP'], ['', 'Data Structures'], ['', 'Problem Solving']] },
    { icon: '🏗️', t: t('Practice', 'الممارسة'), items: [['git', 'Git'], ['', 'Responsive Design'], ['', 'Agile Development'], ['', 'SaaS'], ['', 'Testing frameworks'], ['', 'Code-splitting & caching'], ['', 'Localization (i18n)']] },
    { icon: '✅', t: t('Verified on LinkedIn', 'موثّقة على LinkedIn'), items: [['javascript', 'JavaScript · passed'], ['html5', 'HTML · passed'], ['react', 'React.js · passed']] },
  ],
};

export type Mock = { flow?: string[]; stats?: [string, string, number][]; list?: [string, string][] };
export type Case = { c: T; a: T[]; r: T };
export const PROJECTS = {
  k: t("what I've built", 'ما بنيته'), t: t('Products & Projects', 'المنتجات والمشاريع'),
  p: t('Platforms and apps I built or led on the front end. These are client and employer products, so screens are shown as labelled illustrations, not screenshots.', 'منصات وتطبيقات بنيتها أو قدت واجهاتها الأمامية. هي منتجات لعملاء وجهات عمل، لذا تُعرض الشاشات كرسوم توضيحية مُعلَّمة لا كلقطات حقيقية.'),
  illus: t('Illustration', 'رسم توضيحي'), more: t('Live demo ↗', 'العرض المباشر ↗'), caseBtn: t('Read case study', 'اقرأ دراسة الحالة'),
  cs: { c: t('Challenge', 'التحدي'), a: t('What I did', 'ما قمت به'), r: t('Outcome', 'النتيجة') },
  filters: [
    { f: 'all', e: '', t: t('All', 'الكل') },
    { f: 'web', e: '🌐', t: t('Web platforms', 'منصات ويب') },
    { f: 'commerce', e: '🛒', t: t('Commerce & POS', 'التجارة ونقاط البيع') },
    { f: 'mobile', e: '📱', t: t('Mobile', 'الجوال') },
    { f: 'other', e: '🧪', t: t('Freelance & academic', 'مستقل وأكاديمي') },
  ],
  items: [
    { id: 'p-taawoni', c: 'web', org: t('PTway · Saudi Arabia', 'PTway · السعودية'), status: t('2023 – 2026', '2023 – 2026'),
      title: t('Taawoni, training-opportunity platform', 'تعاوني، منصة فرص التدريب'),
      p: t('Taawoni connects students with co-op and training opportunities. At PTway I led the front-end development and built and optimised its Next.js front end with React Hook Form, Context API and Framer Motion, localized with i18next.',
           'تعاوني منصة تربط الطلاب بفرص التدريب التعاوني والمهني. في PTway قدت تطوير الواجهات الأمامية، وبنيت واجهة Next.js وحسّنتها باستخدام React Hook Form و Context API و Framer Motion، مع التعريب عبر i18next.'),
      hl: [t('Led front-end development of the platform', 'قيادة تطوير الواجهات الأمامية للمنصة'), t('Forms with React Hook Form, state with Context API', 'نماذج بـ React Hook Form وحالة بـ Context API'), t('i18next localization, code-splitting and caching', 'تعريب بـ i18next وتقسيم للكود وتخزين مؤقت')],
      tags: ['Next.js', 'React', 'TypeScript', 'React Hook Form', 'Context API', 'Framer Motion', 'i18next'],
      case: { c: t('A training platform used by students, universities and companies needs to be fast, bilingual and easy to fill in, with many forms and flows.', 'منصة تدريب يستخدمها الطلاب والجامعات والشركات تحتاج أن تكون سريعة وثنائية اللغة وسهلة الاستخدام، مع نماذج ومسارات كثيرة.'),
              a: [t('Led the front-end work and built the Next.js front end.', 'قدت أعمال الواجهات الأمامية وبنيت واجهة Next.js.'),
                  t('Built robust forms with React Hook Form and shared state with Context API; added motion with Framer Motion.', 'بنيت نماذج متينة بـ React Hook Form وحالة مشتركة بـ Context API، وأضفت الحركة بـ Framer Motion.'),
                  t('Implemented localization with i18next and improved performance through code-splitting and caching.', 'نفّذت التعريب عبر i18next وحسّنت الأداء بتقسيم الكود والتخزين المؤقت.')],
              r: t('A localized, optimised Next.js front end for a production training platform.', 'واجهة Next.js معرّبة ومحسّنة لمنصة تدريب في بيئة الإنتاج.') } as Case,
      mock: { flow: ['Student', 'Apply', 'Train', 'Evaluate'], stats: [['Locales', 'i18next', 100], ['Bundles', 'Split', 80]], list: [['Training opportunity', 'Open'], ['Progress report', 'Submitted']] } as Mock },
    { id: 'p-moi', c: 'web', org: t('PTway · Saudi government', 'PTway · جهة حكومية سعودية'), status: t('2023 – 2026', '2023 – 2026'),
      title: t('Saudi Ministry of Industry system', 'نظام وزارة الصناعة السعودية'),
      p: t('Front-end development for a system built for the Saudi Ministry of Industry, which I led as part of my role at PTway, within the Next.js stack I worked with there.',
           'تطوير الواجهات الأمامية لنظام مبني لوزارة الصناعة السعودية، قدته ضمن عملي في PTway، ضمن منظومة Next.js التي عملت بها هناك.'),
      hl: [t('Led front-end development', 'قيادة تطوير الواجهات الأمامية'), t('Next.js and React front end', 'واجهة Next.js و React'), t('Government work delivered through PTway', 'عمل حكومي مُسلَّم عبر PTway')],
      tags: ['Next.js', 'React'],
      mock: { flow: ['Request', 'Review', 'Approve', 'Report'], stats: [['Workflow', 'Multi-step', 75], ['Stack', 'Next.js', 90]], list: [['Service request', 'In review'], ['Dashboard', 'Updated']] } as Mock },
    { id: 'p-office', c: 'web', org: t('Eden · Cairo (hybrid)', 'Eden · القاهرة (هجين)'), status: t('2023', '2023'),
      title: t('Office ordering platform', 'منصة الطلبات المكتبية'),
      p: t('An office ordering platform built at Eden with Next.js and TypeScript, working closely with back-end engineers to keep the UX consistent across systems.',
           'منصة طلبات مكتبية بنيتها في Eden باستخدام Next.js و TypeScript، بالتعاون الوثيق مع مهندسي الخوادم للحفاظ على تجربة استخدام متسقة بين الأنظمة.'),
      hl: [t('Next.js and TypeScript front end', 'واجهة Next.js و TypeScript'), t('Consistent UX across connected systems', 'تجربة استخدام متسقة بين الأنظمة المترابطة'), t('Built with the back-end team', 'مبنية بالتعاون مع فريق الخوادم')],
      tags: ['Next.js', 'TypeScript', 'REST APIs'],
      mock: { flow: ['Browse', 'Order', 'Approve', 'Deliver'], stats: [['Orders', 'Tracked', 78], ['Stack', 'Next.js', 90]], list: [['Order #128', 'Approved'], ['Supplies', 'In stock']] } as Mock },
    { id: 'p-travel', c: 'web', org: t('Eden · Cairo (hybrid)', 'Eden · القاهرة (هجين)'), status: t('2023', '2023'),
      title: t('Travel reservation platform', 'منصة حجوزات السفر'),
      p: t('A travel reservation platform built with Next.js and TypeScript at Eden: search, booking flows and a UX kept consistent with the company’s other systems.',
           'منصة حجوزات سفر مبنية بـ Next.js و TypeScript في Eden: البحث ومسارات الحجز وتجربة استخدام متسقة مع أنظمة الشركة الأخرى.'),
      hl: [t('Booking flows in Next.js', 'مسارات حجز بـ Next.js'), t('Typed with TypeScript end to end', 'مكتوبة الأنواع بـ TypeScript بالكامل'), t('Shared UX patterns across products', 'أنماط تجربة استخدام مشتركة بين المنتجات')],
      tags: ['Next.js', 'TypeScript'],
      mock: { flow: ['Search', 'Select', 'Book', 'Confirm'], stats: [['Booking', 'Flow', 84], ['Types', 'TS', 100]], list: [['Cairo → Riyadh', 'Booked'], ['Hotel · 3 nights', 'Pending']] } as Mock },
    { id: 'p-pos', c: 'commerce', org: t('Back & Front for Smart Systems', 'Back & Front للأنظمة الذكية'), status: t('2018 – 2023', '2018 – 2023'),
      title: t('POS, back office & real-time dashboards', 'نقاط البيع والأنظمة الخلفية ولوحات البيانات اللحظية'),
      p: t('Point-of-sale and back-office systems built full-stack with React, Django and PostgreSQL, including reporting modules and real-time dashboards that I designed and implemented.',
           'أنظمة نقاط بيع وأنظمة خلفية مبنية بشكل متكامل باستخدام React و Django و PostgreSQL، تشمل وحدات تقارير ولوحات بيانات لحظية صممتها ونفّذتها.'),
      hl: [t('React front end on a Django and PostgreSQL back end', 'واجهة React على خادم Django و PostgreSQL'), t('Reporting modules and real-time dashboards', 'وحدات تقارير ولوحات بيانات لحظية'), t('Four and a half years on-site, end to end', 'أربع سنوات ونصف في الموقع، من البداية للنهاية')],
      tags: ['React', 'Django', 'PostgreSQL', 'Chart.js', 'REST APIs'],
      case: { c: t('Shops need fast checkout at the counter and clear numbers in the back office.', 'تحتاج المتاجر إلى دفع سريع عند الكاشير وأرقام واضحة في الإدارة.'),
              a: [t('Built POS and back-office screens in React, integrated with Django and PostgreSQL.', 'بنيت شاشات نقاط البيع والإدارة بـ React مع تكامل Django و PostgreSQL.'),
                  t('Designed and implemented reporting modules and real-time dashboards.', 'صممت ونفّذت وحدات التقارير ولوحات البيانات اللحظية.'),
                  t('Worked across the stack, from database to UI.', 'عملت على كامل المنظومة، من قاعدة البيانات إلى الواجهة.')],
              r: t('POS and back-office systems with live reporting, delivered over more than four years.', 'أنظمة نقاط بيع وإدارة مع تقارير حيّة، سُلّمت على مدى أكثر من أربع سنوات.') } as Case,
      mock: { flow: ['Scan', 'Cart', 'Pay', 'Report'], stats: [['Dashboards', 'Real-time', 92], ['Reports', 'Modules', 80]], list: [['Daily sales', 'Live'], ['Stock alert', 'Low']] } as Mock },
    { id: 'p-shop', c: 'commerce', org: t('Rowaad · remote', 'Rowaad · عن بُعد'), status: t('2022', '2022'),
      title: t('E-commerce web applications', 'تطبيقات تجارة إلكترونية'),
      p: t('E-commerce web applications built with React, Formik and Material UI, with work on UI performance and responsiveness across devices.',
           'تطبيقات ويب للتجارة الإلكترونية مبنية بـ React و Formik و Material UI، مع تحسين أداء الواجهة واستجابتها على مختلف الأجهزة.'),
      hl: [t('Storefront and checkout UIs in React', 'واجهات المتجر والدفع بـ React'), t('Forms with Formik, components with Material UI', 'نماذج بـ Formik ومكوّنات Material UI'), t('Faster, responsive UI on every device', 'واجهة أسرع ومتجاوبة على كل جهاز')],
      tags: ['React', 'Formik', 'Material UI', 'Responsive'],
      mock: { flow: ['Catalog', 'Cart', 'Checkout', 'Track'], stats: [['UI', 'Responsive', 88], ['Forms', 'Formik', 80]], list: [['Order placed', 'Paid'], ['Cart', '3 items']] } as Mock },
    { id: 'p-pronto', c: 'mobile', org: t('Mobile app', 'تطبيق جوال'), status: t('React Native', 'React Native'),
      title: t('Pronto mobile app', 'تطبيق Pronto للجوال'),
      p: t('The Pronto mobile application, developed with React Native and Expo, one of the mobile apps I built alongside my web work.',
           'تطبيق Pronto للجوال، طوّرته باستخدام React Native و Expo، وهو من تطبيقات الجوال التي بنيتها إلى جانب عملي على الويب.'),
      hl: [t('Cross-platform with React Native', 'متعدد المنصات بـ React Native'), t('Built and shipped with Expo', 'مبني ومنشور عبر Expo'), t('Shared React skills from web to mobile', 'مهارات React مشتركة بين الويب والجوال')],
      tags: ['React Native', 'Expo', 'JavaScript'],
      mock: { flow: ['Open', 'Browse', 'Order', 'Done'], stats: [['Platforms', 'iOS · Android', 100], ['Tooling', 'Expo', 85]], list: [['Push notification', 'Sent'], ['Profile', 'Saved']] } as Mock },
    { id: 'p-freelance', c: 'other', org: t('Freelance & part-time · 2020–2023', 'عمل مستقل وجزئي · 2020–2023'), status: t('4 clients', '4 عملاء'),
      title: t('Dashboards, clinic & workforce systems', 'لوحات بيانات وأنظمة للعيادات وتتبّع الموظفين'),
      p: t('Front-end solutions for Fekra Egypt, Smart Business, High Bee Solutions and DEXI: dashboards, e-commerce, and management systems for clinics and workforce tracking.',
           'حلول واجهات أمامية لـ Fekra Egypt و Smart Business و High Bee Solutions و DEXI: لوحات بيانات، وتجارة إلكترونية، وأنظمة إدارة للعيادات وتتبّع الموظفين.'),
      hl: [t('Clinic management system', 'نظام إدارة عيادات'), t('Workforce tracking system', 'نظام تتبّع الموظفين'), t('Dashboards and e-commerce front ends', 'لوحات بيانات وواجهات تجارة إلكترونية')],
      tags: ['React', 'Dashboards', 'Chart.js', 'Plotly'],
      mock: { flow: ['Clinic', 'Staff', 'Shift', 'Report'], stats: [['Clients', '4', 70], ['Dashboards', 'Charts', 85]], list: [['Appointments', 'Today'], ['Team on shift', '12']] } as Mock },
    { id: 'p-iot', c: 'other', org: t('Ain Shams University · graduation project', 'جامعة عين شمس · مشروع التخرج'), status: t('Excellent with Honors', 'امتياز مع مرتبة الشرف'),
      title: t('IoT irrigation monitoring system', 'نظام مراقبة الري بإنترنت الأشياء'),
      p: t('My graduation project at the Faculty of Computer and Information Sciences: an IoT system for monitoring irrigation, graded Excellent with Honors.',
           'مشروع تخرجي في كلية الحاسبات والمعلومات: نظام إنترنت أشياء لمراقبة الري، حصل على تقدير امتياز مع مرتبة الشرف.'),
      hl: [t('IoT sensing for irrigation', 'استشعار إنترنت الأشياء للري'), t('Monitoring dashboard', 'لوحة مراقبة'), t('Graded Excellent with Honors', 'تقدير امتياز مع مرتبة الشرف')],
      tags: ['IoT', 'Dashboard', '2018'],
      mock: { flow: ['Sensor', 'Gateway', 'Server', 'Dashboard'], stats: [['Grade', 'Excellent', 100], ['Year', '2018', 60]], list: [['Soil moisture', 'OK'], ['Valve', 'Closed']] } as Mock },
  ],
};

export const SERVICES = {
  k: t('how I can help', 'كيف أساعدك'), t: t('Services', 'الخدمات'),
  p: t('For teams hiring and for freelance projects, as I have done for clients since 2020.', 'للفرق التي توظّف وللمشاريع المستقلة، كما أفعل مع العملاء منذ 2020.'),
  items: [
    { e: '⚛️', t: t('React & Next.js front ends', 'واجهات React و Next.js'), p: t('Typed, responsive, scalable apps with clean component architecture.', 'تطبيقات مكتوبة الأنواع ومتجاوبة وقابلة للتوسع بمعمارية مكوّنات نظيفة.') },
    { e: '📱', t: t('React Native apps', 'تطبيقات React Native'), p: t('Cross-platform mobile apps with React Native and Expo.', 'تطبيقات جوال متعددة المنصات بـ React Native و Expo.') },
    { e: '📊', t: t('Dashboards & reporting', 'لوحات البيانات والتقارير'), p: t('Real-time dashboards and reports with Chart.js and Plotly.', 'لوحات بيانات لحظية وتقارير بـ Chart.js و Plotly.') },
    { e: '🌍', t: t('Localization & performance', 'التعريب والأداء'), p: t('Multilingual UIs with i18next, plus code-splitting and caching.', 'واجهات متعددة اللغات عبر i18next، مع تقسيم الكود والتخزين المؤقت.') },
  ],
  cta: t('Start a project', 'ابدأ مشروعًا'),
};

export const CERTS = {
  k: t('always learning', 'التعلم المستمر'), t: t('Certificates', 'الشهادات'),
  items: [
    { e: '🧪', t: t('ISTQB Foundation Level', 'ISTQB Foundation Level'), s: t('In progress', 'قيد الدراسة') },
    { e: '☁️', t: t('Cloud Application Developer Mastery Award', 'جائزة إتقان تطوير التطبيقات السحابية'), s: t('IBM · 2018', 'IBM · 2018') },
    { e: '⚛️', t: t('React.js & Angular courses', 'دورات React.js و Angular'), s: t('Udemy', 'Udemy') },
    { e: '🔎', t: t('Software tester training (one month)', 'تدريب اختبار البرمجيات (شهر واحد)'), s: t('envnt · Aug 2017', 'envnt · أغسطس 2017') },
    { e: '✅', t: t('LinkedIn Skill Assessments: JavaScript, HTML, React.js', 'تقييمات مهارات LinkedIn: JavaScript و HTML و React.js'), s: t('Passed', 'اجتازتها') },
  ],
};

export const CAREER = {
  k: t("where I've been", 'أين عملت'), t: t('Career', 'المسيرة المهنية'), now: t('Latest', 'الأحدث'),
  jobs: [
    { dot: 'PT', when: t('Nov 2023 – Feb 2026 · Remote · full-time', 'نوفمبر 2023 – فبراير 2026 · عن بُعد · دوام كامل'), co: 'PTway', role: t('Senior Front-End Developer', 'مطوّرة واجهات أمامية أولى'), current: true,
      about: t('Saudi startup behind a part-time work platform; it raised a funding round in 2024 backed by Wa’ed Ventures and Qatar Development Bank.', 'شركة ناشئة سعودية تدير منصة للعمل الجزئي، وأغلقت جولة تمويل عام 2024 بدعم من وعد للاستثمار الجريء وبنك قطر للتنمية.'),
      b: [t('Led front-end development for Taawoni (training-opportunity platform) and the Saudi Ministry of Industry system.', 'قيادة تطوير الواجهات الأمامية لمنصة تعاوني لفرص التدريب ولنظام وزارة الصناعة السعودية.'),
          t('Built and optimized Next.js front ends with React Hook Form, Context API and Framer Motion.', 'بناء واجهات Next.js وتحسينها باستخدام React Hook Form و Context API و Framer Motion.'),
          t('Implemented localization with i18next and improved performance via code-splitting and caching.', 'تنفيذ التعريب عبر i18next وتحسين الأداء بتقسيم الكود والتخزين المؤقت.')],
      tags: ['Next.js', 'React Hook Form', 'Framer Motion', 'i18next'] },
    { dot: 'ED', when: t('Feb 2023 – Nov 2023 · Cairo · hybrid', 'فبراير 2023 – نوفمبر 2023 · القاهرة · هجين'), co: 'Eden Company for Technology Solutions', coAr: 'شركة Eden للحلول التقنية', role: t('Senior Front-End Developer', 'مطوّرة واجهات أمامية أولى'),
      about: t('Cairo-based technology solutions company.', 'شركة حلول تقنية مقرها القاهرة.'),
      b: [t('Developed office ordering and travel reservation platforms with Next.js and TypeScript.', 'تطوير منصات للطلبات المكتبية وحجوزات السفر باستخدام Next.js و TypeScript.'),
          t('Collaborated with back-end engineers to improve UX consistency across systems.', 'التعاون مع مهندسي الخوادم لتحسين اتساق تجربة الاستخدام بين الأنظمة.')],
      tags: ['Next.js', 'TypeScript'] },
    { dot: 'RW', when: t('Jan 2022 – Jun 2022 · Remote', 'يناير 2022 – يونيو 2022 · عن بُعد'), co: 'Rowaad', coAr: 'Rowaad (رواد)', role: t('Front-End Developer', 'مطوّرة واجهات أمامية'),
      about: t('Remote role building e-commerce web applications.', 'عمل عن بُعد في بناء تطبيقات ويب للتجارة الإلكترونية.'),
      b: [t('Built e-commerce web applications with React, Formik and Material UI.', 'بناء تطبيقات تجارة إلكترونية باستخدام React و Formik و Material UI.'),
          t('Improved UI performance and responsiveness across devices.', 'تحسين أداء الواجهة واستجابتها على مختلف الأجهزة.')],
      tags: ['React', 'Formik', 'Material UI'] },
    { dot: 'FL', when: t('2020 – 2023 · Freelance & part-time', '2020 – 2023 · عمل مستقل وجزئي'), co: 'Freelance clients', coAr: 'عملاء مستقلون', role: t('Front-End Developer', 'مطوّرة واجهات أمامية'),
      about: t('Fekra Egypt, Smart Business, High Bee Solutions (Australia) and DEXI (Cairo).', 'Fekra Egypt و Smart Business و High Bee Solutions (أستراليا) و DEXI (القاهرة).'),
      b: [t('Delivered dashboards, e-commerce, and management systems for clinics and workforce tracking.', 'تسليم لوحات بيانات وتجارة إلكترونية وأنظمة إدارة للعيادات وتتبّع الموظفين.'),
          t('High Bee Solutions, Oct 2021 – Jan 2022; Dexi, Oct 2020 – Jan 2021.', 'High Bee Solutions من أكتوبر 2021 إلى يناير 2022، و Dexi من أكتوبر 2020 إلى يناير 2021.')],
      tags: ['React', 'Dashboards', 'E-commerce'] },
    { dot: 'B&F', when: t('Sep 2018 – Feb 2023 · On-site · full-time', 'سبتمبر 2018 – فبراير 2023 · في الموقع · دوام كامل'), co: 'Back & Front for Smart Systems', coAr: 'Back & Front للأنظمة الذكية', role: t('Full-Stack Developer', 'مطوّرة متكاملة'),
      about: t('Software company where I built POS and back-office systems and mobile apps.', 'شركة برمجيات بنيت فيها أنظمة نقاط بيع وأنظمة خلفية وتطبيقات جوال.'),
      b: [t('Developed POS and back-office systems with React, Django and PostgreSQL.', 'تطوير أنظمة نقاط بيع وأنظمة خلفية باستخدام React و Django و PostgreSQL.'),
          t('Designed and implemented reporting modules and real-time dashboards.', 'تصميم وتنفيذ وحدات تقارير ولوحات بيانات لحظية.'),
          t('Built mobile apps with React Native, including the Pronto app (React Native, Expo).', 'بناء تطبيقات جوال بـ React Native، منها تطبيق Pronto (React Native و Expo).')],
      tags: ['React', 'Django', 'PostgreSQL', 'React Native'] },
  ],
  edu: [
    { t: t('🎓 B.Sc. Computer Science', '🎓 بكالوريوس علوم الحاسب'), s: t('Ain Shams University, Faculty of Computer and Information Sciences · 2014–2018 · graduation project graded Excellent with Honors', 'جامعة عين شمس، كلية الحاسبات والمعلومات · 2014–2018 · مشروع التخرج بتقدير امتياز مع مرتبة الشرف') },
  ],
};

export const CONTACT = {
  t: t("Let's build something people love to use", 'لنبنِ معًا ما يحب الناس استخدامه'),
  p: t('Open to new opportunities: senior front-end and React Native roles, on-site, hybrid or remote, and freelance projects.', 'متاحة لفرص جديدة: وظائف الواجهات الأمامية الأولى و React Native، في الموقع أو هجينًا أو عن بُعد، وللمشاريع المستقلة.'),
  copy: t('Copy', 'نسخ'), cv: t('Download CV (PDF)', 'تحميل السيرة الذاتية (PDF)'),
  avail: [t('⚛️ React & Next.js', '⚛️ React و Next.js'), t('📱 React Native', '📱 React Native'), t('🏢 On-site', '🏢 في الموقع'), t('🔀 Hybrid', '🔀 هجين'), t('🌍 Remote', '🌍 عن بُعد')],
};

export const FOOTER = {
  tag: t('Senior Front-End Developer · React · Next.js · TypeScript · React Native', 'مطوّرة واجهات أمامية أولى · React · Next.js · TypeScript · React Native'),
  avail: t('Open to new opportunities', 'متاحة لفرص جديدة'), email: t('Email me', 'راسليني'), cv: t('Download CV', 'تحميل السيرة الذاتية'),
  explore: t('Explore', 'استكشف'), connect: t('Connect', 'تواصل'), rights: t('All rights reserved.', 'جميع الحقوق محفوظة.'),
  local: t('Cairo', 'القاهرة'), other: t('العربية', 'English'),
};

/** Runtime config for public/app.js (palette commands, links, code tile, storage keys). */
export const siteCfg = (base: string) => ({
  key: 'mm2',
  cv: base + 'Merna-Mosaad-CV.pdf',
  email: PERSON.email,
  linkedin: PERSON.linkedin,
  github: PERSON.github,
  sections: [
    { id: 'home', e: '🏠', en: 'Home', ar: 'الرئيسية' },
    { id: 'about', e: '👋', en: 'About me', ar: 'نبذة' },
    { id: 'intro', e: '🎬', en: 'Video', ar: 'فيديو' },
    { id: 'skills', e: '🧰', en: 'Skills', ar: 'المهارات' },
    { id: 'projects', e: '🚀', en: 'Work', ar: 'الأعمال' },
    { id: 'career', e: '🧭', en: 'Career', ar: 'المسيرة المهنية' },
    { id: 'certs', e: '📜', en: 'Certificates', ar: 'الشهادات' },
    { id: 'contact', e: '✉️', en: 'Contact', ar: 'تواصل' },
  ],
  projects: [
    { id: 'p-taawoni', e: '🎓', en: 'Taawoni training platform', ar: 'منصة تعاوني' },
    { id: 'p-moi', e: '🏛️', en: 'Saudi Ministry of Industry system', ar: 'نظام وزارة الصناعة السعودية' },
    { id: 'p-office', e: '🗂️', en: 'Office ordering platform', ar: 'منصة الطلبات المكتبية' },
    { id: 'p-travel', e: '✈️', en: 'Travel reservation platform', ar: 'منصة حجوزات السفر' },
    { id: 'p-pos', e: '🧾', en: 'POS & real-time dashboards', ar: 'نقاط البيع ولوحات البيانات' },
    { id: 'p-pronto', e: '📱', en: 'Pronto mobile app', ar: 'تطبيق Pronto' },
  ],
  code: [
    ['c', '// one form, two languages'],
    ['', `<span class="c-k">export function</span> <span class="c-f">ApplyForm</span>() {`],
    ['', `  <span class="c-k">const</span> { t } = <span class="c-f">useTranslation</span>(<span class="c-s">'apply'</span>);`],
    ['', `  <span class="c-k">const</span> { register, handleSubmit } = <span class="c-f">useForm</span>&lt;<span class="c-f">Application</span>&gt;();`],
    ['', `  <span class="c-k">return</span> &lt;<span class="c-f">motion.form</span> layout onSubmit={<span class="c-f">handleSubmit</span>(send)}&gt;…&lt;/<span class="c-f">motion.form</span>&gt;;`],
    ['', '}'],
  ],
});
