/**
 * ESF Quiz Engine v2 — Español Sin Fronteras
 * Injects: (1) persistent course nav bar, (2) dynamic SEO meta, (3) quiz flow.
 * Each HTML page sets window.QUIZ_DATA before this script runs.
 */
(function () {

  /* ── Course name → slug map ─────────────────────────────────────────────── */
  var SLUG_MAP = {
    "comunicación en español": "espanol",
    "comunicación":                 "espanol",
    "herencia peruana":                  "herencia-peruana",
    "global finance":                    "global-finance",
    "educación financiera":         "finanzas",
    "finanzas":                          "finanzas",
    "programación web":             "programacion",
    "programación":                 "programacion",
    "matemáticas":                  "matematicas",
    "ciencias":                          "ciencias",
    "ciberseguridad":                    "ciberseguridad",
    "inteligencia artificial":           "inteligencia-artificial",
    "inglés":                       "ingles",
    "english":                           "ingles",
  };

  var COURSE_LABELS = {
    "espanol":                  { es: "Comunicación en Español", en: "Spanish Communication" },
    "herencia-peruana":         { es: "Herencia Peruana",                  en: "Peruvian Heritage" },
    "global-finance":           { es: "Global Finance",                    en: "Global Finance" },
    "finanzas":                 { es: "Educación Financiera",         en: "Financial Education" },
    "programacion":             { es: "Programación Web",             en: "Web Programming" },
    "matematicas":              { es: "Matemáticas",                  en: "Mathematics" },
    "ciencias":                 { es: "Ciencias",                          en: "Sciences" },
    "ciberseguridad":           { es: "Ciberseguridad",                    en: "Cybersecurity" },
    "inteligencia-artificial":  { es: "Inteligencia Artificial",           en: "Artificial Intelligence" },
    "ingles":                   { es: "Inglés",                       en: "English" },
  };

  /* ── Favicon injection ──────────────────────────────────────────────────── */
  if (!document.querySelector('link[rel="icon"]')) {
    var fav = document.createElement("link");
    fav.rel  = "icon";
    fav.type = "image/png";
    fav.href = "/owl-logo.png";
    document.head.appendChild(fav);
  }
  if (!document.querySelector('link[rel="apple-touch-icon"]')) {
    var aFav = document.createElement("link");
    aFav.rel  = "apple-touch-icon";
    aFav.href = "/owl-logo.png";
    document.head.appendChild(aFav);
  }

  /* ── Detect course from .course-tag div ─────────────────────────────────── */
  var courseTag  = document.querySelector(".course-tag");
  var courseText = courseTag ? courseTag.textContent.toLowerCase().split("·")[0].trim() : "";
  var slug       = SLUG_MAP[courseText] || null;
  var isEnPage   = (document.documentElement.lang || "es").startsWith("en") ||
                   (window.QUIZ_DATA && window.QUIZ_DATA.lang === "en");
  var label      = slug ? (COURSE_LABELS[slug] || {})[isEnPage ? "en" : "es"] || "" : "";

  /* ── Dynamic SEO: set title + meta description ──────────────────────────── */
  var h1 = document.querySelector("h1");
  if (h1) {
    var pageTitle = h1.textContent.trim();
    var siteTag   = "Español Sin Fronteras";
    document.title = label
      ? pageTitle + " | " + label + " | " + siteTag
      : pageTitle + " | " + siteTag;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    var subtitleEl = document.querySelector(".subtitle");
    var subtitleText = subtitleEl ? subtitleEl.textContent.trim() : "";
    metaDesc.setAttribute("content",
      subtitleText
        ? subtitleText.substring(0, 155)
        : (pageTitle + " — lección gratuita en Español Sin Fronteras. Sin registro, sin costo.").substring(0, 155)
    );

    // Canonical
    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href.split("?")[0]);

    // Open Graph tags for rich social sharing
    var ogTags = {
      "og:title":       document.title,
      "og:description": metaDesc ? metaDesc.getAttribute("content") : "",
      "og:url":         window.location.href.split("?")[0],
      "og:image":       "https://espanolsinfronteras.org/owl-logo.png",
      "og:type":        "article",
      "og:site_name":   "Español Sin Fronteras",
    };
    Object.keys(ogTags).forEach(function(prop) {
      var el = document.querySelector('meta[property="' + prop + '"]');
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", ogTags[prop]);
    });
  }

  /* ── Inject nav bar styles ──────────────────────────────────────────────── */
  var navStyle = document.createElement("style");
  navStyle.textContent = [
    "#esf-top-nav{position:sticky;top:0;z-index:1000;background:#0f172a;border-bottom:1px solid rgba(255,255,255,0.08);padding:0 16px;height:52px;display:flex;align-items:center;justify-content:space-between;font-family:Arial,sans-serif;box-shadow:0 2px 12px rgba(0,0,0,0.35);}",
    "#esf-top-nav a{text-decoration:none;}",
    ".esf-nav-logo{font-size:13px;font-weight:800;color:#fff;letter-spacing:0.04em;white-space:nowrap;opacity:0.92;}",
    ".esf-nav-logo span{color:#a78bfa;}",
    ".esf-nav-back{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#a78bfa;padding:6px 12px;border-radius:20px;border:1.5px solid rgba(167,139,250,0.35);transition:background 0.15s,color 0.15s,border-color 0.15s;white-space:nowrap;}",
    ".esf-nav-back:hover{background:rgba(167,139,250,0.12);border-color:#a78bfa;}",
    ".esf-nav-back svg{width:14px;height:14px;flex-shrink:0;}",
    ".esf-nav-crumb{font-size:11px;color:rgba(255,255,255,0.45);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}",
    "@media(max-width:480px){.esf-nav-crumb{display:none;}.esf-nav-logo{font-size:12px;}}",
  ].join("");
  document.head.appendChild(navStyle);

  /* ── Inject nav bar HTML ────────────────────────────────────────────────── */
  var backUrl  = slug ? "https://espanolsinfronteras.org/curso/" + slug : "https://espanolsinfronteras.org";
  var backText = isEnPage ? "Back to course" : "Volver al curso";
  var homeText = isEnPage ? "Back to home"   : "Inicio";

  var nav = document.createElement("nav");
  nav.id = "esf-top-nav";
  nav.setAttribute("aria-label", "Course navigation");
  nav.innerHTML = [
    '<a href="https://espanolsinfronteras.org" class="esf-nav-logo" aria-label="Español Sin Fronteras — inicio">ESF<span>·</span>edu</a>',
    slug
      ? '<span class="esf-nav-crumb">' + (label || "") + '</span>'
      : '<span class="esf-nav-crumb"></span>',
    '<a href="' + backUrl + '" class="esf-nav-back">',
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 12L6 8l4-4"/></svg>',
      slug ? backText : homeText,
    '</a>',
  ].join("");
  document.body.insertBefore(nav, document.body.firstChild);

  /* ── Adjust wrapper top padding so nav doesn't overlap ─────────────────── */
  var wrapper = document.querySelector(".wrapper");
  if (wrapper) {
    wrapper.style.paddingTop = "44px";
  }

  /* ── Internal linking: "También te puede interesar" ────────────────────── */
  var ALL_COURSES = [
    { slug: "espanol",                 es: "Comunicación en Español", en: "Spanish Communication",   emoji: "🗣️" },
    { slug: "finanzas",                es: "Educación Financiera",    en: "Financial Education",      emoji: "💰" },
    { slug: "programacion",            es: "Programación Web",        en: "Web Programming",          emoji: "💻" },
    { slug: "matematicas",             es: "Matemáticas",             en: "Mathematics",              emoji: "📐" },
    { slug: "ciencias",                es: "Ciencias",                en: "Sciences",                 emoji: "🔬" },
    { slug: "ciberseguridad",          es: "Ciberseguridad",          en: "Cybersecurity",            emoji: "🔐" },
    { slug: "ingles",                  es: "Inglés",                  en: "English",                  emoji: "🇺🇸" },
    { slug: "herencia-peruana",        es: "Herencia Peruana",        en: "Peruvian Heritage",        emoji: "🏛️" },
    { slug: "inteligencia-artificial", es: "Inteligencia Artificial", en: "Artificial Intelligence",  emoji: "🤖" },
    { slug: "global-finance",          es: "Global Finance",          en: "Global Finance",           emoji: "🌐" },
  ];
  var related = ALL_COURSES.filter(function(c) { return c.slug !== slug; }).slice(0, 4);
  if (related.length && wrapper) {
    var relDiv = document.createElement("div");
    relDiv.style.cssText = "margin:40px 0 24px;padding:20px;background:#f8f7ff;border-radius:12px;border:1px solid #ede9fe;";
    var relTitle = isEnPage ? "You might also enjoy" : "También te puede interesar";
    relDiv.innerHTML = '<p style="font-size:13px;font-weight:700;color:#7c3aed;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.06em;">' + relTitle + '</p>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;">' +
      related.map(function(c) {
        return '<a href="https://espanolsinfronteras.org/curso/' + c.slug + '" style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:#fff;border:1px solid #ede9fe;border-radius:8px;font-size:13px;font-weight:600;color:#5b21b6;text-decoration:none;transition:box-shadow 0.15s;" onmouseover="this.style.boxShadow=\'0 2px 12px rgba(124,58,237,0.15)\'" onmouseout="this.style.boxShadow=\'none\'">' +
          '<span style="font-size:18px;" aria-hidden="true">' + c.emoji + '</span>' +
          '<span>' + (isEnPage ? c.en : c.es) + '</span></a>';
      }).join("") +
      '</div>';
    wrapper.appendChild(relDiv);
  }

  /* ── Quiz engine ────────────────────────────────────────────────────────── */
  var data = window.QUIZ_DATA;
  if (!data) return;

  var lang  = data.lang || "es";
  var isEn  = lang === "en";

  var T = {
    ready:      isEn ? "I am Ready — Take the Quiz" : "Estoy Listo — Tomar el Quiz",
    review:     isEn ? "Review My Answers"               : "Revisar Mis Respuestas",
    back:       isEn ? "← Return to Lesson"         : "← Regresar a la Lección",
    score:      isEn ? "Your Score"                      : "Tu Puntaje",
    correct:    isEn ? "Correct"                         : "Correcto",
    wrong:      isEn ? "Incorrect"                       : "Incorrecto",
    perfect:    isEn ? "Perfect! Outstanding work."      : "¡Perfecto! Trabajo sobresaliente.",
    great:      isEn ? "Excellent! You’ve mastered this chapter." : "¡Excelente! Dominas este capítulo.",
    good:       isEn ? "Good job! Review the highlighted topics."     : "¡Buen trabajo! Repasa los temas marcados.",
    ok:         isEn ? "Keep studying — you’re almost there." : "Sigue estudiando — casi lo tienes.",
    low:        isEn ? "Review the lesson and try again."             : "Repasa la lección e inténtalo de nuevo.",
    q:          isEn ? "Question" : "Pregunta",
    of:         isEn ? "of"       : "de",
    unanswered: isEn ? "Please answer all questions before reviewing." : "Por favor responde todas las preguntas antes de revisar.",
  };

  /* ── Quiz styles ────────────────────────────────────────────────────────── */
  var style = document.createElement("style");
  style.textContent = [
    "#esf-quiz-ready-zone{text-align:center;padding:40px 0 20px;}",
    "#esf-quiz-ready-btn{display:inline-block;cursor:pointer;font-family:Arial,sans-serif;font-size:1rem;font-weight:700;letter-spacing:0.04em;padding:16px 40px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;box-shadow:0 4px 16px rgba(124,58,237,0.35);transition:transform 0.15s,box-shadow 0.15s;}",
    "#esf-quiz-ready-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(124,58,237,0.45);}",
    "#esf-quiz-zone{display:none;}",
    "#esf-quiz-zone.active{display:block;}",
    ".esf-quiz-header{text-align:center;padding:32px 0 24px;}",
    ".esf-quiz-header h2{font-family:Arial,sans-serif;font-size:1.5rem;color:#0f172a;margin-bottom:6px;}",
    ".esf-quiz-header p{color:#64748b;font-family:Arial,sans-serif;font-size:0.9rem;}",
    ".esf-q-block{border:1px solid #e2e8f0;border-radius:12px;padding:24px 28px;margin-bottom:20px;background:#fff;transition:border-color 0.2s;}",
    ".esf-q-block.answered-correct{border-color:#22c55e;background:#f0fdf4;}",
    ".esf-q-block.answered-wrong{border-color:#ef4444;background:#fef2f2;}",
    ".esf-q-label{font-family:Arial,sans-serif;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#7c3aed;margin-bottom:8px;}",
    ".esf-q-text{font-size:1rem;font-weight:600;color:#0f172a;margin-bottom:16px;line-height:1.5;}",
    ".esf-options{display:flex;flex-direction:column;gap:10px;}",
    ".esf-option{display:flex;align-items:flex-start;gap:10px;cursor:pointer;padding:10px 14px;border-radius:8px;border:1.5px solid #e2e8f0;font-family:Arial,sans-serif;font-size:0.95rem;color:#1e293b;transition:background 0.1s,border-color 0.1s;user-select:none;}",
    ".esf-option:hover{background:#f5f3ff;border-color:#c4b5fd;}",
    ".esf-option input[type=radio]{margin-top:3px;accent-color:#7c3aed;flex-shrink:0;}",
    ".esf-option.selected{background:#ede9fe;border-color:#7c3aed;}",
    ".esf-option.correct-answer{background:#dcfce7!important;border-color:#22c55e!important;}",
    ".esf-option.wrong-answer{background:#fee2e2!important;border-color:#ef4444!important;}",
    ".esf-feedback{display:none;margin-top:14px;padding:12px 16px;border-radius:8px;font-family:Arial,sans-serif;font-size:0.9rem;line-height:1.5;}",
    ".esf-feedback.correct{background:#dcfce7;color:#166534;display:block;}",
    ".esf-feedback.wrong{background:#fee2e2;color:#991b1b;display:block;}",
    ".esf-feedback-badge{font-weight:700;margin-right:6px;}",
    ".esf-quiz-actions{text-align:center;padding:16px 0 40px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}",
    "#esf-review-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:1rem;font-weight:700;padding:14px 36px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;box-shadow:0 4px 14px rgba(124,58,237,0.3);transition:transform 0.15s;}",
    "#esf-review-btn:hover{transform:translateY(-2px);}",
    "#esf-back-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:0.95rem;font-weight:600;padding:14px 28px;border-radius:50px;border:2px solid #7c3aed;background:transparent;color:#7c3aed;transition:background 0.15s,color 0.15s;}",
    "#esf-back-btn:hover{background:#7c3aed;color:#fff;}",
    "#esf-score-zone{display:none;}",
    "#esf-score-zone.active{display:block;}",
    ".esf-score-card{text-align:center;background:#0f172a;color:#e2e8f0;border-radius:20px;padding:48px 32px;margin:32px 0;}",
    ".esf-score-number{font-size:5rem;font-weight:900;color:#a78bfa;line-height:1;}",
    ".esf-score-denom{font-size:2rem;font-weight:400;color:#94a3b8;}",
    ".esf-score-label{font-family:Arial,sans-serif;font-size:1rem;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;margin:8px 0 16px;}",
    ".esf-score-msg{font-size:1.2rem;color:#c4b5fd;font-weight:600;margin-top:16px;}",
    ".esf-score-actions{text-align:center;padding:0 0 48px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}",
    "#esf-return-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:1rem;font-weight:700;padding:14px 36px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;box-shadow:0 4px 14px rgba(124,58,237,0.3);transition:transform 0.15s;}",
    "#esf-return-btn:hover{transform:translateY(-2px);}",
    "#esf-retry-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:0.95rem;font-weight:600;padding:14px 28px;border-radius:50px;border:2px solid #7c3aed;background:transparent;color:#7c3aed;transition:background 0.15s,color 0.15s;}",
    "#esf-retry-btn:hover{background:#7c3aed;color:#fff;}",
    "@media(max-width:640px){.esf-q-block{padding:18px 16px;}#esf-quiz-ready-btn,#esf-review-btn,#esf-return-btn{padding:14px 28px;}}",
  ].join("");
  document.head.appendChild(style);

  var lessonWrapper = document.querySelector(".wrapper");

  /* ── Ready button ───────────────────────────────────────────────────────── */
  var readyZone = document.createElement("div");
  readyZone.id = "esf-quiz-ready-zone";
  readyZone.innerHTML = '<button id="esf-quiz-ready-btn">' + T.ready + "</button>";
  lessonWrapper.appendChild(readyZone);

  /* ── Quiz zone ──────────────────────────────────────────────────────────── */
  var quizZone = document.createElement("div");
  quizZone.id = "esf-quiz-zone";

  var questions = data.questions;
  var questionsHTML = [
    '<div class="esf-quiz-header">',
      '<h2>' + (isEn ? "Chapter Quiz" : "Quiz del Capítulo") + "</h2>",
      '<p>' + (isEn ? "Answer all 10 questions, then click Review." : "Responde las 10 preguntas y luego haz clic en Revisar.") + "</p>",
    "</div>",
  ].join("");

  questions.forEach(function (q, i) {
    var name = "esf_q" + i;
    var opts = q.options.map(function (opt, j) {
      return '<label class="esf-option" data-qi="' + i + '" data-oi="' + j + '"><input type="radio" name="' + name + '" value="' + j + '"> ' + opt + "</label>";
    }).join("");
    questionsHTML += [
      '<div class="esf-q-block" id="esf-qb-' + i + '">',
        '<div class="esf-q-label">' + T.q + " " + (i + 1) + " " + T.of + " 10</div>",
        '<div class="esf-q-text">' + q.q + "</div>",
        '<div class="esf-options">' + opts + "</div>",
        '<div class="esf-feedback" id="esf-fb-' + i + '"></div>',
      "</div>",
    ].join("");
  });

  questionsHTML += [
    '<div class="esf-quiz-actions">',
      '<button id="esf-back-btn">' + T.back + "</button>",
      '<button id="esf-review-btn">' + T.review + "</button>",
    "</div>",
  ].join("");

  quizZone.innerHTML = questionsHTML;
  lessonWrapper.appendChild(quizZone);

  /* ── Score zone ─────────────────────────────────────────────────────────── */
  var scoreZone = document.createElement("div");
  scoreZone.id = "esf-score-zone";
  scoreZone.innerHTML = [
    '<div class="esf-score-card">',
      '<div class="esf-score-label">' + T.score + "</div>",
      '<div><span class="esf-score-number" id="esf-score-num">0</span><span class="esf-score-denom"> / 10</span></div>',
      '<div class="esf-score-msg" id="esf-score-msg"></div>',
    "</div>",
    '<div class="esf-score-actions">',
      '<button id="esf-return-btn">' + T.back + "</button>",
      '<button id="esf-retry-btn">' + (isEn ? "Try Again" : "Intentar de Nuevo") + "</button>",
      '<button id="esf-share-btn" style="background:linear-gradient(135deg,#25d366,#128c7e);color:#fff;border:none;">',
        (isEn ? "🔗 Share my result" : "🔗 Compartir mi resultado"),
      "</button>",
    "</div>",
  ].join("");
  lessonWrapper.appendChild(scoreZone);

  /* ── Option selection ───────────────────────────────────────────────────── */
  quizZone.addEventListener("change", function (e) {
    if (e.target.type !== "radio") return;
    var qi = parseInt(e.target.closest(".esf-option").dataset.qi);
    var block = document.getElementById("esf-qb-" + qi);
    block.querySelectorAll(".esf-option").forEach(function (el) { el.classList.remove("selected"); });
    e.target.closest(".esf-option").classList.add("selected");
  });

  function showQuiz() {
    readyZone.style.display = "none";
    window.scrollTo({ top: (lessonWrapper.offsetTop || 0) - 20, behavior: "smooth" });
    quizZone.classList.add("active");
    scoreZone.classList.remove("active");
  }

  function showLesson() {
    quizZone.classList.remove("active");
    scoreZone.classList.remove("active");
    readyZone.style.display = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reviewAnswers() {
    var score = 0;
    var allAnswered = true;

    questions.forEach(function (q, i) {
      var radios = quizZone.querySelectorAll('input[name="esf_q' + i + '"]');
      var chosen = -1;
      radios.forEach(function (r) { if (r.checked) chosen = parseInt(r.value); });
      if (chosen === -1) { allAnswered = false; return; }

      var block = document.getElementById("esf-qb-" + i);
      var fb    = document.getElementById("esf-fb-" + i);
      var opts  = block.querySelectorAll(".esf-option");

      radios.forEach(function (r) { r.disabled = true; });
      opts[q.correct].classList.add("correct-answer");

      if (chosen === q.correct) {
        score++;
        block.classList.add("answered-correct");
        fb.className = "esf-feedback correct";
        fb.innerHTML = '<span class="esf-feedback-badge">✓ ' + T.correct + "</span>" + q.feedback;
      } else {
        opts[chosen].classList.add("wrong-answer");
        block.classList.add("answered-wrong");
        fb.className = "esf-feedback wrong";
        fb.innerHTML = '<span class="esf-feedback-badge">✗ ' + T.wrong + "</span>" + q.feedback;
      }
    });

    if (!allAnswered) { alert(T.unanswered); return; }

    document.getElementById("esf-score-num").textContent = score;
    var msg = score === 10 ? T.perfect : score >= 8 ? T.great : score >= 6 ? T.good : score >= 4 ? T.ok : T.low;
    document.getElementById("esf-score-msg").textContent = msg;

    quizZone.classList.remove("active");
    scoreZone.classList.add("active");
    window.scrollTo({ top: (lessonWrapper.offsetTop || 0) - 20, behavior: "smooth" });
  }

  function retry() {
    questions.forEach(function (q, i) {
      var block = document.getElementById("esf-qb-" + i);
      block.className = "esf-q-block";
      block.querySelectorAll(".esf-option").forEach(function (el) {
        el.classList.remove("selected", "correct-answer", "wrong-answer");
      });
      block.querySelectorAll("input[type=radio]").forEach(function (r) {
        r.checked = false; r.disabled = false;
      });
      var fb = document.getElementById("esf-fb-" + i);
      fb.className = "esf-feedback";
      fb.innerHTML = "";
    });
    showQuiz();
  }

  document.getElementById("esf-quiz-ready-btn").addEventListener("click", showQuiz);
  document.getElementById("esf-back-btn").addEventListener("click", showLesson);
  document.getElementById("esf-review-btn").addEventListener("click", reviewAnswers);
  document.getElementById("esf-return-btn").addEventListener("click", showLesson);
  document.getElementById("esf-retry-btn").addEventListener("click", retry);
  document.getElementById("esf-share-btn").addEventListener("click", function () {
    var chapterTitle = (document.querySelector("h1") || {}).textContent || "";
    var scoreNum = document.getElementById("esf-score-num").textContent || "?";
    var courseUrl = "https://espanolsinfronteras.org/curso/" + (slug || "");
    var shareText = isEn
      ? "I scored " + scoreNum + "/10 on the quiz \"" + chapterTitle + "\" at Español Sin Fronteras 🎓✨ Try it free: " + courseUrl
      : "Saqué " + scoreNum + "/10 en el quiz \"" + chapterTitle + "\" en Español Sin Fronteras 🎓✨ Pruébalo gratis: " + courseUrl;
    if (navigator.share) {
      navigator.share({ title: "Español Sin Fronteras", text: shareText, url: courseUrl }).catch(function(){});
    } else {
      var wa = "https://wa.me/?text=" + encodeURIComponent(shareText);
      window.open(wa, "_blank", "noopener");
    }
  });

})();
