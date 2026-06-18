const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "public", "content");

const chapters = [
  {
    n: 1, file: "ECONOMIA CAP 1 Oferta y Demanda ESF.html",
    title: "Oferta y Demanda", subtitle: "El motor que mueve todos los mercados del mundo — cómo los precios se forman y por qué cambian.",
    body: `
  <h2>¿Qué es la Oferta y la Demanda?</h2>
  <p>La <strong>oferta y la demanda</strong> son las fuerzas fundamentales que determinan los precios y la cantidad de bienes y servicios en cualquier economía de mercado. Es el concepto más importante de toda la economía.</p>
  <div class="highlight-box"><strong>Definición:</strong><br>
  <strong>Demanda</strong> = cuánto quieren comprar los consumidores a diferentes precios.<br>
  <strong>Oferta</strong> = cuánto quieren vender los productores a diferentes precios.</div>

  <h2>La Ley de la Demanda</h2>
  <p>La ley de la demanda establece: <em>cuando el precio de un bien sube, la cantidad demandada baja</em> (y viceversa). Existe una relación inversa entre precio y cantidad demandada.</p>
  <div class="example"><strong>Ejemplo:</strong> Si el precio del café sube de $2 a $5, menos personas lo comprarán. Algunos cambiarán al té o al chocolate. La curva de demanda es descendente.</div>
  <p><strong>Factores que desplazan la demanda:</strong></p>
  <ul>
    <li>Ingreso de los consumidores (si ganan más, demandan más)</li>
    <li>Precio de bienes relacionados (sustitutos o complementarios)</li>
    <li>Gustos y preferencias</li>
    <li>Expectativas futuras sobre precios</li>
    <li>Número de compradores en el mercado</li>
  </ul>

  <h2>La Ley de la Oferta</h2>
  <p>La ley de la oferta establece: <em>cuando el precio sube, los productores quieren vender más</em>. Existe una relación directa entre precio y cantidad ofrecida. La curva de oferta es ascendente.</p>
  <div class="example"><strong>Ejemplo:</strong> Si el precio del aguacate sube de $1 a $3, más agricultores plantarán aguacates para aprovechar el mayor precio.</div>
  <p><strong>Factores que desplazan la oferta:</strong></p>
  <ul>
    <li>Costos de producción (materia prima, salarios, energía)</li>
    <li>Tecnología disponible</li>
    <li>Número de productores</li>
    <li>Políticas del gobierno (impuestos, subsidios)</li>
    <li>Expectativas de precios futuros</li>
  </ul>

  <h2>El Punto de Equilibrio</h2>
  <p>El <strong>equilibrio de mercado</strong> ocurre cuando la cantidad ofrecida es igual a la cantidad demandada. En ese punto se establece el <strong>precio de equilibrio</strong>. El mercado tiende naturalmente hacia este punto.</p>
  <div class="highlight-box"><strong>Si el precio está por encima del equilibrio:</strong> hay exceso de oferta (sobreproducción) → el precio baja.<br>
  <strong>Si el precio está por debajo del equilibrio:</strong> hay exceso de demanda (escasez) → el precio sube.</div>

  <h2>Elasticidad: ¿Qué tan sensible es la demanda?</h2>
  <p>La <strong>elasticidad precio de la demanda</strong> mide cuánto cambia la demanda cuando cambia el precio:</p>
  <table>
    <tr><th>Tipo</th><th>Característica</th><th>Ejemplo</th></tr>
    <tr><td>Demanda elástica</td><td>Muy sensible al precio</td><td>Televisores, ropa de lujo</td></tr>
    <tr><td>Demanda inelástica</td><td>Poco sensible al precio</td><td>Insulina, gasolina, sal</td></tr>
    <tr><td>Demanda unitaria</td><td>Cambio proporcional</td><td>Muchos bienes básicos</td></tr>
  </table>

  <div class="summary"><h2>Resumen del Capítulo 1</h2><ul>
    <li>Demanda: relación inversa entre precio y cantidad comprada</li>
    <li>Oferta: relación directa entre precio y cantidad producida</li>
    <li>El equilibrio es donde oferta = demanda → precio de mercado</li>
    <li>La elasticidad mide la sensibilidad de la demanda al precio</li>
    <li>Los mercados se ajustan solos hacia el equilibrio</li>
  </ul></div>`,
    quiz: [
      {q:"¿Qué establece la ley de la demanda?",options:["A mayor precio, mayor demanda","A menor precio, menor demanda","A mayor precio, menor demanda","Precio y demanda no se relacionan"],answer:2},
      {q:"¿Qué establece la ley de la oferta?",options:["A mayor precio, menor oferta","A mayor precio, mayor oferta","El precio no afecta la oferta","Solo los monopolios siguen esta ley"],answer:1},
      {q:"¿Qué ocurre en el punto de equilibrio de mercado?",options:["La oferta supera a la demanda","La demanda supera a la oferta","Oferta y demanda son iguales","El gobierno fija el precio"],answer:2},
      {q:"Si el precio de un bien está por ENCIMA del equilibrio, ¿qué ocurre?",options:["Hay escasez del bien","Hay exceso de oferta","Los consumidores compran más","El precio sigue subiendo"],answer:1},
      {q:"¿Cuál es un factor que desplaza la DEMANDA?",options:["Costo de materia prima","Número de productores","Ingreso de los consumidores","Tecnología de producción"],answer:2},
      {q:"¿Cuál es un factor que desplaza la OFERTA?",options:["Gustos del consumidor","Expectativas de precios futuros","Número de compradores","Ingresos de los hogares"],answer:1},
      {q:"Un bien con demanda INELÁSTICA es...",options:["Televisores de lujo","Ropa de moda","Insulina para diabéticos","Boletos de cine"],answer:2},
      {q:"Si el precio del café sube 10% y la demanda baja 20%, ¿la demanda es...?",options:["Inelástica","Unitaria","Elástica","Perfectamente rígida"],answer:2},
      {q:"¿Qué pasará en el mercado si hay escasez (precio por debajo del equilibrio)?",options:["El precio bajará más","El precio subirá","La oferta bajará","Los consumidores comprarán menos"],answer:1},
      {q:"¿Cuál es la forma de la curva de demanda?",options:["Ascendente","Plana","Descendente","En U"],answer:2},
    ]
  },
  {
    n: 2, file: "ECONOMIA CAP 2 El PIB y el Crecimiento Economico ESF.html",
    title: "El PIB y el Crecimiento Económico", subtitle: "Cómo se mide el tamaño de una economía y qué significa crecer o entrar en recesión.",
    body: `
  <h2>¿Qué es el PIB?</h2>
  <p>El <strong>Producto Interno Bruto (PIB)</strong> es el valor total de todos los bienes y servicios <strong>finales</strong> producidos en un país durante un período determinado (generalmente un año). Es el indicador más usado para medir el tamaño de una economía.</p>
  <div class="highlight-box"><strong>Fórmula del PIB (enfoque del gasto):</strong><br>
  <strong>PIB = C + I + G + (X − M)</strong><br>
  C = Consumo privado · I = Inversión · G = Gasto público · X = Exportaciones · M = Importaciones</div>

  <h2>PIB Nominal vs. PIB Real</h2>
  <table>
    <tr><th>Tipo</th><th>Descripción</th><th>Problema</th></tr>
    <tr><td>PIB Nominal</td><td>Calculado a precios actuales</td><td>Puede subir solo por inflación</td></tr>
    <tr><td>PIB Real</td><td>Ajustado por inflación (precios constantes)</td><td>Más preciso para comparar períodos</td></tr>
    <tr><td>PIB per cápita</td><td>PIB dividido entre la población</td><td>Mide nivel de vida promedio</td></tr>
  </table>
  <div class="example"><strong>Ejemplo:</strong> Si el PIB nominal sube 10% pero la inflación fue 8%, el PIB real solo creció 2%. El crecimiento "real" fue mucho menor que el nominal.</div>

  <h2>Fases del Ciclo Económico</h2>
  <p>Las economías no crecen en línea recta — pasan por ciclos con fases distintas:</p>
  <ul>
    <li><strong>Expansión:</strong> El PIB crece, el empleo aumenta, los negocios invierten más.</li>
    <li><strong>Auge (pico):</strong> Punto máximo del ciclo. Alta producción, pleno empleo, posible inflación.</li>
    <li><strong>Recesión:</strong> El PIB cae por dos trimestres consecutivos. Aumenta el desempleo.</li>
    <li><strong>Depresión:</strong> Recesión grave y prolongada (ej: la Gran Depresión de 1929).</li>
    <li><strong>Recuperación:</strong> El PIB vuelve a crecer desde el fondo del ciclo.</li>
  </ul>
  <div class="highlight-box"><strong>Definición técnica:</strong> Una <strong>recesión</strong> ocurre cuando el PIB real cae durante al menos dos trimestres consecutivos. Si dura más de dos años con una caída superior al 10%, se llama depresión.</div>

  <h2>¿Qué Impulsa el Crecimiento Económico?</h2>
  <p>El crecimiento a largo plazo depende de cuatro factores principales:</p>
  <ol>
    <li><strong>Capital físico:</strong> Maquinaria, infraestructura, fábricas.</li>
    <li><strong>Capital humano:</strong> Educación, salud y habilidades de la fuerza laboral.</li>
    <li><strong>Recursos naturales:</strong> Tierra, minerales, petróleo, agua.</li>
    <li><strong>Tecnología:</strong> Innovación y mejoras en productividad.</li>
  </ol>
  <div class="example"><strong>Ejemplo real:</strong> Corea del Sur pasó de ser uno de los países más pobres del mundo en 1960 a una economía avanzada en 40 años, gracias a inversión masiva en educación (capital humano) y tecnología.</div>

  <h2>Limitaciones del PIB</h2>
  <p>El PIB no lo mide todo. No captura:</p>
  <ul>
    <li>La distribución del ingreso (desigualdad)</li>
    <li>El bienestar subjetivo (felicidad)</li>
    <li>El daño ambiental</li>
    <li>La economía informal o trabajo no remunerado</li>
  </ul>
  <div class="highlight-box">Por eso algunos países usan métricas alternativas como el <strong>IDH</strong> (Índice de Desarrollo Humano) que combina PIB con educación y esperanza de vida.</div>

  <div class="summary"><h2>Resumen del Capítulo 2</h2><ul>
    <li>PIB = valor total de bienes y servicios finales producidos en un país en un año</li>
    <li>Fórmula: PIB = C + I + G + (X − M)</li>
    <li>PIB real (ajustado por inflación) es más útil que el nominal para comparar</li>
    <li>Ciclo económico: expansión → auge → recesión → recuperación</li>
    <li>Recesión = caída del PIB real por 2+ trimestres consecutivos</li>
  </ul></div>`,
    quiz: [
      {q:"¿Qué significa PIB?",options:["Producto Internacional Básico","Precio Interno Bruto","Producto Interno Bruto","Presupuesto Interno del Banco"],answer:2},
      {q:"¿Cuál es la fórmula del PIB por el enfoque del gasto?",options:["C + I + G + (X-M)","C + I - G + X","C - I + G + M","C + G + X - I"],answer:0},
      {q:"¿Cuántos trimestres consecutivos de caída del PIB definen una recesión?",options:["1","2","3","4"],answer:1},
      {q:"¿Cuál es la diferencia entre PIB nominal y PIB real?",options:["El nominal mide per cápita","El real está ajustado por inflación","El nominal incluye exportaciones","El real solo mide manufactura"],answer:1},
      {q:"¿Cuál es la fase del ciclo económico con el mayor nivel de actividad?",options:["Expansión","Auge (pico)","Recuperación","Contracción"],answer:1},
      {q:"¿Cuál factor impulsa el crecimiento económico a largo plazo?",options:["Inflación alta","Deuda pública","Inversión en educación (capital humano)","Impuestos bajos siempre"],answer:2},
      {q:"¿Qué mide el PIB per cápita?",options:["El PIB total del país","El PIB dividido entre la población","El PIB ajustado por inflación","El PIB de las exportaciones"],answer:1},
      {q:"¿Qué NO mide el PIB?",options:["Valor de las exportaciones","Gasto del gobierno","Desigualdad de ingresos","Consumo privado"],answer:2},
      {q:"Si el PIB nominal sube 8% y la inflación es 6%, ¿cuánto creció el PIB real?",options:["8%","6%","2%","14%"],answer:2},
      {q:"¿Qué indicador combina PIB, educación y esperanza de vida?",options:["IPC","IDH","PIB real","Balanza comercial"],answer:1},
    ]
  },
  {
    n: 3, file: "ECONOMIA CAP 3 Inflacion y Poder Adquisitivo ESF.html",
    title: "Inflación y Poder Adquisitivo", subtitle: "Por qué suben los precios, cómo se mide y qué puedes hacer para proteger tu dinero.",
    body: `
  <h2>¿Qué es la Inflación?</h2>
  <p>La <strong>inflación</strong> es el aumento generalizado y sostenido de los precios de bienes y servicios en una economía durante un período de tiempo. Cuando hay inflación, cada peso o dólar compra menos cosas — disminuye el <strong>poder adquisitivo</strong>.</p>
  <div class="highlight-box"><strong>Ejemplo simple:</strong> Si en 2020 una canasta de alimentos costaba $100 y en 2025 cuesta $130, hubo una inflación del 30% en 5 años. Tu dinero vale 30% menos en términos de lo que puedes comprar.</div>

  <h2>¿Cómo se Mide la Inflación?</h2>
  <p>El instrumento principal es el <strong>Índice de Precios al Consumidor (IPC)</strong>. Se construye midiendo el precio de una "canasta básica" de bienes y servicios que compra un hogar típico.</p>
  <table>
    <tr><th>Indicador</th><th>Descripción</th></tr>
    <tr><td>IPC (CPI en inglés)</td><td>Precios de bienes de consumo para hogares</td></tr>
    <tr><td>IPP (PPI)</td><td>Precios al productor (antes de llegar al consumidor)</td></tr>
    <tr><td>Deflactor del PIB</td><td>Mide inflación en toda la economía</td></tr>
  </table>
  <div class="example"><strong>Fórmula:</strong> Tasa de inflación = [(IPC actual − IPC anterior) / IPC anterior] × 100%</div>

  <h2>Causas de la Inflación</h2>
  <ul>
    <li><strong>Inflación de demanda:</strong> "Demasiado dinero persiguiendo pocos bienes." Cuando la demanda supera la oferta disponible. Ej: después de grandes estímulos económicos.</li>
    <li><strong>Inflación de costos:</strong> Cuando los costos de producción suben (petróleo, salarios, materias primas), y los productores trasladan ese costo al precio final.</li>
    <li><strong>Inflación monetaria:</strong> Cuando el banco central imprime demasiado dinero, hay más dinero disponible pero los mismos bienes → los precios suben.</li>
    <li><strong>Expectativas inflacionarias:</strong> Si todos esperan que los precios subirán, los trabajadores piden más salarios y las empresas suben precios → se cumple la expectativa.</li>
  </ul>

  <h2>Tipos de Inflación por Intensidad</h2>
  <table>
    <tr><th>Tipo</th><th>Rango anual</th><th>Efecto</th></tr>
    <tr><td>Inflación moderada</td><td>1% – 5%</td><td>Normal en economías sanas</td></tr>
    <tr><td>Inflación alta</td><td>5% – 50%</td><td>Preocupante, erosiona ahorros</td></tr>
    <tr><td>Hiperinflación</td><td>Más del 50% mensual</td><td>Colapso económico (Ej: Venezuela, Zimbabue)</td></tr>
    <tr><td>Deflación</td><td>Por debajo de 0%</td><td>Los precios bajan; puede ser muy dañina</td></tr>
  </table>
  <div class="highlight-box"><strong>Deflación:</strong> Aunque parezca buena (los precios bajan), la deflación es peligrosa porque los consumidores posponen compras esperando precios aún más bajos, lo que paraliza la economía.</div>

  <h2>Cómo Proteger tu Dinero de la Inflación</h2>
  <ul>
    <li><strong>Invertir en activos reales:</strong> bienes raíces, oro, commodities mantienen valor.</li>
    <li><strong>Acciones:</strong> las empresas ajustan precios con la inflación.</li>
    <li><strong>Bonos indexados a inflación (TIPS):</strong> el gobierno ajusta el pago según el IPC.</li>
    <li><strong>Evitar el efectivo inactivo:</strong> el dinero debajo del colchón pierde valor cada año.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 3</h2><ul>
    <li>Inflación = aumento generalizado de precios → menos poder adquisitivo</li>
    <li>Se mide principalmente con el IPC (Índice de Precios al Consumidor)</li>
    <li>Causas: exceso de demanda, costos de producción, impresión de dinero</li>
    <li>Hiperinflación: inflación extrema que destruye el valor del dinero</li>
    <li>Protégete invirtiendo en activos reales, no guardando efectivo</li>
  </ul></div>`,
    quiz: [
      {q:"¿Qué es la inflación?",options:["Caída generalizada de precios","Aumento generalizado de precios","Aumento del desempleo","Reducción del PIB"],answer:1},
      {q:"¿Cuál es el indicador principal para medir la inflación?",options:["PIB","IPP","IPC","IDH"],answer:2},
      {q:"¿Qué causa la inflación de demanda?",options:["Costos de producción altos","Demasiado dinero persiguiendo pocos bienes","Reducción de exportaciones","Aumento del desempleo"],answer:1},
      {q:"¿Qué es la hiperinflación?",options:["Inflación de 5% anual","Inflación del 10% mensual","Inflación superior al 50% mensual","Deflación severa"],answer:2},
      {q:"¿Por qué la deflación puede ser dañina?",options:["Porque los precios suben demasiado","Porque los consumidores posponen compras","Porque reduce exportaciones","Porque genera desempleo inmediato"],answer:1},
      {q:"¿Qué instrumento mide los precios que pagan los productores?",options:["IPC","Deflactor del PIB","IPP","TIPS"],answer:2},
      {q:"¿Cuál es la tasa de inflación NORMAL en economías sanas?",options:["0%","1%-5%","10%-20%","Más del 50%"],answer:1},
      {q:"Si el IPC pasa de 200 a 210, ¿cuál es la tasa de inflación?",options:["5%","10%","2%","20%"],answer:0},
      {q:"¿Cuál estrategia protege mejor contra la inflación?",options:["Guardar efectivo en casa","Comprar bonos del gobierno a tasa fija","Invertir en bienes raíces o acciones","Poner el dinero en una cuenta corriente"],answer:2},
      {q:"¿Qué es el poder adquisitivo?",options:["El salario mensual","La cantidad de bienes que puedes comprar con tu dinero","El nivel de precios de exportación","El saldo de tu cuenta bancaria"],answer:1},
    ]
  },
  {
    n: 4, file: "ECONOMIA CAP 4 El Banco Central y la Politica Monetaria ESF.html",
    title: "El Banco Central y la Política Monetaria", subtitle: "Quién controla el dinero, cómo funcionan las tasas de interés y por qué importan.",
    body: `
  <h2>¿Qué es un Banco Central?</h2>
  <p>El <strong>banco central</strong> es la institución del gobierno que regula el sistema monetario y financiero de un país. Sus funciones principales son controlar la inflación, estabilizar la moneda y supervisar el sistema bancario.</p>
  <div class="highlight-box"><strong>Ejemplos de bancos centrales:</strong><br>
  🇺🇸 EE.UU.: La Reserva Federal (<em>The Fed</em>)<br>
  🇪🇺 Europa: Banco Central Europeo (BCE)<br>
  🇲🇽 México: Banco de México (Banxico)<br>
  🇵🇪 Perú: Banco Central de Reserva del Perú (BCRP)</div>

  <h2>La Política Monetaria</h2>
  <p>La <strong>política monetaria</strong> es el conjunto de decisiones que toma el banco central sobre la cantidad de dinero en circulación y las tasas de interés para alcanzar sus objetivos económicos.</p>
  <table>
    <tr><th>Tipo</th><th>Acción</th><th>Objetivo</th></tr>
    <tr><td>Política expansiva</td><td>Baja tasas de interés, compra bonos</td><td>Estimular la economía, reducir desempleo</td></tr>
    <tr><td>Política contractiva</td><td>Sube tasas de interés, vende bonos</td><td>Reducir la inflación, enfriar la economía</td></tr>
  </table>

  <h2>La Tasa de Interés: La Palanca Principal</h2>
  <p>La <strong>tasa de interés de referencia</strong> (o tasa de política monetaria) es el instrumento más poderoso del banco central. Afecta el costo de préstamos para bancos comerciales y, en cascada, para empresas y personas.</p>
  <div class="highlight-box"><strong>Cuando el banco central SUBE las tasas:</strong><br>
  → Los préstamos se encarecen → Las empresas invierten menos → Las personas consumen menos → La inflación baja.<br><br>
  <strong>Cuando el banco central BAJA las tasas:</strong><br>
  → Los préstamos se abaratan → Más inversión y consumo → La economía crece → Puede aumentar la inflación.</div>

  <h2>Operaciones de Mercado Abierto</h2>
  <p>Además de las tasas, el banco central puede comprar o vender <strong>bonos del gobierno</strong> para controlar la cantidad de dinero en circulación:</p>
  <ul>
    <li><strong>Compra de bonos:</strong> Inyecta dinero al sistema (política expansiva)</li>
    <li><strong>Venta de bonos:</strong> Retira dinero del sistema (política contractiva)</li>
  </ul>
  <div class="example"><strong>Ejemplo:</strong> Durante la pandemia de COVID-19 (2020), La Fed bajó tasas a casi 0% y compró billones en bonos para evitar un colapso económico. Esto impulsó la recuperación pero también generó la alta inflación de 2021–2022.</div>

  <h2>El Encaje Bancario</h2>
  <p>El banco central también puede cambiar el <strong>encaje legal</strong> (o encaje bancario): el porcentaje mínimo de depósitos que los bancos deben mantener en reserva y no prestar.</p>
  <ul>
    <li>Si sube el encaje: los bancos prestan menos dinero → menos crédito disponible → frena la economía</li>
    <li>Si baja el encaje: los bancos prestan más → más crédito → estimula la economía</li>
  </ul>

  <h2>Independencia del Banco Central</h2>
  <p>La mayoría de los bancos centrales son <strong>independientes del gobierno</strong>. Esto es clave: si el gobierno controlara directamente el banco central, podría "imprimir dinero" para financiar gastos políticos, lo que generaría hiperinflación.</p>
  <div class="highlight-box"><strong>Venezuela y Argentina</strong> son ejemplos de qué pasa cuando el gobierno controla la emisión de dinero: hiperinflación y desconfianza en la moneda.</div>

  <div class="summary"><h2>Resumen del Capítulo 4</h2><ul>
    <li>El banco central controla la política monetaria (oferta de dinero y tasas)</li>
    <li>En EE.UU. es La Fed; en México, Banxico; en Perú, el BCRP</li>
    <li>Política expansiva: baja tasas → más crédito → más crecimiento</li>
    <li>Política contractiva: sube tasas → menos crédito → menos inflación</li>
    <li>La independencia del banco central es clave para evitar la hiperinflación</li>
  </ul></div>`,
    quiz: [
      {q:"¿Cuál es el banco central de EE.UU.?",options:["El Banco Mundial","La Reserva Federal (Fed)","El FMI","El Banco de América"],answer:1},
      {q:"¿Qué hace la política monetaria EXPANSIVA?",options:["Sube las tasas de interés","Vende bonos del gobierno","Baja las tasas de interés","Aumenta los impuestos"],answer:2},
      {q:"¿Qué objetivo tiene la política monetaria CONTRACTIVA?",options:["Estimular el empleo","Aumentar el crédito","Reducir la inflación","Subir el PIB"],answer:2},
      {q:"¿Qué pasa cuando el banco central SUBE las tasas de interés?",options:["Los préstamos se abaratan","Hay más inversión","Los préstamos se encarecen","La inflación sube"],answer:2},
      {q:"¿Qué son las Operaciones de Mercado Abierto?",options:["Compra-venta de acciones en bolsa","Compra-venta de bonos del gobierno por el banco central","Comercio internacional de bienes","Apertura de nuevos bancos"],answer:1},
      {q:"¿Qué es el encaje bancario?",options:["La tasa de interés de referencia","El porcentaje mínimo de depósitos que los bancos deben mantener en reserva","El impuesto a las transacciones bancarias","La tasa de cambio de moneda"],answer:1},
      {q:"¿Por qué es importante que el banco central sea independiente del gobierno?",options:["Para que el gobierno gaste más","Para evitar que se imprima dinero sin control","Para aumentar las exportaciones","Para controlar el desempleo directamente"],answer:1},
      {q:"¿Qué ocurrió con las tasas de la Fed durante la pandemia (2020)?",options:["Las subió al máximo","Las bajó a casi 0%","Las mantuvo sin cambios","Las subió 5%"],answer:1},
      {q:"Si el banco central baja el encaje legal, ¿qué efecto tiene?",options:["Los bancos prestan menos","Los bancos prestan más","La inflación baja automáticamente","El PIB cae"],answer:1},
      {q:"¿Cuál es el banco central de México?",options:["Banorte","Banco de México (Banxico)","BBVA México","Banco del Bienestar"],answer:1},
    ]
  },
  {
    n: 5, file: "ECONOMIA CAP 5 El Desempleo ESF.html",
    title: "El Desempleo", subtitle: "Tipos de desempleo, cómo se mide y qué políticas existen para reducirlo.",
    body: `
  <h2>¿Qué es el Desempleo?</h2>
  <p>El <strong>desempleo</strong> ocurre cuando personas que están en edad y condiciones de trabajar, que buscan activamente empleo, no encuentran trabajo. Es uno de los problemas económicos y sociales más importantes de cualquier país.</p>
  <div class="highlight-box"><strong>Tasa de desempleo = </strong>(Desempleados / Población económicamente activa) × 100%<br><br>
  La <strong>Población Económicamente Activa (PEA)</strong> incluye a todas las personas en edad laboral (generalmente 15–64 años) que trabajan o buscan trabajo activamente.</div>

  <h2>Tipos de Desempleo</h2>
  <table>
    <tr><th>Tipo</th><th>Causa</th><th>Ejemplo</th></tr>
    <tr><td><strong>Friccional</strong></td><td>Tiempo entre dejar un trabajo y encontrar otro</td><td>Un ingeniero que renunció y busca nueva oportunidad</td></tr>
    <tr><td><strong>Estructural</strong></td><td>Cambios tecnológicos o en la economía que eliminan ciertos empleos</td><td>Operadores de máquinas reemplazados por robots</td></tr>
    <tr><td><strong>Cíclico</strong></td><td>Caída en la demanda agregada durante una recesión</td><td>Despidos masivos en 2008–2009</td></tr>
    <tr><td><strong>Estacional</strong></td><td>Variaciones regulares en la demanda laboral por épocas del año</td><td>Empleados de tiendas en Navidad despedidos en enero</td></tr>
  </table>

  <h2>Desempleo Natural</h2>
  <p>Siempre existirá algo de desempleo friccional y estructural. La tasa de desempleo que existe incluso en una economía sana se llama <strong>Tasa Natural de Desempleo (NAIRU)</strong>. En la mayoría de países desarrollados, se considera "pleno empleo" cuando el desempleo está entre <strong>4% y 6%</strong>.</p>
  <div class="highlight-box"><strong>Pleno empleo</strong> NO significa que nadie está desempleado. Significa que el desempleo cíclico es casi cero y solo existe el desempleo friccional y estructural.</div>

  <h2>Consecuencias del Desempleo</h2>
  <p>El desempleo tiene efectos negativos a múltiples niveles:</p>
  <ul>
    <li><strong>Individual:</strong> Pérdida de ingresos, estrés, deterioro de habilidades.</li>
    <li><strong>Social:</strong> Aumento de la pobreza, criminalidad y problemas de salud mental.</li>
    <li><strong>Económico:</strong> Menor consumo → menor PIB → menor recaudación fiscal → más deuda pública.</li>
    <li><strong>Ley de Okun:</strong> Por cada 1% de aumento en el desempleo, el PIB cae aproximadamente 2%.</li>
  </ul>

  <h2>Políticas para Reducir el Desempleo</h2>
  <ul>
    <li><strong>Políticas fiscales expansivas:</strong> El gobierno aumenta el gasto público o baja impuestos para estimular la demanda.</li>
    <li><strong>Política monetaria expansiva:</strong> El banco central baja tasas para fomentar inversión y creación de empleos.</li>
    <li><strong>Capacitación laboral:</strong> Programas para reconvertir trabajadores con habilidades obsoletas (reduce el desempleo estructural).</li>
    <li><strong>Servicios de empleo:</strong> Agencias de colocación, bolsas de trabajo (reduce el friccional).</li>
    <li><strong>Inversión en infraestructura:</strong> Genera empleo directo e indirecto inmediato.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 5</h2><ul>
    <li>Desempleo = personas que buscan trabajo pero no lo encuentran</li>
    <li>4 tipos: friccional (entre trabajos), estructural (tecnología), cíclico (recesión), estacional</li>
    <li>Tasa de desempleo = desempleados / PEA × 100%</li>
    <li>Pleno empleo existe con 4%–6% de desempleo (solo friccional y estructural)</li>
    <li>Políticas: gasto público, bajar tasas, capacitación, infraestructura</li>
  </ul></div>`,
    quiz: [
      {q:"¿Cómo se calcula la tasa de desempleo?",options:["Desempleados / PIB × 100","Desempleados / PEA × 100","PEA / Población total × 100","Desempleados / Empleados × 100"],answer:1},
      {q:"¿Qué tipo de desempleo ocurre durante una recesión?",options:["Friccional","Estructural","Estacional","Cíclico"],answer:3},
      {q:"¿Qué tipo de desempleo afecta a operarios reemplazados por robots?",options:["Friccional","Estructural","Cíclico","Estacional"],answer:1},
      {q:"¿Qué es el desempleo friccional?",options:["Desempleo por cambios tecnológicos","Desempleo temporal entre trabajos","Desempleo por recesión","Desempleo temporal por época del año"],answer:1},
      {q:"¿Cuál es la tasa de desempleo considerada 'pleno empleo'?",options:["0%","1%-2%","4%-6%","10%-15%"],answer:2},
      {q:"¿Qué establece la Ley de Okun?",options:["Por cada 1% de inflación, el PIB sube 2%","Por cada 1% de aumento en el desempleo, el PIB cae ~2%","El empleo y la inflación no se relacionan","El pleno empleo elimina la inflación"],answer:1},
      {q:"¿Cuál política reduce el desempleo ESTRUCTURAL?",options:["Bajar tasas de interés","Gasto público en infraestructura","Capacitación laboral y reconversión","Reducir el encaje bancario"],answer:2},
      {q:"¿Qué incluye la Población Económicamente Activa (PEA)?",options:["Solo los que trabajan actualmente","Los que trabajan y los que buscan trabajo","Toda la población del país","Solo los mayores de 30 años"],answer:1},
      {q:"Los empleados contratados solo en Navidad y despedidos en enero son un ejemplo de desempleo...",options:["Friccional","Estructural","Cíclico","Estacional"],answer:3},
      {q:"¿Qué política fiscal reduce el desempleo durante una recesión?",options:["Reducir el gasto público","Aumentar impuestos","Aumentar el gasto público y/o reducir impuestos","Subir las tasas de interés"],answer:2},
    ]
  },
  {
    n: 6, file: "ECONOMIA CAP 6 Comercio Internacional ESF.html",
    title: "Comercio Internacional", subtitle: "Por qué los países comercian, qué es la ventaja comparativa y cómo afecta tu vida el comercio global.",
    body: `
  <h2>¿Por Qué Existen el Comercio Internacional?</h2>
  <p>Ningún país puede producir todo lo que necesita de forma eficiente. El <strong>comercio internacional</strong> permite que cada país se especialice en lo que produce mejor y obtenga del exterior lo que produce menos bien o que no tiene.</p>
  <div class="highlight-box"><strong>Ventaja Absoluta:</strong> Un país tiene ventaja absoluta cuando puede producir más de un bien con los mismos recursos que otro país.<br><br>
  <strong>Ventaja Comparativa (David Ricardo):</strong> Un país debe especializarse en producir el bien donde tiene el menor <em>costo de oportunidad</em>, aunque no tenga ventaja absoluta en nada.</div>

  <h2>La Balanza Comercial</h2>
  <p>La <strong>balanza comercial</strong> registra la diferencia entre las exportaciones e importaciones de un país:</p>
  <table>
    <tr><th>Situación</th><th>Descripción</th><th>Efecto</th></tr>
    <tr><td>Superávit comercial</td><td>Exportaciones > Importaciones</td><td>Entra más dinero del exterior</td></tr>
    <tr><td>Déficit comercial</td><td>Importaciones > Exportaciones</td><td>Sale más dinero al exterior</td></tr>
    <tr><td>Equilibrio</td><td>Exportaciones = Importaciones</td><td>Flujo neutral</td></tr>
  </table>
  <div class="example"><strong>Ejemplo:</strong> China tiene un enorme superávit comercial con EE.UU. — exporta mucho más de lo que importa de los americanos. En 2023, el déficit comercial de EE.UU. con China fue de más de $280 mil millones.</div>

  <h2>Libre Comercio vs. Proteccionismo</h2>
  <table>
    <tr><th>Libre comercio</th><th>Proteccionismo</th></tr>
    <tr><td>Sin barreras (aranceles, cuotas)</td><td>Aranceles, cuotas e impuestos a importaciones</td></tr>
    <tr><td>Precios más bajos para consumidores</td><td>Protege industrias locales del país</td></tr>
    <tr><td>Mayor variedad de productos</td><td>Mantiene empleos en sectores locales</td></tr>
    <tr><td>Riesgo: industrias locales pueden quebrar</td><td>Riesgo: productos más caros para todos</td></tr>
  </table>
  <div class="highlight-box"><strong>Aranceles:</strong> Impuestos que se cobran a las importaciones. Encarecen los productos extranjeros para proteger a los productores locales pero hacen que los consumidores paguen más.</div>

  <h2>Acuerdos de Libre Comercio</h2>
  <p>Los países firman tratados para eliminar barreras comerciales entre sí:</p>
  <ul>
    <li><strong>USMCA (T-MEC):</strong> EE.UU., México y Canadá</li>
    <li><strong>Unión Europea:</strong> Mercado único sin aranceles entre 27 países</li>
    <li><strong>MERCOSUR:</strong> Argentina, Brasil, Uruguay, Paraguay</li>
    <li><strong>TLC:</strong> Tratados de Libre Comercio bilaterales (Perú tiene con EE.UU., China, UE, etc.)</li>
  </ul>

  <h2>El Tipo de Cambio</h2>
  <p>El <strong>tipo de cambio</strong> es el precio de una moneda expresado en otra moneda. Afecta directamente las exportaciones e importaciones:</p>
  <ul>
    <li><strong>Moneda más fuerte (apreciación):</strong> Las importaciones son más baratas, pero las exportaciones son más caras para el exterior → peor para exportadores.</li>
    <li><strong>Moneda más débil (depreciación):</strong> Las exportaciones son más baratas, pero las importaciones más caras → peor para consumidores.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 6</h2><ul>
    <li>El comercio existe porque los países se especializan según su ventaja comparativa</li>
    <li>Balanza comercial: superávit (X>M) o déficit (M>X)</li>
    <li>Libre comercio: precios bajos y variedad; proteccionismo: protege empleos locales</li>
    <li>Aranceles = impuestos a importaciones para proteger industrias locales</li>
    <li>El tipo de cambio afecta la competitividad de las exportaciones e importaciones</li>
  </ul></div>`,
    quiz: [
      {q:"¿Qué es la ventaja comparativa?",options:["Producir más que cualquier otro país","Especializarse donde el costo de oportunidad es menor","Exportar más de lo que importas","Tener más recursos naturales"],answer:1},
      {q:"¿Qué es un superávit comercial?",options:["Importaciones > Exportaciones","Exportaciones = Importaciones","Exportaciones > Importaciones","Balanza de pagos negativa"],answer:2},
      {q:"¿Qué son los aranceles?",options:["Acuerdos de libre comercio","Impuestos cobrados a las importaciones","Subsidios a los exportadores","Cuotas de producción local"],answer:1},
      {q:"¿Cuál es el acuerdo de libre comercio entre EE.UU., México y Canadá?",options:["MERCOSUR","TLC","USMCA/T-MEC","ASEAN"],answer:2},
      {q:"¿Qué efecto tiene una moneda débil (depreciación) en las exportaciones?",options:["Las exportaciones se encarecen para el exterior","Las exportaciones se abaratan para el exterior","Las importaciones se abaratan","El comercio se detiene"],answer:1},
      {q:"¿Qué es el déficit comercial?",options:["Exportaciones > Importaciones","El gobierno gasta más de lo que recauda","Importaciones > Exportaciones","Reservas internacionales negativas"],answer:2},
      {q:"¿Cuál es el argumento PRINCIPAL a favor del libre comercio?",options:["Protege industrias locales","Precios más bajos y mayor variedad para los consumidores","Genera más empleos siempre","Elimina la inflación"],answer:1},
      {q:"¿Qué es la balanza comercial?",options:["La deuda pública del país","Diferencia entre exportaciones e importaciones","El presupuesto del gobierno","El saldo en reservas del banco central"],answer:1},
      {q:"¿Qué ventaja tiene el proteccionismo?",options:["Precios más bajos","Mayor variedad de productos","Protege empleos en industrias locales","Aumenta el comercio internacional"],answer:2},
      {q:"¿Cuál economista desarrolló la teoría de la ventaja comparativa?",options:["Adam Smith","John Maynard Keynes","David Ricardo","Milton Friedman"],answer:2},
    ]
  },
  {
    n: 7, file: "ECONOMIA CAP 7 Impuestos y Presupuesto del Estado ESF.html",
    title: "Impuestos y el Presupuesto del Estado", subtitle: "Cómo el gobierno financia sus gastos, tipos de impuestos y qué es la deuda pública.",
    body: `
  <h2>¿Para Qué Sirven los Impuestos?</h2>
  <p>Los <strong>impuestos</strong> son la fuente principal de ingresos del gobierno. Con ellos, el Estado financia bienes y servicios públicos: educación, salud, defensa, infraestructura, seguridad y programas sociales.</p>
  <div class="highlight-box"><strong>Principios de un buen sistema tributario:</strong><br>
  ✓ Suficiencia: generar los ingresos necesarios<br>
  ✓ Equidad: quien gana más, paga más proporcionalmente<br>
  ✓ Eficiencia: sin distorsionar demasiado la economía<br>
  ✓ Simplicidad: fácil de entender y cumplir</div>

  <h2>Tipos de Impuestos</h2>
  <table>
    <tr><th>Impuesto</th><th>Qué grava</th><th>Ejemplo</th></tr>
    <tr><td>Impuesto sobre la renta (ISR / Income Tax)</td><td>Los ingresos de personas y empresas</td><td>IRS en EE.UU., SAT en México</td></tr>
    <tr><td>IVA / VAT / Sales Tax</td><td>El consumo de bienes y servicios</td><td>16% IVA en México, hasta 20% en Europa</td></tr>
    <tr><td>Impuesto a las ganancias de capital</td><td>Utilidades de inversiones</td><td>Ganancia al vender acciones o propiedades</td></tr>
    <tr><td>Impuesto sobre el patrimonio</td><td>La riqueza acumulada (bienes)</td><td>Impuesto predial, herencia</td></tr>
    <tr><td>Impuesto a las importaciones (arancel)</td><td>Mercancías que entran al país</td><td>Aranceles en EE.UU. sobre productos chinos</td></tr>
  </table>

  <h2>Impuestos Progresivos, Regresivos y Proporcionales</h2>
  <table>
    <tr><th>Tipo</th><th>Descripción</th><th>Ejemplo</th></tr>
    <tr><td>Progresivo</td><td>Mayor porcentaje a mayor ingreso</td><td>Impuesto a la renta por tramos</td></tr>
    <tr><td>Regresivo</td><td>Afecta más a los de menores ingresos en proporción</td><td>IVA / Sales Tax (todos pagan lo mismo %)</td></tr>
    <tr><td>Proporcional (flat tax)</td><td>Mismo porcentaje para todos</td><td>Propuestas de "tasa única"</td></tr>
  </table>
  <div class="example"><strong>Ejemplo:</strong> El impuesto a la renta en EE.UU. es progresivo: quien gana $30,000 paga 12%, pero quien gana $500,000 paga hasta 37%. El IVA es regresivo: aunque el 16% es igual para todos, pesa más en el presupuesto de alguien con ingresos bajos.</div>

  <h2>El Presupuesto del Estado</h2>
  <p>El <strong>presupuesto del estado</strong> es el plan financiero del gobierno para un año fiscal: cuánto espera recaudar (ingresos) y cuánto planea gastar (egresos).</p>
  <ul>
    <li><strong>Superávit fiscal:</strong> Ingresos > Gastos. El gobierno ahorra.</li>
    <li><strong>Déficit fiscal:</strong> Gastos > Ingresos. El gobierno debe endeudarse.</li>
    <li><strong>Presupuesto equilibrado:</strong> Ingresos = Gastos.</li>
  </ul>

  <h2>La Deuda Pública</h2>
  <p>Cuando el gobierno gasta más de lo que recauda (déficit), debe <strong>endeudarse</strong> emitiendo bonos del gobierno. La suma acumulada de todos los déficits pasados forma la <strong>deuda pública</strong>.</p>
  <div class="highlight-box"><strong>Deuda de EE.UU. (2024):</strong> más de $34 billones (trillions en inglés). Es el país con la mayor deuda pública del mundo en términos absolutos, aunque como % del PIB hay países más endeudados.</div>
  <p>La deuda pública no es necesariamente mala si se invierte en activos productivos (infraestructura, educación), pero puede ser peligrosa si se usa para gastos corrientes o si la carga de intereses se vuelve insostenible.</p>

  <div class="summary"><h2>Resumen del Capítulo 7</h2><ul>
    <li>Impuestos = principal fuente de ingresos del gobierno para financiar servicios públicos</li>
    <li>Tipos: renta (ISR), consumo (IVA), capital, patrimonio, aranceles</li>
    <li>Progresivo: más ricos pagan más %; regresivo: afecta más a los pobres (ej: IVA)</li>
    <li>Déficit fiscal = el gobierno gasta más de lo que recauda</li>
    <li>La deuda pública se acumula con años de déficit</li>
  </ul></div>`,
    quiz: [
      {q:"¿Para qué sirven los impuestos principalmente?",options:["Pagar a los empleados del banco central","Financiar bienes y servicios públicos","Regular la inflación","Controlar el tipo de cambio"],answer:1},
      {q:"¿Qué tipo de impuesto es el IVA (impuesto al valor agregado)?",options:["Impuesto a la renta","Impuesto al consumo","Impuesto al patrimonio","Impuesto a las importaciones"],answer:1},
      {q:"¿Qué característica tiene un impuesto PROGRESIVO?",options:["Todos pagan el mismo porcentaje","Mayor ingreso = mayor porcentaje","Afecta más a los pobres en proporción","Es igual para consumidores y empresas"],answer:1},
      {q:"¿Qué es el déficit fiscal?",options:["El gobierno recauda más de lo que gasta","El gobierno gasta más de lo que recauda","La balanza comercial negativa","El exceso de reservas internacionales"],answer:1},
      {q:"¿Qué es la deuda pública?",options:["La deuda de los ciudadanos con los bancos","Los préstamos que toman las empresas","La deuda acumulada del gobierno con sus acreedores","El déficit del año actual"],answer:2},
      {q:"¿Por qué el IVA es considerado un impuesto regresivo?",options:["Porque solo lo pagan los ricos","Porque todos pagan el mismo porcentaje, pero pesa más en los ingresos bajos","Porque solo grava las importaciones","Porque aumenta con el ingreso"],answer:1},
      {q:"¿Qué ocurre cuando los ingresos del gobierno son mayores que sus gastos?",options:["Déficit fiscal","Superávit fiscal","Presupuesto equilibrado","Deuda pública"],answer:1},
      {q:"¿Cómo se financia el gobierno cuando tiene déficit fiscal?",options:["Imprimiendo dinero directamente","Subiendo impuestos de inmediato","Emitiendo bonos (endeudándose)","Reduciendo todos los servicios públicos"],answer:2},
      {q:"¿Cuál de estos es un ejemplo de impuesto DIRECTO?",options:["IVA","Sales Tax","Impuesto sobre la renta (ISR)","Arancel de importación"],answer:2},
      {q:"¿Cuál es la institución encargada de cobrar impuestos federales en EE.UU.?",options:["La Fed","El Departamento del Tesoro","El IRS","La SEC"],answer:2},
    ]
  },
  {
    n: 8, file: "ECONOMIA CAP 8 Empresas y el Emprendimiento ESF.html",
    title: "Empresas y el Emprendimiento", subtitle: "Tipos de empresas, cómo se crean, sus estados financieros y la cultura emprendedora.",
    body: `
  <h2>¿Qué es una Empresa?</h2>
  <p>Una <strong>empresa</strong> es una organización que combina recursos (capital, trabajo, materias primas) para producir bienes o servicios con el objetivo de obtener ganancias. Las empresas son el motor principal de la economía de mercado.</p>

  <h2>Tipos de Empresas por Estructura Legal</h2>
  <table>
    <tr><th>Tipo</th><th>Descripción</th><th>Ejemplo</th></tr>
    <tr><td>Empresa unipersonal (Sole proprietorship)</td><td>Un solo dueño; responsabilidad ilimitada</td><td>Tienda de barrio, freelancer</td></tr>
    <tr><td>Sociedad (Partnership)</td><td>Dos o más socios comparten ganancias y responsabilidades</td><td>Bufete de abogados</td></tr>
    <tr><td>Sociedad de Responsabilidad Limitada (LLC / SRL)</td><td>Protege bienes personales; flexibilidad fiscal</td><td>La mayoría de pequeñas empresas en EE.UU.</td></tr>
    <tr><td>Corporación (Corporation / S.A.)</td><td>Persona jurídica independiente; emite acciones</td><td>Apple, Amazon, Coca-Cola</td></tr>
    <tr><td>Cooperativa</td><td>Propiedad colectiva de los trabajadores o clientes</td><td>REI (outdoor), cooperativas de café</td></tr>
  </table>
  <div class="highlight-box"><strong>Responsabilidad limitada:</strong> En una LLC o corporación, si la empresa quiebra, los acreedores NO pueden tomar los bienes personales del dueño. Es una de las ventajas más importantes de estas estructuras.</div>

  <h2>Los Estados Financieros Básicos</h2>
  <p>Para entender la salud de una empresa, se usan tres estados financieros clave:</p>
  <ul>
    <li><strong>Estado de resultados (P&L):</strong> Ingresos − Costos = Ganancia o pérdida neta.</li>
    <li><strong>Balance general:</strong> Activos = Pasivos + Patrimonio neto.</li>
    <li><strong>Flujo de caja:</strong> El dinero que realmente entra y sale de la empresa.</li>
  </ul>
  <div class="example"><strong>Ecuación contable fundamental:</strong><br>Activos = Pasivos + Patrimonio<br>Lo que tienes = Lo que debes + Lo que realmente es tuyo</div>

  <h2>El Emprendimiento</h2>
  <p>El <strong>emprendimiento</strong> es el proceso de crear una nueva empresa o negocio, asumiendo riesgos a cambio de potenciales ganancias. Los emprendedores son el cuarto factor de producción (junto con tierra, trabajo y capital).</p>
  <div class="highlight-box"><strong>Habilidades clave del emprendedor:</strong><br>
  ✓ Identificar oportunidades de mercado<br>
  ✓ Tolerancia al riesgo y la incertidumbre<br>
  ✓ Resiliencia para superar fracasos<br>
  ✓ Habilidades de liderazgo y comunicación<br>
  ✓ Visión a largo plazo</div>

  <h2>El Modelo de Negocio</h2>
  <p>Un <strong>modelo de negocio</strong> describe cómo una empresa crea, entrega y captura valor. Los componentes principales son:</p>
  <ul>
    <li><strong>Propuesta de valor:</strong> ¿Qué problema resuelves? ¿Por qué te comprarán a ti?</li>
    <li><strong>Segmento de clientes:</strong> ¿A quién le vendes?</li>
    <li><strong>Canales:</strong> ¿Cómo llegas a tus clientes?</li>
    <li><strong>Fuentes de ingreso:</strong> ¿Cómo generas dinero?</li>
    <li><strong>Estructura de costos:</strong> ¿Cuáles son tus gastos principales?</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 8</h2><ul>
    <li>Una empresa combina recursos para producir bienes/servicios con ganancias</li>
    <li>Estructuras: unipersonal, sociedad, LLC, corporación, cooperativa</li>
    <li>LLC y corporaciones ofrecen responsabilidad limitada (protege bienes personales)</li>
    <li>Estados financieros clave: P&L, balance general, flujo de caja</li>
    <li>El emprendedor identifica oportunidades y asume riesgos calculados</li>
  </ul></div>`,
    quiz: [
      {q:"¿Qué ofrece la responsabilidad limitada (LLC / SRL) al dueño?",options:["Menos impuestos","Protección de bienes personales ante deudas de la empresa","Más control sobre los empleados","Acceso automático a préstamos bancarios"],answer:1},
      {q:"¿Cuál es la ecuación contable fundamental?",options:["Ingresos - Gastos = Ganancia","Activos = Pasivos + Patrimonio","Ventas = Costo + Margen","Capital = Deuda - Activos"],answer:1},
      {q:"¿Qué mide el Estado de Resultados (P&L)?",options:["Los activos y pasivos de la empresa","Los ingresos y gastos para determinar ganancia o pérdida","El dinero que entra y sale de la empresa","El valor total de la empresa en el mercado"],answer:1},
      {q:"¿Cuál es la estructura legal más común para pequeñas empresas en EE.UU.?",options:["Corporación (Inc.)","Cooperativa","LLC (Sociedad de Responsabilidad Limitada)","Empresa unipersonal"],answer:2},
      {q:"¿Qué es el flujo de caja?",options:["Las ganancias netas de la empresa","El valor de mercado de la empresa","El dinero real que entra y sale de la empresa","Los activos fijos de la empresa"],answer:2},
      {q:"¿Cuál es la diferencia principal entre una LLC y una empresa unipersonal?",options:["La LLC no paga impuestos","La LLC protege los bienes personales del dueño","La unipersonal tiene más socios","La LLC requiere más de 10 empleados"],answer:1},
      {q:"¿Qué describe el modelo de negocio de una empresa?",options:["Sus activos y deudas","Cómo crea, entrega y captura valor","Su estructura jerárquica interna","Sus estados financieros anuales"],answer:1},
      {q:"¿Cuáles son los cuatro factores de producción en economía?",options:["Dinero, trabajo, tecnología, mercado","Tierra, trabajo, capital y emprendimiento","Oferta, demanda, precio, cantidad","Exportaciones, importaciones, PIB, inflación"],answer:1},
      {q:"¿Qué tipo de empresa emite acciones al público?",options:["Empresa unipersonal","Sociedad simple","Corporación (S.A. / Inc.)","Cooperativa"],answer:2},
      {q:"¿Qué es la propuesta de valor en un modelo de negocio?",options:["El precio de venta del producto","Qué problema resuelves y por qué te comprarán","El presupuesto de marketing","El número de clientes objetivo"],answer:1},
    ]
  },
  {
    n: 9, file: "ECONOMIA CAP 9 Sistemas Economicos del Mundo ESF.html",
    title: "Sistemas Económicos del Mundo", subtitle: "Capitalismo, socialismo, economías mixtas y cómo cada sistema responde las preguntas básicas de la economía.",
    body: `
  <h2>Las Tres Preguntas Fundamentales de la Economía</h2>
  <p>Toda sociedad debe responder tres preguntas económicas básicas:</p>
  <ol>
    <li><strong>¿QUÉ producir?</strong> ¿Bienes de consumo o de capital? ¿Servicios públicos o privados?</li>
    <li><strong>¿CÓMO producir?</strong> ¿Con qué tecnología, recursos y métodos?</li>
    <li><strong>¿PARA QUIÉN producir?</strong> ¿Cómo se distribuye lo producido entre la población?</li>
  </ol>
  <p>La respuesta a estas preguntas define el <strong>sistema económico</strong> de cada país.</p>

  <h2>Tipos de Sistemas Económicos</h2>
  <table>
    <tr><th>Sistema</th><th>¿Quién decide?</th><th>Propiedad</th><th>Ejemplos</th></tr>
    <tr><td>Economía de mercado (capitalismo puro)</td><td>Oferta y demanda</td><td>Privada</td><td>EE.UU. (histórico)</td></tr>
    <tr><td>Economía planificada (socialismo/comunismo)</td><td>El gobierno central</td><td>Estatal</td><td>Cuba, Corea del Norte</td></tr>
    <tr><td>Economía mixta</td><td>Mercado + gobierno</td><td>Mixta</td><td>Mayoría del mundo: EE.UU., Perú, México, Europa</td></tr>
    <tr><td>Economía tradicional</td><td>Costumbres y tradiciones</td><td>Comunal</td><td>Comunidades indígenas</td></tr>
  </table>
  <div class="highlight-box"><strong>Hoy casi todos los países tienen economías MIXTAS:</strong> el mercado es el mecanismo principal, pero el gobierno interviene para corregir fallas del mercado, proveer bienes públicos y redistribuir ingresos.</div>

  <h2>El Capitalismo</h2>
  <p>En el <strong>capitalismo</strong>, los medios de producción (fábricas, tierra, capital) son de propiedad privada. Los precios se determinan por el mercado. Los individuos y empresas actúan por incentivos de ganancia.</p>
  <ul>
    <li><strong>Ventajas:</strong> Eficiencia, innovación, variedad de productos, libertad económica individual.</li>
    <li><strong>Desventajas:</strong> Puede generar desigualdad extrema, monopolios, y no produce bienes públicos suficientes.</li>
  </ul>

  <h2>El Socialismo y la Economía Planificada</h2>
  <p>En el <strong>socialismo puro</strong>, el Estado posee los medios de producción y planifica la economía. En el <strong>comunismo</strong> (según Marx), no hay propiedad privada y los bienes se distribuyen según las necesidades.</p>
  <ul>
    <li><strong>Ventajas teóricas:</strong> Mayor igualdad, atención garantizada a necesidades básicas.</li>
    <li><strong>Desventajas prácticas:</strong> Falta de incentivos, ineficiencia, escasez crónica, supresión de libertades.</li>
  </ul>
  <div class="example"><strong>Fallas del mercado</strong> que justifican la intervención del Estado:<br>
  — Bienes públicos (defensa, calles) que el mercado no provee<br>
  — Externalidades negativas (contaminación) que el mercado no corrige solo<br>
  — Monopolios que eliminan la competencia<br>
  — Información asimétrica (el vendedor sabe más que el comprador)</div>

  <h2>Los Países Nórdicos: Economía Social de Mercado</h2>
  <p>Suecia, Noruega, Dinamarca y Finlandia son ejemplos de <strong>economía social de mercado</strong>: capitalismo robusto con fuerte red de protección social (salud universal, educación gratuita, pensiones generosas). Tienen altos impuestos pero también altos estándares de vida.</p>

  <div class="summary"><h2>Resumen del Capítulo 9</h2><ul>
    <li>3 preguntas básicas: ¿qué? ¿cómo? ¿para quién producir?</li>
    <li>Sistemas: capitalismo (mercado), socialismo (estado), mixto, tradicional</li>
    <li>Casi todos los países tienen economías mixtas hoy</li>
    <li>Las fallas del mercado justifican la intervención estatal</li>
    <li>Los países nórdicos combinan mercado libre con fuerte protección social</li>
  </ul></div>`,
    quiz: [
      {q:"¿Cuáles son las tres preguntas fundamentales de la economía?",options:["¿Cuándo? ¿Dónde? ¿Con quién?","¿Qué? ¿Cómo? ¿Para quién producir?","¿Qué precio? ¿Cuánto? ¿Dónde vender?","¿Quién manda? ¿Cuánto cuesta? ¿Dónde exportar?"],answer:1},
      {q:"¿Qué tipo de economía tiene la mayoría de países hoy?",options:["Economía pura de mercado","Economía planificada","Economía mixta","Economía tradicional"],answer:2},
      {q:"¿Qué caracteriza al capitalismo?",options:["El Estado posee los medios de producción","Los precios los fija el gobierno","La propiedad privada y los precios de mercado","Distribución igualitaria garantizada"],answer:2},
      {q:"¿Cuál es un ejemplo de economía planificada actualmente?",options:["EE.UU.","Suecia","Alemania","Cuba y Corea del Norte"],answer:3},
      {q:"¿Qué son las 'fallas del mercado'?",options:["Cuando la bolsa de valores cae","Situaciones donde el mercado no asigna eficientemente los recursos","Cuando el gobierno gasta de más","La falta de exportaciones"],answer:1},
      {q:"¿Cuál es un bien público que el mercado no puede proveer eficientemente?",options:["Teléfonos celulares","Ropa de moda","Defensa nacional","Restaurantes de lujo"],answer:2},
      {q:"¿Qué caracteriza a los países nórdicos (Suecia, Noruega, Dinamarca)?",options:["Economía completamente estatal","Capitalismo sin intervención del gobierno","Economía social de mercado: capitalismo + fuerte protección social","Economía tradicional basada en trueque"],answer:2},
      {q:"¿Cuál es una desventaja del socialismo en la práctica?",options:["Genera demasiada desigualdad","Estimula demasiado la innovación","Falta de incentivos e ineficiencia productiva","Exceso de competencia empresarial"],answer:2},
      {q:"¿Qué es una externalidad negativa?",options:["Un impuesto al comercio exterior","Un costo que recae sobre terceros que no participaron en la transacción","Un subsidio del gobierno a las empresas","Una barrera comercial proteccionista"],answer:1},
      {q:"¿Cuál sistema responde las preguntas económicas según las costumbres y tradiciones?",options:["Capitalismo","Socialismo","Economía mixta","Economía tradicional"],answer:3},
    ]
  },
  {
    n: 10, file: "ECONOMIA CAP 10 Economia Personal Ahorro e Inversion ESF.html",
    title: "Economía Personal: Ahorro e Inversión", subtitle: "Cómo aplicar los principios económicos a tu propio dinero para construir riqueza.",
    body: `
  <h2>¿Por Qué es Importante la Economía Personal?</h2>
  <p>Todos los principios económicos que hemos estudiado también aplican a nivel personal. Entender <strong>cómo funciona el dinero</strong> te permite tomar mejores decisiones financieras, construir patrimonio y alcanzar libertad financiera.</p>
  <div class="highlight-box"><strong>Regla de oro de la economía personal:</strong><br>
  <strong>Gastar menos de lo que ganas</strong> y <strong>invertir la diferencia</strong> = el camino hacia la riqueza.</div>

  <h2>El Presupuesto Personal</h2>
  <p>El primer paso es conocer tus números. Un presupuesto simple es la regla <strong>50/30/20</strong>:</p>
  <table>
    <tr><th>Categoría</th><th>% del ingreso neto</th><th>Ejemplos</th></tr>
    <tr><td>Necesidades</td><td>50%</td><td>Renta, alimentos, transporte, servicios básicos</td></tr>
    <tr><td>Deseos</td><td>30%</td><td>Entretenimiento, restaurantes, ropa extra</td></tr>
    <tr><td>Ahorro e inversión</td><td>20%</td><td>Fondo de emergencia, retiro, inversiones</td></tr>
  </table>

  <h2>El Interés Compuesto: La Octava Maravilla</h2>
  <p>Albert Einstein supuestamente llamó al <strong>interés compuesto</strong> "la octava maravilla del mundo". Es ganar intereses sobre tus intereses previos — y con el tiempo, el efecto es exponencial.</p>
  <div class="example"><strong>Ejemplo:</strong> Si inviertes $1,000 al año desde los 25 años con un rendimiento del 7% anual:<br>
  — A los 35 años (10 años): ~$14,000<br>
  — A los 45 años (20 años): ~$41,000<br>
  — A los 65 años (40 años): ~$200,000<br>
  El tiempo es tu mayor aliado en las inversiones.</div>

  <h2>Instrumentos de Inversión</h2>
  <table>
    <tr><th>Instrumento</th><th>Riesgo</th><th>Rendimiento esperado</th></tr>
    <tr><td>Cuenta de ahorro bancaria</td><td>Muy bajo</td><td>1%–3% anual</td></tr>
    <tr><td>Bonos del gobierno (Treasury)</td><td>Bajo</td><td>3%–5% anual</td></tr>
    <tr><td>Fondos índice (S&P 500)</td><td>Medio</td><td>7%–10% promedio histórico</td></tr>
    <tr><td>Acciones individuales</td><td>Alto</td><td>Variable (puede perder todo)</td></tr>
    <tr><td>Bienes raíces</td><td>Medio-alto</td><td>5%–12% (depende del mercado)</td></tr>
    <tr><td>Criptomonedas</td><td>Muy alto</td><td>Altamente volátil</td></tr>
  </table>
  <div class="highlight-box"><strong>Relación riesgo-rendimiento:</strong> A mayor riesgo potencial, mayor rendimiento posible. No existe inversión con alto rendimiento garantizado y sin riesgo — si alguien te lo ofrece, es una estafa.</div>

  <h2>El Fondo de Emergencia</h2>
  <p>Antes de invertir, construye un <strong>fondo de emergencia</strong>: dinero equivalente a 3–6 meses de tus gastos básicos, en una cuenta de fácil acceso. Te protege de imprevistos sin endeudarte.</p>

  <h2>La Deuda: Buena vs. Mala</h2>
  <ul>
    <li><strong>Deuda buena:</strong> Genera valor o ingresos a futuro. Ej: hipoteca, préstamo universitario, préstamo para un negocio.</li>
    <li><strong>Deuda mala:</strong> Financia consumo depreciable a tasas altas. Ej: tarjeta de crédito al 20%+ para gastar en viajes o ropa.</li>
  </ul>
  <div class="example"><strong>Regla práctica:</strong> Si la deuda tiene una tasa de interés mayor al rendimiento esperado de tus inversiones, págala primero antes de invertir.</div>

  <div class="summary"><h2>Resumen del Capítulo 10</h2><ul>
    <li>Presupuesto 50/30/20: 50% necesidades, 30% deseos, 20% ahorro/inversión</li>
    <li>El interés compuesto multiplica el dinero exponencialmente con el tiempo</li>
    <li>A mayor riesgo, mayor rendimiento potencial (y mayor posibilidad de pérdida)</li>
    <li>Fondo de emergencia = 3–6 meses de gastos antes de invertir</li>
    <li>Deuda buena genera valor; deuda mala financia consumo a tasas altas</li>
  </ul></div>`,
    quiz: [
      {q:"Según la regla 50/30/20, ¿qué porcentaje debe destinarse al ahorro e inversión?",options:["10%","15%","20%","30%"],answer:2},
      {q:"¿Qué es el interés compuesto?",options:["Interés fijo que no cambia","Ganar interés solo sobre el capital inicial","Ganar interés sobre el capital más los intereses acumulados","Un impuesto sobre las inversiones"],answer:2},
      {q:"¿Cuál instrumento de inversión tiene históricamente el mejor rendimiento a largo plazo con riesgo moderado?",options:["Cuenta de ahorro bancaria","Criptomonedas","Fondos índice (S&P 500)","Bonos de corto plazo"],answer:2},
      {q:"¿Cuánto dinero se recomienda tener en el fondo de emergencia?",options:["1 mes de gastos","3–6 meses de gastos básicos","1 año de gastos","$10,000 fijos"],answer:1},
      {q:"¿Qué es la 'deuda mala'?",options:["Una hipoteca para comprar casa","Un préstamo para iniciar un negocio","Tarjeta de crédito al 20%+ para gastos de consumo","Un préstamo estudiantil universitario"],answer:2},
      {q:"¿Cuál es la relación entre riesgo y rendimiento en las inversiones?",options:["A mayor riesgo, menor rendimiento","No hay relación entre riesgo y rendimiento","A mayor riesgo, mayor rendimiento potencial","Las inversiones sin riesgo dan más rendimiento"],answer:2},
      {q:"¿Por qué el tiempo es el mayor aliado en las inversiones?",options:["Porque reduce los impuestos","Porque permite que el interés compuesto trabaje más tiempo","Porque los mercados siempre suben con el tiempo","Porque elimina todos los riesgos"],answer:1},
      {q:"¿Cuál es la regla de oro de la economía personal?",options:["Gastar todo lo que ganas","Invertir solo en bienes raíces","Gastar menos de lo que ganas e invertir la diferencia","Ahorrar el 50% del salario siempre"],answer:2},
      {q:"Según la regla 50/30/20, ¿qué porcentaje es para 'deseos' (entretenimiento, restaurantes)?",options:["10%","20%","30%","50%"],answer:2},
      {q:"¿Cuál de estas inversiones tiene el MAYOR riesgo?",options:["Bonos del gobierno","Fondos índice","Cuenta de ahorro","Criptomonedas"],answer:3},
    ]
  },
];

const style = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Georgia,'Times New Roman',serif;background:#f8f9fa;color:#1a1a2e;line-height:1.8}
    .wrapper{max-width:860px;margin:0 auto;background:#fff;padding:60px 72px;min-height:100vh}
    .course-tag{font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#0f766e;margin-bottom:12px}
    h1{font-size:2rem;font-weight:700;color:#0f172a;margin-bottom:8px;line-height:1.3}
    .subtitle{font-size:1.05rem;color:#64748b;margin-bottom:40px;font-style:italic}
    hr{border:none;border-top:2px solid #99f6e4;margin:32px 0}
    h2{font-size:1.35rem;font-weight:700;color:#1e293b;margin:36px 0 16px}
    h3{font-size:1.1rem;font-weight:700;color:#0f766e;margin:24px 0 10px}
    p{margin-bottom:16px;font-size:1rem}
    ul,ol{margin:16px 0 16px 24px}
    li{margin-bottom:8px;font-size:1rem}
    .highlight-box{background:#f0fdfa;border-left:4px solid #14b8a6;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}
    .warning-box{background:#fff7ed;border-left:4px solid #ea580c;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}
    .example{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin:20px 0}
    table{width:100%;border-collapse:collapse;margin:24px 0;font-size:.95rem}
    th{background:#0f766e;color:#fff;padding:12px 16px;text-align:left;font-family:Arial,sans-serif;font-weight:600}
    td{padding:11px 16px;border-bottom:1px solid #e2e8f0}
    tr:nth-child(even) td{background:#f0fdfa}
    .summary{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:28px 32px;margin:40px 0 0}
    .summary h2{color:#2dd4bf;margin-top:0}
    .summary li{color:#cbd5e1}
    @media(max-width:640px){.wrapper{padding:32px 24px}h1{font-size:1.5rem}}
`;

chapters.forEach(ch => {
  const quizJson = JSON.stringify({ lang: "es", questions: ch.quiz }, null, 2);
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ch.title} | Economía | Español Sin Fronteras</title>
  <meta name="description" content="Aprende sobre ${ch.title} con quiz interactivo. Plataforma educativa gratuita.">
  <style>${style}</style>
</head>
<body>
<div class="wrapper">
  <div class="course-tag">Economía · Capítulo ${ch.n}</div>
  <h1>${ch.title}</h1>
  <p class="subtitle">${ch.subtitle}</p>
  <hr>
  ${ch.body}
</div>

<script>
window.QUIZ_DATA = ${quizJson};
</script>
<script src="quiz-engine.js"></script>
</div>
</body>
</html>`;

  fs.writeFileSync(path.join(OUT, ch.file), html, "utf8");
  console.log(`✓ ${ch.file}`);
});
console.log("Done — 10 chapters.");
