export interface Chapter {
  id: number;
  title: string;
  href: string;
}

export interface Course {
  slug: string;
  icon: string;
  colorClass: string;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  chapters: Chapter[];
}

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
      { id: 1, title: "El Alfabeto", href: "CAP 1 EL ALFABETO ESF.html" },
      { id: 2, title: "Los Colores", href: "CAP 2 LOS COLORES ESF.html" },
      { id: 3, title: "Los Animales", href: "CAP 3 LOS ANIMALES ESF.html" },
      { id: 4, title: "Los Números", href: "CAP 4 LOS NUMEROS ESF.html" },
      { id: 5, title: "Sinónimos", href: "CAP 5 LOS SINÓNIMOS ESF.html" },
      { id: 6, title: "Antónimos", href: "CAP 6 LOS ANTÓNIMOS ESF.html" },
      { id: 7, title: "Interrogativos 1", href: "CAP 7 INTERROGATIVOS PARTE I ESF.html" },
      { id: 8, title: "Interrogativos 2", href: "CAP 8 INTERROGATIVOS PARTE II ESF.html" },
      { id: 9, title: "El Sustantivo", href: "CAP 9 EL SUSTANTIVO ESF.html" },
      { id: 10, title: "El Adjetivo", href: "CAP 10 EL ADJETIVO ESF.html" },
      { id: 11, title: "El Pronombre", href: "CAP 11 EL PRONOMBRE ESF.html" },
      { id: 12, title: "El Sujeto", href: "CAP 12 EL SUJETO ESF.html" },
      { id: 13, title: "El Predicado", href: "CAP 13 EL PREDICADO ESF.html" },
      { id: 14, title: "La Oración", href: "CAP 14 LA ORACION ESF.html" },
      { id: 15, title: "La Sílaba", href: "CAP 15 LA SILABA ESF.html" },
      { id: 16, title: "Determinantes", href: "CAP 16 DETERMINANTES ESF.html" },
      { id: 17, title: "La Preposición", href: "CAP 17 LA PREPOSICIÓN ESF.html" },
      { id: 18, title: "El Sintaxis Nominal", href: "CAP 18 EL SINTAXIS NOMINAL ESF.html" },
      { id: 19, title: "Vicios Gramaticales", href: "CAP 19 VICIOS GRAMATICALES ESF.html" },
      { id: 20, title: "Tildación", href: "CAP 19 VICIOS GRAMATICALES ESF.html" },
      { id: 21, title: "La Morfología", href: "CAP 21 LA MORFOLOGIA ESF.html" },
      { id: 22, title: "Clasificación Morfológica", href: "CAP 22 LA CLASIFICACIÓN MORFOLOGICA ESF.html" },
      { id: 23, title: "Relaciones Semánticas", href: "CAP 23 RELACIONES SEMANTICAS ESF.html" },
      { id: 24, title: "Familias Lingüísticas en el Perú", href: "CAP 24 FAMILIAS LINGÜÍSTICAS EN EL PERÚ ESF.html" },
      { id: 25, title: "Uso de Mayúsculas", href: "CAP 25 EL USO DE MAYUSCULAS ESF.html" },
      { id: 26, title: "La Comunicación", href: "CAP 26 LA COMUNICACIÓN ESF.html" },
      { id: 27, title: "Homonimia", href: "CAP 27 HOMONIMIA ESF.html" },
      { id: 28, title: "Homofonía", href: "CAP 28 HOMOFONÍA ESF.html" },
    ],
  },
  {
    slug: "herencia-peruana",
    icon: "Sun",
    colorClass: "blue",
    titleEs: "Herencia Peruana",
    titleEn: "Peruvian Heritage",
    descriptionEs: "Descubre la riqueza cultural e histórica del Perú.",
    descriptionEn: "Discover Peru's cultural and historical richness.",
    chapters: [
      { id: 1, title: "Introducción a la Identidad Peruana", href: "https://drive.google.com/file/d/1ZTO9i3Z_5-tqQz5pPhMZKUYQkVr9wSA0/view?usp=sharing" },
      { id: 2, title: "Civilizaciones Preincas", href: "ESF_PREINCAS_CAP1.html" },
    ],
  },
  {
    slug: "global-finance",
    icon: "TrendingUp",
    colorClass: "blue",
    titleEs: "Global Finance Series",
    titleEn: "Global Finance Series",
    descriptionEs: "Conceptos clave de finanzas globales: presupuesto e inversión.",
    descriptionEn: "Key global finance concepts: budgeting and investing.",
    chapters: [
      { id: 1, title: "Budgeting", href: "flhqxesf_Module1_Budgeting.html" },
      { id: 2, title: "Intro to Investing", href: "flhqxesf_Module1_Intro-to-Investing.html" },
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
      { id: 1, title: "Las necesidades y metas frente a recursos disponibles", href: "CAP 1 LAS NECESIDADES Y METAS FRENTE A RECURSOS DISPONIBLES ESF.html" },
      { id: 2, title: "Decisiones Financieras: El Costo de Oportunidad y el Ahorro", href: "CAP 2 DECISIONES FINANCIERAS_ EL COSTO DE OPORTUNIDADES Y EL AHORRO ESF.html" },
      { id: 3, title: "El flujo circular de la economía", href: "CAP 3 EL FLUJO CIRCULAR DE LA ECONOMÍA ESF.html" },
      { id: 4, title: "Cómo armar un presupuesto", href: "CAP 4 COMO ARMAR UN PRESUPUESTO ESF.html" },
      { id: 5, title: "Impuestos", href: "CAP 5 IMPUESTOS ESF.html" },
      { id: 6, title: "Sistema Financiero", href: "CAP 6 SISTEMA FINANCIERO ESF.html" },
      { id: 7, title: "Los Bancos", href: "CAP 7 LOS BANCOS ESF.html" },
      { id: 8, title: "Introducción a la Inversión", href: "CAP 8 INTRODUCCIÓN A LA INVERSIÓN ESF.html" },
      { id: 9, title: "El impacto de la inflación", href: "CAP 9 EL IMPACTO DE LA INFLACIÓN ESF.html" },
      { id: 10, title: "Gastos inteligentes", href: "CAP 10 GASTOS INTELIGENTES ESF.html" },
      { id: 11, title: "Importancia del crédito", href: "CAP 11 IMPORTANCIA DEL CRÉDITO ESF.html" },
      { id: 12, title: "Emprendimiento y Finanzas", href: "CAP 12 EMPRENDIMIENTO Y FINANZAS ESF.html" },
      { id: 13, title: "Los Errores Financieros Comunes y Cómo Evitarlos", href: "CAP 13 LOS ERRORES FINANCIEROS COMUNES Y CÓMO EVITARLOS ESF.html" },
    ],
  },
  {
    slug: "programacion",
    icon: "Code",
    colorClass: "teal",
    titleEs: "Programación",
    titleEn: "Programming",
    descriptionEs: "Desde los fundamentos hasta proyectos prácticos.",
    descriptionEn: "From fundamentals to hands-on projects.",
    chapters: [
      { id: 1, title: "Introducción a la Programación Web", href: "CAP 1 INTRODUCCIÓN A LA PROGRAMACIÓN WEB ESF.html" },
      { id: 2, title: "HTML Básico", href: "CAP 2 HTML Básico ESF.html" },
      { id: 3, title: "HTML Avanzado", href: "CAP 3 HTML Avanzado ESF.html" },
      { id: 4, title: "Introducción a CSS", href: "CAP 4 Introducción a CSS ESF.html" },
      { id: 5, title: "CSS Avanzado", href: "CAP 5 CSS Avanzado ESF.html" },
      { id: 6, title: "Introducción a JavaScript", href: "CAP 6 Introducción a JavaScript ESF.html" },
      { id: 7, title: "DOM y Eventos", href: "CAP 7 DOM y Eventos ESF.html" },
      { id: 8, title: "Introducción a Python", href: "CAP 8 Introducción a Python ESF.html" },
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
      { id: 1, title: "Números Enteros y Operaciones", href: "CAP 1 Números Enteros y Operaciones ESF.html" },
      { id: 2, title: "Medidas y Magnitudes", href: "CAP 2 Medidas y Magnitudes ESF.html" },
      { id: 3, title: "Patrones y Secuencias", href: "CAP 3 Patrones y Secuencias ESF.html" },
      { id: 4, title: "Figuras y Formas", href: "CAP 4 Figuras y Formas ESF.html" },
      { id: 5, title: "Áreas y Perímetros", href: "CAP 5 Áreas y Perímetros ESF.html" },
      { id: 6, title: "Volúmenes", href: "CAP 6 Volúmenes ESF.html" },
      { id: 7, title: "La Probabilidad", href: "CAP 7 La Probabilidad ESF.html" },
      { id: 8, title: "La Multiplicación", href: "CAP 8 La Multiplicación ESF.html" },
    ],
  },
  {
    slug: "ciencias",
    icon: "FlaskConical",
    colorClass: "green",
    titleEs: "Ciencias",
    titleEn: "Science",
    descriptionEs: "Física, química, biología y ciencias de la tierra.",
    descriptionEn: "Physics, chemistry, biology, and earth sciences.",
    chapters: [
      { id: 1, title: "Introducción a la Física", href: "CAP 1 Introducción a la Física ESF.html" },
      { id: 2, title: "Movimiento Rectilíneo Uniforme", href: "CAP 2 Movimiento Rectilíneo Uniforme (MRU) ESF.html" },
      { id: 3, title: "Movimiento Rectilíneo Uniforme Variado", href: "CAP 3 MOVIMIENTO RECTILÍNEO UNIFORMEMENTE VARIADO (MRUV) ESF.html" },
      { id: 4, title: "Movimiento Vertical de Caída Libre", href: "CAP 4 MOVIMIENTO VERTICAL DE CAÍDA LIBRE (MVCL) ESF.html" },
      { id: 5, title: "Movimiento Parabólico de Caída Libre", href: "CAP 5 MOVIMIENTO PARABÓLICO DE CAÍDA LIBRE ESF.html" },
      { id: 6, title: "Elementos y Átomos", href: "CAP 6 Elementos y Átomos ESF.html" },
      { id: 7, title: "El Número Atómico", href: "CAP 7 El Número Atómico ESF.html" },
      { id: 8, title: "Células y Organismos", href: "CAP 8 Células y Organismos ESF.html" },
      { id: 9, title: "Partes de la Célula y sus Funciones", href: "CAP 9 Partes de la Célula y sus Funciones ESF.html" },
    ],
  },
  {
    slug: "ciberseguridad",
    icon: "Shield",
    colorClass: "teal",
    titleEs: "Ciberseguridad",
    titleEn: "Cybersecurity",
    descriptionEs: "Protege tu información y aprende seguridad digital.",
    descriptionEn: "Protect your information and learn digital security.",
    chapters: [
      { id: 1, title: "Las Diferentes Partes de Internet y su Relación con la Ciberseguridad", href: "CAP 1 Las Diferentes Partes de Internet y su Relación con la Ciberseguridad.html" },
      { id: 2, title: "Comportamiento Ciberseguro y Protección de Dispositivos", href: "CAP 2 Comportamiento Ciberseguro y Protección de Dispositivos.html" },
      { id: 3, title: "Estrategias Avanzadas de Ciberseguridad", href: "CAP 3 Estrategias Avanzadas de Ciberseguridad_ Protegiendo Dispositivos y Comunicaciones.html" },
      { id: 4, title: "Respuesta ante Incidentes de Ciberseguridad en el Entorno Profesional", href: "CAP 4 Respuesta ante Incidentes de Ciberseguridad en el Entorno Profesional.html" },
      { id: 5, title: "Respuesta ante incidentes y gestión de eventos de seguridad", href: "CAP 5 Respuesta ante incidentes y gestión de eventos de seguridad.html" },
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
      { id: 1, title: "Essential Question Forms in English", href: "Essential Question Forms in English CHAPTER 1.html" },
      { id: 2, title: "Bridges Across Time: Mastering the Present Perfect", href: "Bridges Across Time_ Mastering the Present Perfect CHAPTER 2.html" },
      { id: 3, title: "Time in Motion: Understanding the Present Perfect Continuous", href: "Time in Motion_ Understanding the Present Perfect Continuous CHAPTER 3.html" },
      { id: 4, title: "Moments and Movements: The Past Simple and Past Continuous", href: "Moments and Movements_ The Past Simple and Past Continuous CHAPTER 4.html" },
      { id: 5, title: "Before the Past: The Past Perfect Simple and Past Perfect Continuous", href: "Before the Past_ The Past Perfect Simple and Past Perfect Continuous CHAPTER 5.html" },
    ],
  },
];

export const testimonials = [
  "Desde que empecé a usar este sitio, mi gramática en español ha mejorado muchísimo. Lo recomiendo al 100%. ¡Gracias por hacerlo tan accesible! - Marta",
  "Los capítulos son súper claros y fáciles de seguir. Me ha ayudado un montón a avanzar rápido con el español. - Carlos",
  "Me encanta cómo los contenidos se adaptan a diferentes niveles. Ha sido ideal tanto para empezar como para repasar. - Sergio",
  "Una manera divertida y práctica de aprender vocabulario, gramática y hasta matemáticas. ¡Muy útil! - Claudia",
  "Lo que más valoro es que puedo aprender a mi ritmo, sin presión. Ya he avanzado bastante en ciencias y finanzas personales. - Ana",
  "Este curso me abrió los ojos sobre cómo manejar mejor mi dinero. ¡Muy recomendado! - Carla",
  "Nunca entendí bien las finanzas hasta que probé esta página. Ahora sé cómo ahorrar e invertir. - Jorge",
  "Este sitio fue clave para empezar desde cero con programación. Ahora me siento mucho más seguro. - Alberto",
  "Aprender a programar acá ha sido una experiencia genial. Todo está bien explicado. - David",
  "Me ayudó tanto con español como con física. Aprendí conceptos que antes me costaban muchísimo. - Camila",
];

export const faqItems = [
  {
    questionEs: "¿Qué es Español Sin Fronteras?",
    questionEn: "What is Español Sin Fronteras?",
    answerEs: "Español Sin Fronteras es una plataforma educativa gratuita que ofrece recursos para aprender español y otras áreas clave como programación, matemáticas, educación financiera, ciencias y ciberseguridad, accesibles sin necesidad de registro.",
    answerEn: "Español Sin Fronteras is a free educational platform offering resources to learn Spanish and other key areas like programming, math, financial education, science, and cybersecurity, accessible without registration.",
  },
  {
    questionEs: "¿Por qué usar Español Sin Fronteras?",
    questionEn: "Why use Español Sin Fronteras?",
    answerEs: "Porque ofrece contenido educativo gratuito, práctico y de calidad, sin barreras de acceso ni necesidad de registrarse, ideal para estudiantes, docentes y autodidactas.",
    answerEn: "Because it offers free, practical, quality educational content with no access barriers or registration needed, ideal for students, teachers, and self-learners.",
  },
  {
    questionEs: "¿Cómo puedo sugerir nuevos capítulos o temas?",
    questionEn: "How can I suggest new chapters or topics?",
    answerEs: "Puedes enviarnos tus sugerencias a través de nuestras redes sociales, por correo electrónico o completando el formulario de contacto disponible en la plataforma.",
    answerEn: "You can send us your suggestions through our social media, by email, or by completing the contact form available on the platform.",
  },
  {
    questionEs: "¿Puedo usar los materiales en clase?",
    questionEn: "Can I use the materials in class?",
    answerEs: "Sí, todos los recursos están pensados para ser usados libremente en clases presenciales o virtuales, y pueden compartirse con estudiantes sin restricciones.",
    answerEn: "Yes, all resources are designed to be used freely in in-person or virtual classes, and can be shared with students without restrictions.",
  },
];

export const socialLinks = [
  { name: "Instagram", url: "https://www.instagram.com/espanol_sin_fronteras_org" },
  { name: "TikTok", url: "https://www.tiktok.com/@espanolsinfronteras.org" },
  { name: "Facebook", url: "https://www.facebook.com/people/Espa%C3%B1ol-Sin-Fronteras/pfbid04dD4Hdgp7QjQ5q3L2ydkDx9CqPvcTE2TKZqZuqkmSnmwRqYXtESSnqZ6CCSwnnVLl/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/espa%C3%B1ol-sin-fronteras" },
  { name: "Spotify", url: "https://open.spotify.com/show/02sYDMUgYDPOZg2ypgDnhd" },
];
