// ─── Blog Types ───────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  titleEs: string;
  titleEn: string;
  excerptEs: string;
  excerptEn: string;
  contentEs: string;  // HTML string
  contentEn: string;
  category: string;
  categoryColor: string;
  readingMinutes: number;
  publishedAt: string; // ISO date
  tags: string[];
}

// ─── Posts ────────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "becas-jovenes-peruanos-2026",
    titleEs: "Becas para jóvenes peruanos en 2026: guía completa y actualizada",
    titleEn: "Scholarships for young Peruvians in 2026: complete and updated guide",
    excerptEs: "Descubre las mejores becas disponibles para estudiantes peruanos en 2026: Fulbright, YYGS, Beca 18, Humphrey, Google y muchas más. Todo verificado y con links directos.",
    excerptEn: "Discover the best scholarships available for Peruvian students in 2026: Fulbright, YYGS, Beca 18, Humphrey, Google and many more. All verified with direct links.",
    category: "Becas",
    categoryColor: "#22577a",
    readingMinutes: 7,
    publishedAt: "2026-07-10",
    tags: ["becas", "jóvenes", "Perú", "Fulbright", "YYGS", "oportunidades"],
    contentEs: `
<p>Si estás buscando becas para estudiar o desarrollarte en 2026, llegaste al lugar indicado. Español Sin Fronteras reúne y verifica las oportunidades más importantes para jóvenes peruanos. Aquí va la guía más completa que encontrarás.</p>

<h2>¿Por qué buscar becas ahora?</h2>
<p>El acceso a la educación de calidad no debería depender del dinero. Las becas existen precisamente para romper esa barrera. En Perú hay más de 30 programas activos en 2026 que cubren desde educación escolar hasta posgrados internacionales — muchos completamente gratuitos.</p>

<h2>Las becas más importantes para peruanos en 2026</h2>

<h3>1. Fulbright Perú</h3>
<p><strong>¿Qué es?</strong> El programa de becas más reconocido del mundo, financiado por el gobierno de EE.UU. Cubre maestrías, doctorados y programas de investigación en universidades estadounidenses.</p>
<p><strong>¿Quién puede postular?</strong> Profesionales y egresados universitarios peruanos con nivel de inglés intermedio-avanzado.</p>
<p><strong>Plazo:</strong> Agosto / Septiembre. <strong>Costo:</strong> 100% gratuita.</p>

<h3>2. Yale Young Global Scholars (YYGS)</h3>
<p><strong>¿Qué es?</strong> Programa de verano en la Universidad de Yale para estudiantes de secundaria (15-18 años) con enfoque en liderazgo, ciencias, humanidades y política.</p>
<p><strong>¿Quién puede postular?</strong> Estudiantes de 15 a 18 años con expediente académico sobresaliente. Tiene ayuda financiera disponible.</p>
<p><strong>Plazo:</strong> Octubre / Noviembre.</p>

<h3>3. Hubert H. Humphrey Fellowship</h3>
<p><strong>¿Qué es?</strong> Beca de 10 meses para profesionales de mediana carrera, gestionada por Fulbright Perú. Incluye cursos, visitas profesionales y actividades culturales en EE.UU.</p>
<p><strong>¿Quién puede postular?</strong> Profesionales con al menos 5 años de experiencia en áreas como salud pública, educación, políticas públicas o medio ambiente.</p>
<p><strong>Plazo:</strong> Marzo / Abril. <strong>Costo:</strong> 100% gratuita.</p>

<h3>4. Generation Google Scholars — LATAM</h3>
<p><strong>¿Qué es?</strong> Beca de Google para estudiantes latinoamericanos de carreras STEM (ciencias, tecnología, ingeniería, matemáticas). Incluye apoyo económico y mentoría.</p>
<p><strong>¿Quién puede postular?</strong> Estudiantes universitarios de LATAM que pertenezcan a grupos subrepresentados en tecnología.</p>
<p><strong>Plazo:</strong> Diciembre / Enero. <strong>Costo:</strong> 100% gratuita.</p>

<h3>5. Beca 18 — PRONABEC</h3>
<p><strong>¿Qué es?</strong> El programa de becas más grande del Estado peruano. Financia educación superior completa (técnica o universitaria) para jóvenes en situación de pobreza o pobreza extrema con alto rendimiento académico.</p>
<p><strong>¿Quién puede postular?</strong> Peruanos egresados de secundaria en colegios públicos, con situación socioeconómica vulnerable y alto rendimiento.</p>
<p><strong>Plazo:</strong> Variable. Consulta el portal PRONABEC.</p>

<h3>6. Santander USA Summer Experience</h3>
<p><strong>¿Qué es?</strong> Experiencia educativa de verano en Estados Unidos organizada por Santander Open Academy. Incluye clases, networking y actividades culturales.</p>
<p><strong>¿Quién puede postular?</strong> Estudiantes universitarios latinoamericanos con nivel de inglés intermedio.</p>

<h2>Colegios de Alto Rendimiento (COAR) — para escolares</h2>
<p>Si estás en secundaria, el programa COAR del MINEDU es la beca escolar más importante del Perú. Completamente gratuita, incluye internado, alimentación y educación de excelencia. Los mejores estudiantes de 2.° de secundaria pueden postular cada año en febrero-marzo.</p>

<h2>Consejos para postular con éxito</h2>
<ul>
<li><strong>Empieza temprano:</strong> La mayoría de becas requieren cartas de recomendación, ensayos personales y documentos que toman semanas preparar.</li>
<li><strong>Cuida tu inglés:</strong> La mayoría de becas internacionales requieren nivel intermedio o avanzado. Empieza ya con los cursos gratuitos de ESF.</li>
<li><strong>Postula a varias:</strong> No pongas todos los huevos en una canasta. Postula a 3-5 becas simultáneamente.</li>
<li><strong>Sé auténtico en tu ensayo:</strong> Los comités de selección leen miles de aplicaciones. Tu historia real es tu mejor diferenciador.</li>
</ul>

<h2>¿Dónde encontrar más oportunidades?</h2>
<p>En Español Sin Fronteras tenemos una sección completa de <a href="/oportunidades">oportunidades verificadas</a> con más de 30 programas para peruanos, incluyendo becas, MUNs, olimpiadas, programas de tecnología y liderazgo. Todo gratuito, sin registro.</p>
    `,
    contentEn: `
<p>If you're looking for scholarships to study or develop yourself in 2026, you've come to the right place. Español Sin Fronteras gathers and verifies the most important opportunities for young Peruvians. Here is the most complete guide you'll find.</p>

<h2>Why look for scholarships now?</h2>
<p>Access to quality education shouldn't depend on money. Scholarships exist precisely to break that barrier. In Peru there are more than 30 active programs in 2026 covering everything from school education to international graduate studies — many completely free.</p>

<h2>The most important scholarships for Peruvians in 2026</h2>

<h3>1. Fulbright Peru</h3>
<p><strong>What is it?</strong> The most recognized scholarship program in the world, funded by the U.S. government. Covers master's degrees, doctorates, and research programs at American universities.</p>
<p><strong>Deadline:</strong> August / September. <strong>Cost:</strong> 100% free.</p>

<h3>2. Yale Young Global Scholars (YYGS)</h3>
<p><strong>What is it?</strong> A summer program at Yale University for high school students (15-18 years old) focused on leadership, sciences, humanities, and policy. Financial aid is available.</p>
<p><strong>Deadline:</strong> October / November.</p>

<h3>3. Generation Google Scholars — LATAM</h3>
<p><strong>What is it?</strong> Google scholarship for Latin American students in STEM fields. Includes financial support and mentoring.</p>
<p><strong>Deadline:</strong> December / January. <strong>Cost:</strong> 100% free.</p>

<h2>Tips for a successful application</h2>
<ul>
<li><strong>Start early:</strong> Most scholarships require recommendation letters, personal essays, and documents that take weeks to prepare.</li>
<li><strong>Work on your English:</strong> Most international scholarships require intermediate or advanced level. Start now with ESF's free courses.</li>
<li><strong>Apply to several:</strong> Don't put all your eggs in one basket. Apply to 3-5 scholarships simultaneously.</li>
</ul>

<p>At Español Sin Fronteras we have a complete section of <a href="/oportunidades">verified opportunities</a> with more than 30 programs for Peruvians. All free, no registration required.</p>
    `,
  },
  {
    slug: "como-prepararse-primer-mun",
    titleEs: "Cómo prepararte para tu primer MUN: guía paso a paso para principiantes",
    titleEn: "How to prepare for your first MUN: step-by-step guide for beginners",
    excerptEs: "¿Nunca has participado en un Modelo de Naciones Unidas? Esta guía te explica todo: cómo funciona, cómo preparar tu posición y qué hacer el día del evento.",
    excerptEn: "Never participated in a Model United Nations? This guide explains everything: how it works, how to prepare your position, and what to do on event day.",
    category: "Liderazgo",
    categoryColor: "#57cc99",
    readingMinutes: 6,
    publishedAt: "2026-07-07",
    tags: ["MUN", "debate", "oratoria", "liderazgo", "relaciones internacionales", "Lima"],
    contentEs: `
<p>El Modelo de Naciones Unidas (MUN) es una de las experiencias más formativas que puede vivir un estudiante. Si nunca has participado en uno, puede parecer intimidante — pero con la preparación correcta, tu primera vez puede ser increíble. Esta guía te lleva paso a paso.</p>

<h2>¿Qué es un MUN?</h2>
<p>Un MUN es una simulación de la Organización de las Naciones Unidas. Los participantes, llamados "delegados", representan a países del mundo real y debaten resoluciones en comités que imitan los de la ONU real (Consejo de Seguridad, Asamblea General, UNICEF, etc.).</p>
<p>El objetivo no es ganar un debate — es <strong>negociar, construir consensos y redactar resoluciones</strong> que resuelvan problemas globales. En el proceso, desarrollas oratoria, pensamiento crítico, manejo del inglés y habilidades de trabajo en equipo.</p>

<h2>¿Cuánto tiempo antes debo prepararme?</h2>
<p>Lo ideal es empezar <strong>3-4 semanas antes</strong>. Aquí va el plan:</p>

<h3>Semana 1: Investiga tu país y comité</h3>
<p>Cuando te asignen un país y comité, lo primero es investigar:</p>
<ul>
<li><strong>Tu país:</strong> Posición geográfica, gobierno, economía, relaciones internacionales, alianzas.</li>
<li><strong>El tema del comité:</strong> ¿Cuál es el problema global que van a debatir? Busca contexto histórico y datos recientes.</li>
<li><strong>La posición de tu país sobre el tema:</strong> ¿Qué ha dicho tu país en la ONU real sobre este tema? ¿Con qué bloque se alinea?</li>
</ul>

<h3>Semana 2: Escribe tu "Position Paper"</h3>
<p>El Position Paper es el documento que resume la posición oficial de tu país sobre el tema. Normalmente tiene 1-2 páginas y debe incluir:</p>
<ul>
<li>Introducción al tema desde la perspectiva de tu país</li>
<li>Historia del país con el problema</li>
<li>Soluciones que tu país propone</li>
</ul>
<p>Muchos MUNs lo solicitan antes del evento. Revisa el reglamento específico de tu conferencia.</p>

<h3>Semana 3: Practica tu discurso de apertura</h3>
<p>El discurso de apertura (Opening Speech) dura entre 60 y 90 segundos. Debe:</p>
<ul>
<li>Presentar a tu país y su posición</li>
<li>Mencionar 2-3 puntos clave sobre el tema</li>
<li>Sonar seguro y bien articulado</li>
</ul>
<p>Practica frente al espejo o grábate. El tiempo se va muy rápido.</p>

<h3>Semana 4: Aprende el protocolo y el lenguaje MUN</h3>
<p>Los MUNs tienen un lenguaje formal muy específico. Necesitas conocer:</p>
<ul>
<li><strong>"The delegate of [país] yields the floor"</strong> — ceder la palabra</li>
<li><strong>"Motion to open the speakers list"</strong> — pedir abrir la lista de oradores</li>
<li><strong>"Point of Information"</strong> — hacer una pregunta al orador</li>
<li><strong>"Unmoderated caucus"</strong> — sesión informal para negociar</li>
</ul>
<p>No te aprendas todo de memoria — con saber los básicos es suficiente para el primero.</p>

<h2>El día del MUN: qué esperar</h2>
<ol>
<li><strong>Apertura:</strong> Los delegados presentan sus discursos de apertura. Es tu primera oportunidad de brillar.</li>
<li><strong>Debate formal:</strong> Se sigue la lista de oradores. Escucha bien, toma notas.</li>
<li><strong>Unmoderated caucus:</strong> Es el tiempo libre para negociar. ¡Este es el corazón del MUN! Habla con otros delegados, busca aliados.</li>
<li><strong>Draft resolutions:</strong> Los grupos escriben borradores de resolución. Si encuentras aliados, trabaja en uno juntos.</li>
<li><strong>Votación final:</strong> Se vota la resolución. Si pasó, ¡lo lograste!</li>
</ol>

<h2>MUNs disponibles para peruanos en 2026</h2>
<p>En Lima puedes participar en el <strong>SSMUN</strong> (San Silvestre), <strong>LNAGMUN</strong> (Liceo Naval Almirante Guise), <strong>SLCMUN</strong> (Salcantay), <strong>CarMUN</strong> (Carmelitas), <strong>Santa Maria MUN</strong>, <strong>Abraham Lincoln MUN</strong> y <strong>Casuarina MUN</strong>. Si estás en el sur del Perú, el <strong>MUNSur</strong> de Arequipa es tu opción.</p>
<p>Todos están listados en nuestra sección de <a href="/oportunidades">oportunidades</a>.</p>

<h2>Consejo final</h2>
<p>El primer MUN siempre es el más difícil. No importa si cometes errores de protocolo — todos los empiezan así. Lo importante es participar, hablar, negociar. La confianza llega con la experiencia.</p>
    `,
    contentEn: `
<p>Model United Nations (MUN) is one of the most formative experiences a student can have. If you've never participated in one, it can seem intimidating — but with the right preparation, your first time can be incredible.</p>

<h2>What is a MUN?</h2>
<p>A MUN is a simulation of the United Nations. Participants, called "delegates," represent real-world countries and debate resolutions in committees that mirror real UN bodies (Security Council, General Assembly, UNICEF, etc.).</p>

<h2>4-week preparation plan</h2>
<ul>
<li><strong>Week 1:</strong> Research your country and committee topic</li>
<li><strong>Week 2:</strong> Write your Position Paper</li>
<li><strong>Week 3:</strong> Practice your Opening Speech (60-90 seconds)</li>
<li><strong>Week 4:</strong> Learn MUN protocol and key phrases</li>
</ul>

<h2>MUNs available for Peruvians in 2026</h2>
<p>In Lima: SSMUN, LNAGMUN, SLCMUN, CarMUN, Santa Maria MUN, Abraham Lincoln MUN, Casuarina MUN. In southern Peru: MUNSur (Arequipa). All listed in our <a href="/oportunidades">opportunities section</a>.</p>
    `,
  },
  {
    slug: "aprender-ingles-gratis-2026",
    titleEs: "Aprende inglés gratis desde cero: guía completa para jóvenes peruanos en 2026",
    titleEn: "Learn English for free from scratch: complete guide for young Peruvians in 2026",
    excerptEs: "El inglés abre puertas a becas, trabajos y oportunidades internacionales. Aquí están los mejores recursos gratuitos para aprenderlo sin pagar un sol — incluyendo el curso de ESF.",
    excerptEn: "English opens doors to scholarships, jobs, and international opportunities. Here are the best free resources to learn it without spending a penny — including ESF's course.",
    category: "Idiomas",
    categoryColor: "#8b5cf6",
    readingMinutes: 5,
    publishedAt: "2026-07-03",
    tags: ["inglés", "aprender idiomas", "gratis", "recursos", "TOEFL", "IELTS"],
    contentEs: `
<p>El inglés es la llave que abre la mayoría de becas internacionales, empleos bien pagados y programas de intercambio. El problema: los institutos de idiomas en Perú pueden costar cientos de soles al mes. La buena noticia: puedes aprender inglés de forma completamente gratuita y efectiva en 2026.</p>

<h2>¿Por qué el inglés es tan importante para jóvenes peruanos?</h2>
<ul>
<li>La mayoría de becas internacionales (Fulbright, YYGS, Google, Humphrey) requieren inglés intermedio o avanzado</li>
<li>Los empleos en tecnología, finanzas y comercio internacional pagan hasta 3x más con inglés fluido</li>
<li>Te da acceso a los mejores recursos educativos del mundo (la mayoría están en inglés)</li>
<li>Es el idioma del 90% de los MUNs internacionales</li>
</ul>

<h2>Ruta gratuita para aprender inglés desde cero</h2>

<h3>Nivel 0 → A2 (principiante): Español Sin Fronteras</h3>
<p>Nuestro <a href="/curso/ingles">Curso de Inglés ESF</a> cubre los fundamentos desde cero: tiempos verbales, vocabulario esencial, reading y writing. Son 22 capítulos gratuitos, sin registro, sin publicidad. Ideal para empezar.</p>

<h3>Nivel A2 → B1 (intermedio): Duolingo + YouTube</h3>
<p><strong>Duolingo</strong> (gratis con anuncios) es excelente para vocabulario y gramática básica. Complementa con canales de YouTube como <em>BBC Learning English</em> y <em>EngVid</em> — ambos gratuitos.</p>

<h3>Nivel B1 → B2 (intermedio-avanzado): Práctica con nativos</h3>
<p><strong>Tandem</strong> y <strong>HelloTalk</strong> son apps gratuitas donde conectas con hablantes nativos de inglés que quieren aprender español. Intercambias idiomas — tú les enseñas español, ellos te enseñan inglés.</p>

<h3>Nivel B2 → C1 (avanzado): Preparación para exámenes internacionales</h3>
<p>Si buscas becas internacionales, necesitarás un puntaje de <strong>TOEFL</strong> o <strong>IELTS</strong>. Para prepararte gratis:</p>
<ul>
<li><strong>Magoosh TOEFL Blog</strong> — recursos y práctica gratuita</li>
<li><strong>British Council</strong> — materiales de preparación IELTS</li>
<li><strong>Khan Academy SAT</strong> — también tiene inglés académico</li>
</ul>

<h2>El hábito que marca la diferencia</h2>
<p>El secreto para aprender inglés rápido no es el método — es la <strong>consistencia</strong>. 30 minutos diarios durante 12 meses producen más resultados que 4 horas una vez por semana. Lo que sí funciona:</p>
<ul>
<li>Cambiar el idioma de tu teléfono a inglés</li>
<li>Ver series en Netflix con subtítulos en inglés (no en español)</li>
<li>Leer al menos un artículo en inglés por día</li>
<li>Escribir un diario corto en inglés cada noche (5 oraciones es suficiente)</li>
</ul>

<h2>¿Cuánto tiempo se tarda?</h2>
<p>Con 30 minutos diarios de práctica consistente:</p>
<ul>
<li><strong>0-6 meses:</strong> Nivel A1-A2 (puedes presentarte, pedir cosas básicas)</li>
<li><strong>6-18 meses:</strong> Nivel B1-B2 (conversaciones fluidas, comprensión de películas)</li>
<li><strong>18-36 meses:</strong> Nivel C1 (inglés académico, listo para TOEFL/IELTS)</li>
</ul>

<p>Empieza hoy con el <a href="/curso/ingles">Curso de Inglés ESF</a> — gratis, sin registro, 22 capítulos.</p>
    `,
    contentEn: `
<p>English is the key that opens most international scholarships, well-paying jobs, and exchange programs. The good news: you can learn English completely free and effectively in 2026.</p>

<h2>Free route to learn English from scratch</h2>
<ul>
<li><strong>Level 0 → A2:</strong> <a href="/curso/ingles">ESF English Course</a> — 22 free chapters, no registration</li>
<li><strong>A2 → B1:</strong> Duolingo + BBC Learning English on YouTube</li>
<li><strong>B1 → B2:</strong> Tandem / HelloTalk — practice with native speakers for free</li>
<li><strong>B2 → C1:</strong> Magoosh TOEFL Blog + British Council IELTS materials</li>
</ul>

<h2>The habit that makes the difference</h2>
<p>30 minutes daily for 12 months beats 4 hours once a week. Change your phone language to English, watch Netflix with English subtitles, read one article in English per day.</p>
    `,
  },
  {
    slug: "aprender-programacion-gratis-jovenes",
    titleEs: "Aprende programación gratis en 2026: por dónde empezar si eres joven en Perú",
    titleEn: "Learn programming for free in 2026: where to start if you're a young person in Peru",
    excerptEs: "La programación es la habilidad mejor pagada del siglo XXI. Y se puede aprender gratis. Aquí está el camino más claro para empezar desde cero en 2026 — sin pagar nada.",
    excerptEn: "Programming is the best-paid skill of the 21st century. And it can be learned for free. Here is the clearest path to start from scratch in 2026 — without paying anything.",
    category: "Tecnología",
    categoryColor: "#84cc16",
    readingMinutes: 6,
    publishedAt: "2026-06-28",
    tags: ["programación", "tecnología", "gratis", "Python", "JavaScript", "carrera tech"],
    contentEs: `
<p>Aprender a programar es una de las mejores inversiones que puede hacer un joven hoy. Los desarrolladores de software son los profesionales más demandados del mundo — y en Perú, un programador junior con buenas bases puede ganar entre S/. 3,000 y S/. 6,000 mensuales. Lo mejor: todo se puede aprender gratis.</p>

<h2>¿Por dónde empezar? La pregunta correcta</h2>
<p>Antes de elegir un lenguaje de programación, necesitas responder: <strong>¿qué quieres construir?</strong></p>
<ul>
<li><strong>Páginas web y apps:</strong> Empieza con HTML → CSS → JavaScript</li>
<li><strong>Inteligencia artificial y datos:</strong> Empieza con Python</li>
<li><strong>Apps móviles:</strong> JavaScript (React Native) o Kotlin/Swift</li>
<li><strong>No sé aún:</strong> Empieza con Python — es el más versátil y fácil para principiantes</li>
</ul>

<h2>Ruta de aprendizaje gratuita (de 0 a empleable)</h2>

<h3>Paso 1: Los fundamentos (1-2 meses)</h3>
<p>Empieza con el <a href="/curso/programacion">Curso de Programación Web ESF</a> — 22 capítulos gratuitos que cubren HTML, CSS, JavaScript y Python desde cero. Sin instalaciones complicadas, sin registro.</p>
<p>Complementa con <strong>freeCodeCamp.org</strong> — la plataforma gratuita más completa para aprender desarrollo web. Tiene certificaciones gratuitas reconocidas mundialmente.</p>

<h3>Paso 2: Tu primer proyecto (mes 2-3)</h3>
<p>La teoría sola no te enseña a programar. Tienes que construir algo real. Ideas para principiantes:</p>
<ul>
<li>Una página web de tu portafolio personal</li>
<li>Una calculadora web</li>
<li>Un juego simple como el ahorcado</li>
<li>Una app que consuma una API pública (clima, películas, etc.)</li>
</ul>
<p>No importa que sea imperfecto. Lo que importa es terminarlo.</p>

<h3>Paso 3: Control de versiones con Git (mes 3)</h3>
<p>Git es la herramienta que usan todos los desarrolladores del mundo para guardar y colaborar en código. Aprende los básicos en una semana y crea una cuenta en <strong>GitHub</strong> — ahí subirás todos tus proyectos.</p>

<h3>Paso 4: Especialización (mes 4-6)</h3>
<p>Elige una rama y profundiza:</p>
<ul>
<li><strong>Frontend:</strong> React.js (el framework más popular)</li>
<li><strong>Backend:</strong> Node.js o Python con Flask/Django</li>
<li><strong>Data Science / IA:</strong> Python con NumPy, Pandas, y nuestro <a href="/curso/inteligencia-artificial">Curso de IA ESF</a></li>
</ul>

<h2>Recursos gratuitos esenciales</h2>
<ul>
<li><strong>ESF Programación:</strong> <a href="/curso/programacion">22 capítulos gratuitos</a></li>
<li><strong>freeCodeCamp.org:</strong> Certificaciones gratuitas de desarrollo web</li>
<li><strong>The Odin Project:</strong> Ruta completa de fullstack gratuita</li>
<li><strong>CS50 de Harvard:</strong> El mejor curso de introducción a la ciencia de la computación, completamente gratis en edX</li>
<li><strong>YouTube — Midudev, Hola Mundo, Fazt:</strong> Canales en español con tutoriales de alta calidad</li>
</ul>

<h2>¿Cuánto tarda en conseguir trabajo?</h2>
<p>Con dedicación consistente (2-3 horas diarias):</p>
<ul>
<li><strong>6-9 meses:</strong> Tu primer portafolio con 3-5 proyectos</li>
<li><strong>9-12 meses:</strong> Listo para postular a empleos junior</li>
<li><strong>12-18 meses:</strong> Desarrollador junior empleable en Perú o remoto</li>
</ul>

<h2>Programas de tecnología para jóvenes peruanos</h2>
<p>Además de aprender solo, existen programas que te pueden ayudar:</p>
<ul>
<li><strong>Women in Tech Perú</strong> — para mujeres que quieren entrar al sector tech</li>
<li><strong>TechGirls</strong> — intercambio a EE.UU. para jóvenes mujeres de 15-17 años</li>
<li><strong>Generation Google Scholars</strong> — beca con mentoría de Google para universitarios STEM</li>
</ul>
<p>Todos disponibles en nuestra sección de <a href="/oportunidades">oportunidades</a>.</p>
    `,
    contentEn: `
<p>Learning to program is one of the best investments a young person can make today. And everything can be learned for free.</p>

<h2>Free learning path (from 0 to employable)</h2>
<ol>
<li><strong>Months 1-2:</strong> <a href="/curso/programacion">ESF Programming Course</a> (22 free chapters: HTML, CSS, JavaScript, Python) + freeCodeCamp.org</li>
<li><strong>Month 2-3:</strong> Build your first real project (portfolio site, calculator, simple game)</li>
<li><strong>Month 3:</strong> Learn Git and create a GitHub profile</li>
<li><strong>Months 4-6:</strong> Specialize (React for frontend, Python for AI/data)</li>
</ol>

<h2>Essential free resources</h2>
<ul>
<li><a href="/curso/programacion">ESF Programming Course</a> — 22 free chapters</li>
<li>freeCodeCamp.org — free web dev certifications</li>
<li>CS50 Harvard — best intro to computer science, free on edX</li>
</ul>
    `,
  },
  {
    slug: "que-es-yygs-yale-beca-liderazgo",
    titleEs: "Qué es YYGS Yale y cómo postular desde Perú: la beca de liderazgo más competitiva",
    titleEn: "What is YYGS Yale and how to apply from Peru: the most competitive leadership scholarship",
    excerptEs: "Yale Young Global Scholars es el programa de verano más prestigioso del mundo para estudiantes de secundaria. Aquí te explicamos qué es, cómo funciona y cómo preparar tu postulación.",
    excerptEn: "Yale Young Global Scholars is the most prestigious summer program in the world for high school students. Here we explain what it is, how it works, and how to prepare your application.",
    category: "Becas",
    categoryColor: "#22577a",
    readingMinutes: 7,
    publishedAt: "2026-06-20",
    tags: ["YYGS", "Yale", "beca", "liderazgo", "secundaria", "EE.UU.", "verano"],
    contentEs: `
<p>Si estás en secundaria y quieres una experiencia internacional de alto impacto, <strong>Yale Young Global Scholars (YYGS)</strong> es probablemente el programa más transformador al que puedes aplicar. Aquí va todo lo que necesitas saber.</p>

<h2>¿Qué es YYGS?</h2>
<p>YYGS es un programa de enriquecimiento académico de verano organizado por la Universidad de Yale. Durante 2 semanas, estudiantes de 15 a 18 años de todo el mundo se reúnen en el campus de Yale (en New Haven, Connecticut, EE.UU.) para explorar temas académicos complejos, desarrollar habilidades de liderazgo y construir una red global de amigos.</p>

<h2>¿Qué tracks (áreas) ofrece?</h2>
<p>YYGS tiene 6 programas temáticos:</p>
<ul>
<li><strong>Applied Science & Engineering (ASE)</strong> — ciencia aplicada e ingeniería</li>
<li><strong>Biological & Biomedical Science (BBS)</strong> — biología y ciencias biomédicas</li>
<li><strong>Humanities, Arts & Sciences (HAS)</strong> — humanidades y artes</li>
<li><strong>International Affairs & Security (IAS)</strong> — relaciones internacionales</li>
<li><strong>Politics, Law & Economics (PLE)</strong> — política, derecho y economía</li>
<li><strong>Sustainability Science & Practice (SSP)</strong> — sostenibilidad</li>
</ul>

<h2>¿Qué incluye el programa?</h2>
<ul>
<li>Clases impartidas por profesores de Yale y expertos mundiales</li>
<li>Seminarios de discusión en grupos pequeños</li>
<li>Visitas a laboratorios, museos y empresas</li>
<li>Actividades de liderazgo y trabajo en equipo</li>
<li>Alojamiento en los dormitorios de Yale</li>
<li>Comidas incluidas</li>
<li>Eventos sociales y culturales</li>
</ul>

<h2>¿Cuánto cuesta YYGS?</h2>
<p>El programa tiene un costo de aproximadamente <strong>USD $5,500</strong> (alojamiento, comidas y programa incluidos). Sin embargo, YYGS ofrece <strong>ayuda financiera basada en necesidad</strong> — muchos participantes latinoamericanos reciben becas parciales o totales.</p>
<p>Al momento de postular, puedes solicitar ayuda financiera sin que afecte tu proceso de admisión.</p>

<h2>¿Quién puede aplicar?</h2>
<ul>
<li>Estudiantes de 15 a 18 años (o entre 10° y 12° grado en el sistema americano)</li>
<li>Cualquier nacionalidad — es un programa internacional</li>
<li>Expediente académico sobresaliente</li>
<li>Nivel de inglés intermedio-avanzado (el programa es 100% en inglés)</li>
<li>No es necesario haber participado en actividades extracurriculares específicas, pero sí tener interés demostrable en el área que eliges</li>
</ul>

<h2>¿Cómo es el proceso de postulación?</h2>

<h3>1. Ensayo personal (el más importante)</h3>
<p>YYGS te pide varios ensayos cortos donde explicas tu interés en el track elegido, tus experiencias relevantes y tus metas. Son la parte más importante de la aplicación. Tómate tiempo para escribirlos con autenticidad — los comités de admisión leen miles de aplicaciones y detectan fácilmente los textos genéricos.</p>

<h3>2. Recomendaciones de maestros</h3>
<p>Necesitas 2 cartas de recomendación de profesores. Pídelas al menos 1 mes antes de la fecha límite — los profesores tienen muchas solicitudes.</p>

<h3>3. Transcripción académica</h3>
<p>Tu record académico de los últimos 2-3 años.</p>

<h3>4. Lista de actividades extracurriculares</h3>
<p>Clubes, deportes, voluntariado, proyectos propios — todo cuenta.</p>

<h2>¿Cuándo son las fechas límite?</h2>
<p>YYGS típicamente tiene convocatoria en <strong>octubre-noviembre</strong> para el programa del siguiente verano. Las fechas exactas varían cada año — consulta siempre la web oficial de YYGS.</p>

<h2>Consejos para una aplicación exitosa desde Perú</h2>
<ol>
<li><strong>Elige el track que más te apasiona, no el que crees más fácil de entrar.</strong> Tu autenticidad se nota.</li>
<li><strong>Muestra impacto local.</strong> Los comités valoran mucho que hayas hecho algo en tu comunidad — tutorías, proyectos sociales, clubes escolares.</li>
<li><strong>Empieza el ensayo con 3 meses de anticipación.</strong> No lo escribas en una semana.</li>
<li><strong>Solicita ayuda financiera desde el inicio.</strong> No te autoelimine por el costo antes de saber si calificas para beca.</li>
<li><strong>Trabaja tu inglés.</strong> Si sientes que tu inglés no es fluido, dedica los próximos meses a mejorarlo con el <a href="/curso/ingles">Curso de Inglés ESF</a>.</li>
</ol>

<h2>¿Qué pasa después de YYGS?</h2>
<p>Los alumni de YYGS forman una red global de miles de jóvenes líderes. Muchos luego postulan a universidades de élite — Yale, Harvard, MIT, Oxford — con una gran ventaja: la experiencia YYGS demuestra capacidad de excelencia académica en un entorno internacional.</p>

<p>Puedes ver más información sobre YYGS y otros programas de liderazgo en nuestra sección de <a href="/oportunidades">oportunidades verificadas</a>.</p>
    `,
    contentEn: `
<p>If you're in high school and want a high-impact international experience, Yale Young Global Scholars (YYGS) is probably the most transformative program you can apply to.</p>

<h2>What is YYGS?</h2>
<p>YYGS is a 2-week summer academic enrichment program at Yale University for students aged 15-18 from around the world. It has 6 thematic tracks: Applied Science & Engineering, Biological & Biomedical Science, Humanities, International Affairs, Politics/Law/Economics, and Sustainability.</p>

<h2>Cost and financial aid</h2>
<p>The program costs approximately USD $5,500, but YYGS offers need-based financial aid — many Latin American participants receive partial or full scholarships. Apply for aid from the start.</p>

<h2>Application tips</h2>
<ol>
<li>Choose the track you're most passionate about</li>
<li>Show local impact in your community</li>
<li>Start your essay 3 months in advance</li>
<li>Request financial aid from the beginning</li>
<li>Work on your English — the program is 100% in English</li>
</ol>

<p>Find more information in our <a href="/oportunidades">verified opportunities section</a>.</p>
    `,
  },
];
