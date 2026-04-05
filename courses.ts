export interface Chapter {
  id: number;
  title: string;
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
      { id: 1, title: "El Alfabeto" },
      { id: 2, title: "Los Colores" },
      { id: 3, title: "Los Animales" },
      { id: 4, title: "Los Números" },
      { id: 5, title: "Sinónimos" },
      { id: 6, title: "Antónimos" },
      { id: 7, title: "Interrogativos 1" },
      { id: 8, title: "Interrogativos 2" },
      { id: 9, title: "El Sustantivo" },
      { id: 10, title: "El Adjetivo" },
      { id: 11, title: "El Pronombre" },
      { id: 12, title: "El Sujeto" },
      { id: 13, title: "El Predicado" },
      { id: 14, title: "La Oración" },
      { id: 15, title: "La Sílaba" },
      { id: 16, title: "Determinantes" },
      { id: 17, title: "La Preposición" },
      { id: 18, title: "El Sintaxis Nominal" },
      { id: 19, title: "Vicios Gramaticales" },
      { id: 20, title: "Tildación" },
      { id: 21, title: "La Morfología" },
      { id: 22, title: "Clasificación Morfológica" },
      { id: 23, title: "Relaciones Semánticas" },
      { id: 24, title: "Familias Lingüísticas en el Perú" },
      { id: 25, title: "Uso de Mayúsculas" },
      { id: 26, title: "La Comunicación" },
      { id: 27, title: "Homonimia" },
      { id: 28, title: "Homofonía" },
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
      { id: 1, title: "Las necesidades y metas frente a recursos disponibles" },
      { id: 2, title: "Decisiones Financieras: El Costo de Oportunidad y el Ahorro" },
      { id: 3, title: "El flujo circular de la economía" },
      { id: 4, title: "Cómo armar un presupuesto" },
      { id: 5, title: "Impuestos" },
      { id: 6, title: "Sistema Financiero" },
      { id: 7, title: "Los Bancos" },
      { id: 8, title: "Introducción a la Inversión" },
      { id: 9, title: "El impacto de la inflación" },
      { id: 10, title: "Gastos inteligentes" },
      { id: 11, title: "Importancia del crédito" },
      { id: 12, title: "Emprendimiento y Finanzas" },
      { id: 13, title: "Los Errores Financieros Comunes y Cómo Evitarlos" },
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
      { id: 1, title: "Introducción a la Programación Web" },
      { id: 2, title: "HTML Básico" },
      { id: 3, title: "HTML Avanzado" },
      { id: 4, title: "Introducción a CSS" },
      { id: 5, title: "CSS Avanzado" },
      { id: 6, title: "Introducción a JavaScript" },
      { id: 7, title: "DOM y Eventos" },
      { id: 8, title: "Introducción a Python" },
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
      { id: 1, title: "Números Enteros y Operaciones" },
      { id: 2, title: "Medidas y Magnitudes" },
      { id: 3, title: "Patrones y Secuencias" },
      { id: 4, title: "Figuras y Formas" },
      { id: 5, title: "Áreas y Perímetros" },
      { id: 6, title: "Volúmenes" },
      { id: 7, title: "La Probabilidad" },
      { id: 8, title: "La Multiplicación" },
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
      { id: 1, title: "Introducción a la Física" },
      { id: 2, title: "Movimiento Rectilíneo Uniforme" },
      { id: 3, title: "Movimiento Rectilíneo Uniforme Variado" },
      { id: 4, title: "Movimiento Vertical de Caída Libre" },
      { id: 5, title: "Movimiento Parabólico de Caída Libre" },
      { id: 6, title: "Elementos y Átomos" },
      { id: 7, title: "El Número Atómico" },
      { id: 8, title: "Células y Organismos" },
      { id: 9, title: "Partes de la Célula y sus Funciones" },
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
      { id: 1, title: "Las Diferentes Partes de Internet y su Relación con la Ciberseguridad" },
      { id: 2, title: "Comportamiento Ciberseguro y Protección de Dispositivos" },
      { id: 3, title: "Estrategias Avanzadas de Ciberseguridad" },
      { id: 4, title: "Respuesta ante Incidentes de Ciberseguridad en el Entorno Profesional" },
      { id: 5, title: "Respuesta ante incidentes y gestión de eventos de seguridad" },
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
      { id: 1, title: "Essential Question Forms in English" },
      { id: 2, title: "Bridges Across Time: Mastering the Present Perfect" },
      { id: 3, title: "Time in Motion: Understanding the Present Perfect Continuous" },
      { id: 4, title: "Moments and Movements: The Past Simple and Past Continuous" },
      { id: 5, title: "Before the Past: The Past Perfect Simple and Past Perfect Continuous" },
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
