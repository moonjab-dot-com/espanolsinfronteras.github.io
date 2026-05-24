// ─── Types ───────────────────────────────────────────────────────────────────

export interface Chapter {
  id: number;
  title: string;
  /** Local HTML file path (e.g. "/content/...") or full external URL */
  href: string;
}

export interface Course {
  slug: string;
  /** lucide-react icon name */
  icon: string;
  colorClass: "blue" | "green" | "teal" | "violet" | "amber";
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  chapters: Chapter[];
}

// ─── Course Data ──────────────────────────────────────────────────────────────

export const courses: Course[] = [
  {
    slug: "espanol",
    icon: "MessageCircle",
    colorClass: "blue",
    titleEs: "Comunicación",
    titleEn: "Communication (Spanish)",
    descriptionEs: "Mejora tu escritura, lectura y comunicación en español.",
    descriptionEn: "Improve your writing, reading, and communication in Spanish.",
    chapters: [
      { id: 1,  title: "El Alfabeto",                       href: "/content/CAP 1 EL ALFABETO ESF.html" },
      { id: 2,  title: "Los Colores",                       href: "/content/CAP 2 LOS COLORES ESF.html" },
      { id: 3,  title: "Los Animales",                      href: "/content/CAP 3 LOS ANIMALES ESF.html" },
      { id: 4,  title: "Los Números",                       href: "/content/CAP 4 LOS NUMEROS ESF.html" },
      { id: 5,  title: "Sinónimos",                         href: "/content/CAP 5 LOS SINÓNIMOS ESF.html" },
      { id: 6,  title: "Antónimos",                         href: "/content/CAP 6 LOS ANTÓNIMOS ESF.html" },
      { id: 7,  title: "Interrogativos I",                  href: "/content/CAP 7 INTERROGATIVOS PARTE I ESF.html" },
      { id: 8,  title: "Interrogativos II",                 href: "/content/CAP 8 INTERROGATIVOS PARTE II ESF.html" },
      { id: 9,  title: "El Sustantivo",                     href: "/content/CAP 9 EL SUSTANTIVO ESF.html" },
      { id: 10, title: "El Adjetivo",                       href: "/content/CAP 10 EL ADJETIVO ESF.html" },
      { id: 11, title: "El Pronombre",                      href: "/content/CAP 11 EL PRONOMBRE ESF.html" },
      { id: 12, title: "El Sujeto",                         href: "/content/CAP 12 EL SUJETO ESF.html" },
      { id: 13, title: "El Predicado",                      href: "/content/CAP 13 EL PREDICADO ESF.html" },
      { id: 14, title: "La Oración",                        href: "/content/CAP 14 LA ORACION ESF.html" },
      { id: 15, title: "La Sílaba",                         href: "/content/CAP 15 LA SILABA ESF.html" },
      { id: 16, title: "Determinantes",                     href: "/content/CAP 16 DETERMINANTES ESF.html" },
      { id: 17, title: "La Preposición",                    href: "/content/CAP 17 LA PREPOSICIÓN ESF.html" },
      { id: 18, title: "El Sintaxis Nominal",               href: "/content/CAP 18 EL SINTAXIS NOMINAL ESF.html" },
      { id: 19, title: "Vicios Gramaticales",               href: "/content/CAP 19 VICIOS GRAMATICALES ESF.html" },
      { id: 20, title: "Tildación",                         href: "/content/CAP 20 TILDACIÓN ESF.html" },
      { id: 21, title: "La Morfología",                     href: "/content/CAP 21 LA MORFOLOGIA ESF.html" },
      { id: 22, title: "Clasificación Morfológica",         href: "/content/CAP 22 LA CLASIFICACIÓN MORFOLOGICA ESF.html" },
      { id: 23, title: "Relaciones Semánticas",             href: "/content/CAP 23 RELACIONES SEMANTICAS ESF.html" },
      { id: 24, title: "Familias Lingüísticas en el Perú",  href: "/content/CAP 24 FAMILIAS LINGÜÍSTICAS EN EL PERÚ ESF.html" },
      { id: 25, title: "Uso de Mayúsculas",                 href: "/content/CAP 25 EL USO DE MAYUSCULAS ESF.html" },
      { id: 26, title: "La Comunicación",                   href: "/content/CAP 26 LA COMUNICACIÓN ESF.html" },
      { id: 27, title: "Homonimia",                         href: "/content/CAP 27 HOMONIMIA ESF.html" },
      { id: 28, title: "Homofonía",                         href: "/content/CAP 28 HOMOFONÍA ESF.html" },
    ],
  },
  {
    slug: "herencia-peruana",
    icon: "Sun",
    colorClass: "amber",
    titleEs: "Herencia Peruana",
    titleEn: "Peruvian Heritage",
    descriptionEs: "Descubre la riqueza cultural e histórica del Perú.",
    descriptionEn: "Discover Peru's rich cultural and historical heritage.",
    chapters: [
      { id: 1, title: "Introducción a la Identidad Peruana",      href: "https://drive.google.com/file/d/1eUAPsIxe_E8PExr0VkL4AyFaDCXI52FT/view?usp=sharing" },
      { id: 2, title: "Civilizaciones Preincas",                  href: "https://drive.google.com/file/d/1D-O1G8UWgXLIGKF_d_5w1YSLk-ZeBqQa/view?usp=sharing" },
      { id: 3, title: "La Conquista y el Virreinato",             href: "https://drive.google.com/file/d/1KXpNRVxc7AVxoGFj7nO4Tq0KCmwy1TOP/view?usp=sharing" },
      { id: 4, title: "El Imperio Inca Tahuantinsuyo",            href: "https://drive.google.com/file/d/1FEyUVZC4WYfTCYmc07LJCoxshMR7AOdG/view?usp=sharing" },
      { id: 5, title: "Geografía y Regiones del Perú",            href: "https://drive.google.com/file/d/1ayEd1ZfO6QniqkmcudGTnR8awQpjUSbo/view?usp=sharing" },
      { id: 6, title: "Gastronomía Peruana",                      href: "https://drive.google.com/file/d/1xi67Oj027LqLDJk1PGXuUrXaBEDQau5r/view?usp=sharing" },
      { id: 7, title: "Música y Danzas Tradicionales Peruanas",   href: "https://drive.google.com/file/d/1-VkkNQhxWRjpdlJ6jo7v8ghIlxZcscY7/view?usp=sharing" },
      { id: 8, title: "Arte y Patrimonio Peruano",                href: "https://drive.google.com/file/d/15RtRCIB6zX8GjkDq-VsAR0hVPlaTNug/view?usp=sharing" },
      { id: 9, title: "Tradiciones y Festividades Peruanas",      href: "https://drive.google.com/file/d/18IrfL5TS9Ss2Fa3oMAxxDS-f-LRqdh8g/view?usp=sharing" },
    ],
  },
  {
    slug: "global-finance",
    icon: "TrendingUp",
    colorClass: "green",
    titleEs: "Global Finance Series",
    titleEn: "Global Finance Series",
    descriptionEs: "Conceptos clave de finanzas globales: presupuesto, ahorro e inversión.",
    descriptionEn: "Key global finance concepts: budgeting, saving, and investing.",
    chapters: [
      { id: 1, title: "Budgeting",       href: "/content/flhqxesf_Module1_Budgeting.html" },
      { id: 2, title: "Intro to Investing", href: "/content/flhqxesf_Module1_Intro-to-Investing.html" },
      { id: 3, title: "Saving",          href: "/content/FLHQ-x-Espan_ol-Sin-Fronteras-Presentation-Module-3-Saving.html" },
      { id: 4, title: "Credit",          href: "/content/FLHQ-x-Espan_ol-Sin-Fronteras-Presentation-Module-4-Credit.html" },
      { id: 5, title: "Making Money",    href: "/content/FLHQ-x-Espan_ol-Sin-Fronteras-Presentation-Module-5-Making-Money.html" },
    ],
  },
  {
    slug: "finanzas",
    icon: "DollarSign",
    colorClass: "green",
    titleEs: "Educación Financiera",
    titleEn: "Financial Education",
    descriptionEs: "Aprende sobre ahorro, inversiones y finanzas personales.",
    descriptionEn: "Learn about saving, investing, and personal finance.",
    chapters: [
      { id: 1,  title: "Las Necesidades y Metas Frente a Recursos Disponibles", href: "/content/CAP 1 LAS NECESIDADES Y METAS FRENTE A RECURSOS DISPONIBLES ESF.html" },
      { id: 2,  title: "Decisiones Financieras: El Costo de Oportunidad",       href: "/content/CAP 2 DECISIONES FINANCIERAS_ EL COSTO DE OPORTUNIDADES Y EL AHORRO ESF.html" },
      { id: 3,  title: "El Flujo Circular de la Economía",                      href: "/content/CAP 3 EL FLUJO CIRCULAR DE LA ECONOMÍA ESF.html" },
      { id: 4,  title: "Cómo Armar un Presupuesto",                             href: "/content/CAP 4 COMO ARMAR UN PRESUPUESTO ESF.html" },
      { id: 5,  title: "Impuestos",                                              href: "/content/CAP 5 IMPUESTOS ESF.html" },
      { id: 6,  title: "Sistema Financiero",                                    href: "/content/CAP 6 SISTEMA FINANCIERO ESF.html" },
      { id: 7,  title: "Los Bancos",                                             href: "/content/CAP 7 LOS BANCOS ESF.html" },
      { id: 8,  title: "Introducción a la Inversión",                           href: "/content/CAP 8 INTRODUCCIÓN A LA INVERSIÓN ESF.html" },
      { id: 9,  title: "El Impacto de la Inflación",                            href: "/content/CAP 9 EL IMPACTO DE LA INFLACIÓN ESF.html" },
      { id: 10, title: "Gastos Inteligentes",                                   href: "/content/CAP 10 GASTOS INTELIGENTES ESF.html" },
      { id: 11, title: "Importancia del Crédito",                               href: "/content/CAP 11 IMPORTANCIA DEL CRÉDITO ESF.html" },
      { id: 12, title: "Emprendimiento y Finanzas",                             href: "/content/CAP 12 EMPRENDIMIENTO Y FINANZAS ESF.html" },
      { id: 13, title: "Los Errores Financieros Comunes y Cómo Evitarlos",      href: "/content/CAP 13 LOS ERRORES FINANCIEROS COMUNES Y CÓMO EVITARLOS ESF.html" },
    ],
  },
  {
    slug: "programacion",
    icon: "Code",
    colorClass: "teal",
    titleEs: "Programación Web",
    titleEn: "Web Programming",
    descriptionEs: "Desde HTML y CSS hasta JavaScript y Python.",
    descriptionEn: "From HTML and CSS to JavaScript and Python.",
    chapters: [
      { id: 1, title: "Introducción a la Programación Web", href: "/content/CAP 1 INTRODUCCIÓN A LA PROGRAMACIÓN WEB ESF.html" },
      { id: 2, title: "HTML Básico",                        href: "/content/CAP 2 HTML Básico ESF.html" },
      { id: 3, title: "HTML Avanzado",                      href: "/content/CAP 3 HTML Avanzado ESF.html" },
      { id: 4, title: "Introducción a CSS",                 href: "/content/CAP 4 Introducción a CSS ESF.html" },
      { id: 5, title: "CSS Avanzado",                       href: "/content/CAP 5 CSS Avanzado ESF.html" },
      { id: 6, title: "Introducción a JavaScript",          href: "/content/CAP 6 Introducción a JavaScript ESF.html" },
      { id: 7, title: "DOM y Eventos",                      href: "/content/CAP 7 DOM y Eventos ESF.html" },
      { id: 8, title: "Introducción a Python",              href: "/content/CAP 8 Introducción a Python ESF.html" },
    ],
  },
  {
    slug: "matematicas",
    icon: "Calculator",
    colorClass: "blue",
    titleEs: "Matemáticas",
    titleEn: "Mathematics",
    descriptionEs: "Números, geometría, probabilidad y más.",
    descriptionEn: "Numbers, geometry, probability, and more.",
    chapters: [
      { id: 1, title: "Números Enteros y Operaciones", href: "/content/CAP 1 Números Enteros y Operaciones ESF.html" },
      { id: 2, title: "Medidas y Magnitudes",          href: "/content/CAP 2 Medidas y Magnitudes ESF.html" },
      { id: 3, title: "Patrones y Secuencias",         href: "/content/CAP 3 Patrones y Secuencias ESF.html" },
      { id: 4, title: "Figuras y Formas",              href: "/content/CAP 4 Figuras y Formas ESF.html" },
      { id: 5, title: "Áreas y Perímetros",            href: "/content/CAP 5 Áreas y Perímetros ESF.html" },
      { id: 6, title: "Volúmenes",                     href: "/content/CAP 6 Volúmenes ESF.html" },
      { id: 7, title: "La Probabilidad",               href: "/content/CAP 7 La Probabilidad ESF.html" },
      { id: 8, title: "La Multiplicación",             href: "/content/CAP 8 La Multiplicación ESF.html" },
    ],
  },
  {
    slug: "ciencias",
    icon: "FlaskConical",
    colorClass: "teal",
    titleEs: "Ciencias",
    titleEn: "Science",
    descriptionEs: "Física, química, biología y ciencias de la tierra.",
    descriptionEn: "Physics, chemistry, biology, and earth sciences.",
    chapters: [
      { id: 1, title: "Introducción a la Física",                         href: "/content/CAP 1 Introducción a la Física ESF.html" },
      { id: 2, title: "Movimiento Rectilíneo Uniforme",                   href: "/content/CAP 2 Movimiento Rectilíneo Uniforme (MRU) ESF.html" },
      { id: 3, title: "Movimiento Rectilíneo Uniformemente Variado",      href: "/content/CAP 3 MOVIMIENTO RECTILÍNEO UNIFORMEMENTE VARIADO (MRUV) ESF.html" },
      { id: 4, title: "Movimiento Vertical de Caída Libre",               href: "/content/CAP 4 MOVIMIENTO VERTICAL DE CAÍDA LIBRE (MVCL) ESF.html" },
      { id: 5, title: "Movimiento Parabólico de Caída Libre",             href: "/content/CAP 5 MOVIMIENTO PARABÓLICO DE CAÍDA LIBRE ESF.html" },
      { id: 6, title: "Elementos y Átomos",                               href: "/content/CAP 6 Elementos y Átomos ESF.html" },
      { id: 7, title: "El Número Atómico",                                href: "/content/CAP 7 El Número Atómico ESF.html" },
      { id: 8, title: "Células y Organismos",                             href: "/content/CAP 8 Células y Organismos ESF.html" },
      { id: 9, title: "Partes de la Célula y sus Funciones",              href: "/content/CAP 9 Partes de la Célula y sus Funciones ESF.html" },
    ],
  },
  {
    slug: "ciberseguridad",
    icon: "Shield",
    colorClass: "violet",
    titleEs: "Ciberseguridad",
    titleEn: "Cybersecurity",
    descriptionEs: "Protege tu información y domina la seguridad digital.",
    descriptionEn: "Protect your data and master digital security.",
    chapters: [
      { id: 1, title: "Las Partes de Internet y la Ciberseguridad",            href: "/content/CAP 1 Las Diferentes Partes de Internet y su Relación con la Ciberseguridad.html" },
      { id: 2, title: "Comportamiento Ciberseguro",                            href: "/content/CAP 2 Comportamiento Ciberseguro y Protección de Dispositivos.html" },
      { id: 3, title: "Estrategias Avanzadas de Ciberseguridad",               href: "/content/CAP 3 Estrategias Avanzadas de Ciberseguridad_ Protegiendo Dispositivos y Comunicaciones.html" },
      { id: 4, title: "Respuesta ante Incidentes en el Entorno Profesional",   href: "/content/CAP 4 Respuesta ante Incidentes de Ciberseguridad en el Entorno Profesional.html" },
      { id: 5, title: "Gestión de Eventos de Seguridad",                       href: "/content/CAP 5 Respuesta ante incidentes y gestión de eventos de seguridad.html" },
    ],
  },
  {
    slug: "ingles",
    icon: "Languages",
    colorClass: "blue",
    titleEs: "Inglés",
    titleEn: "English",
    descriptionEs: "Gramática, vocabulario y conversación en inglés.",
    descriptionEn: "Grammar, vocabulary, and English conversation.",
    chapters: [
      { id: 1, title: "Essential Question Forms in English",                   href: "/content/Essential Question Forms in English CHAPTER 1.html" },
      { id: 2, title: "Bridges Across Time: Mastering the Present Perfect",    href: "/content/Bridges Across Time_ Mastering the Present Perfect CHAPTER 2.html" },
      { id: 3, title: "Time in Motion: Understanding the Present Perfect Continuous", href: "/content/Time in Motion_ Understanding the Present Perfect Continuous CHAPTER 3.html" },
      { id: 4, title: "Moments and Movements: Past Simple and Past Continuous", href: "/content/Moments and Movements_ The Past Simple and Past Continuous CHAPTER 4.html" },
      { id: 5, title: "Before the Past: Past Perfect Simple and Continuous",   href: "/content/Before the Past_ The Past Perfect Simple and Past Perfect Continuous CHAPTER 5.html" },
    ],
  },
];

// ─── Supporting Content ───────────────────────────────────────────────────────

export const testimonials = [
  { text: "Desde que empecé a usar este sitio, mi gramática en español ha mejorado muchísimo. Lo recomiendo al 100%. ¡Gracias por hacerlo tan accesible!", author: "Marta" },
  { text: "Los capítulos son súper claros y fáciles de seguir. Me ha ayudado un montón a avanzar rápido con el español.", author: "Carlos" },
  { text: "Me encanta cómo los contenidos se adaptan a diferentes niveles. Ha sido ideal tanto para empezar como para repasar.", author: "Sergio" },
  { text: "Una manera divertida y práctica de aprender vocabulario, gramática y hasta matemáticas. ¡Muy útil!", author: "Claudia" },
  { text: "Lo que más valoro es que puedo aprender a mi ritmo, sin presión. Ya he avanzado bastante en ciencias y finanzas personales.", author: "Ana" },
  { text: "Este curso me abrió los ojos sobre cómo manejar mejor mi dinero. ¡Muy recomendado!", author: "Carla" },
  { text: "Nunca entendí bien las finanzas hasta que probé esta página. Ahora sé cómo ahorrar e invertir.", author: "Jorge" },
  { text: "Este sitio fue clave para empezar desde cero con programación. Ahora me siento mucho más seguro.", author: "Alberto" },
  { text: "Aprender a programar acá ha sido una experiencia genial. Todo está bien explicado.", author: "David" },
  { text: "Me ayudó tanto con español como con física. Aprendí conceptos que antes me costaban muchísimo.", author: "Camila" },
];

export const faqItems = [
  {
    questionEs: "¿Qué es Español Sin Fronteras?",
    questionEn: "What is Español Sin Fronteras?",
    answerEs: "Español Sin Fronteras es una plataforma educativa gratuita que ofrece recursos para aprender español y otras áreas clave como programación, matemáticas, educación financiera, ciencias y ciberseguridad, accesibles sin necesidad de registro.",
    answerEn: "Español Sin Fronteras is a free educational platform offering resources to learn Spanish and other key areas like programming, math, financial education, science, and cybersecurity — accessible without any registration.",
  },
  {
    questionEs: "¿Por qué usar Español Sin Fronteras?",
    questionEn: "Why use Español Sin Fronteras?",
    answerEs: "Porque ofrece contenido educativo gratuito, práctico y de calidad, sin barreras de acceso ni necesidad de registrarse, ideal para estudiantes, docentes y autodidactas de más de 72 países.",
    answerEn: "Because it offers free, practical, quality educational content with no access barriers or registration needed — ideal for students, teachers, and self-learners in 72+ countries.",
  },
  {
    questionEs: "¿Cómo puedo sugerir nuevos capítulos o temas?",
    questionEn: "How can I suggest new chapters or topics?",
    answerEs: "Puedes enviarnos tus sugerencias a través de nuestras redes sociales, por correo electrónico a espanolsinfronteras1@gmail.com o completando el formulario de contacto disponible en la plataforma.",
    answerEn: "You can send suggestions via social media, email us at espanolsinfronteras1@gmail.com, or use the contact form on the platform.",
  },
  {
    questionEs: "¿Puedo usar los materiales en clase?",
    questionEn: "Can I use the materials in class?",
    answerEs: "Sí, todos los recursos están pensados para ser usados libremente en clases presenciales o virtuales, y pueden compartirse con estudiantes sin restricciones.",
    answerEn: "Yes — all resources are designed for free use in in-person or virtual classes and can be shared with students without any restrictions.",
  },
];

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/espanol_sin_fronteras_org", handle: "@espanol_sin_fronteras_org" },
  { name: "TikTok",    url: "https://www.tiktok.com/@espanolsinfronteras.org", handle: "@espanolsinfronteras.org" },
  { name: "Facebook",  url: "https://www.facebook.com/people/Espa%C3%B1ol-Sin-Fronteras/pfbid04dD4Hdgp7QjQ5q3L2ydkDx9CqPvcTE2TKZqZuqkmSnmwRqYXtESSnqZ6CCSwnnVLl/", handle: "Español Sin Fronteras" },
  { name: "LinkedIn",  url: "https://www.linkedin.com/company/espa%C3%B1ol-sin-fronteras", handle: "Español Sin Fronteras" },
  { name: "Spotify",   url: "https://open.spotify.com/show/02sYDMUgYDPOZg2ypgDnhd", handle: "ESF Podcast" },
];
