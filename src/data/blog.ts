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
  {
    slug: "olimpiada-matematica-peru-2026",
    titleEs: "Olimpiada de Matemática Perú 2026: cómo participar, fechas y requisitos",
    titleEn: "Math Olympiad Peru 2026: how to participate, dates and requirements",
    excerptEs: "Todo lo que necesitas saber sobre la Olimpiada de Matemática del Perú 2026: etapas, fechas, requisitos y cómo prepararte para competir a nivel nacional e internacional.",
    excerptEn: "Everything you need to know about the Peru Math Olympiad 2026: stages, dates, requirements and how to prepare to compete nationally and internationally.",
    category: "Competencias",
    categoryColor: "#f59e0b",
    readingMinutes: 6,
    publishedAt: "2026-07-15",
    tags: ["olimpiada", "matemática", "perú", "competencia", "IMO", "escolar"],
    contentEs: `
<p>La Olimpiada de Matemática es una de las competencias más prestigiosas para estudiantes de secundaria en el Perú. Si te gusta la matemática o sabes de alguien con talento en esta área, aquí está todo lo que necesitas saber para participar en 2026.</p>

<h2>¿Qué es la Olimpiada de Matemática del Perú?</h2>
<p>La Olimpiada Nacional de Matemática (ONMEP) es organizada por la Sociedad Matemática Peruana. Es el proceso de selección oficial para representar al Perú en la Olimpiada Internacional de Matemática (IMO), la competencia más importante del mundo en esta área. Participan estudiantes de secundaria de todo el país.</p>

<h2>¿Quién puede participar?</h2>
<ul>
<li>Estudiantes matriculados en colegios peruanos (públicos o privados)</li>
<li>Cualquier grado de secundaria (1ro a 5to)</li>
<li>Sin límite de edad específico, pero menores de 20 años para la fase internacional</li>
<li>Participación gratuita en la fase escolar</li>
</ul>

<h2>Etapas de la competencia</h2>

<h3>Fase 1 — Nivel escolar</h3>
<p>La competencia comienza en cada colegio. Los mejores estudiantes de cada institución avanzan a la siguiente etapa. Las fechas varían, pero generalmente es en el primer trimestre del año escolar.</p>

<h3>Fase 2 — Nivel distrital y provincial</h3>
<p>Los ganadores escolares compiten a nivel distrital. Los mejores pasan a la fase provincial.</p>

<h3>Fase 3 — Nivel regional</h3>
<p>Competencia entre los mejores de cada provincia dentro de cada región del Perú.</p>

<h3>Fase 4 — Nivel nacional (ONMEP)</h3>
<p>Los mejores de cada región se reúnen en Lima para la olimpiada nacional. De aquí salen los representantes del Perú para la IMO.</p>

<h3>Fase 5 — IMO (Internacional)</h3>
<p>La Olimpiada Internacional de Matemática es el nivel máximo. Perú participa cada año y ha obtenido medallas. Para el IMO 2026, la convocatoria nacional es en los primeros meses del año.</p>

<h2>¿Cómo prepararse?</h2>

<h3>Recursos gratuitos para empezar</h3>
<ul>
<li><strong>AoPS (Art of Problem Solving)</strong> — artofproblemsolving.com — la mayor comunidad de olimpiadas matemáticas del mundo, con problemas y soluciones de todas las competencias internacionales</li>
<li><strong>Problemas de IMO anteriores</strong> — imo-official.org — todos los problemas desde 1959 disponibles gratuitamente</li>
<li><strong>Libros clásicos:</strong> "Combinatorics" de Vilenkin, "Geometry Revisited" de Coxeter, "Problems in Combinatorics" de Shkliarsky</li>
</ul>

<h3>Temas que debes dominar</h3>
<ul>
<li><strong>Álgebra:</strong> Desigualdades, polinomios, sucesiones y series</li>
<li><strong>Geometría:</strong> Geometría euclidiana clásica, circunferencias, triángulos</li>
<li><strong>Teoría de números:</strong> Divisibilidad, congruencias, números primos</li>
<li><strong>Combinatoria:</strong> Conteo, grafos, principios de conteo</li>
</ul>

<h3>Rutina recomendada</h3>
<p>Los estudiantes que llegan a nivel nacional dedican entre 1 y 2 horas diarias a resolver problemas de olimpiada. La clave no es memorizar fórmulas sino desarrollar la habilidad de pensar creativamente ante problemas nuevos.</p>

<h2>Otras olimpiadas de matemática para peruanos</h2>
<ul>
<li><strong>OIPM</strong> — Olimpiada Iberoamericana de Matemática</li>
<li><strong>Canguro Matemático</strong> — competencia internacional accesible para todos los niveles</li>
<li><strong>AMC/AIME</strong> — competencias americanas reconocidas internacionalmente</li>
<li><strong>TJM</strong> — Torneo Junior de Matemática (disponible en nuestra sección de <a href="/oportunidades">oportunidades</a>)</li>
</ul>

<h2>¿Qué beneficios tiene participar?</h2>
<p>Más allá de los premios, participar en olimpiadas matemáticas mejora radicalmente tu capacidad de razonamiento lógico, te distingue en postulaciones universitarias y becas internacionales, y te conecta con una comunidad de estudiantes con habilidades similares. Muchos becarios de Fulbright, YYGS y programas similares tienen historia en olimpiadas.</p>

<p>Puedes ver más competencias disponibles para peruanos en nuestra sección de <a href="/oportunidades">oportunidades verificadas</a>.</p>
    `,
    contentEn: `
<p>The Math Olympiad is one of the most prestigious competitions for high school students in Peru. Here's everything you need to know to participate in 2026.</p>

<h2>What is it?</h2>
<p>The National Math Olympiad (ONMEP) is organized by the Peruvian Mathematical Society. It is the official selection process to represent Peru at the International Mathematical Olympiad (IMO).</p>

<h2>Stages</h2>
<ol>
<li>School level — best students advance</li>
<li>District and provincial level</li>
<li>Regional level</li>
<li>National level (ONMEP) — top students from each region compete in Lima</li>
<li>IMO — international competition, Peru participates every year</li>
</ol>

<h2>Free preparation resources</h2>
<ul>
<li>Art of Problem Solving (artofproblemsolving.com) — largest olympiad math community</li>
<li>IMO official website (imo-official.org) — all problems since 1959, free</li>
</ul>

<p>See more competitions for Peruvians in our <a href="/oportunidades">verified opportunities section</a>.</p>
    `,
  },
  {
    slug: "beca-18-2026-requisitos-como-postular",
    titleEs: "Beca 18 en 2026: requisitos, fechas y cómo postular paso a paso",
    titleEn: "Beca 18 in 2026: requirements, dates, and how to apply step by step",
    excerptEs: "Guía completa para postular a Beca 18 en 2026: quién puede aplicar, qué documentos necesitas, cuándo son las fechas y qué hacer si no quedas la primera vez.",
    excerptEn: "Complete guide to apply for Beca 18 in 2026: who can apply, what documents you need, when are the dates, and what to do if you don't get it the first time.",
    category: "Becas",
    categoryColor: "#22577a",
    readingMinutes: 7,
    publishedAt: "2026-07-12",
    tags: ["beca 18", "PRONABEC", "beca", "perú", "universidad", "gratuita"],
    contentEs: `
<p>Beca 18 es el programa de becas más importante del Perú. Si eres egresado de secundaria con buen rendimiento académico y recursos económicos limitados, esto es para ti. Aquí está la guía más completa para postular en 2026.</p>

<h2>¿Qué es Beca 18?</h2>
<p>Beca 18 es el programa insignia de PRONABEC (Programa Nacional de Becas y Crédito Educativo del gobierno del Perú). Financia estudios universitarios o técnicos completos para jóvenes egresados de secundaria con alto rendimiento académico y bajos recursos económicos. Cubre absolutamente todo: matrícula, pensión mensual de manutención, seguro médico, materiales educativos y en muchos casos hospedaje.</p>

<h2>¿Quién puede postular a Beca 18?</h2>
<p>Para postular en 2026 necesitas cumplir todos estos requisitos:</p>
<ul>
<li><strong>Ser peruano</strong> (DNI vigente)</li>
<li><strong>Haber egresado de 5to de secundaria</strong> de un colegio público o privado en condición vulnerable</li>
<li><strong>Rendimiento académico:</strong> estar en el tercio superior de tu promoción (entre los mejores de tu colegio)</li>
<li><strong>Condición socioeconómica:</strong> pertenecer a los grupos I o II del SISFOH (Sistema de Focalización de Hogares) — básicamente, ingresos familiares bajos</li>
<li><strong>Edad:</strong> menores de 22 años al inicio del programa</li>
</ul>

<h2>¿Qué cubre exactamente Beca 18?</h2>
<ul>
<li>Matrícula y pensión universitaria o técnica completa</li>
<li>Pensión mensual de manutención (entre S/. 800 y S/. 1,500 según la institución)</li>
<li>Seguro médico SIS</li>
<li>Materiales educativos (libros, útiles)</li>
<li>Hospedaje en casos de estudiantes que se trasladan a otra ciudad</li>
<li>Pasajes cuando corresponde</li>
</ul>

<h2>¿En qué universidades o institutos puedes estudiar con Beca 18?</h2>
<p>PRONABEC tiene una lista de instituciones educativas acreditadas donde puedes estudiar con la beca. Incluye universidades públicas como la UNMSM, UNI, UNSA, y también institutos técnicos seleccionados. La lista completa está en el portal oficial de PRONABEC.</p>

<h2>¿Cuándo es la convocatoria 2026?</h2>
<p>Las fechas exactas varían cada año. Históricamente, la convocatoria de Beca 18 abre entre <strong>enero y marzo</strong>, coincidiendo con el fin del año escolar anterior. Para 2026, se esperan convocatorias similares.</p>
<p><strong>Importante:</strong> Revisa el portal oficial de PRONABEC (gob.pe/pronabec) desde diciembre 2025 para estar al tanto de las fechas exactas. No confíes en terceros — ve directo a la fuente oficial.</p>

<h2>Documentos que necesitas</h2>
<ul>
<li>DNI vigente (tuyo y de tus padres o apoderado)</li>
<li>Certificado de estudios de 5to de secundaria (con notas)</li>
<li>Constancia de clasificación SISFOH (la solicitas en la municipalidad de tu distrito)</li>
<li>Certificado de nacimiento</li>
<li>En algunos casos: constancia de discapacidad, condición de pobreza extrema u otras situaciones especiales</li>
</ul>

<h2>Proceso de postulación paso a paso</h2>
<ol>
<li><strong>Verifica tu condición SISFOH</strong> en la municipalidad de tu distrito. Este trámite puede tomar semanas — hazlo con anticipación.</li>
<li><strong>Reúne todos tus documentos</strong> antes de que abra la convocatoria.</li>
<li><strong>Regístrate en el portal PRONABEC</strong> (pronabec.gob.pe) cuando abra la convocatoria.</li>
<li><strong>Completa tu ficha de postulación</strong> con todos tus datos académicos y socioeconómicos.</li>
<li><strong>Sube los documentos requeridos</strong> en formato digital.</li>
<li><strong>Espera los resultados</strong> — PRONABEC publica los listados de seleccionados en su portal.</li>
<li>Si quedas seleccionado: <strong>firma el compromiso de Beca 18</strong> y comienza el proceso de matrícula en tu institución.</li>
</ol>

<h2>¿Qué pasa si no quedo seleccionado?</h2>
<p>No te rindas. Beca 18 es muy competitiva — cada año hay más postulantes que plazas disponibles. Si no quedas en la primera convocatoria:</p>
<ul>
<li>Puedes postular nuevamente el siguiente año si todavía cumples los requisitos de edad</li>
<li>Revisa el puntaje que obtuviste y qué aspectos puedes mejorar</li>
<li>Considera otras becas como <a href="/oportunidades/becas-santander">Becas Santander</a>, <a href="/oportunidades/oas">Becas OEA</a> o los programas del MINEDU</li>
<li>También existen becas de las propias universidades — consulta directamente con cada institución</li>
</ul>

<h2>Consejos para aumentar tus probabilidades</h2>
<ul>
<li><strong>Tramita el SISFOH con anticipación.</strong> Es el documento que más demora y es obligatorio.</li>
<li><strong>Mantén tus notas altas.</strong> El rendimiento académico es el factor principal de selección.</li>
<li><strong>No esperes a que abra la convocatoria.</strong> Prepara todos tus documentos con meses de anticipación.</li>
<li><strong>Usa solo el portal oficial de PRONABEC.</strong> Hay estafadores que cobran por "tramitar" la beca — es completamente gratuito y lo haces tú mismo.</li>
</ul>

<p>Para más información sobre becas y oportunidades para jóvenes peruanos, visita nuestra sección de <a href="/oportunidades">oportunidades verificadas</a>.</p>
    `,
    contentEn: `
<p>Beca 18 is Peru's most important scholarship program. If you graduated from high school with good grades and limited economic resources, this is for you.</p>

<h2>What does Beca 18 cover?</h2>
<p>Everything: full university or technical tuition, monthly living allowance (S/. 800-1,500), health insurance, educational materials, and housing when needed.</p>

<h2>Who can apply?</h2>
<ul>
<li>Peruvian citizens (valid DNI)</li>
<li>Recent secondary school graduates in the top third of their class</li>
<li>SISFOH Group I or II classification (low-income households)</li>
<li>Under 22 years old</li>
</ul>

<h2>Application timeline</h2>
<p>The 2026 call typically opens January-March. Check the official PRONABEC portal (gob.pe/pronabec) from December 2025 for exact dates.</p>

<h2>Step-by-step process</h2>
<ol>
<li>Verify your SISFOH status at your district municipality (takes weeks — do this first)</li>
<li>Gather all documents before the call opens</li>
<li>Register on the PRONABEC portal when the call opens</li>
<li>Complete your application with academic and socioeconomic data</li>
<li>Upload required documents</li>
<li>Wait for results published on the PRONABEC portal</li>
</ol>

<p>Find more opportunities for Peruvian students in our <a href="/oportunidades">verified opportunities section</a>.</p>
    `,
  },
  {
    slug: "mun-lima-2026-colegios-como-participar",
    titleEs: "MUN Lima 2026: todos los Modelos de Naciones Unidas de colegios y cómo participar",
    titleEn: "MUN Lima 2026: all school Model United Nations and how to participate",
    excerptEs: "Lista completa de MUNs en Lima para 2026: SSMUN, LNAGMUN, CarMUN, SLCMUN, MR MUN y más. Cómo inscribirte, qué esperar y por qué el MUN cambia tu vida.",
    excerptEn: "Complete list of MUNs in Lima for 2026: SSMUN, LNAGMUN, CarMUN, SLCMUN, MR MUN and more. How to register, what to expect, and why MUN changes your life.",
    category: "Liderazgo",
    categoryColor: "#57cc99",
    readingMinutes: 5,
    publishedAt: "2026-07-18",
    tags: ["MUN", "Lima", "2026", "debate", "colegios", "ONU", "liderazgo"],
    contentEs: `
<p>Si estás en secundaria en Lima y quieres desarrollar habilidades de debate, oratoria, inglés y diplomacia — el Modelo de Naciones Unidas es el camino más directo. En Lima hay una docena de MUNs activos organizados por colegios. Aquí está la lista completa para 2026 y cómo participar en cada uno.</p>

<h2>¿Por qué participar en un MUN?</h2>
<p>En un MUN representas a un país real, debates temas globales y negocías resoluciones con delegados de otros colegios. En el proceso desarrollas:</p>
<ul>
<li>Oratoria y confianza para hablar en público</li>
<li>Inglés en contexto real (la mayoría de MUNs usan inglés como idioma principal)</li>
<li>Pensamiento crítico y capacidad de argumentación</li>
<li>Habilidades de negociación y trabajo en equipo</li>
<li>Red de contactos con estudiantes de otros colegios</li>
</ul>
<p>Además, participar en MUNs es un diferenciador importante en postulaciones a universidades y programas internacionales como YYGS, becas de liderazgo y programas de intercambio.</p>

<h2>MUNs de colegios en Lima 2026</h2>

<h3>SSMUN — San Silvestre MUN</h3>
<p><strong>Organizado por:</strong> Colegio San Silvestre<br>
<strong>Idioma:</strong> Inglés y español<br>
<strong>Nivel:</strong> Secundaria<br>
<strong>Portal:</strong> mun.sansilvestre.edu.pe<br>
Uno de los MUNs más reconocidos de Lima con comités bilingües y alto nivel académico.</p>

<h3>LNAGMUN — Liceo Naval Almirante Guise MUN</h3>
<p><strong>Organizado por:</strong> Liceo Naval Almirante Guise<br>
<strong>Idioma:</strong> Español<br>
<strong>Nivel:</strong> Secundaria<br>
<strong>Contacto:</strong> @lnagmun en Instagram<br>
Conocido por su alto nivel de preparación y comités temáticos bien estructurados.</p>

<h3>CarMUN — Carmelitas MUN</h3>
<p><strong>Organizado por:</strong> Colegio Carmelitas<br>
<strong>Enfoque:</strong> Diplomacia moderna<br>
<strong>Portal:</strong> carmelitas.edu.pe<br>
Con un enfoque en diplomatia contemporánea y temas internacionales actuales.</p>

<h3>SLCMUN — Salcantay MUN</h3>
<p><strong>Organizado por:</strong> Colegio Salcantay<br>
<strong>Idioma:</strong> Español e inglés<br>
<strong>Contacto:</strong> @salcantaymun en Instagram</p>

<h3>MR MUN — Santa María MUN</h3>
<p><strong>Organizado por:</strong> Colegio María Reina<br>
<strong>Contacto:</strong> @mun-mr en el portal del colegio (mariareina.edu.pe)</p>

<h3>ST MUN — Saint Thomas MUN</h3>
<p><strong>Organizado por:</strong> Colegio Saint Thomas<br>
<strong>Contacto:</strong> @st_colegio en Instagram</p>

<h3>TrenerMUN</h3>
<p><strong>Contacto:</strong> @trenermodelun en Instagram<br>
MUN intercolegial con participación de múltiples colegios de Lima.</p>

<h3>Lord Byron MUN</h3>
<p><strong>Contacto:</strong> @lordbyronmun en Instagram</p>

<h3>CMB MUN — Casuarina</h3>
<p><strong>Organizado por:</strong> Casuarina International Academy<br>
Uno de los MUNs bilingües más activos de Lima.</p>

<h3>ALMUN — Abraham Lincoln MUN</h3>
<p>Organizado por el Colegio Abraham Lincoln, con comités en inglés.</p>

<h2>¿Cómo me inscribo?</h2>
<p>Cada MUN tiene su propio proceso de inscripción. La mayoría:</p>
<ol>
<li>Publican su convocatoria en Instagram o en el portal del colegio organizador (generalmente entre marzo y agosto)</li>
<li>Requieren que tu colegio se registre como institución participante</li>
<li>Asignan países y comités una vez confirmada la participación</li>
<li>Pueden tener un costo de inscripción (varía entre S/. 50 y S/. 200 según el MUN)</li>
</ol>
<p>Si tu colegio no participa regularmente en MUNs, habla con tu tutora o coordinadora académica y muéstrale esta lista. Muchos colegios participan si un alumno toma la iniciativa.</p>

<h2>Preparación básica para tu primer MUN</h2>
<p>Revisa nuestra <a href="/blog/como-prepararse-primer-mun">guía completa para prepararte para tu primer MUN</a> — cubre todo desde el Position Paper hasta el protocolo del día del evento.</p>

<h2>Todos los MUNs peruanos en un solo lugar</h2>
<p>Tenemos una lista verificada de todos los MUNs disponibles para jóvenes peruanos en nuestra sección de <a href="/oportunidades">oportunidades</a>. Los encuentras bajo la categoría "MUN".</p>
    `,
    contentEn: `
<p>If you're in high school in Lima and want to develop debate, public speaking, English, and diplomacy skills — Model United Nations is the most direct path. Lima has a dozen active MUNs organized by schools.</p>

<h2>MUNs in Lima 2026</h2>
<ul>
<li><strong>SSMUN</strong> (San Silvestre) — mun.sansilvestre.edu.pe — bilingual, high level</li>
<li><strong>LNAGMUN</strong> (Liceo Naval Almirante Guise) — @lnagmun on Instagram</li>
<li><strong>CarMUN</strong> (Carmelitas) — carmelitas.edu.pe — modern diplomacy focus</li>
<li><strong>SLCMUN</strong> (Salcantay) — @salcantaymun on Instagram</li>
<li><strong>MR MUN</strong> (María Reina) — mariareina.edu.pe</li>
<li><strong>TrenerMUN</strong> — @trenermodelun on Instagram</li>
<li><strong>Lord Byron MUN</strong> — @lordbyronmun on Instagram</li>
<li><strong>CMB MUN</strong> (Casuarina International Academy)</li>
<li><strong>ALMUN</strong> (Abraham Lincoln)</li>
</ul>

<p>See our full verified list at <a href="/oportunidades">opportunities section</a> under the MUN category.</p>
    `,
  },
  {
    slug: "como-ganar-beca-chevening",
    titleEs: "Cómo ganar la Beca Chevening siendo peruano: todo lo que necesitas saber",
    titleEn: "How to win the Chevening Scholarship as a Peruvian: everything you need to know",
    excerptEs: "La Beca Chevening es una de las más prestigiosas del mundo. Esta guía te explica los requisitos reales, cómo redactar tus ensayos y por qué los peruanos sí pueden ganarla.",
    excerptEn: "The Chevening Scholarship is one of the most prestigious in the world. This guide explains the real requirements, how to write your essays, and why Peruvians can win it.",
    category: "Becas",
    categoryColor: "#22577a",
    readingMinutes: 8,
    publishedAt: "2026-07-20",
    tags: ["Chevening", "beca", "Reino Unido", "maestría", "UK", "posgrado"],
    contentEs: `
<p>Cada año, decenas de peruanos postulan a la Beca Chevening del gobierno británico — y algunos la ganan. Esta guía te explica exactamente cómo funciona, qué buscan los evaluadores y cómo preparar una aplicación que destaque.</p>

<h2>¿Qué es Chevening?</h2>
<p>Chevening es el programa de becas del gobierno del Reino Unido para líderes globales de futuro. Financia una maestría completa en cualquier universidad del Reino Unido: matrícula, alojamiento, vuelos internacionales, seguro médico y una asignación mensual. Es 100% gratuita.</p>

<h2>Requisitos para peruanos</h2>
<ul>
<li>Ser ciudadano peruano</li>
<li>Tener al menos 2 años de experiencia laboral</li>
<li>Tener un título universitario que permita el acceso a programas de maestría en el UK</li>
<li>Comprometerse a regresar al Perú por al menos 2 años después de terminar la beca</li>
<li>Nivel de inglés suficiente para la maestría elegida (generalmente IELTS 6.5+)</li>
</ul>

<h2>Los 4 ensayos — el corazón de tu aplicación</h2>
<p>Chevening no evalúa solo tu currículo — evalúa quién eres como líder. Los 4 ensayos (500 palabras cada uno) son los más importantes:</p>

<h3>1. Liderazgo</h3>
<p>Describe una situación real en la que hayas demostrado liderazgo. No tiene que ser un cargo directivo — puede ser liderar un proyecto, una comunidad, un equipo estudiantil. Lo que importa es tu impacto concreto y cómo influyaste en otros.</p>

<h3>2. Networking</h3>
<p>Chevening valora mucho la capacidad de construir redes. Explica cómo has usado tus redes profesionales o académicas para lograr algo, y cómo la comunidad Chevening podría ayudarte a tus objetivos.</p>

<h3>3. Influencia en tu campo</h3>
<p>¿Cómo has influido o contribuido a tu sector, comunidad o país? Sé específico con datos y resultados.</p>

<h3>4. Plan de estudios y carrera</h3>
<p>¿Por qué esta maestría específica? ¿Por qué en el UK? ¿Cómo se conecta con tu pasado y tu plan futuro en Perú? Muestra una narrativa coherente y ambiciosa.</p>

<h2>Errores más comunes</h2>
<ul>
<li><strong>Ensayos genéricos:</strong> "Desde siempre me apasionó el liderazgo" no convence a nadie. Usa historias concretas.</li>
<li><strong>Aplicar sin experiencia laboral:</strong> Chevening no es para recién egresados. Necesitas al menos 2 años de trabajo real.</li>
<li><strong>Elegir la universidad antes que el programa:</strong> Primero elige el programa académico que necesitas, luego busca qué universidades lo ofrecen.</li>
<li><strong>Dejar los ensayos para el último momento:</strong> Cada ensayo puede tomar 10-20 horas de trabajo serio.</li>
</ul>

<h2>¿Cuándo postular?</h2>
<p>La convocatoria Chevening abre en agosto y cierra en noviembre. Los resultados finales llegan entre febrero y abril del año siguiente. Planifica con tiempo.</p>

<p>Encuentra más información y el link directo a la convocatoria en nuestra sección de <a href="/oportunidades">oportunidades verificadas</a>.</p>
    `,
    contentEn: `
<p>Every year, dozens of Peruvians apply for the British government's Chevening Scholarship — and some win it. This guide explains exactly how it works, what evaluators look for, and how to prepare a standout application.</p>

<h2>What is Chevening?</h2>
<p>Chevening is the UK government's scholarship program for future global leaders. It funds a full master's degree at any UK university: tuition, housing, international flights, health insurance, and a monthly stipend. It is 100% free.</p>

<h2>Requirements for Peruvians</h2>
<ul>
<li>Be a Peruvian citizen</li>
<li>Have at least 2 years of work experience</li>
<li>Hold an undergraduate degree that gives access to master's programs in the UK</li>
<li>Commit to returning to Peru for at least 2 years after the scholarship</li>
<li>English level sufficient for your chosen master's (usually IELTS 6.5+)</li>
</ul>

<h2>The 4 Essays — the heart of your application</h2>
<p>Chevening doesn't just evaluate your CV — it evaluates who you are as a leader. The 4 essays (500 words each) are the most important part.</p>

<h3>1. Leadership</h3>
<p>Describe a real situation where you demonstrated leadership. It doesn't have to be a managerial role — leading a project, community, or student team counts. What matters is your concrete impact and how you influenced others.</p>

<h3>2. Networking</h3>
<p>Chevening highly values the ability to build networks. Explain how you've used professional or academic networks to achieve something, and how the Chevening community could help your goals.</p>

<h2>Common mistakes</h2>
<ul>
<li><strong>Generic essays:</strong> "I've always been passionate about leadership" convinces no one. Use concrete stories.</li>
<li><strong>Applying without work experience:</strong> Chevening is not for recent graduates. You need at least 2 real years of work.</li>
<li><strong>Leaving essays to the last minute:</strong> Each essay can take 10-20 hours of serious work.</li>
</ul>

<p>Find more information and the direct link to the application in our <a href="/oportunidades">verified opportunities section</a>.</p>
    `,
  },
  {
    slug: "guia-completa-mun-lima-2026",
    titleEs: "MUNs en Lima 2026: todos los eventos, fechas y cómo participar",
    titleEn: "MUNs in Lima 2026: all events, dates and how to participate",
    excerptEs: "Guía completa de los Modelos de Naciones Unidas en Lima: TREMUN, PCIMUN, LBMUN, MRMUN y más. Todo lo que necesitas saber para participar este año.",
    excerptEn: "Complete guide to Model United Nations conferences in Lima: TREMUN, PCIMUN, LBMUN, MRMUN and more. Everything you need to know to participate this year.",
    category: "Liderazgo",
    categoryColor: "#8b5cf6",
    readingMinutes: 5,
    publishedAt: "2026-07-18",
    tags: ["MUN", "Lima", "debate", "diplomacia", "oratoria", "TREMUN", "PCIMUN"],
    contentEs: `
<p>Lima tiene una de las escenas MUN más activas de Latinoamérica. Si quieres empezar en el mundo del debate y la diplomacia, aquí están todos los eventos que debes conocer para 2026.</p>

<h2>¿Por qué hacer MUN?</h2>
<p>El Modelo de Naciones Unidas desarrolla oratoria en español e inglés, pensamiento crítico, capacidad de negociación, redacción formal y confianza para hablar en público. Muchas universidades peruanas y extranjeras valoran la experiencia MUN en los procesos de admisión y becas.</p>

<h2>MUNs en Lima 2026</h2>

<h3>TREMUN — Trujillo y Lima</h3>
<p>Uno de los MUNs más reconocidos del norte del país, con delegados de todo el Perú. Incluye comités en español e inglés. Ideal para principiantes y delegados con experiencia.</p>

<h3>PCIMUN — PUCP</h3>
<p>Organizado por la Pontificia Universidad Católica del Perú. Uno de los más prestigiosos de Latinoamérica, con delegados internacionales y comités especializados. Requiere mayor preparación previa.</p>

<h3>LBMUN — La Bretaña MUN</h3>
<p>Conferencia enfocada en colegios de Lima. Buena opción para estudiantes de 14-18 años que se inician en el mundo MUN.</p>

<h3>MRMUN — Miguel Ruíz MUN</h3>
<p>MUN escolar con enfoque en secundaria. Ambiente amigable para primeras experiencias.</p>

<h3>SANJOMUN y STMUN</h3>
<p>Organizados por colegios privados de Lima. Abiertos a delegados externos según convocatoria anual.</p>

<h2>MUNs internacionales desde Lima</h2>
<p>Si quieres ir más lejos, también puedes postular a:</p>
<ul>
<li><strong>YMUN</strong> — Yale Model United Nations (Connecticut, EE.UU.)</li>
<li><strong>BMUN</strong> — Berkeley Model United Nations (California, EE.UU.)</li>
<li><strong>YIMO</strong> — Yale International Model Organization</li>
<li><strong>Harvard Model Congress</strong></li>
</ul>
<p>Todos tienen ayuda financiera disponible para estudiantes de países en desarrollo.</p>

<h2>¿Cómo prepararme?</h2>
<p>Lee nuestra <a href="/blog/como-prepararse-primer-mun">guía completa para tu primer MUN</a> y usa los materiales gratuitos de <a href="/curso/ingles">inglés de ESF</a> para mejorar tu nivel antes de la conferencia.</p>

<p>Encuentra todos los MUNs verificados con links directos en la sección de <a href="/oportunidades">oportunidades</a>.</p>
    `,
    contentEn: `
<p>Lima has one of the most active MUN scenes in Latin America. If you want to start in the world of debate and diplomacy, here are all the events you need to know for 2026.</p>

<h2>Why do MUN?</h2>
<p>Model United Nations develops public speaking in Spanish and English, critical thinking, negotiation skills, formal writing, and confidence to speak in front of audiences. Many Peruvian and international universities value MUN experience in admissions and scholarship processes.</p>

<h2>MUNs in Lima 2026</h2>
<p>Key conferences include TREMUN, PCIMUN (PUCP), LBMUN, MRMUN, SANJOMUN, and STMUN. Each has different levels of difficulty and age ranges, from beginner to advanced.</p>

<h2>International MUNs from Lima</h2>
<p>You can also apply to YMUN (Yale), BMUN (Berkeley), YIMO, and Harvard Model Congress — all with financial aid available for students from developing countries.</p>

<p>Find all verified MUNs with direct links in the <a href="/oportunidades">opportunities section</a>.</p>
    `,
  },
  {
    slug: "rsi-programa-investigacion-mit",
    titleEs: "RSI: el programa de investigación más competitivo del mundo para estudiantes de secundaria",
    titleEn: "RSI: the world's most competitive research program for high school students",
    excerptEs: "El Research Science Institute (RSI) del MIT es totalmente gratuito y aceptado por menos del 2% de los aplicantes. Te explicamos cómo funciona y cómo prepararte desde Perú.",
    excerptEn: "The Research Science Institute (RSI) at MIT is completely free and accepts fewer than 2% of applicants. We explain how it works and how to prepare from Peru.",
    category: "Liderazgo",
    categoryColor: "#22577a",
    readingMinutes: 6,
    publishedAt: "2026-07-15",
    tags: ["RSI", "MIT", "investigación", "ciencias", "secundaria", "beca", "STEM"],
    contentEs: `
<p>El Research Science Institute (RSI) es uno de los programas académicos más selectivos del mundo para estudiantes de secundaria. Se realiza en el MIT (Massachusetts Institute of Technology) cada verano, dura 6 semanas, y es completamente gratuito — incluyendo vuelos, alojamiento y alimentación.</p>

<h2>¿Qué hace RSI diferente?</h2>
<p>A diferencia de la mayoría de programas de verano, RSI no es un curso. Es un programa de investigación real: cada estudiante trabaja directamente con un profesor o investigador del MIT en un proyecto original de ciencias, matemáticas o ingeniería durante 5 semanas. Al final, presentan sus resultados ante una audiencia académica.</p>

<h2>Estadísticas reales</h2>
<ul>
<li>~1,500 aplicantes por año de todo el mundo</li>
<li>~80 estudiantes seleccionados (~5% de aceptación)</li>
<li>De los seleccionados, ~70% viene de EE.UU.; ~30% internacional</li>
<li>Alumni incluyen múltiples ganadores del Premio Nobel y medallistas olímpicos en ciencias</li>
</ul>

<h2>¿Pueden postular peruanos?</h2>
<p>Sí. RSI acepta aplicantes internacionales de todos los países. El costo es 0 para todos los admitidos. Los peruanos que han participado generalmente vienen de colegios de alto rendimiento o han competido en olimpiadas internacionales (IMO, IPhO, IOI).</p>

<h2>¿Qué necesitas para postular?</h2>
<ul>
<li>Estar en 3.° o 4.° de secundaria (penúltimo o antepenúltimo año antes de graduarte)</li>
<li>Expediente académico sobresaliente en materias STEM</li>
<li>Cartas de recomendación fuertes de profesores de ciencias o matemáticas</li>
<li>Ensayo personal que muestre tu pasión por la investigación</li>
<li>Inglés avanzado</li>
<li>Idealmente: participación en olimpiadas nacionales o internacionales</li>
</ul>

<h2>¿Cómo prepararme desde Perú?</h2>
<ul>
<li>Participa en olimpiadas nacionales: OPI, ONMATH, ONEM, ICHO, IPhO — cualquier experiencia competitiva suma.</li>
<li>Haz un proyecto de investigación propio, aunque sea pequeño. Demostrar iniciativa es clave.</li>
<li>Mejora tu inglés con los <a href="/curso/ingles">cursos gratuitos de ESF</a>.</li>
<li>La convocatoria abre normalmente en octubre-noviembre para el programa del siguiente verano.</li>
</ul>

<p>Encuentra el link directo a la convocatoria RSI en nuestra sección de <a href="/oportunidades">oportunidades verificadas</a>.</p>
    `,
    contentEn: `
<p>The Research Science Institute (RSI) is one of the most selective academic programs in the world for high school students. It takes place at MIT each summer, lasts 6 weeks, and is completely free — including flights, housing, and meals.</p>

<h2>What makes RSI different?</h2>
<p>Unlike most summer programs, RSI is not a course. It's a real research program: each student works directly with an MIT professor or researcher on an original science, math, or engineering project for 5 weeks. At the end, they present their results to an academic audience.</p>

<h2>Can Peruvians apply?</h2>
<p>Yes. RSI accepts international applicants from all countries. Cost is $0 for all admitted students. Peruvians who have participated typically come from high-performing schools or have competed in international olympiads (IMO, IPhO, IOI).</p>

<h2>How to prepare from Peru</h2>
<ul>
<li>Participate in national olympiads: OPI, ONMATH, ONEM, ICHO, IPhO.</li>
<li>Do your own research project, even a small one. Showing initiative is key.</li>
<li>Improve your English with <a href="/curso/ingles">ESF's free courses</a>.</li>
<li>Applications typically open in October-November for the following summer's program.</li>
</ul>

<p>Find the direct link to RSI applications in our <a href="/oportunidades">verified opportunities section</a>.</p>
    `,
  },
  {
    slug: "technovation-girls-peru",
    titleEs: "Technovation Girls: cómo una chica peruana puede crear una app y ganar un concurso mundial",
    titleEn: "Technovation Girls: how a Peruvian girl can build an app and win a global contest",
    excerptEs: "Technovation Girls es la competencia de tecnología más grande del mundo para chicas de 10 a 18 años. Es gratuita, en español, y equipos peruanos ya han llegado a la final global.",
    excerptEn: "Technovation Girls is the world's largest technology competition for girls aged 10 to 18. It's free, available in Spanish, and Peruvian teams have already reached the global finals.",
    category: "Tech",
    categoryColor: "#84cc16",
    readingMinutes: 5,
    publishedAt: "2026-07-23",
    tags: ["Technovation", "tech", "mujeres", "programación", "app", "emprendimiento", "secundaria"],
    contentEs: `
<p>Si conoces a una chica entre 10 y 18 años que tenga curiosidad por la tecnología, Technovation Girls puede cambiarle la vida. Es gratuita, disponible en español, y ya hay equipos peruanos que han competido a nivel mundial.</p>

<h2>¿Qué es Technovation Girls?</h2>
<p>Technovation Girls es un programa de emprendimiento tecnológico organizado por Technovation (antes Iridescent). Cada año, equipos de 1 a 5 chicas identifican un problema en su comunidad, crean una app móvil para solucionarlo, y presentan su proyecto ante jueces internacionales.</p>

<h2>¿Qué aprenden las participantes?</h2>
<ul>
<li>Programación con MIT App Inventor (sin experiencia previa necesaria)</li>
<li>Diseño de producto y UX</li>
<li>Investigación de mercado y entrevistas a usuarios</li>
<li>Pitch de negocios ante inversionistas</li>
<li>Trabajo en equipo y liderazgo</li>
</ul>

<h2>¿Cómo funciona la competencia?</h2>
<p>El programa dura 10 semanas. Las participantes tienen acceso a videos tutoriales, materiales en español y mentores voluntarios. Al final, envían su demo de app, un pitch de negocios en video y un plan de negocio. Los mejores equipos avanzan a rondas regionales y globales.</p>

<h2>¿Es gratis?</h2>
<p>Sí. El programa es completamente gratuito. Solo necesitas una computadora o tablet con acceso a internet.</p>

<h2>¿Cómo unirse desde Perú?</h2>
<p>Puedes registrar tu equipo directamente en el sitio de Technovation entre enero y marzo de cada año. También puedes buscar un "Technovation Ambassador" en tu ciudad — voluntarios que ayudan a equipos locales con mentoría.</p>

<h2>¿Qué han logrado equipos peruanos?</h2>
<p>Equipos de Lima, Arequipa y otras regiones han llegado a las rondas semifinales y finales de Technovation. La competencia es real y los jueces son ejecutivos de empresas tech como Google, Salesforce y Amazon.</p>

<p>Encuentra el link oficial y más información en la sección de <a href="/oportunidades">oportunidades verificadas de ESF</a>.</p>
    `,
    contentEn: `
<p>If you know a girl aged 10 to 18 who is curious about technology, Technovation Girls can change her life. It's free, available in Spanish, and Peruvian teams have already competed at the global level.</p>

<h2>What is Technovation Girls?</h2>
<p>Technovation Girls is a technology entrepreneurship program where teams of 1 to 5 girls identify a problem in their community, create a mobile app to solve it, and pitch their project to international judges. It's completely free and available in Spanish.</p>

<h2>How does it work?</h2>
<p>The 10-week program gives participants access to video tutorials, Spanish-language materials, and volunteer mentors. They learn coding with MIT App Inventor, product design, market research, and business pitching. Top teams advance to regional and global rounds.</p>

<p>Find the official link and registration dates in the <a href="/oportunidades">ESF verified opportunities section</a>.</p>
    `,
  },
];
