const fs = require('fs');
const path = require('path');

// Compact chapter data: [title, subtitle, sections[], summary[], quiz[]]
// Each section: {h2, content}
// Each quiz item: {q, opts[4], correct(0-3), feedback}

const CHAPTERS = [
{num:1,title:"Principios de la Democracia Americana",subtitle:"Los fundamentos filosóficos y valores esenciales que definen al gobierno de los Estados Unidos — las preguntas 1 a 10 del examen.",
sections:[
{h2:"¿Qué es la Forma de Gobierno de EE.UU.?",content:`<p>La pregunta más fundamental del examen de ciudadanía es: <em>¿Cuál es la forma de gobierno de los Estados Unidos?</em> La respuesta oficial es: <strong>una república constitucional</strong> o <strong>una democracia representativa</strong>.</p>
<div class="highlight-box"><strong>Respuesta oficial (pregunta 1):</strong> La forma de gobierno de los EE.UU. es una <strong>República</strong>. Los ciudadanos eligen a representantes que toman decisiones en su nombre. No es una democracia directa donde todos votan en cada decisión.</div>
<p>La palabra "república" viene del latín <em>res publica</em> — "asunto público". En una república, el poder emana del pueblo pero es ejercido por representantes electos limitados por una constitución.</p>`},
{h2:"El Sistema de 'Checks and Balances'",content:`<p>Los Padres Fundadores desconfiaban del poder concentrado. Para evitar la tiranía, diseñaron un sistema de <strong>frenos y contrapesos</strong> (<em>checks and balances</em>): tres ramas de gobierno que se vigilan mutuamente.</p>
<div class="example"><strong>Pregunta 2:</strong> ¿Qué hace la Constitución?<br><br><strong>Respuesta:</strong> Establece el gobierno, define los poderes del gobierno, protege los derechos básicos de los americanos.</div>
<div class="highlight-box"><strong>Pregunta 3:</strong> La idea de que el gobierno debe obedecer la ley se llama el <strong>Estado de Derecho</strong> (<em>rule of law</em>). En EE.UU., nadie está por encima de la ley — ni el Presidente.</div>`},
{h2:"Las Tres Ramas del Gobierno",content:`<div class="example"><strong>Pregunta 4:</strong> ¿Cuáles son las tres ramas del gobierno?<br><br><strong>Respuesta:</strong>
<ul><li>La rama <strong>legislativa</strong> (el Congreso) — hace las leyes</li>
<li>La rama <strong>ejecutiva</strong> (el Presidente) — hace cumplir las leyes</li>
<li>La rama <strong>judicial</strong> (la Corte Suprema) — evalúa las leyes</li></ul></div>
<p>Esta separación garantiza que ninguna persona o grupo acumule demasiado poder. El Congreso puede escribir leyes, pero el Presidente puede vetarlas. La Corte Suprema puede declarar las leyes inconstitucionales.</p>`},
{h2:"El Congreso: Sus Números Clave",content:`<table><tr><th>Cámara</th><th>Miembros</th><th>Mandato</th></tr>
<tr><td><strong>Senado</strong></td><td>100 senadores (2 por estado)</td><td>6 años</td></tr>
<tr><td><strong>Cámara de Representantes</strong></td><td>435 representantes</td><td>2 años</td></tr></table>
<div class="highlight-box"><strong>Preguntas 5-6:</strong><br>¿Cuántos senadores hay? → <strong>100</strong><br>¿Cuántos años sirve un senador? → <strong>6 años</strong><br>¿Cuántos representantes hay? → <strong>435</strong><br>¿Cuántos años sirve un representante? → <strong>2 años</strong></div>`},
{h2:"La Primera Enmienda y el Sistema Económico",content:`<div class="example"><strong>Pregunta 7:</strong> ¿Cuál es un derecho de la Primera Enmienda?<br><br><strong>Respuestas aceptadas:</strong> Libertad de expresión, de religión, de reunión, de prensa, de petición al gobierno.</div>
<div class="highlight-box"><strong>Preguntas 8-10:</strong><br>¿Cuál es el sistema económico de EE.UU.? → <strong>Economía de mercado capitalista</strong><br>¿Cuáles son los dos partidos políticos principales? → <strong>Republicano y Demócrata</strong><br>¿Cuál es el partido del Presidente actual? → <em>Varía — verifica antes de tu examen</em></div>`},
],
summary:["El gobierno de EE.UU. es una república constitucional con tres ramas","Los 'checks and balances' evitan la concentración de poder","El Congreso tiene 100 senadores y 435 representantes","La Primera Enmienda protege expresión, religión, prensa, reunión y petición","El sistema económico es capitalista / economía de mercado"],
quiz:[
{q:"¿Cuál es la forma de gobierno de los Estados Unidos?",opts:["Monarquía constitucional","Democracia directa","República constitucional","Dictadura federal"],correct:2,feedback:"EE.UU. es una república — los ciudadanos eligen representantes que gobiernan en su nombre, limitados por la Constitución."},
{q:"¿Cuántas ramas tiene el gobierno federal de EE.UU.?",opts:["2","3","4","5"],correct:1,feedback:"Las tres ramas son: legislativa (Congreso), ejecutiva (Presidente) y judicial (Corte Suprema)."},
{q:"¿Cuántos senadores hay en el Senado de EE.UU.?",opts:["50","100","435","535"],correct:1,feedback:"Hay 100 senadores — 2 por cada uno de los 50 estados, sin importar el tamaño del estado."},
{q:"¿Cuántos años dura el mandato de un senador?",opts:["2 años","4 años","6 años","8 años"],correct:2,feedback:"Los senadores sirven 6 años. Los representantes sirven 2 años. El Presidente sirve 4 años."},
{q:"¿Cuántos representantes tiene la Cámara de Representantes?",opts:["100","250","435","500"],correct:2,feedback:"La Cámara tiene 435 representantes, distribuidos proporcionalmente según la población de cada estado."},
{q:"¿Qué protege la Primera Enmienda?",opts:["El derecho a portar armas","La libertad de expresión y religión","El derecho a un juicio justo","La abolición de la esclavitud"],correct:1,feedback:"La Primera Enmienda protege la libertad de expresión, religión, prensa, reunión y petición al gobierno."},
{q:"¿Cuál es el 'rule of law' o Estado de Derecho?",opts:["El presidente hace las leyes","Los jueces son elegidos por el pueblo","Nadie está por encima de la ley","Los estados tienen más poder que el gobierno federal"],correct:2,feedback:"El Estado de Derecho significa que todos — incluyendo el Presidente — deben obedecer la ley."},
{q:"¿En qué año ganaron las mujeres el derecho a votar en EE.UU.?",opts:["1870","1900","1920","1945"],correct:2,feedback:"La Enmienda 19 (ratificada en 1920) garantizó el derecho al voto a las mujeres."},
{q:"¿Cuáles son los dos partidos políticos principales de EE.UU.?",opts:["Federalista y Anti-federalista","Whig y Tory","Republicano y Demócrata","Conservador y Liberal"],correct:2,feedback:"Los dos grandes partidos son el Republicano (elefante) y el Demócrata (burro). Ambos existen desde el siglo XIX."},
{q:"¿Qué documento define la estructura del gobierno de EE.UU.?",opts:["La Declaración de Independencia","La Carta Magna","La Constitución","El Federalist Papers"],correct:2,feedback:"La Constitución de EE.UU. (1787) es la ley suprema del país. Define las tres ramas y protege los derechos de los ciudadanos."},
]},
{num:2,title:"El Sistema Federal y los 50 Estados",subtitle:"Cómo se divide el poder entre el gobierno federal y los 50 estados — preguntas 11 a 20 del examen de naturalización.",
sections:[
{h2:"¿Qué es el Federalismo?",content:`<p>EE.UU. tiene un sistema federal donde el poder está dividido entre el gobierno nacional y los 50 gobiernos estatales.</p>
<div class="highlight-box"><strong>Pregunta 11:</strong> ¿Cuál es el sistema de gobierno de EE.UU.?<br><strong>Respuesta:</strong> Sistema federal — el poder se divide entre el gobierno nacional y los estados.</div>
<p>La Décima Enmienda reserva para los estados los poderes no delegados al gobierno federal.</p>`},
{h2:"Poderes Federales vs. Estatales",content:`<table><tr><th>Gobierno Federal</th><th>Gobiernos Estatales</th></tr>
<tr><td>Declarar guerra</td><td>Proveer educación pública</td></tr>
<tr><td>Acuñar moneda</td><td>Expedir licencias de conducir</td></tr>
<tr><td>Políticas de inmigración</td><td>Aprobar leyes de zonificación</td></tr>
<tr><td>Relaciones exteriores</td><td>Administrar elecciones estatales</td></tr></table>
<div class="example"><strong>Pregunta 12:</strong> ¿Qué es una cosa que hace solo el gobierno federal?<br><strong>Respuestas aceptadas:</strong> Imprimir papel moneda, declarar la guerra, crear un ejército, hacer tratados.</div>`},
{h2:"Los 50 Estados y la Bandera",content:`<div class="highlight-box"><strong>Pregunta 13:</strong> ¿Por qué hay 50 estrellas en la bandera?<br><strong>Respuesta:</strong> Porque hay <strong>50 estados</strong>. Cada estrella representa un estado.</div>
<div class="example"><strong>Pregunta 14:</strong> ¿Por qué hay 13 rayas en la bandera?<br><strong>Respuesta:</strong> Las 13 rayas representan las <strong>13 colonias originales</strong> que se convirtieron en los primeros estados.</div>
<p>El estado número 50 fue <strong>Hawái</strong> (1959). Alaska fue el 49°, también en 1959.</p>`},
{h2:"El Gobernador y la Capital",content:`<div class="highlight-box"><strong>Pregunta 15:</strong> ¿Quién es el gobernador actual de tu estado?<br><em>Esta respuesta cambia. Debes conocer el gobernador de tu estado al momento del examen. Búscalo en el sitio web oficial de tu estado.</em></div>
<div class="example"><strong>Pregunta 16:</strong> ¿Cuál es la capital de los Estados Unidos?<br><strong>Respuesta:</strong> Washington D.C. (Distrito de Columbia)</div>
<p>Washington D.C. no es parte de ningún estado — fue diseñada específicamente para ser la sede del gobierno federal.</p>`},
{h2:"Los Senadores de Tu Estado",content:`<div class="highlight-box"><strong>Preguntas 17-20:</strong><br>¿Cuántos senadores tiene tu estado? → <strong>2</strong> (todos los estados tienen 2)<br>¿Quiénes son los senadores actuales de tu estado? → <em>Búscalos en senate.gov</em><br>¿Cuántos representantes tiene tu estado? → <em>Depende de la población</em></div>
<p><strong>Tip:</strong> Ve a <em>senate.gov</em> y busca los dos senadores de tu estado. Memoriza sus nombres completos — el examinador puede preguntarte por uno o ambos.</p>`},
],
summary:["EE.UU. tiene un sistema federal: poder compartido entre nación y estados","La bandera tiene 50 estrellas (estados) y 13 rayas (colonias originales)","Washington D.C. es la capital federal","Cada estado tiene 2 senadores, independientemente de su tamaño","Debes conocer el gobernador y senadores actuales de tu estado"],
quiz:[
{q:"¿Cuántos estados tiene EE.UU.?",opts:["48","49","50","52"],correct:2,feedback:"EE.UU. tiene 50 estados. Los últimos en unirse fueron Alaska y Hawái, ambos en 1959."},
{q:"¿Qué representa cada estrella en la bandera de EE.UU.?",opts:["Una colonia original","Un año de independencia","Un estado","Una guerra ganada"],correct:2,feedback:"Las 50 estrellas representan los 50 estados actuales. Cada vez que un nuevo estado se une, se agrega una estrella."},
{q:"¿Qué representan las 13 rayas de la bandera?",opts:["Los 13 presidentes originales","Las 13 colonias originales","Los 13 artículos de la Constitución","Los 13 primeros senadores"],correct:1,feedback:"Las 13 rayas representan las 13 colonias que declararon su independencia de Gran Bretaña en 1776."},
{q:"¿Cuál es la capital de los Estados Unidos?",opts:["Nueva York","Los Ángeles","Washington D.C.","Philadelphia"],correct:2,feedback:"Washington D.C. (Distrito de Columbia) es la capital federal desde 1800. No es parte de ningún estado."},
{q:"¿Cuántos senadores tiene cada estado en el Congreso de EE.UU.?",opts:["1","2","Depende de la población","4"],correct:1,feedback:"TODOS los estados tienen exactamente 2 senadores, sin importar su tamaño o población."},
{q:"¿Qué es el sistema federal?",opts:["El presidente tiene todo el poder","El poder se comparte entre el gobierno nacional y los estados","Los estados gobiernan solos","El ejército controla el gobierno"],correct:1,feedback:"El federalismo divide el poder entre el gobierno federal (nacional) y los 50 gobiernos estatales."},
{q:"¿Quién es el jefe ejecutivo de cada estado?",opts:["El Senador","El Presidente","El Gobernador","El Alcalde"],correct:2,feedback:"El gobernador es el jefe ejecutivo de cada estado, equivalente al Presidente a nivel nacional."},
{q:"¿Qué puede hacer el gobierno federal pero NO los estados?",opts:["Cobrar impuestos","Declarar la guerra","Crear escuelas públicas","Emitir licencias de conducir"],correct:1,feedback:"Solo el gobierno federal puede declarar la guerra. Los estados manejan educación, licencias, y servicios locales."},
{q:"¿Cuál fue el estado número 50 en unirse a EE.UU.?",opts:["Alaska","Florida","Texas","Hawái"],correct:3,feedback:"Hawái fue el estado número 50, uniéndose el 21 de agosto de 1959. Alaska fue el 49°, uniéndose el 3 de enero de 1959."},
{q:"¿Qué enmienda reserva para los estados los poderes no delegados al gobierno federal?",opts:["La Primera Enmienda","La Quinta Enmienda","La Décima Enmienda","La Decimocuarta Enmienda"],correct:2,feedback:"La Décima Enmienda dice que los poderes no dados al gobierno federal por la Constitución son reservados para los estados."},
]},
{num:3,title:"El Congreso: La Rama Legislativa",subtitle:"El Senado y la Cámara de Representantes — cómo se hacen las leyes y los detalles que necesitas para el examen.",
sections:[
{h2:"El Congreso Bicameral",content:`<p>El Congreso es la rama legislativa — su función principal es <strong>hacer las leyes</strong>. Tiene dos cámaras: el Senado y la Cámara de Representantes.</p>
<div class="highlight-box"><strong>Pregunta 21:</strong> ¿Cómo se llaman las dos cámaras del Congreso?<br><strong>Respuesta:</strong> El Senado y la Cámara de Representantes (House of Representatives).</div>
<p>Para que una propuesta se convierta en ley, debe pasar por ambas cámaras con mayoría de votos y luego ser firmada por el Presidente.</p>`},
{h2:"El Senado: La Cámara Alta",content:`<div class="example"><strong>Datos clave del Senado:</strong><br>• Número de senadores: 100 (2 por estado)<br>• Duración del mandato: 6 años<br>• Requisito de edad mínimo: 30 años<br>• El Vicepresidente preside el Senado</div>
<div class="highlight-box"><strong>Poderes exclusivos del Senado:</strong>
<ul><li>Confirmar los nombramientos presidenciales (jueces, secretarios)</li>
<li>Ratificar tratados internacionales (requiere 2/3 de votos)</li>
<li>Conducir juicios de destitución (<em>impeachment</em>)</li></ul></div>`},
{h2:"La Cámara de Representantes",content:`<div class="example"><strong>Datos clave de la Cámara:</strong><br>• Número de representantes: 435<br>• Duración del mandato: 2 años<br>• Representación proporcional a la población<br>• Requisito de edad mínimo: 25 años</div>
<div class="highlight-box"><strong>Poderes exclusivos de la Cámara:</strong>
<ul><li>Iniciar proyectos de ley de impuestos</li>
<li>Iniciar el proceso de <em>impeachment</em> del Presidente</li>
<li>Elegir al Presidente si hay empate en el Colegio Electoral</li></ul></div>`},
{h2:"Cómo Se Hace Una Ley",content:`<ol>
<li><strong>Propuesta:</strong> Cualquier miembro del Congreso propone un proyecto de ley</li>
<li><strong>Comité:</strong> Un comité especializado lo estudia y puede modificarlo</li>
<li><strong>Debate y voto:</strong> Ambas cámaras votan (se necesita mayoría simple)</li>
<li><strong>Firma presidencial:</strong> Si el Presidente firma, se convierte en ley</li>
<li><strong>Veto:</strong> Si el Presidente veta, el Congreso puede anularlo con 2/3 de votos</li>
</ol>
<div class="highlight-box"><strong>Pregunta 22:</strong> ¿Cuántas veces puede ser elegido un senador?<br><strong>Respuesta:</strong> No hay límite — los senadores pueden ser reelegidos indefinidamente.</div>`},
{h2:"Tu Representante en el Congreso",content:`<div class="example"><strong>Preguntas 23-25:</strong><br>¿Cuántos años sirve un representante? → <strong>2 años</strong><br>¿Quién es tu representante en la Cámara? → <em>Búscalo en house.gov con tu código postal</em><br>¿A quiénes representa el senador? → <strong>A toda la gente del estado</strong></div>
<p>Para encontrar tu representante: ve a <strong>house.gov</strong>, ingresa tu código postal y verás el nombre de tu representante actual.</p>`},
],
summary:["El Congreso tiene dos cámaras: Senado (100) y Cámara de Representantes (435)","Los senadores sirven 6 años; los representantes sirven 2 años","El Senado confirma nombramientos y ratifica tratados","La Cámara inicia proyectos de ley de impuestos y el proceso de impeachment","Tu representante en la Cámara depende de tu distrito/código postal"],
quiz:[
{q:"¿Cuántas cámaras tiene el Congreso de EE.UU.?",opts:["1","2","3","4"],correct:1,feedback:"El Congreso es bicameral: tiene 2 cámaras — el Senado y la Cámara de Representantes."},
{q:"¿Cuál es la función principal del Congreso?",opts:["Hacer cumplir las leyes","Interpretar las leyes","Hacer las leyes","Elegir al Presidente"],correct:2,feedback:"El Congreso es la rama legislativa — su función es hacer (escribir y aprobar) las leyes."},
{q:"¿Cuántos años sirve un miembro de la Cámara de Representantes?",opts:["1 año","2 años","4 años","6 años"],correct:1,feedback:"Los representantes sirven 2 años — el período más corto en el gobierno federal."},
{q:"¿Qué poder tiene exclusivamente el Senado?",opts:["Iniciar leyes de impuestos","Ratificar tratados internacionales","Iniciar el impeachment","Elegir al Presidente en empate"],correct:1,feedback:"El Senado tiene el poder exclusivo de ratificar tratados internacionales (requiere 2/3 de votos)."},
{q:"¿Cuántos representantes tiene la Cámara en total?",opts:["100","250","435","538"],correct:2,feedback:"La Cámara de Representantes tiene 435 miembros, distribuidos proporcionalmente por población entre los 50 estados."},
{q:"¿Qué pasa si el Presidente veta una ley?",opts:["La ley se cancela permanentemente","El Congreso puede anular el veto con 2/3 de votos","La Corte Suprema decide","Se hace un referéndum popular"],correct:1,feedback:"El Congreso puede anular un veto presidencial si 2/3 de ambas cámaras votan para aprobarlo."},
{q:"¿Qué requisito de edad mínima se necesita para ser senador?",opts:["21 años","25 años","30 años","35 años"],correct:2,feedback:"Un senador debe tener al menos 30 años, ser ciudadano americano por 9 años, y vivir en el estado que representa."},
{q:"¿Dónde puedes encontrar el nombre de tu representante en la Cámara?",opts:["senate.gov","whitehouse.gov","house.gov","uscis.gov"],correct:2,feedback:"En house.gov puedes ingresar tu código postal y encontrar el nombre de tu representante actual."},
{q:"¿Quién preside el Senado de EE.UU.?",opts:["El Presidente pro tempore","El Jefe de la Mayoría","El Vicepresidente de EE.UU.","El Presidente de la Corte Suprema"],correct:2,feedback:"El Vicepresidente de EE.UU. es presidente del Senado."},
{q:"¿Hay un límite de cuántas veces un representante puede ser reelegido?",opts:["Sí, máximo 3 veces","Sí, máximo 5 veces","No hay límite de mandatos","Sí, máximo 2 veces"],correct:2,feedback:"No hay límites de mandatos para representantes ni senadores. Algunos llevan décadas en el Congreso."},
]},
{num:4,title:"El Poder Ejecutivo: El Presidente",subtitle:"El Presidente, el Vicepresidente, el Gabinete y los poderes del ejecutivo — preguntas 31 a 43.",
sections:[
{h2:"El Presidente: Jefe del Ejecutivo",content:`<p>El Presidente de EE.UU. es simultáneamente jefe de estado y jefe de gobierno.</p>
<div class="highlight-box"><strong>Pregunta 31:</strong> ¿Quién firma los proyectos de ley para convertirlos en ley?<br><strong>Respuesta:</strong> El Presidente.</div>
<div class="example"><strong>Pregunta 32:</strong> ¿Quién veta los proyectos de ley?<br><strong>Respuesta:</strong> El Presidente. El veto es el rechazo formal de una ley aprobada por el Congreso.</div>`},
{h2:"Requisitos Para Ser Presidente",content:`<ol>
<li>Ser <strong>ciudadano americano de nacimiento</strong></li>
<li>Tener al menos <strong>35 años de edad</strong></li>
<li>Haber residido en EE.UU. por al menos <strong>14 años</strong></li>
</ol>
<div class="highlight-box"><strong>Pregunta 33:</strong> ¿Si muere el Presidente, quién se convierte en Presidente?<br><strong>Respuesta:</strong> El Vicepresidente.</div>
<p>La línea de sucesión continúa: Presidente de la Cámara, Presidente pro tempore del Senado, luego los secretarios del Gabinete.</p>`},
{h2:"El Mandato Presidencial",content:`<div class="example"><strong>Datos del mandato presidencial:</strong>
<ul><li>Duración: <strong>4 años</strong> por mandato</li>
<li>Límite: <strong>máximo 2 mandatos</strong> (8 años total)</li>
<li>Mes de elección: <strong>noviembre</strong></li>
<li>Día de inauguración: <strong>20 de enero</strong></li></ul></div>
<div class="highlight-box"><strong>Pregunta 34:</strong> ¿En qué mes votamos por el Presidente?<br><strong>Respuesta:</strong> En <strong>noviembre</strong>. Las elecciones presidenciales son cada 4 años.</div>`},
{h2:"El Gabinete",content:`<div class="example"><strong>Principales secretarías del Gabinete:</strong>
<ul>
<li><strong>Secretario de Estado:</strong> Relaciones exteriores</li>
<li><strong>Secretario del Tesoro:</strong> Finanzas del gobierno</li>
<li><strong>Secretario de Defensa:</strong> Supervisa el ejército</li>
<li><strong>Attorney General:</strong> Jefe del Departamento de Justicia</li>
</ul></div>
<div class="highlight-box"><strong>Pregunta 35:</strong> ¿Qué hace el Gabinete del Presidente?<br><strong>Respuesta:</strong> Asesora al Presidente.</div>`},
{h2:"Comandante en Jefe",content:`<p>El Presidente es el Comandante en Jefe de las Fuerzas Armadas. Sin embargo, solo el Congreso puede <em>declarar la guerra</em> formalmente.</p>
<div class="highlight-box"><strong>Resumen de poderes (preguntas 36-43):</strong>
<ul>
<li>¿Quién es el Comandante en Jefe? → <strong>El Presidente</strong></li>
<li>¿Cuántos mandatos puede tener? → <strong>2 mandatos (8 años)</strong></li>
<li>¿Quién nombra a los jueces federales? → <strong>El Presidente</strong> (confirmados por el Senado)</li>
</ul></div>`},
],
summary:["El Presidente firma o veta leyes y es Comandante en Jefe del ejército","Para ser Presidente: ciudadano de nacimiento, 35+ años, 14 años de residencia","Los mandatos duran 4 años, máximo 2 (Enmienda 22)","Las elecciones son en noviembre; la inauguración es el 20 de enero","El Gabinete asesora al Presidente; el Vicepresidente lo sucede si muere"],
quiz:[
{q:"¿Cuántos años dura el mandato del Presidente?",opts:["2 años","4 años","6 años","8 años"],correct:1,feedback:"El mandato presidencial dura 4 años. La Enmienda 22 limita a cualquier persona a máximo 2 mandatos (8 años total)."},
{q:"¿Cuántos mandatos puede ser elegido el Presidente de EE.UU.?",opts:["1 mandato","2 mandatos","3 mandatos","Sin límite"],correct:1,feedback:"La Enmienda 22 (1951) limita al Presidente a máximo 2 mandatos. Fue aprobada después de que FDR ganara 4 elecciones."},
{q:"¿En qué mes se celebran las elecciones presidenciales?",opts:["Septiembre","Octubre","Noviembre","Diciembre"],correct:2,feedback:"Las elecciones presidenciales son en noviembre (primer martes después del primer lunes). La inauguración es el 20 de enero."},
{q:"¿Quién se convierte en Presidente si el Presidente muere?",opts:["El Presidente pro tempore del Senado","El Secretario de Estado","El Presidente de la Cámara","El Vicepresidente"],correct:3,feedback:"El Vicepresidente es el primero en la línea de sucesión. Esto ocurrió cuando Lyndon Johnson asumió tras el asesinato de JFK."},
{q:"¿Qué edad mínima se necesita para ser Presidente?",opts:["25 años","30 años","35 años","40 años"],correct:2,feedback:"La Constitución requiere que el Presidente tenga al menos 35 años, sea ciudadano de nacimiento, y haya residido en EE.UU. 14 años."},
{q:"¿Cuál es la función del Gabinete del Presidente?",opts:["Hacer las leyes","Interpretar la Constitución","Asesorar al Presidente","Elegir al Vicepresidente"],correct:2,feedback:"El Gabinete son los secretarios de los departamentos ejecutivos y su función principal es asesorar al Presidente."},
{q:"¿Quién es el Comandante en Jefe de las Fuerzas Armadas?",opts:["El Secretario de Defensa","El General de mayor rango","El Presidente","El Congreso"],correct:2,feedback:"El Presidente es el Comandante en Jefe de todas las fuerzas militares. Es un control civil sobre el ejército."},
{q:"¿Quién nombra a los jueces de la Corte Suprema?",opts:["El Congreso","El Presidente","Los estados","Los ciudadanos"],correct:1,feedback:"El Presidente nomina a los jueces de la Corte Suprema. El Senado debe confirmar el nombramiento."},
{q:"¿Qué ocurre si el Presidente veta un proyecto de ley?",opts:["La ley se archiva permanentemente","El Congreso puede anular el veto con 2/3 de votos","La Corte Suprema decide","El Vicepresidente firma la ley"],correct:1,feedback:"El Congreso puede superar un veto presidencial si 2/3 de ambas cámaras votan para aprobarlo."},
{q:"¿En qué mes es la inauguración del Presidente?",opts:["Noviembre","Diciembre","Enero","Febrero"],correct:2,feedback:"La inauguración presidencial es el 20 de enero, 2.5 meses después de las elecciones de noviembre."},
]},
{num:5,title:"La Corte Suprema y el Poder Judicial",subtitle:"Los 9 jueces, el sistema de cortes federales, y el Estado de Derecho — preguntas 44 a 50.",
sections:[
{h2:"La Corte Suprema",content:`<p>La Corte Suprema es el tribunal más alto del país y el árbitro final de la Constitución. Sus decisiones son definitivas.</p>
<div class="highlight-box"><strong>Pregunta 44:</strong> ¿Cuál es el tribunal más alto de los Estados Unidos?<br><strong>Respuesta:</strong> La Corte Suprema (Supreme Court).</div>
<p>La función principal es interpretar la Constitución. Este poder se llama <strong>revisión judicial</strong> (<em>judicial review</em>).</p>`},
{h2:"Los Nueve Jueces",content:`<div class="example"><strong>Datos clave:</strong>
<ul>
<li>Número de jueces: <strong>9</strong> (1 Chief Justice + 8 Associate Justices)</li>
<li>Nombrados por: <strong>el Presidente</strong></li>
<li>Confirmados por: <strong>el Senado</strong></li>
<li>Duración del cargo: <strong>de por vida</strong></li>
</ul></div>
<div class="highlight-box"><strong>Pregunta 45:</strong> ¿Cuántos jueces tiene la Corte Suprema?<br><strong>Respuesta:</strong> <strong>Nueve (9)</strong> jueces.</div>`},
{h2:"Jueces Vitalicios",content:`<p>Los jueces sirven de por vida — hasta que renuncian, mueren, o son destituidos. Esta protección fue diseñada para garantizar su independencia política.</p>
<div class="highlight-box">Al no depender de elecciones, los jueces pueden tomar decisiones basadas en la ley y la Constitución, sin presiones políticas. Alexander Hamilton argumentó en El Federalista N°78 que esta independencia es esencial para proteger los derechos individuales.</div>
<p>Algunos jueces sirvieron décadas: William O. Douglas sirvió 36 años, Ruth Bader Ginsburg 27 años.</p>`},
{h2:"El Sistema de Cortes Federales",content:`<p>El sistema judicial federal tiene tres niveles:</p>
<ol>
<li><strong>Cortes de Distrito Federal:</strong> El nivel más bajo. 94 en todo EE.UU.</li>
<li><strong>Cortes de Apelaciones:</strong> Revisan las decisiones de las cortes de distrito. 13 circuitos.</li>
<li><strong>Corte Suprema:</strong> El nivel más alto. Solo acepta 60-80 casos al año.</li>
</ol>
<div class="example"><strong>Preguntas 46-47:</strong><br>¿Cuál es la ley suprema de la tierra? → <strong>La Constitución</strong><br>¿Qué hace la Constitución? → <strong>Define el gobierno y protege los derechos de los americanos</strong></div>`},
{h2:"El Estado de Derecho",content:`<div class="highlight-box"><strong>Preguntas 48-50:</strong><br>¿Qué es el Estado de Derecho? → <strong>Todos deben seguir la ley, incluso el gobierno</strong><br>¿Qué es la revisión judicial? → <strong>El poder de la Corte Suprema de revisar si las leyes son constitucionales</strong><br>¿El Presidente está por encima de la ley? → <strong>No, nadie está por encima de la ley</strong></div>
<p>La revisión judicial fue establecida en el caso <em>Marbury v. Madison</em> (1803), uno de los fallos más importantes de la historia americana.</p>`},
],
summary:["La Corte Suprema es el tribunal más alto y tiene la última palabra sobre la Constitución","Hay 9 jueces, nombrados por el Presidente y confirmados por el Senado","Los jueces sirven de por vida para garantizar su independencia","La Constitución es la ley suprema de EE.UU.","El Estado de Derecho significa que nadie, ni el Presidente, está por encima de la ley"],
quiz:[
{q:"¿Cuántos jueces tiene la Corte Suprema de EE.UU.?",opts:["7","8","9","11"],correct:2,feedback:"La Corte Suprema tiene 9 jueces: 1 Presidente de la Corte y 8 jueces asociados."},
{q:"¿Cuánto tiempo sirven los jueces de la Corte Suprema?",opts:["10 años","Hasta los 70 años","De por vida","6 años"],correct:2,feedback:"Los jueces de la Corte Suprema sirven de por vida — hasta que renuncian, mueren o son destituidos."},
{q:"¿Quién nombra a los jueces de la Corte Suprema?",opts:["El Congreso en pleno","El Presidente","El pueblo mediante voto","Los otros jueces"],correct:1,feedback:"El Presidente nomina a los jueces de la Corte Suprema. Luego el Senado debe confirmar el nombramiento."},
{q:"¿Cuál es la función principal de la Corte Suprema?",opts:["Hacer las leyes","Ejecutar las leyes","Interpretar la Constitución","Elegir al Presidente"],correct:2,feedback:"La Corte Suprema interpreta la Constitución — decide si las leyes son constitucionales o no."},
{q:"¿Cuál es la ley suprema de los Estados Unidos?",opts:["La Declaración de Independencia","La Carta de Derechos","La Constitución","Las leyes del Congreso"],correct:2,feedback:"La Constitución de EE.UU. es la ley suprema. Ninguna ley federal o estatal puede contradecirla."},
{q:"¿Por qué sirven los jueces de por vida?",opts:["Para ahorrar dinero en elecciones","Para garantizar su independencia política","Porque es una tradición medieval","Para que tengan más experiencia"],correct:1,feedback:"Los cargos vitalicios protegen a los jueces de presiones políticas, permitiéndoles fallar según la ley."},
{q:"¿Cuántos niveles tiene el sistema judicial federal?",opts:["1","2","3","4"],correct:2,feedback:"El sistema federal tiene 3 niveles: Cortes de Distrito (94), Cortes de Apelaciones (13 circuitos), y la Corte Suprema."},
{q:"¿Qué estableció el caso Marbury vs. Madison (1803)?",opts:["El derecho al voto de las mujeres","La abolición de la esclavitud","El poder de revisión judicial de la Corte Suprema","La separación de iglesia y estado"],correct:2,feedback:"Marbury v. Madison estableció el principio de revisión judicial — el poder de la Corte Suprema para invalidar leyes inconstitucionales."},
{q:"¿El Presidente puede ignorar una decisión de la Corte Suprema?",opts:["Sí, si el Congreso lo aprueba","Sí, en emergencias nacionales","No, debe acatarla","Sí, durante su primer mandato"],correct:2,feedback:"No. El Estado de Derecho significa que todos, incluyendo el Presidente, deben acatar las decisiones de la Corte Suprema."},
{q:"¿Cuántos casos acepta la Corte Suprema aproximadamente cada año?",opts:["500-1000","200-300","60-80","5-10"],correct:2,feedback:"La Corte Suprema acepta solo 60-80 casos por año de los miles que solicitan revisión."},
]},
{num:6,title:"La Carta de Derechos: Tus Libertades",subtitle:"Las primeras 10 enmiendas que protegen las libertades fundamentales de todos en EE.UU. — preguntas 51 a 60.",
sections:[
{h2:"La Carta de Derechos",content:`<p>La Carta de Derechos (<em>Bill of Rights</em>) son las primeras 10 enmiendas a la Constitución, ratificadas en 1791.</p>
<div class="highlight-box"><strong>Pregunta 51:</strong> ¿Cuántas enmiendas tiene la Constitución?<br><strong>Respuesta:</strong> <strong>27 enmiendas</strong>.</div>
<div class="example"><strong>Pregunta 52:</strong> ¿Cuántas enmiendas tiene la Carta de Derechos?<br><strong>Respuesta:</strong> <strong>10 enmiendas</strong>.</div>`},
{h2:"La Primera Enmienda: Cinco Libertades",content:`<p>La Primera Enmienda protege <strong>cinco libertades fundamentales</strong>:</p>
<ol>
<li><strong>Libertad de religión</strong></li>
<li><strong>Libertad de expresión</strong></li>
<li><strong>Libertad de prensa</strong></li>
<li><strong>Libertad de reunión</strong></li>
<li><strong>Libertad de petición</strong></li>
</ol>
<div class="warning-box"><strong>OJO:</strong> El examen puede pedir que nombres "un derecho de la Primera Enmienda". Cualquiera de las cinco respuestas es correcta.</div>`},
{h2:"Otras Enmiendas Importantes",content:`<table><tr><th>Enmienda</th><th>Derecho Protegido</th></tr>
<tr><td><strong>2ª</strong></td><td>Derecho a portar armas</td></tr>
<tr><td><strong>4ª</strong></td><td>Protección contra registros sin orden judicial</td></tr>
<tr><td><strong>5ª</strong></td><td>No puedes ser obligado a testificar contra ti mismo</td></tr>
<tr><td><strong>6ª</strong></td><td>Derecho a un juicio rápido con jurado</td></tr>
<tr><td><strong>13ª</strong></td><td>Abolición de la esclavitud (1865)</td></tr>
<tr><td><strong>14ª</strong></td><td>Igualdad ante la ley; ciudadanía por nacimiento</td></tr>
<tr><td><strong>19ª</strong></td><td>Derecho al voto de la mujer (1920)</td></tr>
<tr><td><strong>26ª</strong></td><td>Voto a los 18 años (1971)</td></tr></table>`},
{h2:"¿Quién Tiene Derechos en EE.UU.?",content:`<div class="highlight-box"><strong>Pregunta 53:</strong> ¿Cuáles son los derechos de todos los que viven en EE.UU.?<br><strong>Respuesta:</strong> La libertad de expresión, de reunión, de religión, y el derecho a portar armas.<br><br><strong>IMPORTANTE:</strong> Los residentes permanentes, los visitantes con visa, e incluso los indocumentados tienen muchos derechos constitucionales — no solo los ciudadanos.</div>`},
{h2:"Libertad de Religión: Las Dos Cláusulas",content:`<ul>
<li><strong>Establishment Clause:</strong> El gobierno no puede establecer una religión oficial</li>
<li><strong>Free Exercise Clause:</strong> El gobierno no puede prohibir la práctica religiosa</li>
</ul>
<div class="highlight-box"><strong>Preguntas 54-60 (resumen):</strong>
<ul>
<li>¿Cuándo fue añadida la Carta de Derechos? → <strong>1791</strong></li>
<li>¿Cuáles son dos derechos de la Carta de Derechos? → <strong>Cualquiera de las 10 enmiendas</strong></li>
<li>¿Qué hace la Primera Enmienda? → <strong>Protege expresión, religión, prensa, reunión y petición</strong></li>
</ul></div>`},
],
summary:["La Carta de Derechos son las primeras 10 enmiendas, ratificadas en 1791","La Primera Enmienda protege: expresión, religión, prensa, reunión y petición","La Constitución tiene 27 enmiendas en total","Todos los que viven en EE.UU. tienen derechos constitucionales","La 13ª abolió la esclavitud; la 19ª dio el voto a la mujer; la 26ª bajó la edad de voto a 18"],
quiz:[
{q:"¿Cuántas enmiendas tiene la Constitución de EE.UU. en total?",opts:["10","21","27","33"],correct:2,feedback:"La Constitución tiene 27 enmiendas. Las primeras 10 (la Carta de Derechos) fueron ratificadas en 1791."},
{q:"¿Cuántas enmiendas forman la Carta de Derechos?",opts:["5","8","10","13"],correct:2,feedback:"La Carta de Derechos (Bill of Rights) son las primeras 10 enmiendas a la Constitución."},
{q:"¿Cuál de estas libertades NO está en la Primera Enmienda?",opts:["Libertad de expresión","Libertad de religión","Derecho a portar armas","Libertad de prensa"],correct:2,feedback:"El derecho a portar armas está en la Segunda Enmienda, no en la Primera."},
{q:"¿Qué enmienda abolió la esclavitud en EE.UU.?",opts:["La 10ª enmienda","La 13ª enmienda","La 14ª enmienda","La 15ª enmienda"],correct:1,feedback:"La 13ª Enmienda (1865) abolió la esclavitud en todo EE.UU."},
{q:"¿En qué año se ratificó la Carta de Derechos?",opts:["1776","1787","1791","1800"],correct:2,feedback:"La Carta de Derechos fue ratificada el 15 de diciembre de 1791."},
{q:"¿Quién tiene derechos constitucionales en EE.UU.?",opts:["Solo los ciudadanos","Solo los residentes permanentes","Solo los nacidos en EE.UU.","Todos los que viven en EE.UU."],correct:3,feedback:"Los derechos constitucionales se aplican a todas las personas en territorio americano."},
{q:"¿Qué protege la 4ª Enmienda?",opts:["El derecho a portar armas","La libertad de expresión","La protección contra registros sin orden judicial","El derecho a un juicio con jurado"],correct:2,feedback:"La 4ª Enmienda protege a las personas contra búsquedas y confiscaciones injustificadas."},
{q:"¿Qué enmienda dio el voto a las mujeres en EE.UU.?",opts:["13ª","15ª","19ª","24ª"],correct:2,feedback:"La 19ª Enmienda (1920) garantizó el derecho al voto a las mujeres."},
{q:"¿Qué significa la 'Free Exercise Clause'?",opts:["Puedes hacer ejercicio en cualquier lugar","El gobierno no puede prohibir la práctica religiosa","Las empresas religiosas no pagan impuestos","Los militares pueden practicar cualquier religión"],correct:1,feedback:"La cláusula de libre ejercicio de la Primera Enmienda protege el derecho a practicar cualquier religión."},
{q:"¿A qué edad puedes votar en EE.UU. gracias a la 26ª Enmienda?",opts:["16 años","18 años","21 años","25 años"],correct:1,feedback:"La 26ª Enmienda (1971) bajó la edad de voto a 18 años. Antes era 21 años."},
]},
{num:7,title:"Las 13 Colonias y la Independencia",subtitle:"Las colonias originales, la Declaración de Independencia, y los Padres Fundadores — preguntas 61 a 70.",
sections:[
{h2:"Las 13 Colonias",content:`<p>Antes de ser una nación, EE.UU. era un conjunto de 13 colonias británicas en la costa este.</p>
<div class="highlight-box"><strong>Pregunta 61:</strong> ¿Cuántas colonias originales había?<br><strong>Respuesta:</strong> <strong>13 colonias</strong>. Las 13 rayas de la bandera las representan.</div>
<p>Las 13 colonias (de norte a sur): New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia.</p>`},
{h2:"¿Por Qué Se Independizaron?",content:`<ul>
<li><strong>"No taxation without representation":</strong> Pagaban impuestos sin representación en el Parlamento</li>
<li>Leyes comerciales restrictivas que beneficiaban a Gran Bretaña</li>
<li>Tropas británicas alojadas en casas de colonos</li>
<li>El cierre del puerto de Boston tras el "Boston Tea Party" (1773)</li>
</ul>
<div class="highlight-box"><strong>Pregunta 62:</strong> ¿Cuáles son dos razones por las que los colonos lucharon contra los británicos?<br><strong>Respuesta:</strong> No tenían autodeterminación / no tenían representación / impuestos sin representación.</div>`},
{h2:"La Declaración de Independencia",content:`<div class="example"><strong>Preguntas 63-65:</strong><br>¿Cuándo fue adoptada? → <strong>4 de julio de 1776</strong><br>¿Qué celebramos el 4 de julio? → <strong>El Día de la Independencia</strong><br>¿Quién fue el primer autor? → <strong>Thomas Jefferson</strong></div>
<div class="highlight-box"><strong>La frase más famosa:</strong> "Sostenemos como evidentes estas verdades: que todos los hombres son creados iguales; que son dotados por su Creador de ciertos derechos inalienables; que entre estos están la Vida, la Libertad y la búsqueda de la Felicidad."</div>`},
{h2:"Los Padres Fundadores",content:`<table><tr><th>Fundador</th><th>Contribución Principal</th></tr>
<tr><td><strong>George Washington</strong></td><td>Primer Presidente, General de la Revolución</td></tr>
<tr><td><strong>Thomas Jefferson</strong></td><td>Autor principal de la Declaración de Independencia</td></tr>
<tr><td><strong>Benjamin Franklin</strong></td><td>Diplomático, inventor, fundador clave</td></tr>
<tr><td><strong>James Madison</strong></td><td>"Padre de la Constitución"</td></tr>
<tr><td><strong>Alexander Hamilton</strong></td><td>Primer Secretario del Tesoro</td></tr></table>`},
{h2:"La Guerra de Independencia",content:`<div class="highlight-box"><strong>Preguntas 66-70:</strong>
<ul>
<li>¿Quién fue el primer Presidente? → <strong>George Washington</strong></li>
<li>¿Cuándo terminó la Guerra de Independencia? → <strong>1783</strong> (Tratado de París)</li>
<li>¿Quiénes eran los enemigos en la Revolución? → <strong>Gran Bretaña / los ingleses</strong></li>
<li>¿Quién fue el principal "padre de la patria"? → <strong>George Washington</strong></li>
</ul></div>`},
],
summary:["Había 13 colonias originales, representadas por las 13 rayas de la bandera","La Declaración fue adoptada el 4 de julio de 1776","Thomas Jefferson fue el principal autor de la Declaración","George Washington fue el primer Presidente y General de la Revolución","La independencia se logró en 1783 con el Tratado de París"],
quiz:[
{q:"¿Cuántas colonias originales había en EE.UU.?",opts:["10","12","13","15"],correct:2,feedback:"Había 13 colonias originales, representadas por las 13 rayas de la bandera americana."},
{q:"¿Cuándo se adoptó la Declaración de Independencia?",opts:["4 de julio de 1775","4 de julio de 1776","1 de enero de 1776","17 de septiembre de 1787"],correct:1,feedback:"La Declaración fue adoptada el 4 de julio de 1776. El Día de la Independencia (4 de julio) celebra este evento."},
{q:"¿Quién fue el principal autor de la Declaración de Independencia?",opts:["George Washington","Benjamin Franklin","Alexander Hamilton","Thomas Jefferson"],correct:3,feedback:"Thomas Jefferson fue el principal autor. También fue el tercer Presidente de EE.UU."},
{q:"¿Cuál fue la razón principal para luchar contra Gran Bretaña?",opts:["Diferencias religiosas","No tenían representación en el gobierno británico","Querían comerciar con Francia","El rey era cruel"],correct:1,feedback:"'No taxation without representation' — los colonos rechazaban pagar impuestos a un gobierno que no los representaba."},
{q:"¿Quién fue el primer Presidente de los Estados Unidos?",opts:["Thomas Jefferson","John Adams","Benjamin Franklin","George Washington"],correct:3,feedback:"George Washington fue el primer Presidente (1789-1797). Es llamado 'el padre de la patria'."},
{q:"¿Qué celebramos el 4 de julio en EE.UU.?",opts:["El día de la Constitución","La victoria en la Segunda Guerra Mundial","El Día de la Independencia","El cumpleaños de Washington"],correct:2,feedback:"El 4 de julio es el Día de la Independencia, celebrando la Declaración de 1776."},
{q:"¿Contra qué país lucharon los colonos americanos?",opts:["Francia","España","Gran Bretaña / Inglaterra","Holanda"],correct:2,feedback:"Los colonos lucharon contra Gran Bretaña en la Guerra de Independencia (1775-1783)."},
{q:"¿Quién es llamado 'el Padre de la Constitución'?",opts:["George Washington","Thomas Jefferson","James Madison","Alexander Hamilton"],correct:2,feedback:"James Madison es llamado 'el Padre de la Constitución' por su papel central en su redacción."},
{q:"¿En qué año terminó la Guerra de Independencia?",opts:["1776","1781","1783","1789"],correct:2,feedback:"La Guerra de Independencia terminó en 1783 con el Tratado de París."},
{q:"¿Qué fue la Louisiana Purchase (1803)?",opts:["La compra de Florida a España","La venta de Alaska a Rusia","La compra de un gran territorio a Francia que duplicó el tamaño de EE.UU.","La adquisición de Texas de México"],correct:2,feedback:"En 1803, Jefferson compró el territorio de Louisiana a Francia por $15 millones, duplicando el tamaño de EE.UU."},
]},
{num:8,title:"La Guerra Civil y Abraham Lincoln",subtitle:"La esclavitud, la Guerra Civil, la Proclamación de Emancipación y la Reconstrucción — preguntas 71 a 80.",
sections:[
{h2:"Las Causas de la Guerra Civil",content:`<p>La Guerra Civil Americana (1861-1865) fue el conflicto más devastador de la historia de EE.UU., con más de 620,000 muertos.</p>
<div class="highlight-box"><strong>Pregunta 71:</strong> ¿Cuál fue una causa importante de la Guerra Civil?<br><strong>Respuestas aceptadas:</strong> La esclavitud / las diferencias económicas entre el Norte y el Sur / los derechos de los estados.</div>
<p>El Sur dependía económicamente de la esclavitud. El Norte era más industrializado y tenía un movimiento abolicionista creciente. Cuando Lincoln ganó en 1860, varios estados del Sur se separaron formando la Confederación.</p>`},
{h2:"Abraham Lincoln",content:`<div class="example"><strong>Preguntas 72-74:</strong><br>¿Qué hizo Abraham Lincoln? → <strong>Liberó a los esclavos; salvó la Unión</strong><br>¿Qué fue la Proclamación de Emancipación? → <strong>Declaró libres a los esclavos en los estados Confederados</strong></div>
<div class="highlight-box">Lincoln fue asesinado el 14 de abril de 1865 en el Teatro Ford por John Wilkes Booth, apenas 5 días después del fin de la guerra. Andrew Johnson lo sucedió.</div>`},
{h2:"La Proclamación de Emancipación",content:`<p>El 1 de enero de 1863, Lincoln emitió la Proclamación de Emancipación. Este documento declaró libres a todos los esclavos en los estados en rebelión.</p>
<div class="highlight-box"><strong>Limitaciones:</strong> La Proclamación no liberó a TODOS los esclavos inmediatamente — solo a aquellos en estados Confederados. La liberación total llegó con la <strong>13ª Enmienda (1865)</strong>.</div>`},
{h2:"Las Enmiendas de la Reconstrucción",content:`<table><tr><th>Enmienda</th><th>Año</th><th>Lo que Hizo</th></tr>
<tr><td><strong>13ª</strong></td><td>1865</td><td>Abolió la esclavitud</td></tr>
<tr><td><strong>14ª</strong></td><td>1868</td><td>Ciudadanía e igualdad para todos los nacidos en EE.UU.</td></tr>
<tr><td><strong>15ª</strong></td><td>1870</td><td>Derecho al voto sin importar raza</td></tr></table>
<div class="example"><strong>Preguntas 75-80:</strong>
<ul>
<li>¿Qué fue la Reconstrucción? → <strong>El período de readmisión de los estados del Sur a la Unión</strong></li>
<li>¿Qué enmienda abolió la esclavitud? → <strong>La 13ª enmienda</strong></li>
</ul></div>`},
{h2:"Legado de la Guerra Civil",content:`<ul>
<li>Resolvió que la esclavitud no podía existir en EE.UU.</li>
<li>Estableció que la Unión era indisoluble</li>
<li>Creó las bases legales para la igualdad racial</li>
<li>Modernizó el gobierno federal</li>
</ul>
<div class="highlight-box">La guerra costó ~620,000 vidas — más americanos que en la Primera y Segunda Guerra Mundial combinadas.</div>`},
],
summary:["La Guerra Civil (1861-1865) fue causada principalmente por la esclavitud","Lincoln (16° Presidente) emitió la Proclamación de Emancipación en 1863","La 13ª Enmienda (1865) abolió la esclavitud formalmente","Las enmiendas 14ª y 15ª establecieron ciudadanía e igualdad de voto","La Reconstrucción fue el período de reintegración del Sur después de la guerra"],
quiz:[
{q:"¿Cuál fue la causa principal de la Guerra Civil Americana?",opts:["Diferencias religiosas","La esclavitud","Un conflicto comercial con Europa","El control del río Mississippi"],correct:1,feedback:"La esclavitud fue la causa central de la Guerra Civil."},
{q:"¿Qué número de presidente fue Abraham Lincoln?",opts:["13°","15°","16°","17°"],correct:2,feedback:"Abraham Lincoln fue el 16° Presidente de EE.UU. (1861-1865)."},
{q:"¿Qué declaró la Proclamación de Emancipación (1863)?",opts:["Terminó la Guerra Civil","Dio el voto a los hombres negros","Liberó a los esclavos en los estados Confederados","Abolió la esclavitud en todo EE.UU."],correct:2,feedback:"La Proclamación declaró libres a los esclavos en los estados en rebelión. La liberación total llegó con la 13ª Enmienda (1865)."},
{q:"¿Qué enmienda abolió la esclavitud en todo EE.UU.?",opts:["11ª enmienda","12ª enmienda","13ª enmienda","14ª enmienda"],correct:2,feedback:"La 13ª Enmienda (diciembre 1865) abolió la esclavitud en todos los estados."},
{q:"¿Qué fue la Reconstrucción?",opts:["La reconstrucción de edificios destruidos","El período de readmisión del Sur a la Unión","El renombramiento de ciudades del Sur","La creación de nuevos estados"],correct:1,feedback:"La Reconstrucción (1865-1877) fue el período de supervisión federal de la readmisión de los estados Confederados."},
{q:"¿Cómo murió Abraham Lincoln?",opts:["En batalla durante la guerra","De enfermedad","Fue asesinado","Murió en un accidente"],correct:2,feedback:"Lincoln fue asesinado por John Wilkes Booth el 14 de abril de 1865 en el Teatro Ford."},
{q:"¿Qué garantizó la 14ª Enmienda (1868)?",opts:["El voto para las mujeres","La abolición de la esclavitud","Ciudadanía e igualdad para todos los nacidos en EE.UU.","El derecho al voto sin impuesto"],correct:2,feedback:"La 14ª Enmienda garantizó ciudadanía a todos los nacidos en EE.UU. e igualdad ante la ley."},
{q:"¿Qué general confederado se rindió al final de la Guerra Civil?",opts:["Stonewall Jackson","Jefferson Davis","Ulysses S. Grant","Robert E. Lee"],correct:3,feedback:"El General Robert E. Lee se rindió al General de la Unión Ulysses S. Grant el 9 de abril de 1865."},
{q:"¿Cuándo terminó la Guerra Civil Americana?",opts:["1863","1864","1865","1866"],correct:2,feedback:"La Guerra Civil terminó en 1865 con la rendición confederada."},
{q:"¿La 15ª Enmienda (1870) protegió qué derecho?",opts:["El derecho a la educación pública","El derecho al voto sin importar raza o color","El derecho a no ser esclavo","El derecho a la ciudadanía por nacimiento"],correct:1,feedback:"La 15ª Enmienda garantizó el derecho al voto a los ciudadanos sin importar su raza o color."},
]},
{num:9,title:"Historia Reciente y EE.UU. en el Mundo",subtitle:"Las guerras mundiales, la Guerra Fría, los derechos civiles y el rol de EE.UU. en el mundo — preguntas 81 a 90.",
sections:[
{h2:"La Segunda Guerra Mundial",content:`<div class="highlight-box"><strong>Pregunta 81:</strong> ¿Por qué entró EE.UU. en la Segunda Guerra Mundial?<br><strong>Respuesta:</strong> Porque Japón atacó Pearl Harbor el 7 de diciembre de 1941.</div>
<p>EE.UU. peleó en dos frentes: contra Alemania e Italia en Europa, y contra Japón en el Pacífico. La guerra terminó con la rendición de Alemania (mayo 1945) y Japón (septiembre 1945).</p>
<div class="example"><strong>Pregunta 82:</strong> ¿Contra quiénes peleó EE.UU. en la Segunda Guerra Mundial?<br><strong>Respuesta:</strong> Japón, Alemania e Italia (las Potencias del Eje).</div>`},
{h2:"La Guerra Fría",content:`<div class="highlight-box"><strong>Pregunta 83:</strong> ¿Quién era el "enemigo" durante la Guerra Fría?<br><strong>Respuesta:</strong> La Unión Soviética (Comunismo).</div>
<p>La Guerra Fría duró desde 1947 hasta la caída del Muro de Berlín (1989) y la disolución de la URSS (1991). Incluyó la carrera espacial, la Guerra de Corea (1950-1953) y Vietnam (1955-1975).</p>`},
{h2:"El Movimiento de Derechos Civiles",content:`<div class="highlight-box"><strong>Pregunta 84:</strong> ¿Qué hizo Martin Luther King Jr.?<br><strong>Respuesta:</strong> Luchó por los derechos civiles / trabajó por la igualdad para todos los americanos.</div>
<p>El movimiento de los 1950-60 logró:</p>
<ul>
<li><strong>Ley de Derechos Civiles de 1964:</strong> Prohibió discriminación por raza, religión y sexo</li>
<li><strong>Ley del Derecho al Voto de 1965:</strong> Eliminó barreras para el voto de los afroamericanos</li>
</ul>`},
{h2:"Geografía y Vecinos",content:`<div class="example"><strong>Preguntas 85-88:</strong><br>¿Qué país está al norte de EE.UU.? → <strong>Canadá</strong><br>¿Qué país está al sur de EE.UU.? → <strong>México</strong><br>¿En qué océano está el oeste de EE.UU.? → <strong>Océano Pacífico</strong><br>¿En qué océano está el este de EE.UU.? → <strong>Océano Atlántico</strong></div>`},
{h2:"Territorios y Pueblos Originales",content:`<div class="highlight-box"><strong>Preguntas 89-90:</strong>
<ul>
<li>¿Quién vivía en América antes que los europeos? → <strong>Los indios americanos (nativos americanos)</strong></li>
<li>¿Cuáles son los territorios de EE.UU.? → <strong>Puerto Rico, Islas Vírgenes, Guam, Samoa Americana, Marianas del Norte</strong></li>
</ul></div>`},
],
summary:["EE.UU. entró en la 2ª Guerra Mundial después del ataque a Pearl Harbor (7 dic 1941)","La Guerra Fría fue la rivalidad con la Unión Soviética (1947-1991)","Martin Luther King Jr. lideró el movimiento de derechos civiles","Los vecinos de EE.UU. son Canadá (norte) y México (sur)","Los territorios incluyen Puerto Rico, Guam, y las Islas Vírgenes"],
quiz:[
{q:"¿Por qué entró EE.UU. en la Segunda Guerra Mundial?",opts:["Para ayudar a Francia","Porque Japón atacó Pearl Harbor","Por el Tratado de la OTAN","Por la invasión de Polonia"],correct:1,feedback:"El 7 de diciembre de 1941, Japón atacó Pearl Harbor, Hawái. Al día siguiente, EE.UU. declaró la guerra a Japón."},
{q:"¿Contra quiénes peleó EE.UU. en la Segunda Guerra Mundial?",opts:["Solo Alemania","Alemania, Italia y Japón","Solo Japón","Rusia, Japón y China"],correct:1,feedback:"Las Potencias del Eje eran Alemania, Italia y Japón. EE.UU. y los Aliados lucharon contra ellos."},
{q:"¿Quién era el enemigo de EE.UU. durante la Guerra Fría?",opts:["China","Alemania","La Unión Soviética (URSS)","Cuba"],correct:2,feedback:"Durante la Guerra Fría (1947-1991), EE.UU. y la URSS fueron rivales ideológicos, representando el capitalismo versus el comunismo."},
{q:"¿Qué hizo Martin Luther King Jr.?",opts:["Fue el primer presidente negro","Lideró el movimiento abolicionista en el s.XIX","Luchó por los derechos civiles e igualdad","Fundó el Partido Demócrata"],correct:2,feedback:"Martin Luther King Jr. lideró el movimiento de derechos civiles de los 1950-1960, abogando por la igualdad mediante la resistencia no violenta."},
{q:"¿Qué logró la Ley de Derechos Civiles de 1964?",opts:["Dio el voto a las mujeres","Abolió la esclavitud","Prohibió la discriminación por raza, religión y sexo","Estableció el seguro médico para todos"],correct:2,feedback:"La Ley de Derechos Civiles de 1964 prohibió la discriminación basada en raza, color, religión, sexo u origen nacional."},
{q:"¿Quién vivía en América antes que los europeos?",opts:["Los africanos","Los asiáticos","Los nativos americanos (indios americanos)","No había nadie"],correct:2,feedback:"Los nativos americanos vivían en América por miles de años antes de la llegada de los europeos."},
{q:"¿Qué país está al norte de los Estados Unidos?",opts:["México","Alaska","Canadá","Groenlandia"],correct:2,feedback:"Canadá comparte la frontera norte con EE.UU. Es la frontera internacional más larga del mundo."},
{q:"¿Qué país está al sur de los Estados Unidos?",opts:["Guatemala","Cuba","México","Venezuela"],correct:2,feedback:"México comparte la frontera sur con EE.UU., de Texas a California."},
{q:"¿Cuáles son los territorios de EE.UU.?",opts:["Cuba, Haití y Jamaica","Puerto Rico, Guam e Islas Vírgenes","Bahamas, Bermuda y Aruba","Solo Puerto Rico"],correct:1,feedback:"Los territorios de EE.UU. incluyen Puerto Rico, Islas Vírgenes Americanas, Guam, Samoa Americana, y las Islas Marianas del Norte."},
{q:"¿En qué año terminó la Guerra Fría?",opts:["1975","1983","1989-1991","2001"],correct:2,feedback:"La Guerra Fría terminó entre 1989 (caída del Muro de Berlín) y 1991 (disolución de la URSS)."},
]},
{num:10,title:"El Proceso de Naturalización",subtitle:"Cómo convertirte en ciudadano americano — requisitos, derechos y responsabilidades — preguntas 91 a 100.",
sections:[
{h2:"¿Cómo Se Puede Ser Ciudadano?",content:`<ol>
<li><strong>Por nacimiento:</strong> Nacer en suelo americano o tener padres ciudadanos</li>
<li><strong>Por naturalización:</strong> El proceso legal para extranjeros adultos</li>
</ol>
<div class="highlight-box"><strong>Pregunta 91:</strong> ¿Cuáles son las dos maneras de convertirse en ciudadano?<br><strong>Respuesta:</strong> Por nacimiento o por naturalización.</div>`},
{h2:"Requisitos para la Naturalización",content:`<ul>
<li>Ser <strong>residente permanente</strong> por al menos <strong>5 años</strong> (o 3 si casado/a con ciudadano)</li>
<li>Tener al menos <strong>18 años</strong></li>
<li>Residencia continua en EE.UU.</li>
<li>Buen carácter moral</li>
<li>Conocimiento básico de inglés</li>
<li>Conocimiento de historia y gobierno</li>
</ul>
<div class="example"><strong>Pregunta 92:</strong> ¿Cuántos años debe ser residente permanente?<br><strong>Respuesta:</strong> <strong>5 años</strong> (o 3 si casado con ciudadano americano).</div>`},
{h2:"El Examen de Ciudadanía",content:`<p>El oficial hace hasta 10 preguntas de las 100 oficiales. Debes responder correctamente al menos <strong>6 de 10</strong> para pasar.</p>
<div class="highlight-box"><strong>Formato:</strong> Las preguntas se hacen verbalmente en inglés — no es un examen escrito. Practica escuchar las preguntas y responder en voz alta.<br><br>Si no pasas, tienes una segunda oportunidad 60-90 días después.</div>`},
{h2:"Derechos Exclusivos de Ciudadanos",content:`<div class="example"><strong>Preguntas 93-95:</strong><br>¿Cuáles son libertades que solo los ciudadanos tienen? → <strong>Votar en elecciones federales, solicitar pasaporte americano</strong></div>
<div class="highlight-box"><strong>Derechos exclusivos de ciudadanos:</strong>
<ul>
<li>Votar en todas las elecciones federales y estatales</li>
<li>Solicitar pasaporte americano</li>
<li>Ser elegido para cargos públicos</li>
<li>Traer familiares más rápidamente</li>
<li>No pueden ser deportados</li>
</ul></div>`},
{h2:"Responsabilidades y el Juramento de Lealtad",content:`<div class="example"><strong>Preguntas 96-100:</strong>
<ul>
<li>¿Cuál es una responsabilidad de los ciudadanos? → <strong>Votar, servir en un jurado, pagar impuestos, defender el país</strong></li>
<li>¿Qué prometes cuando te haces ciudadano? → <strong>Renunciar a la lealtad a otros países, defender la Constitución</strong></li>
<li>¿Cuál es la promesa de naturalización? → <strong>El Juramento de Lealtad (Oath of Allegiance)</strong></li>
</ul></div>
<div class="highlight-box"><strong>El Juramento de Lealtad:</strong> Al naturalizarte, juras defender la Constitución, obedecer las leyes de EE.UU., servir al país si es necesario, y renunciar a la lealtad a cualquier otro país. Es el momento más solemne del proceso.</div>`},
],
summary:["Puedes ser ciudadano por nacimiento o por naturalización","Para naturalizarte: 5 años de Green Card, mayores de 18, inglés básico, examen cívico","En el examen: 10 preguntas, necesitas 6 correctas para pasar","Los ciudadanos pueden votar, obtener pasaporte, y no pueden ser deportados","El Juramento de Lealtad es el acto final del proceso de naturalización"],
quiz:[
{q:"¿Cuáles son las dos formas de convertirse en ciudadano americano?",opts:["Por trabajo o por matrimonio","Por nacimiento o por naturalización","Por inversión o por residencia","Por educación o por servicio militar"],correct:1,feedback:"Puedes ser ciudadano por nacimiento (en suelo americano o de padres ciudadanos) o por naturalización."},
{q:"¿Cuántos años debes ser residente permanente antes de solicitar la ciudadanía?",opts:["1 año","3 años","5 años","10 años"],correct:2,feedback:"Generalmente necesitas 5 años. Si estás casado/a con un ciudadano americano, el período se reduce a 3 años."},
{q:"¿Cuántas preguntas del examen cívico debes responder correctamente?",opts:["5 de 10","6 de 10","7 de 10","10 de 10"],correct:1,feedback:"El oficial hace 10 preguntas. Necesitas 6 correctas para pasar."},
{q:"¿Cuál es un derecho exclusivo de los ciudadanos americanos?",opts:["Trabajar legalmente","Abrir un negocio","Votar en elecciones federales","Conducir con licencia"],correct:2,feedback:"Solo los ciudadanos pueden votar en elecciones federales. Los residentes permanentes NO pueden votar."},
{q:"¿Qué prometes en el Juramento de Lealtad?",opts:["Aprender inglés perfectamente","Pagar más impuestos","Defender la Constitución y renunciar a lealtad a otros países","Nunca salir de EE.UU."],correct:2,feedback:"En el Juramento prometes defender la Constitución, obedecer las leyes, y renunciar a la lealtad a otros países."},
{q:"¿Cuál es una responsabilidad importante de los ciudadanos?",opts:["Aprender a hablar 3 idiomas","Votar en las elecciones","Vivir en la misma ciudad toda la vida","Tener hijos"],correct:1,feedback:"Votar es una de las responsabilidades más importantes de los ciudadanos americanos."},
{q:"¿A qué edad mínima puedes solicitar la naturalización?",opts:["16 años","17 años","18 años","21 años"],correct:2,feedback:"Debes tener al menos 18 años para solicitar la naturalización."},
{q:"¿Qué pasa si no pasas el examen la primera vez?",opts:["Debes esperar 5 años más","Tienes una segunda oportunidad en 60-90 días","Pierdes el derecho para siempre","Debes tomar clases obligatorias"],correct:1,feedback:"Si no pasas, USCIS programa un segundo examen 60-90 días después."},
{q:"¿Pueden los residentes permanentes ser deportados?",opts:["No, tienen los mismos derechos que los ciudadanos","Sí, pueden ser deportados en ciertas circunstancias","Solo si cometen delitos graves","Solo en los primeros 5 años"],correct:1,feedback:"Sí, los residentes permanentes pueden ser deportados. Los ciudadanos naturalizados NO pueden ser deportados."},
{q:"¿Cuántos años de residencia necesita alguien casado con un ciudadano americano?",opts:["5 años","4 años","3 años","1 año"],correct:2,feedback:"Si estás casado/a con un ciudadano americano, el período se reduce de 5 a 3 años."},
]},
];

function buildQuizData(ch) {
  return `window.QUIZ_DATA = {
  lang: "es",
  questions: [
${ch.quiz.map(q => `    { q: ${JSON.stringify(q.q)}, opts: ${JSON.stringify(q.opts)}, correct: ${q.correct}, feedback: ${JSON.stringify(q.feedback)} }`).join(',\n')}
  ]
};`;
}

function buildHTML(ch) {
  const sectionsHTML = ch.sections.map(s => `\n  <h2>${s.h2}</h2>\n  ${s.content}`).join('\n');
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ch.title} | Ciudadanía Americana | Español Sin Fronteras</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Georgia,'Times New Roman',serif;background:#f8f9fa;color:#1a1a2e;line-height:1.8}
    .wrapper{max-width:860px;margin:0 auto;background:#fff;padding:60px 72px;min-height:100vh}
    .course-tag{font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#b45309;margin-bottom:12px}
    h1{font-size:2rem;font-weight:700;color:#0f172a;margin-bottom:8px;line-height:1.3}
    .subtitle{font-size:1.05rem;color:#64748b;margin-bottom:40px;font-style:italic}
    hr{border:none;border-top:2px solid #fde68a;margin:32px 0}
    h2{font-size:1.35rem;font-weight:700;color:#1e293b;margin:36px 0 16px}
    h3{font-size:1.1rem;font-weight:700;color:#b45309;margin:24px 0 10px}
    p{margin-bottom:16px;font-size:1rem}
    ul,ol{margin:16px 0 16px 24px}
    li{margin-bottom:8px;font-size:1rem}
    .highlight-box{background:#fffbeb;border-left:4px solid #f59e0b;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}
    .warning-box{background:#fff7ed;border-left:4px solid #ea580c;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}
    .example{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin:20px 0}
    table{width:100%;border-collapse:collapse;margin:24px 0;font-size:.95rem}
    th{background:#b45309;color:#fff;padding:12px 16px;text-align:left;font-family:Arial,sans-serif;font-weight:600}
    td{padding:11px 16px;border-bottom:1px solid #e2e8f0}
    tr:nth-child(even) td{background:#fffbeb}
    .summary{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:28px 32px;margin:40px 0 0}
    .summary h2{color:#fbbf24;margin-top:0}
    .summary li{color:#cbd5e1}
    @media(max-width:640px){.wrapper{padding:32px 24px}h1{font-size:1.5rem}}
  </style>
</head>
<body>
<div class="wrapper">
  <div class="course-tag">Ciudadanía Americana · Capítulo ${ch.num}</div>
  <h1>${ch.title}</h1>
  <p class="subtitle">${ch.subtitle}</p>
  <hr>
${sectionsHTML}

  <div class="summary">
    <h2>📋 Resumen del Capítulo</h2>
    <ul>
${ch.summary.map(s => `      <li>${s}</li>`).join('\n')}
    </ul>
  </div>
</div>
<script>
${buildQuizData(ch)}
</script>
<script src="quiz-engine.js"></script>
</body>
</html>`;
}

const outDir = 'public/content';
for (const ch of CHAPTERS) {
  const fname = `CIUDADANIA CAP ${ch.num} ${ch.title.substring(0,35).trim()} ESF.html`;
  const fpath = path.join(outDir, fname);
  fs.writeFileSync(fpath, buildHTML(ch), 'utf8');
  console.log('✓', fname);
}
console.log(`\nDone — ${CHAPTERS.length} chapters.`);
