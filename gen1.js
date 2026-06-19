const fs = require("fs");

const gfinStyle = `*{box-sizing:border-box;margin:0;padding:0}body{font-family:Georgia,'Times New Roman',serif;background:#f8f9fa;color:#1a1a2e;line-height:1.8}.wrapper{max-width:860px;margin:0 auto;background:#fff;padding:60px 72px;min-height:100vh}.course-tag{font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#1d4ed8;margin-bottom:12px}h1{font-size:2rem;font-weight:700;color:#0f172a;margin-bottom:8px;line-height:1.3}.subtitle{font-size:1.05rem;color:#64748b;margin-bottom:40px;font-style:italic}hr{border:none;border-top:2px solid #bfdbfe;margin:32px 0}h2{font-size:1.35rem;font-weight:700;color:#1e293b;margin:36px 0 16px}h3{font-size:1.1rem;font-weight:700;color:#1d4ed8;margin:24px 0 10px}p{margin-bottom:16px;font-size:1rem}ul,ol{margin:16px 0 16px 24px}li{margin-bottom:8px;font-size:1rem}.highlight-box{background:#eff6ff;border-left:4px solid #3b82f6;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}.example{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin:20px 0}table{width:100%;border-collapse:collapse;margin:24px 0;font-size:.95rem}th{background:#1d4ed8;color:#fff;padding:12px 16px;text-align:left;font-family:Arial,sans-serif;font-weight:600}td{padding:11px 16px;border-bottom:1px solid #e2e8f0}tr:nth-child(even) td{background:#eff6ff}.summary{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:28px 32px;margin:40px 0 0}.summary h2{color:#60a5fa;margin-top:0}.summary li{color:#cbd5e1}@media(max-width:640px){.wrapper{padding:32px 24px}h1{font-size:1.5rem}}`;

const cienciasStyle = `*{box-sizing:border-box;margin:0;padding:0}body{font-family:Georgia,'Times New Roman',serif;background:#f8f9fa;color:#1a1a2e;line-height:1.8}.wrapper{max-width:860px;margin:0 auto;background:#fff;padding:60px 72px;min-height:100vh}.course-tag{font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#166534;margin-bottom:12px}h1{font-size:2rem;font-weight:700;color:#0f172a;margin-bottom:8px;line-height:1.3}.subtitle{font-size:1.05rem;color:#64748b;margin-bottom:40px;font-style:italic}hr{border:none;border-top:2px solid #bbf7d0;margin:32px 0}h2{font-size:1.35rem;font-weight:700;color:#1e293b;margin:36px 0 16px}h3{font-size:1.1rem;font-weight:700;color:#166534;margin:24px 0 10px}p{margin-bottom:16px;font-size:1rem}ul,ol{margin:16px 0 16px 24px}li{margin-bottom:8px;font-size:1rem}.highlight-box{background:#f0fdf4;border-left:4px solid #22c55e;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0}.example{background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin:20px 0}table{width:100%;border-collapse:collapse;margin:24px 0;font-size:.95rem}th{background:#166534;color:#fff;padding:12px 16px;text-align:left;font-family:Arial,sans-serif;font-weight:600}td{padding:11px 16px;border-bottom:1px solid #e2e8f0}tr:nth-child(even) td{background:#f0fdf4}.summary{background:#0f172a;color:#e2e8f0;border-radius:12px;padding:28px 32px;margin:40px 0 0}.summary h2{color:#4ade80;margin-top:0}.summary li{color:#cbd5e1}@media(max-width:640px){.wrapper{padding:32px 24px}h1{font-size:1.5rem}}`;

function makeHTML(style, tag, capNum, title, subtitle, body, quizData) {
  return `<!DOCTYPE html>
<html lang="${tag.includes('Global Finance') ? 'en' : 'es'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${tag.split(' · ')[0]} | Español Sin Fronteras</title>
  <style>${style}</style>
</head>
<body>
<div class="wrapper">
  <div class="course-tag">${tag}</div>
  <h1>${title}</h1>
  <p class="subtitle">${subtitle}</p>
  <hr>
${body}
</div>
<script>
window.QUIZ_DATA = ${JSON.stringify(quizData, null, 2)};
</script>
<script src="quiz-engine.js"></script>
</body>
</html>`;
}

const chapters = [];

// ─── GLOBAL FINANCE CAP 16-20 ───
chapters.push({
  file: "GFIN CAP 16 Options and Derivatives ESF.html",
  html: makeHTML(gfinStyle, "Global Finance · Chapter 16", 16,
    "Options and Derivatives",
    "Understanding financial instruments that derive their value from underlying assets — stocks, bonds, commodities, or currencies.",
    `<h2>What Are Derivatives?</h2>
<p>A <strong>derivative</strong> is a financial contract whose value depends on an underlying asset. Common derivatives include options, futures, swaps, and forwards. They are used for hedging risk or speculating on price movements.</p>
<div class="highlight-box"><strong>Key fact:</strong> The global derivatives market exceeds $600 trillion in notional value — far larger than the global stock market.</div>

<h2>Options Contracts</h2>
<p>An <strong>option</strong> gives the buyer the <em>right, but not the obligation</em>, to buy or sell an asset at a set price (the strike price) before a specific date (expiration).</p>
<table>
  <tr><th>Type</th><th>Right Granted</th><th>Used When You Expect</th></tr>
  <tr><td><strong>Call Option</strong></td><td>Buy the asset at strike price</td><td>Price to rise</td></tr>
  <tr><td><strong>Put Option</strong></td><td>Sell the asset at strike price</td><td>Price to fall</td></tr>
</table>
<div class="example"><strong>Example:</strong> You buy a call option on Apple stock at $200 strike price. If Apple rises to $230, you profit $30 per share minus the premium paid. If it stays below $200, your only loss is the premium.</div>

<h2>Futures Contracts</h2>
<p><strong>Futures</strong> obligate both parties to buy or sell an asset at a predetermined price on a future date. Unlike options, there is no choice — both sides must fulfill the contract.</p>
<ul>
  <li>Commodity futures: oil, gold, wheat, corn</li>
  <li>Financial futures: S&P 500 index, Treasury bonds</li>
  <li>Currency futures: EUR/USD, JPY/USD</li>
</ul>

<h2>Hedging vs. Speculation</h2>
<p><strong>Hedging</strong> uses derivatives to reduce risk. An airline buys oil futures to lock in fuel costs. A farmer sells wheat futures to guarantee a sale price before harvest.</p>
<p><strong>Speculation</strong> uses derivatives to profit from price movements without owning the underlying asset — higher reward, but also higher risk.</p>
<div class="highlight-box"><strong>Important:</strong> Derivatives can amplify both gains and losses through leverage. Always understand your maximum possible loss before entering a derivatives position.</div>

<h2>The Greeks: Measuring Options Risk</h2>
<p>Options traders use "the Greeks" to measure how an option's price changes:</p>
<ul>
  <li><strong>Delta</strong> — how much the option moves per $1 move in the stock</li>
  <li><strong>Theta</strong> — time decay (options lose value as expiration approaches)</li>
  <li><strong>Vega</strong> — sensitivity to volatility changes</li>
  <li><strong>Gamma</strong> — rate of change of delta</li>
</ul>
<div class="summary">
  <h2>Chapter 16 Summary</h2>
  <ul>
    <li>Derivatives derive their value from an underlying asset</li>
    <li>Call options = right to buy; Put options = right to sell</li>
    <li>Futures obligate both parties to transact at a future date</li>
    <li>Derivatives are used for hedging (risk reduction) or speculation</li>
    <li>The Greeks measure different dimensions of options risk</li>
  </ul>
</div>`,
    { lang: "en", questions: [
      { q: "What is a derivative?", options: ["A type of bond","A contract whose value depends on an underlying asset","A government savings account","A type of mutual fund"], answer: 1 },
      { q: "A call option gives the buyer the right to:", options: ["Sell at the strike price","Buy at the strike price","Receive dividends","Short a stock"], answer: 1 },
      { q: "A put option is used when you expect the price to:", options: ["Rise","Stay flat","Fall","Double"], answer: 2 },
      { q: "Unlike options, futures contracts:", options: ["Give the right but not obligation","Expire worthless","Obligate both parties to transact","Only work with stocks"], answer: 2 },
      { q: "An airline buying oil futures to lock in fuel costs is an example of:", options: ["Speculation","Arbitrage","Hedging","Day trading"], answer: 2 },
      { q: "Which Greek measures how much an option moves per $1 move in the stock?", options: ["Theta","Vega","Gamma","Delta"], answer: 3 },
      { q: "Theta measures:", options: ["Volatility sensitivity","Time decay of options","Price sensitivity","Change in delta"], answer: 1 },
      { q: "Which of these is a commodity future?", options: ["S&P 500 future","EUR/USD future","Gold future","Treasury bond future"], answer: 2 },
      { q: "What is the maximum loss when buying a call option?", options: ["Unlimited","The strike price","The premium paid","50% of the stock price"], answer: 2 },
      { q: "The global derivatives market notional value exceeds:", options: ["$10 trillion","$100 trillion","$600 trillion","$1 billion"], answer: 2 },
    ]}
  )
});

chapters.push({
  file: "GFIN CAP 17 Hedge Funds and Alternative Investments ESF.html",
  html: makeHTML(gfinStyle, "Global Finance · Chapter 17", 17,
    "Hedge Funds and Alternative Investments",
    "Exploring investment strategies beyond stocks and bonds — for accredited investors seeking uncorrelated returns.",
    `<h2>What Is a Hedge Fund?</h2>
<p>A <strong>hedge fund</strong> is a private investment partnership that uses advanced strategies to generate returns regardless of market direction. Unlike mutual funds, hedge funds are largely unregulated and available only to accredited investors (typically those with $1M+ in assets).</p>
<div class="highlight-box"><strong>Key fact:</strong> The name "hedge fund" comes from early funds that "hedged" by taking both long and short positions to reduce risk. Today, many hedge funds are highly speculative.</div>

<h2>Common Hedge Fund Strategies</h2>
<table>
  <tr><th>Strategy</th><th>Description</th></tr>
  <tr><td>Long/Short Equity</td><td>Buy stocks expected to rise, short stocks expected to fall</td></tr>
  <tr><td>Global Macro</td><td>Bet on macroeconomic trends (currencies, interest rates, commodities)</td></tr>
  <tr><td>Event-Driven</td><td>Profit from mergers, bankruptcies, restructurings</td></tr>
  <tr><td>Quantitative</td><td>Use algorithms and data to find patterns</td></tr>
  <tr><td>Market Neutral</td><td>Equal long and short exposure to eliminate market risk</td></tr>
</table>

<h2>The "2 and 20" Fee Structure</h2>
<p>Most hedge funds charge <strong>2% management fee</strong> (on assets regardless of performance) plus <strong>20% performance fee</strong> (on profits). This means on a $1M investment earning 10% ($100k profit), you'd pay $20k management + $20k performance = $40k in fees.</p>
<div class="example"><strong>Example:</strong> Ray Dalio's Bridgewater Associates, the world's largest hedge fund, manages over $150 billion using a "risk parity" approach that balances exposure across economic environments.</div>

<h2>Alternative Investments</h2>
<p>Beyond hedge funds, alternative investments include:</p>
<ul>
  <li><strong>Private Equity</strong> — investing in private companies not listed on exchanges</li>
  <li><strong>Venture Capital</strong> — funding early-stage startups</li>
  <li><strong>Real Assets</strong> — infrastructure, farmland, timberland</li>
  <li><strong>Commodities</strong> — gold, oil, agricultural products</li>
  <li><strong>Collectibles</strong> — art, wine, rare watches, trading cards</li>
</ul>
<div class="highlight-box"><strong>Benefit of alternatives:</strong> Low correlation with stocks and bonds means they can improve portfolio diversification and reduce overall volatility.</div>

<div class="summary">
  <h2>Chapter 17 Summary</h2>
  <ul>
    <li>Hedge funds are private partnerships for accredited investors using advanced strategies</li>
    <li>The typical fee structure is "2 and 20" — 2% management + 20% of profits</li>
    <li>Common strategies: long/short, global macro, event-driven, quantitative</li>
    <li>Alternative investments include private equity, VC, real assets, and commodities</li>
    <li>Alternatives offer diversification through low correlation to traditional assets</li>
  </ul>
</div>`,
    { lang: "en", questions: [
      { q: "Who can typically invest in hedge funds?", options: ["Anyone with a brokerage account","Only government employees","Accredited investors with $1M+ in assets","Only retirees"], answer: 2 },
      { q: "What does the '20' in '2 and 20' fee structure refer to?", options: ["20% management fee","20% of profits as performance fee","$20 flat fee","20-year lock-up period"], answer: 1 },
      { q: "A global macro hedge fund bets on:", options: ["Single company earnings","Macroeconomic trends like currencies and rates","Only US markets","Startup valuations"], answer: 1 },
      { q: "What is private equity?", options: ["Investing in government bonds","Investing in private companies not on exchanges","A type of savings account","Trading options"], answer: 1 },
      { q: "Venture capital primarily funds:", options: ["Large corporations","Real estate projects","Early-stage startups","Government infrastructure"], answer: 2 },
      { q: "What is the main benefit of alternative investments in a portfolio?", options: ["Higher fees","Tax elimination","Low correlation with stocks/bonds","Guaranteed returns"], answer: 2 },
      { q: "The 'market neutral' strategy aims to:", options: ["Double market returns","Eliminate market risk with equal long/short exposure","Only invest in emerging markets","Beat the S&P 500"], answer: 1 },
      { q: "Bridgewater Associates is known as:", options: ["The oldest ETF","The world's largest hedge fund","The first cryptocurrency exchange","A central bank"], answer: 1 },
      { q: "An event-driven hedge fund profits from:", options: ["Weather patterns","Long-term index growth","Mergers and bankruptcies","Interest rate cycles"], answer: 2 },
      { q: "Which of these is a real asset?", options: ["Apple stock","Treasury bond","Farmland","Mutual fund"], answer: 2 },
    ]}
  )
});

chapters.push({
  file: "GFIN CAP 18 Behavioral Finance ESF.html",
  html: makeHTML(gfinStyle, "Global Finance · Chapter 18", 18,
    "Behavioral Finance",
    "How psychology, emotions, and cognitive biases drive financial decisions — and how to overcome them.",
    `<h2>What Is Behavioral Finance?</h2>
<p><strong>Behavioral finance</strong> combines psychology and economics to explain why people often make irrational financial decisions. Classical economics assumes investors are rational; behavioral finance proves they are not.</p>
<div class="highlight-box"><strong>Nobel Prize:</strong> Daniel Kahneman won the 2002 Nobel Prize in Economics for his work on behavioral finance, showing how human judgment departs from rational models.</div>

<h2>Key Cognitive Biases</h2>
<table>
  <tr><th>Bias</th><th>What It Means</th><th>Investment Impact</th></tr>
  <tr><td>Loss Aversion</td><td>Losses hurt ~2x more than equivalent gains feel good</td><td>Holding losing stocks too long</td></tr>
  <tr><td>Overconfidence</td><td>Overestimating one's own ability to pick stocks</td><td>Excessive trading, poor returns</td></tr>
  <tr><td>Anchoring</td><td>Over-relying on the first number you hear</td><td>Refusing to sell below purchase price</td></tr>
  <tr><td>Herd Mentality</td><td>Following the crowd's behavior</td><td>Buying at market peaks, selling at bottoms</td></tr>
  <tr><td>Confirmation Bias</td><td>Seeking information that confirms existing beliefs</td><td>Ignoring red flags in a favorite stock</td></tr>
</table>

<h2>Loss Aversion in Action</h2>
<p>Studies show most people need a potential gain of at least $200 to take a 50/50 bet that could lose $100. This asymmetry causes investors to:</p>
<ul>
  <li>Hold losing positions too long (hoping to "break even")</li>
  <li>Sell winning positions too early (locking in gains out of fear)</li>
  <li>Avoid all investing due to fear of any loss</li>
</ul>
<div class="example"><strong>The Disposition Effect:</strong> Investors sell winners 50% more often than losers — the opposite of optimal tax strategy (you should sell losers to harvest tax losses).</div>

<h2>Market Bubbles and Behavioral Finance</h2>
<p>Most financial bubbles are fueled by behavioral biases: overconfidence ("this time is different"), herd mentality (everyone is buying), and availability bias (recent gains feel like the norm). Examples: the Dot-com bubble (1999-2000), housing bubble (2006-2008), and crypto bubble (2021).</p>

<h2>How to Overcome Your Biases</h2>
<ul>
  <li>Automate investments (removes emotional decision-making)</li>
  <li>Keep an investment journal (track your reasoning)</li>
  <li>Use a pre-commitment strategy (rules set in advance)</li>
  <li>Seek a financial advisor for accountability</li>
  <li>Think in probabilities, not certainties</li>
</ul>
<div class="summary">
  <h2>Chapter 18 Summary</h2>
  <ul>
    <li>Behavioral finance shows that investors are not fully rational</li>
    <li>Loss aversion: losses feel ~2x worse than equivalent gains feel good</li>
    <li>Key biases: overconfidence, anchoring, herd mentality, confirmation bias</li>
    <li>Market bubbles are often fueled by behavioral biases</li>
    <li>Automating investments and setting rules in advance helps overcome biases</li>
  </ul>
</div>`,
    { lang: "en", questions: [
      { q: "Behavioral finance combines:", options: ["Math and physics","Psychology and economics","Law and accounting","Biology and statistics"], answer: 1 },
      { q: "Who won the Nobel Prize for behavioral finance research?", options: ["Warren Buffett","Milton Friedman","Daniel Kahneman","Paul Krugman"], answer: 2 },
      { q: "Loss aversion means losses feel approximately how much worse than equivalent gains?", options: ["Same","1.5x","2x","10x"], answer: 2 },
      { q: "Anchoring bias occurs when investors:", options: ["Diversify too much","Over-rely on the first number they hear","Follow the crowd","Ignore fundamentals"], answer: 1 },
      { q: "The 'disposition effect' describes investors who:", options: ["Buy at market peaks","Sell winners too early and hold losers too long","Only invest in index funds","Ignore market news"], answer: 1 },
      { q: "Herd mentality in investing leads to:", options: ["Better diversification","Buying at peaks and selling at bottoms","Lower transaction costs","More rational decisions"], answer: 1 },
      { q: "Confirmation bias means investors:", options: ["Confirm trades with a broker","Seek information that supports existing beliefs","Double-check all calculations","Follow insider tips"], answer: 1 },
      { q: "Which of these helps overcome emotional investing?", options: ["Checking prices daily","Automating investments","Following financial news constantly","Talking to friends about stocks"], answer: 1 },
      { q: "The dot-com bubble (1999-2000) is an example of:", options: ["Rational market pricing","Efficient market hypothesis","Behavioral biases driving a bubble","Government intervention"], answer: 2 },
      { q: "Overconfidence bias in investing typically leads to:", options: ["Lower returns due to excessive trading","Better stock selection","More diversification","Lower risk"], answer: 0 },
    ]}
  )
});

chapters.push({
  file: "GFIN CAP 19 ESG and Sustainable Investing ESF.html",
  html: makeHTML(gfinStyle, "Global Finance · Chapter 19", 19,
    "ESG and Sustainable Investing",
    "How environmental, social, and governance factors are reshaping investment decisions and corporate behavior worldwide.",
    `<h2>What Is ESG?</h2>
<p><strong>ESG</strong> stands for <strong>Environmental, Social, and Governance</strong> — three factors used to evaluate a company's sustainability and ethical impact beyond financial performance.</p>
<table>
  <tr><th>Pillar</th><th>What It Measures</th><th>Examples</th></tr>
  <tr><td><strong>Environmental (E)</strong></td><td>Climate impact, resource use, pollution</td><td>Carbon emissions, renewable energy use, water usage</td></tr>
  <tr><td><strong>Social (S)</strong></td><td>People and community impact</td><td>Labor practices, diversity, supply chain ethics</td></tr>
  <tr><td><strong>Governance (G)</strong></td><td>Corporate leadership and transparency</td><td>Board diversity, executive pay, shareholder rights</td></tr>
</table>

<h2>Why ESG Investing Has Grown</h2>
<p>ESG assets surpassed <strong>$35 trillion</strong> globally by 2025. Key drivers:</p>
<ul>
  <li>Millennial and Gen Z investors prioritize values-aligned investing</li>
  <li>Evidence that high-ESG companies face fewer scandals and legal risks</li>
  <li>Regulatory pressure in EU and US for ESG disclosure</li>
  <li>Climate risk is increasingly recognized as financial risk</li>
</ul>
<div class="highlight-box"><strong>Performance debate:</strong> Studies show ESG funds have generally performed on par with or better than traditional funds over the past decade, though results vary by fund and time period.</div>

<h2>Types of Sustainable Investing</h2>
<ul>
  <li><strong>Negative screening</strong> — excluding industries (tobacco, weapons, fossil fuels)</li>
  <li><strong>Positive screening</strong> — selecting best-in-class ESG performers</li>
  <li><strong>Impact investing</strong> — targeting investments with measurable social/environmental outcomes</li>
  <li><strong>Shareholder activism</strong> — using ownership to push companies to improve ESG practices</li>
</ul>
<div class="example"><strong>Example:</strong> The $1 trillion Norwegian Government Pension Fund (world's largest sovereign wealth fund) excludes companies that violate ethical norms and engages with thousands of companies on ESG issues.</div>

<h2>Greenwashing Risk</h2>
<p><strong>Greenwashing</strong> occurs when companies or funds exaggerate or misrepresent their ESG credentials. Regulators in the US (SEC) and EU are increasingly cracking down on misleading ESG claims.</p>
<div class="summary">
  <h2>Chapter 19 Summary</h2>
  <ul>
    <li>ESG = Environmental, Social, and Governance criteria for evaluating companies</li>
    <li>Global ESG assets exceeded $35 trillion by 2025</li>
    <li>ESG investing strategies range from exclusion screening to impact investing</li>
    <li>High-ESG companies often face lower regulatory and reputational risk</li>
    <li>Greenwashing is a growing concern — verify ESG claims carefully</li>
  </ul>
</div>`,
    { lang: "en", questions: [
      { q: "What does the 'E' in ESG stand for?", options: ["Earnings","Environmental","Equity","Exchange"], answer: 1 },
      { q: "Which ESG pillar covers board diversity and executive pay?", options: ["Environmental","Social","Governance","Financial"], answer: 2 },
      { q: "By 2025, global ESG assets surpassed:", options: ["$1 trillion","$10 trillion","$35 trillion","$100 trillion"], answer: 2 },
      { q: "Negative screening in ESG investing means:", options: ["Rating companies negatively","Excluding certain industries","Short selling ESG laggards","Avoiding ESG entirely"], answer: 1 },
      { q: "What is greenwashing?", options: ["Investing in green energy","Exaggerating or misrepresenting ESG credentials","Cleaning up pollution","A type of bond"], answer: 1 },
      { q: "Impact investing targets:", options: ["The highest financial returns only","Investments with measurable social/environmental outcomes","Only government bonds","Short-term trading profits"], answer: 1 },
      { q: "The Norwegian Government Pension Fund is notable for:", options: ["Investing only in tech stocks","Being the world's largest sovereign wealth fund","Having no ESG policy","Focusing only on Norway"], answer: 1 },
      { q: "Which generation most drives demand for ESG investing?", options: ["Baby Boomers","Generation X","Millennials and Gen Z","Silent Generation"], answer: 2 },
      { q: "Shareholder activism in ESG refers to:", options: ["Selling ESG stocks","Using ownership to push companies to improve practices","Avoiding shareholder meetings","Lobbying against ESG regulation"], answer: 1 },
      { q: "Which regulator is cracking down on greenwashing in the US?", options: ["Federal Reserve","IRS","SEC","FDIC"], answer: 2 },
    ]}
  )
});

chapters.push({
  file: "GFIN CAP 20 Building Your Investment Portfolio ESF.html",
  html: makeHTML(gfinStyle, "Global Finance · Chapter 20", 20,
    "Building Your Investment Portfolio",
    "Putting it all together — creating a personal investment strategy aligned with your goals, timeline, and risk tolerance.",
    `<h2>Step 1: Define Your Financial Goals</h2>
<p>Before investing, define <em>why</em> you are investing. Goals determine your strategy:</p>
<table>
  <tr><th>Goal</th><th>Time Horizon</th><th>Typical Strategy</th></tr>
  <tr><td>Emergency fund</td><td>0–1 year</td><td>High-yield savings, money market</td></tr>
  <tr><td>Down payment</td><td>2–5 years</td><td>Bonds, conservative allocation</td></tr>
  <tr><td>Retirement (young)</td><td>30+ years</td><td>80–100% stocks</td></tr>
  <tr><td>Retirement (near)</td><td>5–10 years</td><td>60% stocks / 40% bonds</td></tr>
</table>

<h2>Step 2: Assess Your Risk Tolerance</h2>
<p>Ask yourself: <em>"If my portfolio dropped 30% in one month, would I sell or hold?"</em> Your honest answer defines your risk tolerance. Factors that affect it:</p>
<ul>
  <li><strong>Age</strong> — younger investors can take more risk (time to recover)</li>
  <li><strong>Income stability</strong> — stable income = more risk capacity</li>
  <li><strong>Dependents</strong> — more dependents = lower risk tolerance</li>
  <li><strong>Psychological comfort</strong> — emotional reaction to loss matters</li>
</ul>

<h2>Step 3: Choose Your Asset Allocation</h2>
<p>A classic rule: subtract your age from 110 to get your stock percentage. Age 30: 80% stocks, 20% bonds. Age 60: 50% stocks, 50% bonds.</p>
<div class="highlight-box"><strong>Three-fund portfolio (simple and effective):</strong><br>1. US Total Market Index Fund<br>2. International Index Fund<br>3. Bond Index Fund<br>This approach is endorsed by Vanguard founder John Bogle and Warren Buffett.</div>

<h2>Step 4: Choose Your Accounts</h2>
<ul>
  <li><strong>401(k) / 403(b)</strong> — employer-sponsored, tax-deferred, often with employer match</li>
  <li><strong>IRA (Traditional)</strong> — tax-deductible contributions, taxed on withdrawal</li>
  <li><strong>Roth IRA</strong> — after-tax contributions, tax-free growth and withdrawal</li>
  <li><strong>Taxable brokerage</strong> — no limits or tax advantages, maximum flexibility</li>
</ul>
<div class="example"><strong>Priority order:</strong> (1) 401k up to employer match → (2) Roth IRA max → (3) 401k max → (4) taxable account</div>

<h2>Step 5: Rebalance and Stay the Course</h2>
<p>Review your portfolio annually and rebalance back to your target allocation. The biggest mistake is reacting emotionally to market swings — the investors who do best are often those who barely check their accounts.</p>
<div class="summary">
  <h2>Chapter 20 Summary</h2>
  <ul>
    <li>Define your goals and time horizon before choosing any investment</li>
    <li>Risk tolerance determines your stock/bond allocation</li>
    <li>A three-fund portfolio (US + international + bonds) is simple and effective</li>
    <li>Maximize tax-advantaged accounts before investing in taxable accounts</li>
    <li>Rebalance annually and stay the course through market downturns</li>
  </ul>
</div>`,
    { lang: "en", questions: [
      { q: "What should you define BEFORE starting to invest?", options: ["Which stock will rise most","Your financial goals","The best hedge fund","Current interest rates"], answer: 1 },
      { q: "For a 30-year retirement timeline, the typical strategy is:", options: ["100% bonds","60% bonds / 40% stocks","80–100% stocks","100% cash"], answer: 2 },
      { q: "According to the age-based rule, a 40-year-old should have approximately what stock allocation?", options: ["40%","60%","70%","90%"], answer: 2 },
      { q: "The three-fund portfolio typically includes:", options: ["Gold, real estate, and crypto","US stocks, international stocks, and bonds","Tech, healthcare, and energy","Growth, value, and dividend stocks"], answer: 1 },
      { q: "What is the main advantage of a Roth IRA?", options: ["Tax deduction on contributions","No contribution limits","Tax-free growth and withdrawal","Employer matching"], answer: 2 },
      { q: "What is the recommended account priority order?", options: ["Taxable first, then 401k","401k match → Roth IRA → 401k max → taxable","Roth IRA first, then nothing else","No particular order"], answer: 1 },
      { q: "A 401(k) is:", options: ["A type of savings bond","An employer-sponsored tax-deferred retirement account","A government grant","A type of life insurance"], answer: 1 },
      { q: "How often should you rebalance your portfolio?", options: ["Daily","Weekly","Annually","Never"], answer: 2 },
      { q: "Who endorsed the three-fund portfolio approach?", options: ["George Soros and Ray Dalio","John Bogle and Warren Buffett","Jerome Powell and Janet Yellen","Elon Musk and Jeff Bezos"], answer: 1 },
      { q: "What is the most common investor mistake during market downturns?", options: ["Rebalancing too often","Reacting emotionally and selling","Buying index funds","Increasing contributions"], answer: 1 },
    ]}
  )
});

// ─── CIENCIAS CAP 14-20 ───
const ciencias = [
  { cap: 14, title: "Temperatura y Calor", subtitle: "Termodinámica básica: cómo se transfiere la energía térmica y su impacto en la materia y los sistemas físicos.",
    body: `<h2>¿Qué es el Calor?</h2>
<p>El <strong>calor</strong> es la transferencia de energía térmica entre dos objetos a diferentes temperaturas. Siempre fluye del objeto más caliente al más frío hasta que alcanzan el equilibrio térmico.</p>
<div class="highlight-box"><strong>Dato clave:</strong> El calor y la temperatura son conceptos distintos. La temperatura mide la energía cinética promedio de las partículas; el calor es la transferencia de esa energía.</div>
<h2>Escalas de Temperatura</h2>
<table>
  <tr><th>Escala</th><th>Punto de congelación del agua</th><th>Punto de ebullición</th></tr>
  <tr><td>Celsius (°C)</td><td>0°C</td><td>100°C</td></tr>
  <tr><td>Fahrenheit (°F)</td><td>32°F</td><td>212°F</td></tr>
  <tr><td>Kelvin (K)</td><td>273 K</td><td>373 K</td></tr>
</table>
<p>El <strong>cero absoluto</strong> (0 K = -273°C) es la temperatura más baja posible, donde cesa todo movimiento molecular.</p>
<h2>Formas de Transferencia de Calor</h2>
<ul>
  <li><strong>Conducción</strong> — transferencia por contacto directo (una cuchara metálica en sopa caliente)</li>
  <li><strong>Convección</strong> — transferencia a través de fluidos en movimiento (el agua hirviendo circula)</li>
  <li><strong>Radiación</strong> — transferencia por ondas electromagnéticas sin necesidad de materia (calor del Sol)</li>
</ul>
<div class="example"><strong>Ejemplo cotidiano:</strong> Un termo mantiene el café caliente usando vacío (evita conducción y convección) y paredes reflectantes (evita radiación).</div>
<h2>Cambios de Estado y Calor Latente</h2>
<p>Durante un cambio de estado (sólido → líquido → gas), la temperatura permanece constante mientras se absorbe o libera <strong>calor latente</strong>. Por eso el hielo a 0°C absorbe mucho calor antes de convertirse en agua a 0°C.</p>
<div class="summary"><h2>Resumen del Capítulo 14</h2><ul>
  <li>El calor es transferencia de energía térmica; la temperatura mide energía cinética molecular</li>
  <li>Tres escalas: Celsius, Fahrenheit, Kelvin (0 K = cero absoluto)</li>
  <li>Formas de transferencia: conducción, convección, radiación</li>
  <li>Durante cambios de estado, la temperatura no varía (calor latente)</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"¿Qué mide la temperatura?",options:["La cantidad de materia","La energía cinética promedio de las partículas","La velocidad de la luz","La densidad del objeto"],answer:1},
      {q:"¿En qué dirección fluye el calor naturalmente?",options:["Del frío al caliente","Del caliente al frío","En ambas direcciones","No fluye"],answer:1},
      {q:"¿Cuál es el valor del cero absoluto en Celsius?",options:["-100°C","-200°C","-273°C","-373°C"],answer:2},
      {q:"¿Qué forma de transferencia de calor ocurre sin necesidad de materia?",options:["Conducción","Convección","Radiación","Difusión"],answer:2},
      {q:"Una cuchara metálica que se calienta en sopa es ejemplo de:",options:["Convección","Radiación","Conducción","Evaporación"],answer:2},
      {q:"¿Cuál es el punto de ebullición del agua en Kelvin?",options:["273 K","373 K","100 K","212 K"],answer:1},
      {q:"El calor latente se absorbe durante:",options:["Un aumento de temperatura","Un cambio de estado","Una reacción química","La radiación solar"],answer:1},
      {q:"¿Cómo funciona un termo para conservar el calor?",options:["Con calefacción eléctrica","Con vacío y paredes reflectantes","Con hielo interior","Con materiales conductores"],answer:1},
      {q:"El agua hirviendo que circula en una olla es ejemplo de:",options:["Conducción","Radiación","Convección","Fusión"],answer:2},
      {q:"¿Qué ocurre con la temperatura del agua mientras el hielo se derrite a 0°C?",options:["Sube constantemente","Baja constantemente","Permanece constante","Oscila"],answer:2},
    ]}
  },
  { cap: 15, title: "La Tabla Periódica", subtitle: "Organización de los elementos químicos, sus propiedades y cómo predecir el comportamiento de la materia.",
    body: `<h2>¿Qué es la Tabla Periódica?</h2>
<p>La <strong>tabla periódica</strong> organiza los 118 elementos conocidos según su número atómico (cantidad de protones) y sus propiedades químicas. Fue creada por <strong>Dmitri Mendeléyev</strong> en 1869.</p>
<div class="highlight-box"><strong>Ley Periódica:</strong> Las propiedades de los elementos son función periódica de su número atómico — cada 8 o 18 elementos se repiten patrones similares.</div>
<h2>Organización de la Tabla</h2>
<table>
  <tr><th>Estructura</th><th>Descripción</th></tr>
  <tr><td>Períodos (filas)</td><td>7 filas horizontales; indican el número de capas electrónicas</td></tr>
  <tr><td>Grupos (columnas)</td><td>18 columnas; elementos con propiedades similares</td></tr>
  <tr><td>Metales</td><td>Izquierda y centro; buenos conductores, brillantes</td></tr>
  <tr><td>No metales</td><td>Derecha; malos conductores, frágiles</td></tr>
  <tr><td>Metaloides</td><td>Frontera; propiedades intermedias (silicio, germanio)</td></tr>
</table>
<h2>Grupos Importantes</h2>
<ul>
  <li><strong>Grupo 1 — Metales alcalinos</strong>: Li, Na, K — muy reactivos, reaccionan violentamente con el agua</li>
  <li><strong>Grupo 17 — Halógenos</strong>: F, Cl, Br — altamente reactivos, forman sales</li>
  <li><strong>Grupo 18 — Gases nobles</strong>: He, Ne, Ar — inertes, no reaccionan</li>
  <li><strong>Metales de transición</strong>: Fe, Cu, Au — conductores, usados en electrónica y joyería</li>
</ul>
<div class="example"><strong>Dato curioso:</strong> El elemento 118 (Oganesón) fue sintetizado en laboratorio en 2002. Solo se han creado unos pocos átomos y duran microsegundos.</div>
<div class="summary"><h2>Resumen del Capítulo 15</h2><ul>
  <li>La tabla periódica organiza 118 elementos por número atómico</li>
  <li>Creada por Mendeléyev en 1869</li>
  <li>Períodos = filas (capas electrónicas); Grupos = columnas (propiedades similares)</li>
  <li>Metales alcalinos: muy reactivos; Gases nobles: inertes</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"¿Quién creó la tabla periódica?",options:["Isaac Newton","Marie Curie","Dmitri Mendeléyev","Albert Einstein"],answer:2},
      {q:"¿En qué se basa la organización de la tabla periódica?",options:["Masa atómica","Número de neutrones","Número atómico (protones)","Año de descubrimiento"],answer:2},
      {q:"¿Cuántos elementos tiene la tabla periódica actual?",options:["92","100","108","118"],answer:3},
      {q:"¿Qué indica el período (fila) de un elemento?",options:["Su reactividad","El número de capas electrónicas","Su masa","Su color"],answer:1},
      {q:"¿Cuál es la característica de los gases nobles (Grupo 18)?",options:["Son muy reactivos","Son sólidos a temperatura ambiente","Son inertes (no reaccionan)","Conducen electricidad"],answer:2},
      {q:"Los metales alcalinos (Grupo 1) son:",options:["Inertes","Poco reactivos","Muy reactivos con el agua","No conductores"],answer:2},
      {q:"¿Qué son los metaloides?",options:["Solo metales","Solo no metales","Elementos con propiedades intermedias","Gases nobles"],answer:2},
      {q:"¿Cuál es un halógeno?",options:["Helio (He)","Sodio (Na)","Cloro (Cl)","Hierro (Fe)"],answer:2},
      {q:"Los metales de transición (Fe, Cu, Au) se usan principalmente en:",options:["Medicina","Electrónica y joyería","Explosivos","Combustibles"],answer:1},
      {q:"¿Qué indica que dos elementos están en el mismo grupo (columna)?",options:["Misma masa","Mismas propiedades químicas","Mismo número de protones","Mismo estado físico"],answer:1},
    ]}
  },
  { cap: 16, title: "Reacciones Químicas", subtitle: "Cómo y por qué los átomos se reorganizan para formar nuevas sustancias: tipos de reacciones y conservación de la materia.",
    body: `<h2>¿Qué es una Reacción Química?</h2>
<p>Una <strong>reacción química</strong> ocurre cuando las sustancias (reactivos) se transforman en nuevas sustancias (productos) mediante la ruptura y formación de enlaces químicos. La materia no se crea ni destruye — solo se reorganiza.</p>
<div class="highlight-box"><strong>Ley de Conservación de la Masa (Lavoisier):</strong> La masa total de los reactivos siempre es igual a la masa total de los productos.</div>
<h2>Tipos de Reacciones Químicas</h2>
<table>
  <tr><th>Tipo</th><th>Descripción</th><th>Ejemplo</th></tr>
  <tr><td>Síntesis</td><td>A + B → AB</td><td>H₂ + O → H₂O</td></tr>
  <tr><td>Descomposición</td><td>AB → A + B</td><td>H₂O → H₂ + O</td></tr>
  <tr><td>Combustión</td><td>Sustancia + O₂ → CO₂ + H₂O + calor</td><td>Quemar gasolina</td></tr>
  <tr><td>Sustitución simple</td><td>A + BC → AC + B</td><td>Fe + CuSO₄ → FeSO₄ + Cu</td></tr>
  <tr><td>Neutralización</td><td>Ácido + Base → Sal + Agua</td><td>HCl + NaOH → NaCl + H₂O</td></tr>
</table>
<h2>Señales de una Reacción Química</h2>
<ul>
  <li>Cambio de color</li>
  <li>Producción de gas (burbujas)</li>
  <li>Formación de un precipitado (sólido en solución)</li>
  <li>Cambio de temperatura (exotérmica = libera calor; endotérmica = absorbe calor)</li>
  <li>Producción de luz</li>
</ul>
<div class="example"><strong>Ejemplo cotidiano:</strong> El bicarbonato de sodio + vinagre produce CO₂ (gas), cambia de temperatura y hace espuma. Es una reacción de neutralización ácido-base.</div>
<h2>Catalizadores</h2>
<p>Un <strong>catalizador</strong> aumenta la velocidad de una reacción sin consumirse. Las enzimas son catalizadores biológicos que permiten que las reacciones del cuerpo ocurran a temperatura corporal (37°C).</p>
<div class="summary"><h2>Resumen del Capítulo 16</h2><ul>
  <li>Las reacciones químicas convierten reactivos en productos reorganizando átomos</li>
  <li>La masa total se conserva (Ley de Lavoisier)</li>
  <li>Tipos: síntesis, descomposición, combustión, sustitución, neutralización</li>
  <li>Señales: cambio de color, gas, precipitado, cambio de temperatura</li>
  <li>Catalizadores aceleran reacciones sin consumirse</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"La Ley de Conservación de la Masa dice que:",options:["La masa aumenta en reacciones","La masa disminuye siempre","La masa total de reactivos = masa total de productos","Los productos son más pesados que los reactivos"],answer:2},
      {q:"¿Cuál es el tipo de reacción A + B → AB?",options:["Descomposición","Síntesis","Combustión","Neutralización"],answer:1},
      {q:"La combustión siempre requiere:",options:["Agua","Oxígeno","Nitrógeno","Hidrógeno"],answer:1},
      {q:"¿Cuál es una señal de que ocurrió una reacción química?",options:["El objeto se mueve","Cambio de color o producción de gas","Cambio de posición","Aumento de volumen sin cambio de sustancia"],answer:1},
      {q:"Una reacción exotérmica:",options:["Absorbe calor","Libera calor","No cambia temperatura","Requiere frío extremo"],answer:1},
      {q:"¿Qué es un catalizador?",options:["Un producto de la reacción","Una sustancia que ralentiza reacciones","Una sustancia que acelera reacciones sin consumirse","Un tipo de reactivo"],answer:2},
      {q:"Las enzimas son:",options:["Catalizadores sintéticos","Catalizadores biológicos","Tipos de ácidos","Tipos de bases"],answer:1},
      {q:"La neutralización ocurre entre:",options:["Metal y sal","Ácido y base","Gas y sólido","Dos metales"],answer:1},
      {q:"El bicarbonato + vinagre produce:",options:["Agua pura","Sal común","CO₂ y espuma","Oxígeno puro"],answer:2},
      {q:"La descomposición química es:",options:["A + B → AB","AB → A + B","A + O₂ → CO₂","A + BC → AC + B"],answer:1},
    ]}
  },
  { cap: 17, title: "El Sistema Solar", subtitle: "Nuestro vecindario cósmico: planetas, lunas, asteroides y las leyes que gobiernan el movimiento orbital.",
    body: `<h2>Estructura del Sistema Solar</h2>
<p>El <strong>Sistema Solar</strong> consiste en el Sol y todos los objetos que orbitan a su alrededor gracias a su gravedad: 8 planetas, 5 planetas enanos, 200+ lunas, millones de asteroides y cometas.</p>
<div class="highlight-box"><strong>Dato:</strong> El Sol contiene el 99.86% de toda la masa del Sistema Solar. La Tierra y todos los planetas combinados representan menos del 0.2%.</div>
<h2>Los 8 Planetas</h2>
<table>
  <tr><th>Planeta</th><th>Tipo</th><th>Dato Notable</th></tr>
  <tr><td>Mercurio</td><td>Rocoso</td><td>El más cercano al Sol; sin atmósfera</td></tr>
  <tr><td>Venus</td><td>Rocoso</td><td>El más caliente (460°C); gira al revés</td></tr>
  <tr><td>Tierra</td><td>Rocoso</td><td>El único con vida conocida; 1 luna</td></tr>
  <tr><td>Marte</td><td>Rocoso</td><td>El "planeta rojo"; 2 lunas pequeñas</td></tr>
  <tr><td>Júpiter</td><td>Gaseoso</td><td>El más grande; 95 lunas conocidas</td></tr>
  <tr><td>Saturno</td><td>Gaseoso</td><td>Anillos de hielo y roca; 146 lunas</td></tr>
  <tr><td>Urano</td><td>Helado</td><td>Gira de lado (eje inclinado 98°)</td></tr>
  <tr><td>Neptuno</td><td>Helado</td><td>Los vientos más fuertes (2100 km/h)</td></tr>
</table>
<h2>El Cinturón de Asteroides y el Cinturón de Kuiper</h2>
<p>El <strong>Cinturón de Asteroides</strong> entre Marte y Júpiter contiene millones de rocas espaciales. El <strong>Cinturón de Kuiper</strong> más allá de Neptuno incluye Plutón (ahora planeta enano) y otros objetos helados.</p>
<div class="example"><strong>¿Por qué Plutón dejó de ser planeta?</strong> En 2006 la IAU redefinió "planeta" — requiere limpiar su órbita de otros objetos. Plutón comparte su órbita con muchos objetos del Cinturón de Kuiper.</div>
<h2>Leyes de Kepler del Movimiento Planetario</h2>
<ul>
  <li><strong>1ª Ley</strong>: Los planetas orbitan al Sol en elipses (no círculos perfectos)</li>
  <li><strong>2ª Ley</strong>: Un planeta barre áreas iguales en tiempos iguales (más rápido cerca del Sol)</li>
  <li><strong>3ª Ley</strong>: El período orbital² ∝ distancia al Sol³</li>
</ul>
<div class="summary"><h2>Resumen del Capítulo 17</h2><ul>
  <li>El Sistema Solar: Sol + 8 planetas + planetas enanos + lunas + asteroides</li>
  <li>El Sol tiene el 99.86% de la masa del sistema</li>
  <li>4 planetas rocosos (interiores) y 4 gigantes (exteriores: 2 gaseosos + 2 helados)</li>
  <li>Plutón es planeta enano desde 2006</li>
  <li>Las 3 Leyes de Kepler describen los movimientos orbitales</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"¿Cuántos planetas tiene el Sistema Solar?",options:["7","8","9","10"],answer:1},
      {q:"¿Qué porcentaje de la masa del Sistema Solar tiene el Sol?",options:["50%","75%","90%","99.86%"],answer:3},
      {q:"¿Cuál es el planeta más caliente del Sistema Solar?",options:["Mercurio","Venus","Marte","Júpiter"],answer:1},
      {q:"¿Cuántas lunas conocidas tiene Júpiter (2024)?",options:["12","27","67","95"],answer:3},
      {q:"¿Por qué Plutón dejó de ser considerado planeta en 2006?",options:["Es demasiado pequeño","No orbita el Sol","No ha limpiado su órbita de otros objetos","Es de hielo"],answer:2},
      {q:"El Cinturón de Asteroides está entre:",options:["La Tierra y Marte","Marte y Júpiter","Júpiter y Saturno","Urano y Neptuno"],answer:1},
      {q:"¿Qué planeta tiene el eje más inclinado (98°)?",options:["Saturno","Neptuno","Urano","Venus"],answer:2},
      {q:"Según la 1ª Ley de Kepler, los planetas orbitan al Sol en:",options:["Círculos perfectos","Espirales","Elipses","Líneas rectas"],answer:2},
      {q:"¿Cuál es el planeta más grande del Sistema Solar?",options:["Saturno","Urano","Neptuno","Júpiter"],answer:3},
      {q:"¿Qué planeta tiene los vientos más fuertes del Sistema Solar?",options:["Júpiter","Saturno","Urano","Neptuno"],answer:3},
    ]}
  },
  { cap: 18, title: "Ecosistemas y Medio Ambiente", subtitle: "Las relaciones entre organismos y su entorno, flujos de energía, cadenas alimentarias y el impacto humano en los ecosistemas.",
    body: `<h2>¿Qué es un Ecosistema?</h2>
<p>Un <strong>ecosistema</strong> es una comunidad de organismos vivos (bióticos) que interactúan entre sí y con su entorno físico (abiótico: agua, luz, temperatura, suelo) en un área determinada.</p>
<div class="highlight-box"><strong>Componentes:</strong> Factores bióticos (plantas, animales, hongos, bacterias) + Factores abióticos (clima, suelo, agua, luz solar, temperatura).</div>
<h2>Cadenas y Redes Alimentarias</h2>
<table>
  <tr><th>Nivel Trófico</th><th>Rol</th><th>Ejemplos</th></tr>
  <tr><td>Productores</td><td>Convierten luz solar en energía (fotosíntesis)</td><td>Plantas, algas, fitoplancton</td></tr>
  <tr><td>Consumidores primarios</td><td>Herbívoros que comen productores</td><td>Conejos, insectos, vacas</td></tr>
  <tr><td>Consumidores secundarios</td><td>Carnívoros que comen herbívoros</td><td>Zorros, ranas, peces pequeños</td></tr>
  <tr><td>Consumidores terciarios</td><td>Depredadores tope</td><td>Águilas, tiburones, leones</td></tr>
  <tr><td>Descomponedores</td><td>Descomponen materia muerta</td><td>Hongos, bacterias, lombrices</td></tr>
</table>
<h2>Flujo de Energía</h2>
<p>En cada nivel trófico se pierde aproximadamente el <strong>90% de la energía</strong> (como calor). Solo el 10% pasa al siguiente nivel. Por eso las cadenas alimentarias son cortas y hay menos depredadores que presas.</p>
<div class="example"><strong>Regla del 10%:</strong> Si un prado tiene 10,000 kg de hierba, puede sostener 1,000 kg de conejos, 100 kg de zorros y solo 10 kg de águilas.</div>
<h2>Biomas del Mundo</h2>
<ul>
  <li><strong>Selva tropical</strong>: Mayor biodiversidad; 50% de las especies terrestres</li>
  <li><strong>Desierto</strong>: Menos de 250 mm de lluvia anual</li>
  <li><strong>Tundra</strong>: Permafrost; inviernos extremos</li>
  <li><strong>Oceano</strong>: Cubre el 71% de la Tierra; regula el clima</li>
</ul>
<h2>Impacto Humano</h2>
<p>La actividad humana amenaza los ecosistemas a través de: deforestación, contaminación, cambio climático, especies invasoras y sobreexplotación. La <strong>pérdida de biodiversidad</strong> es irreversible — las extinciones son permanentes.</p>
<div class="summary"><h2>Resumen del Capítulo 18</h2><ul>
  <li>Ecosistema = factores bióticos + abióticos en un área</li>
  <li>Niveles tróficos: productores → consumidores → descomponedores</li>
  <li>Solo el 10% de la energía pasa entre niveles tróficos</li>
  <li>Las selvas tropicales tienen el 50% de las especies terrestres</li>
  <li>La actividad humana amenaza la biodiversidad irreversiblemente</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"¿Qué son los factores abióticos de un ecosistema?",options:["Plantas y animales","Agua, luz, temperatura y suelo","Solo el suelo","Los descomponedores"],answer:1},
      {q:"¿Qué organismos realizan la fotosíntesis?",options:["Consumidores primarios","Descomponedores","Productores","Consumidores terciarios"],answer:2},
      {q:"¿Cuánta energía se transfiere entre niveles tróficos?",options:["90%","50%","10%","100%"],answer:2},
      {q:"¿Qué son los descomponedores?",options:["Herbívoros","Carnívoros tope","Organismos que descomponen materia muerta","Plantas carnívoras"],answer:2},
      {q:"¿Qué bioma tiene mayor biodiversidad?",options:["Desierto","Tundra","Selva tropical","Pradera"],answer:2},
      {q:"¿Cuánto del planeta cubre el océano?",options:["50%","60%","71%","90%"],answer:2},
      {q:"Un conejo que come hierba es:",options:["Productor","Consumidor primario","Consumidor secundario","Descomponedor"],answer:1},
      {q:"¿Por qué hay menos depredadores tope que presas en un ecosistema?",options:["Los depredadores migran","Se pierde el 90% de la energía en cada nivel","Los depredadores no comen mucho","Las presas son más fuertes"],answer:1},
      {q:"¿Cuál NO es una amenaza humana a los ecosistemas?",options:["Deforestación","Fotosíntesis","Contaminación","Especies invasoras"],answer:1},
      {q:"La pérdida de biodiversidad es:",options:["Temporal y reversible","Permanente e irreversible","Solo local","Insignificante"],answer:1},
    ]}
  },
  { cap: 19, title: "Genética y Herencia", subtitle: "Cómo los genes transmiten características de padres a hijos — desde el ADN hasta las Leyes de Mendel.",
    body: `<h2>¿Qué es el ADN?</h2>
<p>El <strong>ADN</strong> (Ácido Desoxirribonucleico) es la molécula que contiene las instrucciones genéticas de todos los seres vivos. Tiene forma de <strong>doble hélice</strong> y está compuesto por 4 bases: Adenina (A), Timina (T), Guanina (G) y Citosina (C).</p>
<div class="highlight-box"><strong>Dato:</strong> El ADN humano tiene ~3,000 millones de pares de bases. Si se estirara todo el ADN de una sola célula, mediría ~2 metros de largo.</div>
<h2>Genes, Alelos y Cromosomas</h2>
<table>
  <tr><th>Término</th><th>Definición</th></tr>
  <tr><td>Gen</td><td>Segmento de ADN que codifica una característica</td></tr>
  <tr><td>Alelo</td><td>Variante de un gen (ej: ojo azul vs. ojo marrón)</td></tr>
  <tr><td>Cromosoma</td><td>Estructura que contiene miles de genes</td></tr>
  <tr><td>Genotipo</td><td>Combinación genética (Bb, BB, bb)</td></tr>
  <tr><td>Fenotipo</td><td>Característica observable (color de ojos)</td></tr>
</table>
<p>Los humanos tienen <strong>46 cromosomas</strong> (23 pares): 22 pares de autosomas + 1 par sexual (XX = mujer, XY = hombre).</p>
<h2>Leyes de Mendel</h2>
<p><strong>Gregor Mendel</strong> (1866) descubrió las leyes de la herencia estudiando guisantes:</p>
<ul>
  <li><strong>Ley de Segregación</strong>: Cada progenitor transmite solo uno de sus dos alelos a cada descendiente</li>
  <li><strong>Ley de Distribución Independiente</strong>: Los genes de diferentes características se heredan de forma independiente</li>
</ul>
<div class="example"><strong>Dominancia:</strong> Un alelo dominante (B) enmascara al recesivo (b). BB = marrón, Bb = marrón, bb = azul. Solo dos alelos recesivos producen el fenotipo recesivo.</div>
<h2>Mutaciones y Enfermedades Genéticas</h2>
<p>Las <strong>mutaciones</strong> son cambios en la secuencia de ADN. Pueden ser neutras, beneficiosas (motor de la evolución) o causar enfermedades genéticas como la fibrosis quística, la anemia falciforme o el síndrome de Down.</p>
<div class="summary"><h2>Resumen del Capítulo 19</h2><ul>
  <li>ADN = doble hélice con 4 bases (A, T, G, C); instrucciones de vida</li>
  <li>Gen → alelo → cromosoma → genotipo → fenotipo</li>
  <li>Humanos: 46 cromosomas; XX = mujer, XY = hombre</li>
  <li>Leyes de Mendel: segregación e independencia de caracteres</li>
  <li>Las mutaciones pueden ser neutras, beneficiosas o causar enfermedades</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"¿Cuál es la forma del ADN?",options:["Lineal","Circular","Doble hélice","Esférica"],answer:2},
      {q:"¿Cuántas bases nitrogenadas tiene el ADN?",options:["2","3","4","6"],answer:2},
      {q:"¿Cuántos cromosomas tienen las células humanas?",options:["23","44","46","48"],answer:2},
      {q:"¿Qué determina el sexo biológico masculino?",options:["XX","XY","YY","XO"],answer:1},
      {q:"¿Qué es un alelo?",options:["Un tipo de cromosoma","Una variante de un gen","Una parte del ARN","Un tipo de proteína"],answer:1},
      {q:"El fenotipo es:",options:["La combinación de alelos","La característica observable","El número de cromosomas","El tipo de ADN"],answer:1},
      {q:"¿Quién descubrió las leyes de la herencia?",options:["Charles Darwin","Louis Pasteur","Gregor Mendel","James Watson"],answer:2},
      {q:"Si B (marrón) es dominante y b (azul) es recesivo, ¿qué genotipo produce ojos azules?",options:["BB","Bb","bB","bb"],answer:3},
      {q:"La Ley de Segregación de Mendel dice que:",options:["Los genes se mezclan","Cada progenitor transmite solo uno de sus dos alelos","Todos los hijos son iguales","Los genes dominantes siempre ganan"],answer:1},
      {q:"¿Qué son las mutaciones?",options:["Enfermedades virales","Cambios en la secuencia de ADN","Tipos de cromosomas","Proteínas defectuosas"],answer:1},
    ]}
  },
  { cap: 20, title: "La Luz y la Óptica", subtitle: "Propiedades de la luz, reflexión, refracción, lentes y su aplicación en telescopios, microscopios y tecnología moderna.",
    body: `<h2>¿Qué es la Luz?</h2>
<p>La <strong>luz</strong> es radiación electromagnética visible para el ojo humano. Se comporta simultáneamente como <strong>onda</strong> (tiene frecuencia y longitud de onda) y como <strong>partícula</strong> (fotones). Viaja a 300,000 km/s en el vacío.</p>
<div class="highlight-box"><strong>El espectro visible</strong> va del violeta (longitud de onda más corta ~380 nm) al rojo (más larga ~700 nm). La luz blanca contiene todos los colores del arcoíris.</div>
<h2>Reflexión y Refracción</h2>
<table>
  <tr><th>Fenómeno</th><th>Qué ocurre</th><th>Ejemplo</th></tr>
  <tr><td>Reflexión</td><td>La luz rebota en una superficie</td><td>Espejo, superficie del agua</td></tr>
  <tr><td>Refracción</td><td>La luz cambia de dirección al pasar entre medios</td><td>Lápiz "partido" en agua, lentes</td></tr>
  <tr><td>Difracción</td><td>La luz se dobla alrededor de obstáculos</td><td>Arcoíris en un CD</td></tr>
  <tr><td>Absorción</td><td>La luz es absorbida y convertida en calor</td><td>Ropa negra bajo el Sol</td></tr>
</table>
<h2>Lentes Convergentes y Divergentes</h2>
<ul>
  <li><strong>Lente convexa (convergente)</strong>: Hace converger la luz en un punto focal. Usada en lupas, microscopios, cámaras y para corregir hipermetropía.</li>
  <li><strong>Lente cóncava (divergente)</strong>: Dispersa la luz. Usada para corregir miopía.</li>
</ul>
<div class="example"><strong>El ojo humano:</strong> El cristalino es una lente convexa que proyecta la imagen invertida en la retina. El cerebro la "voltea" para que veamos correctamente.</div>
<h2>Aplicaciones de la Óptica</h2>
<ul>
  <li><strong>Microscopio óptico</strong>: Combina lentes para ampliar objetos pequeños hasta 1,000x</li>
  <li><strong>Telescopio refractor</strong>: Usa lentes para captar luz de objetos lejanos</li>
  <li><strong>Telescopio reflector</strong>: Usa espejos (el Telescopio Hubble y el James Webb)</li>
  <li><strong>Fibra óptica</strong>: Transmite luz por reflexión interna total; base de internet de alta velocidad</li>
</ul>
<div class="summary"><h2>Resumen del Capítulo 20</h2><ul>
  <li>La luz es onda y partícula; viaja a 300,000 km/s en el vacío</li>
  <li>Reflexión: rebota; Refracción: cambia de dirección entre medios</li>
  <li>Lente convexa: convergente (lupas, cámaras); Cóncava: divergente (miopía)</li>
  <li>El ojo usa el cristalino para proyectar imágenes en la retina</li>
  <li>Aplicaciones: microscopios, telescopios, fibra óptica</li>
</ul></div>`,
    quiz: { lang:"es", questions:[
      {q:"¿A qué velocidad viaja la luz en el vacío?",options:["150,000 km/s","300,000 km/s","500,000 km/s","1,000,000 km/s"],answer:1},
      {q:"¿Cuál es el color con mayor longitud de onda del espectro visible?",options:["Violeta","Azul","Verde","Rojo"],answer:3},
      {q:"¿Qué es la refracción?",options:["La luz rebota en una superficie","La luz cambia de dirección al pasar entre medios","La luz se absorbe","La luz se divide en colores"],answer:1},
      {q:"¿Qué tipo de lente se usa para corregir la miopía?",options:["Convexa","Plana","Cóncava","Bicóncava combinada"],answer:2},
      {q:"Una lupa usa una lente:",options:["Cóncava","Plana","Convexa","Cilíndrica"],answer:2},
      {q:"¿Qué ocurre en la reflexión?",options:["La luz cambia de velocidad","La luz rebota en una superficie","La luz se absorbe como calor","La luz se dobla en el vacío"],answer:1},
      {q:"¿Qué proyecta la imagen en la retina del ojo?",options:["El iris","La pupila","El cristalino","La córnea"],answer:2},
      {q:"La fibra óptica transmite datos mediante:",options:["Señales eléctricas","Ondas de radio","Reflexión interna total de luz","Señales magnéticas"],answer:2},
      {q:"¿Qué telescopio usa espejos en lugar de lentes?",options:["Refractor","Galileano","Reflector","Binocular"],answer:2},
      {q:"La luz blanca está compuesta por:",options:["Solo rojo, verde y azul","Todos los colores del espectro visible","Solo los colores cálidos","Luz ultravioleta principalmente"],answer:1},
    ]}
  }
];

for (const c of ciencias) {
  chapters.push({
    file: `CIENCIAS CAP ${c.cap} ${c.title} ESF.html`,
    html: makeHTML(cienciasStyle, `Ciencias · Capítulo ${c.cap}`, c.cap, c.title, c.subtitle, c.body, c.quiz)
  });
}

// Write all files
const dir = "public/content/";
for (const ch of chapters) {
  fs.writeFileSync(dir + ch.file, ch.html, "utf8");
  console.log("✓", ch.file);
}
console.log(`\nDone: ${chapters.length} files`);
EOF