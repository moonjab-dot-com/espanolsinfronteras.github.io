const fs = require("fs");
const path = require("path");
const OUT = path.join(__dirname, "public", "content");

const chapters = [
  {
    n:1, file:"MARKETS CAP 1 Introduccion a los Mercados Financieros ESF.html",
    title:"Introducción a los Mercados Financieros",
    subtitle:"Qué son los mercados, quiénes participan y por qué existen — la base de todo lo que pasa en Wall Street.",
    body:`
  <h2>¿Qué es un Mercado Financiero?</h2>
  <p>Un <strong>mercado financiero</strong> es un espacio (físico o electrónico) donde compradores y vendedores intercambian activos financieros: acciones, bonos, divisas, materias primas y derivados. Su función principal es <strong>conectar a quienes tienen dinero con quienes lo necesitan</strong>.</p>
  <div class="highlight-box"><strong>Dato actual (junio 2026):</strong> El valor total de todos los mercados de valores del mundo supera los <strong>$110 billones (trillions) de dólares</strong>. El mercado americano (NYSE + NASDAQ) representa aproximadamente el 44% del total global.</div>

  <h2>Tipos de Mercados Financieros</h2>
  <table>
    <tr><th>Mercado</th><th>¿Qué se transa?</th><th>Ejemplo</th></tr>
    <tr><td>Mercado de valores (bolsa)</td><td>Acciones de empresas</td><td>NYSE, NASDAQ, BMV</td></tr>
    <tr><td>Mercado de bonos (renta fija)</td><td>Deuda de gobiernos y empresas</td><td>Bonos del Tesoro de EE.UU.</td></tr>
    <tr><td>Mercado de divisas (Forex)</td><td>Monedas del mundo</td><td>USD/EUR, USD/MXN</td></tr>
    <tr><td>Mercado de materias primas</td><td>Commodities físicos</td><td>Petróleo, oro, maíz, soya</td></tr>
    <tr><td>Mercado de derivados</td><td>Contratos basados en otros activos</td><td>Opciones, futuros</td></tr>
    <tr><td>Mercado cripto</td><td>Activos digitales</td><td>Bitcoin, Ethereum</td></tr>
  </table>

  <h2>Mercado Primario vs. Secundario</h2>
  <ul>
    <li><strong>Mercado primario:</strong> Donde los activos se crean y venden por primera vez. Cuando una empresa hace su OPI (IPO), vende acciones nuevas al público por primera vez. El dinero va a la empresa.</li>
    <li><strong>Mercado secundario:</strong> Donde los inversores se compran y venden activos entre sí (la bolsa del día a día). La empresa ya no recibe dinero de estas transacciones.</li>
  </ul>
  <div class="example"><strong>Ejemplo:</strong> Cuando una empresa como Airbnb hizo su IPO en 2020, emitió acciones nuevas en el mercado primario. Cuando tú compras acciones de Airbnb hoy en tu bróker, estás operando en el mercado secundario.</div>

  <h2>Los Participantes del Mercado</h2>
  <ul>
    <li><strong>Inversores individuales (retail):</strong> Personas comunes que invierten sus ahorros.</li>
    <li><strong>Inversores institucionales:</strong> Fondos de pensiones, fondos mutuos, compañías de seguros — mueven el 80%+ del volumen.</li>
    <li><strong>Hedge funds:</strong> Fondos de alto riesgo para inversores acreditados.</li>
    <li><strong>Market makers:</strong> Instituciones que garantizan liquidez comprando y vendiendo continuamente.</li>
    <li><strong>Bancos de inversión:</strong> Goldman Sachs, JPMorgan — asesoran en IPOs, fusiones y adquisiciones.</li>
    <li><strong>Banco central (Fed):</strong> Influye en los mercados con política monetaria.</li>
  </ul>

  <h2>¿Por Qué Importan los Mercados?</h2>
  <p>Los mercados financieros cumplen funciones esenciales en la economía:</p>
  <ul>
    <li><strong>Asignación de capital:</strong> El dinero fluye hacia donde más valor crea.</li>
    <li><strong>Fijación de precios:</strong> Los precios reflejan toda la información disponible.</li>
    <li><strong>Liquidez:</strong> Permiten convertir inversiones en efectivo rápidamente.</li>
    <li><strong>Gestión de riesgo:</strong> Los derivados permiten cubrirse contra pérdidas.</li>
    <li><strong>Indicador económico:</strong> Los mercados anticipan el futuro de la economía.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 1</h2><ul>
    <li>Los mercados conectan a quienes tienen dinero con quienes lo necesitan</li>
    <li>Tipos: bolsa (acciones), bonos, Forex (divisas), commodities, derivados, cripto</li>
    <li>Mercado primario = emisión nueva (IPO); secundario = compraventa entre inversores</li>
    <li>Los institucionales (fondos, bancos) dominan el 80%+ del volumen</li>
    <li>Los mercados valorizan activos, dan liquidez y señalan el estado de la economía</li>
  </ul></div>`,
    quiz:[
      {q:"¿Cuál es la función principal de los mercados financieros?",options:["Regular los impuestos","Conectar a quienes tienen dinero con quienes lo necesitan","Fijar el tipo de cambio oficial","Controlar la inflación"],answer:1},
      {q:"¿Qué sucede en el mercado PRIMARIO?",options:["Los inversores se compran acciones entre sí","La empresa emite nuevas acciones y recibe el dinero","El gobierno fija los precios de los activos","Se negocian derivados financieros"],answer:1},
      {q:"¿Qué se negocia en el mercado Forex?",options:["Acciones de empresas","Bonos del gobierno","Monedas del mundo","Materias primas"],answer:2},
      {q:"¿Qué representa aproximadamente el mercado americano del total global de bolsas?",options:["10%","25%","44%","70%"],answer:2},
      {q:"¿Qué son los 'market makers'?",options:["Empresas que hacen IPOs","Instituciones que garantizan liquidez comprando y vendiendo continuamente","Inversores individuales con grandes carteras","Reguladores del mercado"],answer:1},
      {q:"¿Cuándo compras acciones de Apple hoy en tu bróker, en qué mercado operas?",options:["Mercado primario","Mercado de bonos","Mercado secundario","Mercado de divisas"],answer:2},
      {q:"¿Cuál de estos NO es un tipo de mercado financiero?",options:["Mercado de materias primas","Mercado de derivados","Mercado laboral de inversores","Mercado de bonos"],answer:2},
      {q:"¿Qué tipo de inversor mueve más del 80% del volumen en los mercados?",options:["Inversores individuales (retail)","Inversores institucionales","Hedge funds únicamente","Los bancos centrales"],answer:1},
      {q:"¿Qué función de los mercados permite convertir inversiones en efectivo rápidamente?",options:["Asignación de capital","Fijación de precios","Liquidez","Gestión de riesgo"],answer:2},
      {q:"¿Qué es una IPO?",options:["Un tipo de bono del gobierno","La primera venta pública de acciones de una empresa","Un índice de mercado","Un fondo de inversión"],answer:1},
    ]
  },
  {
    n:2, file:"MARKETS CAP 2 NYSE NASDAQ y las Grandes Bolsas ESF.html",
    title:"NYSE, NASDAQ y las Grandes Bolsas del Mundo",
    subtitle:"Las principales bolsas de valores, sus índices y cómo reflejan la salud de la economía global.",
    body:`
  <h2>Las Bolsas Más Importantes del Mundo</h2>
  <table>
    <tr><th>Bolsa</th><th>País</th><th>Capitalización</th><th>Empresas destacadas</th></tr>
    <tr><td>NYSE (New York Stock Exchange)</td><td>EE.UU.</td><td>~$25 billones</td><td>JPMorgan, Berkshire, ExxonMobil</td></tr>
    <tr><td>NASDAQ</td><td>EE.UU.</td><td>~$22 billones</td><td>Apple, Microsoft, NVIDIA, Meta</td></tr>
    <tr><td>Shanghai Stock Exchange</td><td>China</td><td>~$7 billones</td><td>PetroChina, ICBC</td></tr>
    <tr><td>Euronext</td><td>Europa</td><td>~$6 billones</td><td>LVMH, TotalEnergies</td></tr>
    <tr><td>Tokyo Stock Exchange</td><td>Japón</td><td>~$6 billones</td><td>Toyota, Sony</td></tr>
    <tr><td>BMV</td><td>México</td><td>~$400 mil millones</td><td>América Móvil, Femsa</td></tr>
  </table>

  <h2>NYSE vs. NASDAQ: Las Diferencias Clave</h2>
  <div class="highlight-box"><strong>NYSE</strong> (fundada en 1792) es la bolsa más antigua y grande del mundo. Usa un sistema de "specialists" que mantienen liquidez en cada acción. Alberga empresas más tradicionales: bancos, industriales, energéticas.<br><br>
  <strong>NASDAQ</strong> (fundada en 1971) fue la primera bolsa electrónica del mundo. Es el hogar de las grandes tecnológicas. Opera 100% electrónicamente sin piso de remates.</div>

  <h2>Los Grandes Índices Bursátiles</h2>
  <p>Un <strong>índice</strong> es una canasta de acciones que representa un segmento del mercado. Sirve como termómetro del estado del mercado.</p>
  <table>
    <tr><th>Índice</th><th>Qué mide</th><th>Nivel aprox. junio 2026</th></tr>
    <tr><td>S&P 500</td><td>Las 500 mayores empresas de EE.UU.</td><td>~5,500 puntos</td></tr>
    <tr><td>Dow Jones (DJIA)</td><td>30 empresas industriales líderes</td><td>~41,500 puntos</td></tr>
    <tr><td>NASDAQ Composite</td><td>Todas las empresas del NASDAQ (~3,000)</td><td>~17,000 puntos</td></tr>
    <tr><td>Russell 2000</td><td>2,000 empresas pequeñas (small caps)</td><td>~2,000 puntos</td></tr>
    <tr><td>VIX</td><td>El "índice del miedo" — volatilidad del S&P 500</td><td>Variable (15–30 = normal)</td></tr>
  </table>
  <div class="highlight-box"><strong>Contexto junio 2026:</strong> El S&P 500 alcanzó máximos históricos a finales de mayo 2026, impulsado por el rally tecnológico. Sin embargo, el 4 de junio el NASDAQ cayó ~4% — su peor día desde abril 2025 — por ventas masivas en semiconductores. El 18 de junio los mercados rebotaron tras una sorpresa positiva de la Fed.</div>

  <h2>¿Qué Mueve los Índices?</h2>
  <ul>
    <li><strong>Resultados corporativos (earnings):</strong> Cada trimestre las empresas reportan ganancias — son el motor más importante.</li>
    <li><strong>Política monetaria:</strong> Las decisiones de la Fed sobre tasas de interés impactan directamente.</li>
    <li><strong>Datos macroeconómicos:</strong> PIB, inflación, desempleo, ventas minoristas.</li>
    <li><strong>Geopolítica:</strong> Guerras, sanciones, tensiones comerciales.</li>
    <li><strong>Sentimiento del mercado:</strong> El miedo y la codicia (medidos por el VIX y el Fear & Greed Index).</li>
  </ul>

  <h2>Mercados Alcistas y Bajistas</h2>
  <ul>
    <li><strong>Bull market (mercado alcista):</strong> El índice sube más del 20% desde su último mínimo. Suele durar años.</li>
    <li><strong>Bear market (mercado bajista):</strong> El índice cae más del 20% desde su último máximo. Señal de recesión potencial.</li>
    <li><strong>Corrección:</strong> Caída de 10%–20%. Normal y saludable en mercados alcistas.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 2</h2><ul>
    <li>NYSE y NASDAQ son las dos bolsas más grandes del mundo (juntas ~$47 billones)</li>
    <li>El S&P 500 es el índice más seguido — mide las 500 mayores empresas de EE.UU.</li>
    <li>El VIX mide la volatilidad/miedo del mercado</li>
    <li>Bull market: +20% desde mínimos; Bear market: -20% desde máximos</li>
    <li>Los índices se mueven por earnings, Fed, macroeconomía y sentimiento</li>
  </ul></div>`,
    quiz:[
      {q:"¿Cuál es la bolsa de valores más antigua del mundo?",options:["NASDAQ","Chicago Mercantile Exchange","NYSE","London Stock Exchange"],answer:2},
      {q:"¿Qué tipo de empresas dominan el NASDAQ?",options:["Industriales y energéticas","Bancos y seguros","Tecnológicas (Apple, Microsoft, NVIDIA)","Mineras y agrícolas"],answer:2},
      {q:"¿Cuántas empresas incluye el índice S&P 500?",options:["30","100","500","2000"],answer:2},
      {q:"¿Qué mide el índice VIX?",options:["El valor total del mercado","Las 30 empresas más grandes","La volatilidad y el miedo en el mercado","El precio del petróleo"],answer:2},
      {q:"¿Qué es un 'bull market' (mercado alcista)?",options:["Caída del 10% desde máximos","Caída del 20% desde máximos","Subida del 20% desde mínimos","Mercado sin movimiento"],answer:2},
      {q:"¿Cuántos componentes tiene el Dow Jones Industrial Average?",options:["10","30","100","500"],answer:1},
      {q:"¿Qué ocurrió en el NASDAQ el 4 de junio de 2026?",options:["Alcanzó un máximo histórico","Subió 4% por noticias de la Fed","Cayó ~4% por ventas en semiconductores","Cerró por día festivo"],answer:2},
      {q:"¿Qué es una 'corrección' en los mercados?",options:["Caída del 5%","Caída del 10%-20% desde máximos","Caída de más del 20%","Subida brusca en un día"],answer:1},
      {q:"¿Qué es el índice Russell 2000?",options:["Las 2000 mayores empresas mundiales","2000 empresas pequeñas de EE.UU.","El índice del mercado chino","Un fondo índice de bonos"],answer:1},
      {q:"¿Cuál es el factor MÁS importante que mueve el precio de las acciones a largo plazo?",options:["El sentimiento del mercado","Las decisiones de la Fed","Los resultados corporativos (earnings)","La geopolítica"],answer:2},
    ]
  },
  {
    n:3, file:"MARKETS CAP 3 Como Invertir en Acciones ESF.html",
    title:"Cómo Invertir en Acciones",
    subtitle:"Desde abrir tu primer bróker hasta entender dividendos, splits y cómo funciona el mercado de acciones.",
    body:`
  <h2>¿Qué es una Acción?</h2>
  <p>Una <strong>acción</strong> (<em>stock/share</em>) representa una fracción de la propiedad de una empresa. Si una empresa vale $1 millón y emite 1,000 acciones, cada acción vale $1,000 y te da el 0.1% de la empresa, sus ganancias proporcionales y el derecho a voto en asambleas.</p>
  <div class="highlight-box"><strong>Tipos de acciones:</strong><br>
  <strong>Acciones ordinarias (common stock):</strong> Dan derecho a voto y dividendos variables. La mayoría de las que comprarás.<br>
  <strong>Acciones preferentes (preferred stock):</strong> Dividendos fijos y prioridad en liquidación, pero sin voto. Más parecidas a bonos.</div>

  <h2>Cómo Comprar Acciones: Paso a Paso</h2>
  <ol>
    <li><strong>Elegir un bróker:</strong> Robinhood, Fidelity, Schwab, TD Ameritrade, ETRADE, Interactive Brokers. Desde México/Latinoamérica: GBM+, Kuspit, Actinver.</li>
    <li><strong>Abrir y fondear la cuenta:</strong> La mayoría son gratuitas. Mínimo puede ser $0.</li>
    <li><strong>Buscar el ticker:</strong> Cada empresa tiene un símbolo único. AAPL = Apple, MSFT = Microsoft, NVDA = NVIDIA, AMZN = Amazon.</li>
    <li><strong>Tipo de orden:</strong> Market order (precio actual) o Limit order (precio que tú fijas).</li>
    <li><strong>Monitorear sin obsesionarse:</strong> Revisa tus posiciones semanalmente, no a cada minuto.</li>
  </ol>

  <h2>Órdenes de Compra y Venta</h2>
  <table>
    <tr><th>Tipo de Orden</th><th>Descripción</th><th>Cuándo usar</th></tr>
    <tr><td>Market order</td><td>Compra/vende al precio actual del mercado</td><td>Cuando quieres ejecución inmediata</td></tr>
    <tr><td>Limit order</td><td>Solo ejecuta si el precio llega a tu límite</td><td>Cuando quieres un precio específico</td></tr>
    <tr><td>Stop-loss order</td><td>Vende automáticamente si el precio cae a cierto nivel</td><td>Para limitar pérdidas</td></tr>
    <tr><td>Stop-limit</td><td>Combina stop y limit</td><td>Más control en mercados volátiles</td></tr>
  </table>

  <h2>Dividendos</h2>
  <p>Los <strong>dividendos</strong> son pagos periódicos que algunas empresas hacen a sus accionistas con parte de sus ganancias. No todas las empresas pagan dividendos — las tecnológicas como Amazon no pagan; las empresas maduras como Coca-Cola sí.</p>
  <div class="example"><strong>Ejemplo:</strong> Si tienes 100 acciones de Coca-Cola (KO) y paga un dividendo de $0.46 por acción trimestral, recibirías $46 cada trimestre ($184/año). El <em>dividend yield</em> (rendimiento por dividendo) se calcula dividiendo el dividendo anual entre el precio de la acción.</div>

  <h2>Stock Splits</h2>
  <p>Un <strong>stock split</strong> ocurre cuando una empresa divide sus acciones para hacerlas más accesibles. Si tienes 1 acción a $1,000 y hay un split 10:1, pasas a tener 10 acciones a $100 cada una — el valor total no cambia.</p>
  <div class="highlight-box"><strong>Ejemplos recientes:</strong> NVIDIA (NVDA) hizo un split 10:1 en junio 2024. Amazon (AMZN) hizo un split 20:1 en 2022. Los splits son señal de que la empresa ha crecido mucho y quiere más accesibilidad.</div>

  <h2>Métricas Clave para Evaluar una Acción</h2>
  <table>
    <tr><th>Métrica</th><th>Significado</th></tr>
    <tr><td>P/E Ratio (PER)</td><td>Precio / Ganancia por acción. Cuánto pagas por cada $1 de ganancia.</td></tr>
    <tr><td>EPS (Earnings Per Share)</td><td>Ganancia neta dividida entre el número de acciones.</td></tr>
    <tr><td>Market Cap</td><td>Precio × número de acciones = valor total de la empresa.</td></tr>
    <tr><td>Dividend Yield</td><td>Dividendo anual / Precio de la acción × 100%.</td></tr>
    <tr><td>52-Week High/Low</td><td>El precio máximo y mínimo de los últimos 12 meses.</td></tr>
  </table>

  <div class="summary"><h2>Resumen del Capítulo 3</h2><ul>
    <li>Una acción = fracción de propiedad de una empresa</li>
    <li>Para comprar: bróker → fondear → buscar ticker → tipo de orden</li>
    <li>Limit orders te dan más control que las market orders</li>
    <li>Dividendos = pagos periódicos de empresas maduras a sus accionistas</li>
    <li>P/E ratio, EPS y market cap son métricas clave para evaluar acciones</li>
  </ul></div>`,
    quiz:[
      {q:"¿Qué representa una acción (stock)?",options:["Un préstamo a una empresa","Una fracción de propiedad de una empresa","Un bono del gobierno","Un contrato de seguro"],answer:1},
      {q:"¿Cuál es el ticker de Apple en la bolsa?",options:["APPL","APLE","AAPL","APL"],answer:2},
      {q:"¿Qué es una 'limit order'?",options:["Una orden que se ejecuta inmediatamente al precio actual","Una orden que solo se ejecuta si el precio llega a tu límite","Una orden que vende automáticamente si el precio cae","Una orden para comprar dividendos"],answer:1},
      {q:"¿Qué es un dividendo?",options:["El precio de compra de una acción","Un pago periódico de la empresa a sus accionistas","La ganancia al vender una acción","El costo de la comisión del bróker"],answer:1},
      {q:"¿Qué es un stock split?",options:["La quiebra de una empresa","La venta de todas las acciones de la empresa","La división de acciones para bajar el precio unitario","La fusión de dos empresas"],answer:2},
      {q:"¿Qué mide el P/E Ratio?",options:["El dividendo por acción","Cuánto pagas por cada $1 de ganancia de la empresa","La volatilidad de la acción","El precio máximo del último año"],answer:1},
      {q:"¿Cuál de estos brókeres es popular en EE.UU.?",options:["GBM+","Kuspit","Fidelity","Actinver"],answer:2},
      {q:"¿Qué es el 'market cap' de una empresa?",options:["Las ganancias anuales","El precio de una acción","Precio × número de acciones = valor total","Los activos totales"],answer:2},
      {q:"¿Cuál empresa pagó dividendos históricamente pero Amazon no?",options:["NVIDIA","Coca-Cola","Tesla","Meta"],answer:1},
      {q:"¿Qué tipo de orden minimiza mejor las pérdidas automáticamente?",options:["Market order","Limit order","Stop-loss order","Dividend order"],answer:2},
    ]
  },
  {
    n:4, file:"MARKETS CAP 4 Bonos y Renta Fija ESF.html",
    title:"Bonos y Renta Fija",
    subtitle:"El mercado de bonos es más grande que el de acciones. Aprende cómo funciona y por qué impacta a toda la economía.",
    body:`
  <h2>¿Qué es un Bono?</h2>
  <p>Un <strong>bono</strong> es un instrumento de deuda: una empresa o gobierno toma dinero prestado y promete devolverte el capital más intereses (<em>cupones</em>) en fechas específicas. Cuando compras un bono, eres el <em>acreedor</em>.</p>
  <div class="highlight-box"><strong>Componentes de un bono:</strong><br>
  <strong>Valor nominal (face value):</strong> El monto que te devuelven al vencimiento (típicamente $1,000).<br>
  <strong>Cupón:</strong> El interés periódico que recibes (ej: 4% anual = $40/año por cada $1,000).<br>
  <strong>Vencimiento (maturity):</strong> Cuándo te devuelven el capital (puede ser 2, 5, 10, 30 años).<br>
  <strong>Yield (rendimiento):</strong> La rentabilidad real del bono en el mercado secundario.</div>

  <h2>Tipos de Bonos</h2>
  <table>
    <tr><th>Tipo</th><th>Emisor</th><th>Riesgo</th><th>Ejemplo</th></tr>
    <tr><td>Treasuries (T-Bills, T-Notes, T-Bonds)</td><td>Gobierno de EE.UU.</td><td>Mínimo</td><td>T-Bond a 10 años</td></tr>
    <tr><td>Bonos municipales (Munis)</td><td>Estados y ciudades</td><td>Bajo</td><td>Bono del Estado de California</td></tr>
    <tr><td>Bonos corporativos investment grade</td><td>Empresas sólidas (AAA-BBB)</td><td>Medio</td><td>Bono de Apple o Microsoft</td></tr>
    <tr><td>Bonos de alto rendimiento (junk bonds)</td><td>Empresas con baja calificación</td><td>Alto</td><td>Empresas con rating BB o inferior</td></tr>
    <tr><td>Bonos emergentes (EM bonds)</td><td>Países en desarrollo</td><td>Alto</td><td>Bonos de México, Perú, Brasil</td></tr>
  </table>

  <h2>La Regla de Oro: Precio y Yield se Mueven al Revés</h2>
  <p>La relación más importante en el mercado de bonos: <strong>cuando el precio del bono sube, su yield baja; y cuando el precio baja, su yield sube</strong>. Esta relación inversa confunde a muchos principiantes.</p>
  <div class="example"><strong>¿Por qué?</strong> Compras un bono a $1,000 con cupón de $40 (yield = 4%). Si las tasas suben al 5%, tu bono de 4% es menos atractivo — su precio cae para que el yield efectivo suba al 5%. Si las tasas bajan al 3%, tu bono es más valioso y su precio sube.</div>
  <div class="highlight-box"><strong>Dato actual (junio 2026):</strong> El rendimiento del Treasury a 10 años de EE.UU. (el bono más seguido del mundo) se mueve en torno al 4.2%–4.6%. Las decisiones de la Fed sobre tasas son el factor #1 que lo mueve.</div>

  <h2>La Curva de Rendimientos (Yield Curve)</h2>
  <p>La <strong>curva de rendimientos</strong> muestra los yields de los bonos del gobierno a distintos plazos (3 meses, 2 años, 10 años, 30 años). En condiciones normales, los bonos a largo plazo pagan más.</p>
  <ul>
    <li><strong>Curva normal:</strong> Largo plazo paga más → economía saludable.</li>
    <li><strong>Curva invertida:</strong> Corto plazo paga MÁS que el largo → señal histórica de recesión.</li>
    <li><strong>Curva plana:</strong> Transición entre ambas situaciones.</li>
  </ul>

  <h2>Calificaciones Crediticias</h2>
  <p>Las agencias <strong>Moody's, S&P y Fitch</strong> califican la solvencia de emisores de bonos. Las calificaciones van de AAA (mínimo riesgo) a C/D (en default).</p>

  <div class="summary"><h2>Resumen del Capítulo 4</h2><ul>
    <li>Un bono = préstamo que haces a un gobierno o empresa a cambio de cupones + capital</li>
    <li>Regla clave: precio del bono ↑ → yield ↓ (relación inversa)</li>
    <li>Treasuries de EE.UU. son los bonos más seguros del mundo</li>
    <li>La curva de rendimientos invertida es señal histórica de recesión</li>
    <li>El yield del Treasury a 10 años es el indicador más seguido del mercado de bonos</li>
  </ul></div>`,
    quiz:[
      {q:"¿Qué eres cuando compras un bono?",options:["Accionista de la empresa","Acreedor (prestamista)","Socio del gobierno","Director de la empresa"],answer:1},
      {q:"¿Qué es el 'cupón' de un bono?",options:["El precio de compra","El vencimiento del bono","El pago de intereses periódico","La calificación crediticia"],answer:2},
      {q:"Si las tasas de interés SUBEN, ¿qué pasa con el precio de un bono existente?",options:["El precio sube","El precio baja","El precio no cambia","El bono se cancela"],answer:1},
      {q:"¿Qué tipo de bono tiene el menor riesgo?",options:["Junk bonds","Bonos corporativos BB","Bonos del Tesoro de EE.UU.","Bonos de mercados emergentes"],answer:2},
      {q:"¿Qué significa una curva de rendimientos invertida?",options:["Los bonos largos pagan más","Los bonos cortos pagan más que los largos — señal de recesión","Los bonos no pagan cupón","Los mercados están en máximos"],answer:1},
      {q:"¿Cuál es la agencia que NO califica bonos?",options:["Moody's","S&P","Fitch","BlackRock"],answer:3},
      {q:"¿Qué representa la calificación 'AAA' en un bono?",options:["Bono en default","Alto riesgo de impago","Mínimo riesgo (máxima solvencia)","Bono con rendimiento del 3%"],answer:2},
      {q:"¿Cuál es el bono más seguido como indicador económico global?",options:["T-Bill a 3 meses","T-Bond a 30 años","Treasury a 10 años","Bono de la Fed"],answer:2},
      {q:"¿Qué es el 'yield' de un bono?",options:["El precio de compra","El plazo de vencimiento","La rentabilidad efectiva del bono","El valor nominal"],answer:2},
      {q:"¿Cuál es el 'face value' típico de un bono del Tesoro de EE.UU.?",options:["$100","$500","$1,000","$10,000"],answer:2},
    ]
  },
  {
    n:5, file:"MARKETS CAP 5 ETFs y Fondos Indice ESF.html",
    title:"ETFs y Fondos Índice",
    subtitle:"La forma más inteligente y probada de invertir para la mayoría de las personas — incluyendo el S&P 500.",
    body:`
  <h2>¿Qué es un Fondo Índice?</h2>
  <p>Un <strong>fondo índice</strong> es un fondo de inversión que replica la composición de un índice de mercado (como el S&P 500). En lugar de elegir acciones individuales, simplemente compras una fracción de todas las empresas del índice de forma automática.</p>
  <div class="highlight-box"><strong>¿Por qué son tan poderosos?</strong> El S&P 500 ha generado un rendimiento promedio del <strong>10% anual</strong> durante los últimos 100 años. El 90%+ de los gestores activos (que intentan "ganarle al mercado") NO logran superar al S&P 500 a largo plazo.</div>

  <h2>¿Qué es un ETF?</h2>
  <p>Un <strong>ETF</strong> (Exchange-Traded Fund) es un fondo que cotiza en la bolsa como si fuera una acción. Los ETFs de índice son la versión más popular — combinan la diversificación de un fondo con la facilidad de comprar y vender en tiempo real.</p>
  <table>
    <tr><th>ETF</th><th>Índice que replica</th><th>Gestor</th><th>Gasto anual (expense ratio)</th></tr>
    <tr><td>SPY</td><td>S&P 500</td><td>State Street (SPDR)</td><td>0.0945%</td></tr>
    <tr><td>IVV</td><td>S&P 500</td><td>BlackRock (iShares)</td><td>0.03%</td></tr>
    <tr><td>VOO</td><td>S&P 500</td><td>Vanguard</td><td>0.03%</td></tr>
    <tr><td>QQQ</td><td>NASDAQ-100 (top 100 tech)</td><td>Invesco</td><td>0.20%</td></tr>
    <tr><td>VTI</td><td>Todo el mercado americano</td><td>Vanguard</td><td>0.03%</td></tr>
    <tr><td>EEM</td><td>Mercados emergentes (China, India, Brasil…)</td><td>BlackRock</td><td>0.69%</td></tr>
  </table>

  <h2>ETFs vs. Fondos Mutuos vs. Acciones Individuales</h2>
  <table>
    <tr><th>Característica</th><th>ETF índice</th><th>Fondo mutuo activo</th><th>Acción individual</th></tr>
    <tr><td>Diversificación</td><td>Alta (500+ empresas)</td><td>Media</td><td>Nula (solo 1 empresa)</td></tr>
    <tr><td>Costo anual</td><td>0.03%–0.20%</td><td>0.5%–2%</td><td>Sin costo de gestión</td></tr>
    <tr><td>Riesgo</td><td>Bajo-medio</td><td>Variable</td><td>Alto</td></tr>
    <tr><td>Rendimiento histórico</td><td>~10% anual (S&P)</td><td>Generalmente menor al índice</td><td>Muy variable</td></tr>
    <tr><td>Esfuerzo requerido</td><td>Mínimo</td><td>Mínimo</td><td>Alto (análisis constante)</td></tr>
  </table>

  <h2>La Estrategia del Dollar-Cost Averaging (DCA)</h2>
  <p>El <strong>Dollar-Cost Averaging</strong> (promediado en dólares) consiste en invertir una cantidad fija de dinero en un ETF índice de forma regular (ej: $200 cada mes), sin importar si el mercado está arriba o abajo.</p>
  <div class="example"><strong>Ventaja:</strong> Cuando el mercado baja, tu $200 compra más acciones. Cuando sube, compra menos. A largo plazo, reduces el riesgo de entrar en el peor momento y aprovechas la volatilidad a tu favor. Es la estrategia recomendada por Warren Buffett para la mayoría de los inversores.</div>

  <h2>ETFs Sectoriales y Temáticos</h2>
  <p>Además de los índices generales, existen ETFs especializados:</p>
  <ul>
    <li><strong>XLK:</strong> Tecnología (Microsoft, Apple, NVIDIA)</li>
    <li><strong>XLF:</strong> Finanzas (JPMorgan, Bank of America)</li>
    <li><strong>XLE:</strong> Energía (ExxonMobil, Chevron)</li>
    <li><strong>ARKK:</strong> Innovación disruptiva (Tesla, Zoom, CRISPR)</li>
    <li><strong>GLD:</strong> Oro físico</li>
    <li><strong>TLT:</strong> Bonos del Tesoro a largo plazo</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 5</h2><ul>
    <li>Los ETFs de índice replican un índice (ej: S&P 500) con bajísimo costo</li>
    <li>VOO, IVV y SPY son los más populares — replican el S&P 500</li>
    <li>El S&P 500 ha rendido ~10% anual históricamente; 90%+ de fondos activos no lo superan</li>
    <li>Dollar-Cost Averaging: invertir regularmente sin importar el precio del mercado</li>
    <li>Los ETFs tienen mucho menor costo que los fondos mutuos activos</li>
  </ul></div>`,
    quiz:[
      {q:"¿Qué hace un fondo índice?",options:["Selecciona las mejores acciones del mercado","Replica la composición de un índice como el S&P 500","Invierte solo en bonos del gobierno","Cobra comisiones altas por gestión activa"],answer:1},
      {q:"¿Cuál es el rendimiento promedio histórico aproximado del S&P 500 anual?",options:["3%","5%","10%","20%"],answer:2},
      {q:"¿Qué ETF de Vanguard replica el S&P 500?",options:["QQQ","VTI","VOO","EEM"],answer:2},
      {q:"¿Cuál es una ventaja clave de los ETFs de índice sobre los fondos mutuos activos?",options:["Mayor rendimiento garantizado","Comisiones mucho más bajas","Protección contra pérdidas","Solo invierten en tecnología"],answer:1},
      {q:"¿Qué significa DCA (Dollar-Cost Averaging)?",options:["Invertir todo el dinero de una vez en el mínimo del mercado","Invertir una cantidad fija regularmente sin importar el precio","Copiar las inversiones de Warren Buffett","Diversificar en 50 países distintos"],answer:1},
      {q:"¿Qué índice replica el ETF QQQ?",options:["S&P 500","Dow Jones","NASDAQ-100","Russell 2000"],answer:2},
      {q:"¿Qué porcentaje de gestores activos logra superar al S&P 500 a largo plazo?",options:["10% o menos","25%","50%","75%"],answer:0},
      {q:"¿Qué ETF invierte en oro físico?",options:["XLK","TLT","GLD","EEM"],answer:2},
      {q:"¿Cuál es la ventaja del DCA cuando el mercado BAJA?",options:["Pierdes menos dinero automáticamente","Tu dinero fijo compra más acciones a menor precio","El fondo se protege solo","Obtienes más dividendos"],answer:1},
      {q:"¿Qué es el 'expense ratio' de un ETF?",options:["La comisión por cada compra","El costo anual de gestión del fondo","El precio por acción del ETF","El rendimiento anual del fondo"],answer:1},
    ]
  },
  {
    n:6, file:"MARKETS CAP 6 El Mercado de Criptomonedas ESF.html",
    title:"El Mercado de Criptomonedas",
    subtitle:"Bitcoin, Ethereum y el ecosistema cripto — cómo funciona, sus riesgos reales y dónde está en 2026.",
    body:`
  <h2>¿Qué es una Criptomoneda?</h2>
  <p>Una <strong>criptomoneda</strong> es un activo digital descentralizado que usa criptografía para asegurar transacciones y controlar la creación de nuevas unidades. Funciona sin banco central ni gobierno — las transacciones son verificadas por una red de computadoras (<em>blockchain</em>).</p>
  <div class="highlight-box"><strong>Mercado cripto — junio 2026:</strong><br>
  <strong>Bitcoin (BTC):</strong> ~$64,000 USD · Capitalización: ~$1.27 billones<br>
  <strong>Ethereum (ETH):</strong> ~$2,400–$2,800 USD<br>
  <strong>Capitalización total del mercado cripto:</strong> ~$2.3–$2.5 billones<br>
  Bitcoin domina ~55% del mercado total cripto.</div>

  <h2>Bitcoin: El Oro Digital</h2>
  <p><strong>Bitcoin (BTC)</strong> fue creado en 2009 por el pseudónimo Satoshi Nakamoto. Es la primera criptomoneda y la más grande. Sus características clave:</p>
  <ul>
    <li><strong>Oferta limitada:</strong> Solo existirán 21 millones de Bitcoin — ningún gobierno puede "imprimir" más.</li>
    <li><strong>Descentralizado:</strong> No hay banco ni gobierno que lo controle.</li>
    <li><strong>Halving:</strong> Cada ~4 años, la recompensa a los mineros se reduce a la mitad. El último halving fue en abril 2024.</li>
    <li><strong>Store of value:</strong> Muchos lo ven como protección contra la inflación y devaluación.</li>
  </ul>

  <h2>Ethereum y los Smart Contracts</h2>
  <p><strong>Ethereum (ETH)</strong> va más allá de ser moneda — es una plataforma para <em>smart contracts</em> (contratos inteligentes): código que se ejecuta automáticamente sin intermediarios. Permite construir aplicaciones descentralizadas (DApps), DeFi, y NFTs.</p>
  <div class="example"><strong>Ejemplo de smart contract:</strong> Un seguro de vuelo que paga automáticamente si tu vuelo se retrasa más de 2 horas, sin necesidad de llamar a la aseguradora ni presentar papeles — el código lo ejecuta solo al verificar los datos del vuelo.</div>

  <h2>Tipos de Criptoactivos</h2>
  <table>
    <tr><th>Tipo</th><th>Descripción</th><th>Ejemplos</th></tr>
    <tr><td>Criptomonedas de capa 1</td><td>Blockchains principales</td><td>BTC, ETH, Solana (SOL)</td></tr>
    <tr><td>Stablecoins</td><td>Valor anclado al dólar u otro activo estable</td><td>USDT, USDC, DAI</td></tr>
    <tr><td>Tokens DeFi</td><td>Finanzas descentralizadas</td><td>UNI (Uniswap), AAVE</td></tr>
    <tr><td>Memecoins</td><td>Sin utilidad real, movidos por especulación</td><td>DOGE, SHIB, PEPE</td></tr>
    <tr><td>ETFs de Bitcoin</td><td>Exposición a BTC sin tener cripto directamente</td><td>IBIT (BlackRock), FBTC (Fidelity)</td></tr>
  </table>

  <h2>Riesgos Reales del Mercado Cripto</h2>
  <ul>
    <li><strong>Volatilidad extrema:</strong> Bitcoin ha caído un 80%+ varias veces en su historia. Las memecoins pueden perder el 99%.</li>
    <li><strong>Sin seguro:</strong> No existe el FDIC ni protección del gobierno. Si pierdes tus claves o cae un exchange, el dinero se va.</li>
    <li><strong>Estafas (scams):</strong> El mercado cripto está lleno de estafas. Nunca inviertas en proyectos que no entiendes.</li>
    <li><strong>Regulación incierta:</strong> Los gobiernos pueden regular o restringir cripto.</li>
    <li><strong>Sin flujo de caja:</strong> Bitcoin no genera dividendos ni ganancias — su valor depende 100% de lo que alguien esté dispuesto a pagar.</li>
  </ul>
  <div class="highlight-box"><strong>Regla de oro cripto:</strong> No inviertas más de lo que estás dispuesto a perder completamente. Para la mayoría, 1%–5% del portafolio en cripto es razonable como posición especulativa.</div>

  <div class="summary"><h2>Resumen del Capítulo 6</h2><ul>
    <li>Bitcoin (~$64k en junio 2026) es el oro digital — oferta fija de 21M, descentralizado</li>
    <li>Ethereum permite smart contracts y aplicaciones descentralizadas</li>
    <li>Los ETFs de Bitcoin (IBIT, FBTC) permiten exposición sin tener cripto directamente</li>
    <li>Riesgos: volatilidad extrema, sin seguro, estafas, regulación incierta</li>
    <li>Regla: no más del 1%-5% del portafolio en cripto</li>
  </ul></div>`,
    quiz:[
      {q:"¿Cuántos Bitcoin existirán como máximo?",options:["10 millones","21 millones","100 millones","Sin límite"],answer:1},
      {q:"¿Cuál es el precio aproximado de Bitcoin en junio 2026?",options:["$10,000","$30,000","$64,000","$150,000"],answer:2},
      {q:"¿Qué es un 'smart contract'?",options:["Un contrato legal firmado digitalmente","Código que se ejecuta automáticamente sin intermediarios","Una criptomoneda estable","Un tipo de NFT"],answer:1},
      {q:"¿Cuál criptomoneda permite crear aplicaciones descentralizadas?",options:["Bitcoin","Litecoin","Dogecoin","Ethereum"],answer:3},
      {q:"¿Qué es una stablecoin?",options:["Una criptomoneda con alto rendimiento","Una criptomoneda cuyo valor está anclado al dólar u otro activo","Bitcoin en su versión estable","Un token de gobierno"],answer:1},
      {q:"¿Cuál es un ETF de Bitcoin de BlackRock?",options:["FBTC","IBIT","GBTC","BITO"],answer:1},
      {q:"¿Qué es el 'halving' de Bitcoin?",options:["La división de Bitcoin en dos monedas","La reducción a la mitad de la recompensa a los mineros cada ~4 años","La caída del 50% del precio","El proceso de crear nuevas monedas"],answer:1},
      {q:"¿Cuál es un riesgo REAL de las criptomonedas?",options:["Que el gobierno te quite el dinero","Que el banco central las regule directamente","Que no existe protección como el FDIC","Que sean demasiado lentas para transacciones"],answer:2},
      {q:"¿Qué porcentaje del portafolio total se recomienda para cripto como máximo para inversores conservadores?",options:["0% — nunca invertir","1%-5%","20%-30%","50% o más"],answer:1},
      {q:"¿Qué domina Bitcoin del mercado total cripto?",options:["10%","25%","55%","80%"],answer:2},
    ]
  },
  {
    n:7, file:"MARKETS CAP 7 Analisis Tecnico ESF.html",
    title:"Análisis Técnico: Leer los Gráficos",
    subtitle:"Cómo los traders usan gráficos y patrones de precios para anticipar movimientos del mercado.",
    body:`
  <h2>¿Qué es el Análisis Técnico?</h2>
  <p>El <strong>análisis técnico</strong> estudia el comportamiento histórico de los precios y el volumen de transacciones para anticipar movimientos futuros. A diferencia del análisis fundamental (que estudia los números de la empresa), el análisis técnico dice: <em>"el precio lo descuenta todo."</em></p>
  <div class="highlight-box"><strong>Los 3 supuestos del análisis técnico:</strong><br>
  1. El mercado descuenta todo (toda la información está en el precio).<br>
  2. Los precios se mueven en tendencias.<br>
  3. La historia se repite (los patrones humanos son predecibles).</div>

  <h2>Tipos de Gráficos</h2>
  <table>
    <tr><th>Tipo</th><th>Qué muestra</th><th>Uso</th></tr>
    <tr><td>Gráfico de línea</td><td>Solo el precio de cierre</td><td>Vista general de la tendencia</td></tr>
    <tr><td>Gráfico de barras (OHLC)</td><td>Apertura, máximo, mínimo, cierre</td><td>Traders profesionales</td></tr>
    <tr><td>Gráfico de velas (candlesticks)</td><td>Apertura, cierre, máximo, mínimo + sentimiento</td><td>El más usado por traders activos</td></tr>
  </table>

  <h2>Soporte, Resistencia y Tendencias</h2>
  <ul>
    <li><strong>Soporte:</strong> Nivel de precio donde el activo ha rebotado varias veces hacia arriba. Los compradores "defienden" ese nivel.</li>
    <li><strong>Resistencia:</strong> Nivel donde el precio ha rebotado hacia abajo repetidamente. Los vendedores "atacan" ese nivel.</li>
    <li><strong>Tendencia alcista (uptrend):</strong> Serie de máximos y mínimos cada vez más altos.</li>
    <li><strong>Tendencia bajista (downtrend):</strong> Serie de máximos y mínimos cada vez más bajos.</li>
    <li><strong>Rango lateral:</strong> El precio oscila entre soporte y resistencia sin dirección clara.</li>
  </ul>

  <h2>Indicadores Técnicos Clave</h2>
  <table>
    <tr><th>Indicador</th><th>Qué mide</th><th>Señal</th></tr>
    <tr><td>Media Móvil (MA)</td><td>Precio promedio en N días (ej: 50 o 200)</td><td>Precio sobre MA200 = tendencia alcista</td></tr>
    <tr><td>RSI (Relative Strength Index)</td><td>Velocidad y magnitud de los cambios de precio</td><td>RSI &gt;70 = sobrecomprado; &lt;30 = sobrevendido</td></tr>
    <tr><td>MACD</td><td>Convergencia/divergencia de medias móviles</td><td>Cruce de líneas = posible cambio de tendencia</td></tr>
    <tr><td>Bandas de Bollinger</td><td>Volatilidad del precio</td><td>Precio fuera de la banda = posible reversión</td></tr>
    <tr><td>Volumen</td><td>Número de acciones/contratos transados</td><td>Movimiento con alto volumen = más confiable</td></tr>
  </table>

  <h2>Patrones de Velas Famosos</h2>
  <ul>
    <li><strong>Doji:</strong> Apertura y cierre casi iguales — indecisión del mercado.</li>
    <li><strong>Martillo (Hammer):</strong> Posible reversión alcista después de una caída.</li>
    <li><strong>Estrella fugaz (Shooting Star):</strong> Posible reversión bajista después de una subida.</li>
    <li><strong>Engulfing alcista:</strong> Vela verde que "engulle" a la vela roja anterior — señal de compra.</li>
  </ul>
  <div class="highlight-box"><strong>Advertencia importante:</strong> El análisis técnico no es una ciencia exacta. Los patrones fallan frecuentemente. Úsalo como herramienta complementaria, no como sistema infalible. Siempre usa stop-loss para limitar pérdidas.</div>

  <div class="summary"><h2>Resumen del Capítulo 7</h2><ul>
    <li>El análisis técnico estudia precios y volumen para anticipar movimientos</li>
    <li>Gráficos de velas (candlesticks) son los más usados por traders activos</li>
    <li>Soporte = piso; Resistencia = techo del precio</li>
    <li>RSI &gt;70 = sobrecomprado; &lt;30 = sobrevendido</li>
    <li>Ningún indicador es infalible — siempre usa stop-loss</li>
  </ul></div>`,
    quiz:[
      {q:"¿Cuál es el supuesto fundamental del análisis técnico?",options:["Las ganancias de la empresa determinan el precio","El precio del activo descuenta toda la información disponible","Los economistas predicen el mercado perfectamente","El gobierno controla los movimientos del mercado"],answer:1},
      {q:"¿Qué es el 'soporte' en análisis técnico?",options:["El nivel donde los vendedores dominan","El nivel donde el precio ha rebotado hacia arriba varias veces","El precio máximo histórico","La comisión del bróker"],answer:1},
      {q:"¿Qué indica un RSI por encima de 70?",options:["El activo está sobrevendido (bueno para comprar)","El activo está sobrecomprado (posible caída)","La tendencia es neutral","El volumen es bajo"],answer:1},
      {q:"¿Qué tipo de gráfico muestra apertura, cierre, máximo y mínimo en forma visual?",options:["Gráfico de línea","Gráfico de barras OHLC","Gráfico de velas (candlesticks)","Gráfico de área"],answer:2},
      {q:"¿Qué es la Media Móvil de 200 días (MA200)?",options:["El rendimiento promedio en 200 días","El precio promedio de los últimos 200 días de cotización","El máximo histórico del último año","El indicador de volatilidad"],answer:1},
      {q:"¿Qué señala un 'Doji' en un gráfico de velas?",options:["Fuerte tendencia alcista","Fuerte tendencia bajista","Indecisión del mercado","Máximo histórico"],answer:2},
      {q:"¿Qué significa un movimiento de precio con ALTO volumen?",options:["El movimiento es menos confiable","El movimiento es más significativo y confiable","El activo está sobrecomprado","La empresa está en quiebra"],answer:1},
      {q:"¿Qué mide el MACD?",options:["El precio promedio de 200 días","La convergencia/divergencia de medias móviles","El volumen de transacciones","El ratio precio/ganancia"],answer:1},
      {q:"¿Qué es una 'resistencia' en análisis técnico?",options:["El nivel donde el precio rebota hacia arriba","El nivel donde el precio rebota hacia abajo repetidamente","El precio mínimo del año","La comisión del bróker"],answer:1},
      {q:"¿Por qué el análisis técnico NO es un sistema infalible?",options:["Porque está prohibido por la SEC","Porque los patrones fallan frecuentemente","Porque solo funciona con acciones de tecnología","Porque requiere licencia especial"],answer:1},
    ]
  },
  {
    n:8, file:"MARKETS CAP 8 Analisis Fundamental ESF.html",
    title:"Análisis Fundamental: Valorar Empresas",
    subtitle:"Cómo los inversores como Warren Buffett evalúan si una empresa es buena inversión basándose en sus números reales.",
    body:`
  <h2>¿Qué es el Análisis Fundamental?</h2>
  <p>El <strong>análisis fundamental</strong> evalúa el valor intrínseco de una empresa estudiando sus estados financieros, modelo de negocio, industria y entorno económico. El objetivo es encontrar empresas cuyo <em>precio de mercado</em> sea menor que su <em>valor real</em> — y comprarlas antes de que el mercado lo reconozca.</p>
  <div class="highlight-box"><strong>Warren Buffett:</strong> "El precio es lo que pagas. El valor es lo que obtienes." El análisis fundamental busca comprar $1 de valor por $0.70 — esto se llama <strong>margen de seguridad</strong>.</div>

  <h2>Los 3 Estados Financieros Clave</h2>
  <ul>
    <li><strong>Estado de Resultados (P&L):</strong> Muestra ingresos, costos y ganancias netas en un período. ¿La empresa está ganando dinero?</li>
    <li><strong>Balance General:</strong> Activos vs. Pasivos en un momento dado. ¿La empresa tiene más de lo que debe?</li>
    <li><strong>Flujo de Caja (Cash Flow Statement):</strong> El efectivo real que entra y sale. A veces las empresas reportan "ganancias" contables pero tienen flujo de caja negativo — señal de alerta.</li>
  </ul>

  <h2>Métricas de Valoración Esenciales</h2>
  <table>
    <tr><th>Métrica</th><th>Fórmula</th><th>Interpretación</th></tr>
    <tr><td>P/E Ratio</td><td>Precio / EPS</td><td>Cuántos años de ganancias pagas. P/E &lt;15 = barato; &gt;30 = caro</td></tr>
    <tr><td>PEG Ratio</td><td>P/E / Tasa de crecimiento</td><td>PEG &lt;1 = potencialmente subvalorada</td></tr>
    <tr><td>P/B Ratio (Price-to-Book)</td><td>Precio / Valor en libros por acción</td><td>P/B &lt;1 = empresa vale menos que sus activos netos</td></tr>
    <tr><td>EV/EBITDA</td><td>Valor empresa / EBITDA</td><td>Compara empresas con distinta estructura de capital</td></tr>
    <tr><td>ROE (Return on Equity)</td><td>Ganancia neta / Patrimonio</td><td>ROE &gt;15% = empresa eficiente con su capital</td></tr>
    <tr><td>Deuda/EBITDA</td><td>Deuda total / EBITDA</td><td>&lt;3x = manejable; &gt;5x = preocupante</td></tr>
  </table>

  <h2>El Análisis FODA de la Empresa</h2>
  <p>Además de los números, el análisis fundamental evalúa factores cualitativos:</p>
  <ul>
    <li><strong>Ventaja competitiva (moat):</strong> ¿Qué hace imposible que los competidores se coman su mercado? (marca, patentes, efectos de red, costos de cambio).</li>
    <li><strong>Calidad del management:</strong> ¿El equipo directivo es honesto y capaz? ¿Alinea sus intereses con los accionistas?</li>
    <li><strong>Tendencias sectoriales:</strong> ¿El sector está creciendo o declinando?</li>
    <li><strong>Riesgos regulatorios:</strong> ¿Podría el gobierno cambiar las reglas del juego?</li>
  </ul>
  <div class="example"><strong>Ejemplo real:</strong> En 2026, NVIDIA (NVDA) cotiza con un P/E de ~35x — caro en términos históricos. Pero su crecimiento de ingresos por chips de IA es del 100%+ anual. El PEG ratio de NVIDIA es &lt;1 cuando se ajusta por ese crecimiento, lo que la hace atractiva para algunos inversores.</div>

  <h2>Top-Down vs. Bottom-Up</h2>
  <ul>
    <li><strong>Top-Down:</strong> Empieza analizando la economía global → sector → empresa.</li>
    <li><strong>Bottom-Up:</strong> Empieza con empresas individuales independientemente del contexto macro.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 8</h2><ul>
    <li>El análisis fundamental busca el valor intrínseco de una empresa</li>
    <li>P/E, P/B, ROE y flujo de caja libre son las métricas más importantes</li>
    <li>El "moat" o ventaja competitiva es clave para el éxito a largo plazo</li>
    <li>P/E &lt;15 puede ser barato; &gt;30 exige alto crecimiento justificado</li>
    <li>Siempre lee el flujo de caja real, no solo las "ganancias" contables</li>
  </ul></div>`,
    quiz:[
      {q:"¿Qué busca el análisis fundamental?",options:["Patrones en los gráficos de precios","El valor intrínseco real de una empresa","Predecir el mercado con indicadores técnicos","Encontrar acciones con alto volumen"],answer:1},
      {q:"¿Qué es el 'margen de seguridad' según Warren Buffett?",options:["Diversificarse en 100 acciones","Comprar valor a un precio menor al real","Invertir solo en bonos del gobierno","Tener el 20% del portafolio en efectivo"],answer:1},
      {q:"¿Cuál estado financiero muestra el efectivo REAL que entra y sale de la empresa?",options:["Estado de resultados","Balance general","Flujo de caja (Cash Flow Statement)","Estado de dividendos"],answer:2},
      {q:"¿Qué significa un P/E Ratio bajo (inferior a 15)?",options:["La empresa pierde dinero","La empresa crece muy rápido","La acción puede estar barata en términos de ganancias","La empresa no paga dividendos"],answer:2},
      {q:"¿Qué mide el ROE?",options:["El precio relativo al valor en libros","La rentabilidad sobre el capital propio de la empresa","La deuda total de la empresa","El crecimiento de ingresos"],answer:1},
      {q:"¿Qué es el 'moat' o ventaja competitiva?",options:["El efectivo en caja de la empresa","Lo que hace difícil que los competidores entren al mercado de la empresa","El dividendo que paga la empresa","La deuda de largo plazo"],answer:1},
      {q:"¿Qué indica un ratio Deuda/EBITDA mayor a 5x?",options:["La empresa está muy bien capitalizada","La deuda es muy manejable","El nivel de deuda es preocupante","La empresa no tiene deuda"],answer:2},
      {q:"¿Qué análisis empieza desde la economía global y baja hasta la empresa?",options:["Bottom-Up","Análisis técnico","Top-Down","Análisis FODA"],answer:2},
      {q:"En el análisis fundamental, ¿qué es el P/B Ratio?",options:["Precio dividido entre las ganancias","Precio dividido entre el valor en libros por acción","Ganancias divididas entre el flujo de caja","Dividendos divididos entre el precio"],answer:1},
      {q:"¿Por qué el flujo de caja es más confiable que las 'ganancias' contables?",options:["Porque es más fácil de calcular","Porque no puede manipularse contablemente","Porque siempre es mayor a las ganancias","Porque lo publica la Fed"],answer:1},
    ]
  },
  {
    n:9, file:"MARKETS CAP 9 Riesgo y Diversificacion ESF.html",
    title:"Gestión del Riesgo y Diversificación",
    subtitle:"Cómo proteger tu portafolio, entender los distintos tipos de riesgo y construir una cartera resistente.",
    body:`
  <h2>El Riesgo en las Inversiones</h2>
  <p>En inversiones, el <strong>riesgo</strong> es la posibilidad de obtener un rendimiento diferente al esperado — incluyendo pérdidas. No existe inversión sin riesgo. El objetivo no es eliminar el riesgo, sino <strong>gestionarlo y que sea recompensado</strong>.</p>
  <div class="highlight-box"><strong>Relación fundamental:</strong> A mayor riesgo potencial → mayor rendimiento esperado. Si alguien te ofrece alto rendimiento con cero riesgo, es una estafa (Ponzi scheme, pirámide financiera).</div>

  <h2>Tipos de Riesgo</h2>
  <table>
    <tr><th>Tipo de Riesgo</th><th>Descripción</th><th>¿Se puede diversificar?</th></tr>
    <tr><td>Riesgo sistémico (mercado)</td><td>Afecta a todo el mercado (recesión, guerra, pandemia)</td><td>No — es inevitable</td></tr>
    <tr><td>Riesgo no sistémico (específico)</td><td>Afecta solo a una empresa o sector</td><td>Sí — con diversificación</td></tr>
    <tr><td>Riesgo de liquidez</td><td>No poder vender el activo rápido al precio justo</td><td>Parcialmente</td></tr>
    <tr><td>Riesgo de crédito</td><td>El emisor no puede pagar sus deudas (default)</td><td>Sí — con diversificación</td></tr>
    <tr><td>Riesgo cambiario</td><td>Fluctuaciones del tipo de cambio</td><td>Parcialmente</td></tr>
    <tr><td>Riesgo de inflación</td><td>La inflación erosiona el rendimiento real</td><td>Con activos reales</td></tr>
  </table>

  <h2>La Diversificación</h2>
  <p>La <strong>diversificación</strong> es distribuir las inversiones en distintos activos, sectores y geografías para reducir el riesgo no sistémico. El Nobel de Economía Harry Markowitz demostró que una cartera diversificada puede tener menor riesgo que cualquiera de sus componentes individuales.</p>
  <div class="example"><strong>Ejemplo:</strong> Si tienes el 100% en acciones de una empresa de petróleo y el precio del petróleo colapsa, pierdes todo. Si tienes 10% en petróleo, 10% en tecnología, 10% en bonos, 10% en oro, etc., las pérdidas de un sector se compensan con las ganancias de otros.</div>

  <h2>Asignación de Activos (Asset Allocation)</h2>
  <p>La <strong>asset allocation</strong> es decidir qué porcentaje de tu portafolio va a cada clase de activo. Es la decisión más importante — estudios muestran que el 90%+ del rendimiento a largo plazo se explica por el asset allocation, no por la selección de acciones individuales.</p>
  <table>
    <tr><th>Perfil de inversor</th><th>Acciones</th><th>Bonos</th><th>Alternativos/Efectivo</th></tr>
    <tr><td>Agresivo (joven, horizonte largo)</td><td>80%–90%</td><td>10%–15%</td><td>0%–5%</td></tr>
    <tr><td>Moderado (balance)</td><td>60%</td><td>30%</td><td>10%</td></tr>
    <tr><td>Conservador (cerca del retiro)</td><td>30%–40%</td><td>50%–60%</td><td>10%–20%</td></tr>
  </table>

  <h2>El Sharpe Ratio</h2>
  <p>El <strong>Sharpe Ratio</strong> mide el rendimiento obtenido por cada unidad de riesgo asumido. Un Sharpe Ratio mayor a 1 es bueno; mayor a 2 es excelente. Permite comparar inversiones ajustando por riesgo.</p>

  <h2>Stop-Loss y Gestión de Posiciones</h2>
  <ul>
    <li><strong>Stop-loss:</strong> Orden automática de venta si el precio cae X%. Limita pérdidas máximas.</li>
    <li><strong>Tamaño de posición:</strong> Nunca poner más del 5%–10% del portafolio en una sola acción.</li>
    <li><strong>Regla del 1%:</strong> Nunca arriesgar más del 1% del capital total en una sola operación de trading.</li>
  </ul>

  <div class="summary"><h2>Resumen del Capítulo 9</h2><ul>
    <li>Riesgo sistémico = inevitable (mercado entero); no sistémico = diversificable</li>
    <li>La diversificación elimina el riesgo específico pero no el del mercado</li>
    <li>El asset allocation explica el 90%+ del rendimiento a largo plazo</li>
    <li>Sharpe Ratio mide rendimiento por unidad de riesgo — mayor es mejor</li>
    <li>Stop-loss y tamaño de posición son herramientas clave de gestión de riesgo</li>
  </ul></div>`,
    quiz:[
      {q:"¿Qué tipo de riesgo NO puede eliminarse con diversificación?",options:["Riesgo de crédito","Riesgo no sistémico","Riesgo sistémico (de mercado)","Riesgo cambiario"],answer:2},
      {q:"¿Qué es la diversificación?",options:["Invertir todo en el activo más seguro","Distribuir inversiones en distintos activos para reducir riesgo","Operar solo en un mercado conocido","Invertir en un solo sector líderes"],answer:1},
      {q:"¿Qué factor explica el 90%+ del rendimiento a largo plazo?",options:["La selección de acciones individuales","El momento exacto de comprar (market timing)","La asignación de activos (asset allocation)","Las comisiones del bróker"],answer:2},
      {q:"¿Qué porcentaje de acciones es apropiado para un inversor joven con horizonte largo?",options:["10%-20%","30%-40%","60%","80%-90%"],answer:3},
      {q:"¿Qué es un stop-loss?",options:["Una orden de compra cuando el precio sube","Una orden automática de venta si el precio cae a cierto nivel","Un límite al número de operaciones diarias","El precio máximo que pagarías por una acción"],answer:1},
      {q:"¿Qué mide el Sharpe Ratio?",options:["El rendimiento total del portafolio","El rendimiento ajustado por riesgo","La volatilidad del mercado","El número de activos en el portafolio"],answer:1},
      {q:"¿Por qué una oferta de 'alto rendimiento con cero riesgo' es una señal de alarma?",options:["Porque los rendimientos altos siempre son ilegales","Porque no existe — es una señal de estafa","Porque los bonos del gobierno siempre rinden más","Porque el banco central lo prohíbe"],answer:1},
      {q:"¿Cuál es el riesgo de no poder vender un activo rápidamente al precio justo?",options:["Riesgo de crédito","Riesgo cambiario","Riesgo de inflación","Riesgo de liquidez"],answer:3},
      {q:"Según la regla del 1%, ¿cuánto debes arriesgar como máximo en una sola operación de trading?",options:["1% del capital total","5% del capital total","10% del capital total","El 100% de la posición"],answer:0},
      {q:"¿Qué demostró el Nobel de Economía Harry Markowitz?",options:["Que el análisis técnico supera al fundamental","Que una cartera diversificada puede tener menor riesgo que sus componentes individuales","Que los bonos siempre superan a las acciones","Que el Bitcoin es el mejor activo"],answer:1},
    ]
  },
  {
    n:10, file:"MARKETS CAP 10 Mercados en 2026 Panorama Actual ESF.html",
    title:"Los Mercados en 2026: Panorama Actual",
    subtitle:"El estado actual de los mercados financieros globales, las tendencias dominantes y qué están mirando los inversores.",
    body:`
  <h2>El Estado del Mercado en Junio 2026</h2>
  <p>Los mercados financieros en 2026 están marcados por la convivencia de <strong>máximos históricos en las acciones tecnológicas</strong>, una política monetaria de la Fed en proceso de normalización y la continua expansión del mercado de inteligencia artificial.</p>
  <div class="highlight-box"><strong>Indicadores clave — Junio 18, 2026:</strong><br>
  📈 S&P 500: ~5,500 puntos (máximos históricos en mayo 2026)<br>
  📈 Dow Jones: ~41,500 puntos<br>
  📈 NASDAQ Composite: ~17,000+ puntos<br>
  🟡 Bitcoin (BTC): ~$64,000 USD<br>
  🔶 Treasury 10 años: ~4.2%–4.5%<br>
  <em>El 4 de junio 2026, el NASDAQ cayó ~4% (peor día desde abril 2025) por ventas en chips de semiconductores. El 18 de junio rebotó tras una sorpresa positiva de la Fed.</em></div>

  <h2>Las 5 Mega-tendencias que Dominan los Mercados en 2026</h2>
  <ol>
    <li><strong>Inteligencia Artificial (IA):</strong> NVIDIA, Microsoft, Alphabet, Meta y Amazon lideran la carrera por la IA. Los chips de NVIDIA (GPU) son la "pala durante la fiebre del oro". El gasto en centros de datos de IA superará $500 mil millones anuales.</li>
    <li><strong>Normalización de tasas:</strong> Después de la agresiva campaña de alzas de la Fed en 2022–2023, 2025–2026 es un período de recortes graduales. Esto favorece a acciones de crecimiento y bonos.</li>
    <li><strong>Geopolítica y reshoring:</strong> Las tensiones EE.UU.-China impulsan la fabricación en EE.UU. y México (nearshoring). Sectores beneficiados: semiconductores, defensa, manufactura.</li>
    <li><strong>Energía y transición verde:</strong> Las energías renovables (solar, eólica) crecen aceleradamente pero el petróleo y gas siguen dominando el mix energético global.</li>
    <li><strong>Bitcoin ETFs y la institucionalización cripto:</strong> Los ETFs de Bitcoin spot aprobados por la SEC en enero 2024 atrajeron decenas de miles de millones al mercado cripto, llevando a BTC a nuevos máximos en 2024–2025.</li>
  </ol>

  <h2>Los Sectores con Mejor y Peor Desempeño en 2025–2026</h2>
  <table>
    <tr><th>Sector</th><th>Desempeño</th><th>Razón principal</th></tr>
    <tr><td>Tecnología / IA</td><td>⭐⭐⭐⭐⭐ Excelente</td><td>Boom de IA, ganancias récord de NVIDIA, Microsoft, Meta</td></tr>
    <tr><td>Servicios de comunicación</td><td>⭐⭐⭐⭐ Muy bueno</td><td>Meta, Alphabet se benefician del advertising y la IA</td></tr>
    <tr><td>Salud / Farmacéutico</td><td>⭐⭐⭐ Bueno</td><td>GLP-1 drugs (Ozempic, Wegovy) dominan la narrativa</td></tr>
    <tr><td>Financiero</td><td>⭐⭐⭐ Bueno</td><td>Tasas altas benefician a bancos; fusiones y adquisiciones</td></tr>
    <tr><td>Bienes raíces (REITs)</td><td>⭐⭐ Regular</td><td>Tasas altas presionan valuaciones</td></tr>
    <tr><td>Energía tradicional</td><td>⭐⭐ Regular</td><td>Petróleo volátil; competencia de renovables</td></tr>
  </table>

  <h2>¿Qué Están Mirando los Inversores Ahora?</h2>
  <ul>
    <li><strong>Decisiones de la Fed:</strong> ¿Cuándo y cuánto bajarán las tasas? Cada reunión del FOMC mueve los mercados.</li>
    <li><strong>Earnings de IA:</strong> Los resultados trimestrales de NVIDIA, Microsoft y Alphabet son los más seguidos del mundo.</li>
    <li><strong>Inflación:</strong> El IPC mensual sigue siendo el dato más importante para la Fed.</li>
    <li><strong>Mercado laboral:</strong> El reporte de empleo de los primeros viernes de cada mes (Jobs Report) mueve los mercados.</li>
    <li><strong>Elecciones y geopolítica:</strong> Las tensiones EE.UU.-China y los conflictos globales generan volatilidad.</li>
  </ul>

  <h2>Lección Final: Lo que Siempre es Verdad</h2>
  <div class="highlight-box">Independientemente de lo que haga el mercado en 2026:<br>
  ✓ Invertir regularmente (DCA) supera el market timing.<br>
  ✓ Los costos importan — los ETFs de índice ganan a los fondos activos caros.<br>
  ✓ La diversificación reduce el riesgo sin sacrificar rendimiento.<br>
  ✓ El tiempo en el mercado supera al timing del mercado.<br>
  ✓ Los mejores días del mercado ocurren después de los peores — nunca salgas por pánico.</div>

  <div class="summary"><h2>Resumen del Capítulo 10</h2><ul>
    <li>El S&P 500 alcanzó máximos históricos en mayo 2026; volatilidad en junio por semiconductores</li>
    <li>Bitcoin ~$64k; Treasury 10 años ~4.2%–4.5% en junio 2026</li>
    <li>Las 5 mega-tendencias: IA, normalización de tasas, nearshoring, energía verde, cripto institucional</li>
    <li>Tecnología / IA es el sector de mejor desempeño en 2025–2026</li>
    <li>Las verdades permanentes: DCA + diversificación + bajo costo + largo plazo</li>
  </ul></div>`,
    quiz:[
      {q:"¿Qué nivel alcanzó aproximadamente el S&P 500 en junio 2026?",options:["3,000 puntos","4,200 puntos","~5,500 puntos","8,000 puntos"],answer:2},
      {q:"¿Cuál fue el precio aproximado de Bitcoin el 18 de junio de 2026?",options:["$10,000","$30,000","$64,000","$120,000"],answer:2},
      {q:"¿Cuál fue el sector con MEJOR desempeño en 2025–2026?",options:["Energía tradicional","Bienes raíces (REITs)","Tecnología / Inteligencia Artificial","Materiales básicos"],answer:2},
      {q:"¿Qué evento causó la caída del 4% del NASDAQ el 4 de junio de 2026?",options:["Declaración de guerra","Alza sorpresiva de la Fed","Ventas masivas en acciones de semiconductores","Colapso de Bitcoin"],answer:2},
      {q:"¿Cuál es la tasa aproximada del Treasury americano a 10 años en junio 2026?",options:["0.5%","2.0%","4.2%–4.5%","8%"],answer:2},
      {q:"¿Cuál mega-tendencia domina los mercados en 2026?",options:["El auge del petróleo","La inteligencia artificial y los chips de NVIDIA","El mercado inmobiliario","Los bonos de mercados emergentes"],answer:1},
      {q:"¿Qué aprobó la SEC en enero 2024 que impulsó el mercado cripto?",options:["La legalización de las memecoins","Los ETFs de Bitcoin spot","La tokenización del dólar","Las stablecoins emitidas por la Fed"],answer:1},
      {q:"¿Qué dato económico mensual impacta más a los mercados de acciones y bonos?",options:["El PIB anual","El precio del petróleo","El IPC (inflación) y el Jobs Report","El déficit comercial"],answer:2},
      {q:"¿Qué significa el 'nearshoring' como tendencia en 2026?",options:["Invertir en mercados cercanos geográficamente","Trasladar manufactura a países cercanos (ej: México) por tensiones geopolíticas","Comprar acciones de países emergentes","Invertir en bonos de corto plazo"],answer:1},
      {q:"Según la lección final, ¿qué supera al 'market timing' (intentar comprar en el mínimo)?",options:["El análisis técnico avanzado","Invertir regularmente (DCA) en fondos índice","Mantener efectivo hasta el momento perfecto","Invertir solo en Bitcoin"],answer:1},
    ]
  },
];

const style = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Georgia,'Times New Roman',serif;background:#f8f9fa;color:#1a1a2e;line-height:1.8}
    .wrapper{max-width:860px;margin:0 auto;background:#fff;padding:60px 72px;min-height:100vh}
    .course-tag{font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#1d4ed8;margin-bottom:12px}
    h1{font-size:2rem;font-weight:700;color:#0f172a;margin-bottom:8px;line-height:1.3}
    .subtitle{font-size:1.05rem;color:#64748b;margin-bottom:40px;font-style:italic}
    hr{border:none;border-top:2px solid #bfdbfe;margin:32px 0}
    h2{font-size:1.35rem;font-weight:700;color:#1e293b;margin:36px 0 16px}
    h3{font-size:1.1rem;font-weight:700;color:#1d4ed8;margin:24px 0 10px}
    p{margin-bottom:16px;font-size:1rem}
    ul,ol{margin:16px 0 16px 24px}
    li{margin-bottom:8px;font-size:1rem}
    .highlight-box{background:#eff6ff;border-left:4px solid #3b82f6;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}
    .example{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin:20px 0}
    table{width:100%;border-collapse:collapse;margin:24px 0;font-size:.95rem}
    th{background:#1d4ed8;color:#fff;padding:12px 16px;text-align:left;font-family:Arial,sans-serif;font-weight:600}
    td{padding:11px 16px;border-bottom:1px solid #e2e8f0}
    tr:nth-child(even) td{background:#eff6ff}
    .summary{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:28px 32px;margin:40px 0 0}
    .summary h2{color:#60a5fa;margin-top:0}
    .summary li{color:#cbd5e1}
    @media(max-width:640px){.wrapper{padding:32px 24px}h1{font-size:1.5rem}}
`;

chapters.forEach(ch => {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ch.title} | Mercados Financieros | Español Sin Fronteras</title>
  <meta name="description" content="Aprende sobre ${ch.title} con quiz interactivo. Plataforma educativa gratuita.">
  <style>${style}</style>
</head>
<body>
<div class="wrapper">
  <div class="course-tag">Mercados Financieros · Capítulo ${ch.n}</div>
  <h1>${ch.title}</h1>
  <p class="subtitle">${ch.subtitle}</p>
  <hr>
  ${ch.body}
</div>
<script>
window.QUIZ_DATA = ${JSON.stringify({lang:"es",questions:ch.quiz},null,2)};
</script>
<script src="quiz-engine.js"></script>
</div>
</body>
</html>`;
  fs.writeFileSync(path.join(OUT, ch.file), html, "utf8");
  console.log(`✓ ${ch.file}`);
});
console.log("Done — 10 chapters.");
