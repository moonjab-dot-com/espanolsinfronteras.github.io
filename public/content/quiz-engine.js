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

  /* ── Copy protection ───────────────────────────────────────────────────── */
  (function() {
    // user-select:none on content only — interactive elements MUST stay clickable
    var noSelectStyle = document.createElement("style");
    noSelectStyle.textContent =
      "body{-webkit-user-select:none;-moz-user-select:none;user-select:none;}" +
      "button,input,label,a,select,textarea," +
      ".esf-option,.esf-option *,#esf-top-nav,#esf-top-nav *{" +
      "-webkit-user-select:none;user-select:none;pointer-events:auto!important;}" +
      // Drag-selection highlight off
      "::selection{background:transparent;}::-moz-selection{background:transparent;}";
    document.head.appendChild(noSelectStyle);

    // Block copy/cut on keyboard — don't touch contextmenu (breaks mobile taps)
    document.addEventListener("copy", function(e) { e.preventDefault(); }, true);
    document.addEventListener("cut",  function(e) { e.preventDefault(); }, true);

    // Prevent dragging text out of the page
    document.addEventListener("dragstart", function(e) {
      if (e.target.tagName !== "A" && e.target.tagName !== "IMG") e.preventDefault();
    }, true);

    // Block Ctrl+C / Ctrl+X / Ctrl+A / Ctrl+U — leave Ctrl+P/S so menus work
    document.addEventListener("keydown", function(e) {
      var ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && "cCxXaAuU".indexOf(e.key) !== -1) e.preventDefault();
    }, true);
  })();

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
  var ESF_ICONS = {"espanol":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"></path></svg>","finanzas":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path></svg>","programacion":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline></svg>","matematicas":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect><line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"></line><line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"></line><path d=\"M16 10h.01\"></path><path d=\"M12 10h.01\"></path><path d=\"M8 10h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M8 18h.01\"></path></svg>","ciencias":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2\"></path><path d=\"M8.5 2h7\"></path><path d=\"M7 16h10\"></path></svg>","ciberseguridad":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path></svg>","ingles":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5 8 6 6\"></path><path d=\"m4 14 6-6 2-3\"></path><path d=\"M2 5h12\"></path><path d=\"M7 2h1\"></path><path d=\"m22 22-5-10-5 10\"></path><path d=\"M14 18h6\"></path></svg>","herencia-peruana":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2\"></path><path d=\"M12 20v2\"></path><path d=\"m4.93 4.93 1.41 1.41\"></path><path d=\"m17.66 17.66 1.41 1.41\"></path><path d=\"M2 12h2\"></path><path d=\"M20 12h2\"></path><path d=\"m6.34 17.66-1.41 1.41\"></path><path d=\"m19.07 4.93-1.41 1.41\"></path></svg>","inteligencia-artificial":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 8V4H8\"></path><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"></rect><path d=\"M2 14h2\"></path><path d=\"M20 14h2\"></path><path d=\"M15 13v2\"></path><path d=\"M9 13v2\"></path></svg>","global-finance":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\"></polyline><polyline points=\"16 7 22 7 22 13\"></polyline></svg>"};
  var ALL_COURSES = [
    { slug: "espanol",                 es: "Comunicación en Español", en: "Spanish Communication" },
    { slug: "finanzas",                es: "Educación Financiera",    en: "Financial Education" },
    { slug: "programacion",            es: "Programación Web",        en: "Web Programming" },
    { slug: "matematicas",             es: "Matemáticas",             en: "Mathematics" },
    { slug: "ciencias",                es: "Ciencias",                en: "Sciences" },
    { slug: "ciberseguridad",          es: "Ciberseguridad",          en: "Cybersecurity" },
    { slug: "ingles",                  es: "Inglés",                  en: "English" },
    { slug: "herencia-peruana",        es: "Herencia Peruana",        en: "Peruvian Heritage" },
    { slug: "inteligencia-artificial", es: "Inteligencia Artificial", en: "Artificial Intelligence" },
    { slug: "global-finance",          es: "Global Finance",          en: "Global Finance" },
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
          '<span style="display:inline-flex;color:#7c3aed;" aria-hidden="true">' + (ESF_ICONS[c.slug] || "") + '</span>' +
          '<span>' + (isEnPage ? c.en : c.es) + '</span></a>';
      }).join("") +
      '</div>';
    wrapper.appendChild(relDiv);
  }

  /* ── Bilingual ES/EN content toggle ─────────────────────────────────────── */
  var BIL = !!(window.QUIZ_DATA_ES && window.QUIZ_DATA_EN);
  var currentLang = "es";

  function applyLangVisibility(targetLang) {
    currentLang = targetLang;
    document.documentElement.lang = targetLang;
    document.querySelectorAll(".lang-es").forEach(function (el) {
      el.hidden = targetLang !== "es";
    });
    document.querySelectorAll(".lang-en").forEach(function (el) {
      el.hidden = targetLang !== "en";
    });
    var toggleBtn = document.getElementById("esf-lang-toggle");
    if (toggleBtn) toggleBtn.textContent = targetLang === "es" ? "EN" : "ES";
  }

  if (BIL) {
    var langToggle = document.createElement("button");
    langToggle.id = "esf-lang-toggle";
    langToggle.type = "button";
    langToggle.setAttribute("aria-label", "Switch language / Cambiar idioma");
    langToggle.style.cssText = "cursor:pointer;font-family:Arial,sans-serif;font-size:12px;font-weight:700;color:#a78bfa;background:transparent;border:1.5px solid rgba(167,139,250,0.35);border-radius:20px;padding:5px 12px;margin-left:8px;white-space:nowrap;";
    langToggle.textContent = "EN";
    langToggle.addEventListener("click", function () {
      applyLangVisibility(currentLang === "es" ? "en" : "es");
    });
    var navBack = document.querySelector(".esf-nav-back");
    if (navBack && navBack.parentNode) {
      navBack.parentNode.insertBefore(langToggle, navBack);
    }
    applyLangVisibility("es");
  }

  /* ── Quiz engine ────────────────────────────────────────────────────────── */
  if (BIL) {
    buildQuizUI(window.QUIZ_DATA_ES, "es");
    buildQuizUI(window.QUIZ_DATA_EN, "en");
  } else {
    var singleData = window.QUIZ_DATA;
    if (singleData) buildQuizUI(singleData, singleData.lang || "es");
  }

  function buildQuizUI(data, lang) {
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

  var suffix = "-" + lang;

  /* ── Quiz styles (inject once) ─────────────────────────────────────────── */
  if (!document.getElementById("esf-quiz-style")) {
  var style = document.createElement("style");
  style.id = "esf-quiz-style";
  style.textContent = [
    ".esf-quiz-ready-zone{text-align:center;padding:40px 0 20px;}",
    ".esf-quiz-ready-btn{display:inline-block;cursor:pointer;font-family:Arial,sans-serif;font-size:1rem;font-weight:700;letter-spacing:0.04em;padding:16px 40px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;box-shadow:0 4px 16px rgba(124,58,237,0.35);transition:transform 0.15s,box-shadow 0.15s;}",
    ".esf-quiz-ready-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(124,58,237,0.45);}",
    ".esf-quiz-zone{display:none;}",
    ".esf-quiz-zone.active{display:block;}",
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
    ".esf-review-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:1rem;font-weight:700;padding:14px 36px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;box-shadow:0 4px 14px rgba(124,58,237,0.3);transition:transform 0.15s;}",
    ".esf-review-btn:hover{transform:translateY(-2px);}",
    ".esf-back-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:0.95rem;font-weight:600;padding:14px 28px;border-radius:50px;border:2px solid #7c3aed;background:transparent;color:#7c3aed;transition:background 0.15s,color 0.15s;}",
    ".esf-back-btn:hover{background:#7c3aed;color:#fff;}",
    ".esf-score-zone{display:none;}",
    ".esf-score-zone.active{display:block;}",
    ".esf-score-card{text-align:center;background:#0f172a;color:#e2e8f0;border-radius:20px;padding:48px 32px;margin:32px 0;}",
    ".esf-score-number{font-size:5rem;font-weight:900;color:#a78bfa;line-height:1;}",
    ".esf-score-denom{font-size:2rem;font-weight:400;color:#94a3b8;}",
    ".esf-score-label{font-family:Arial,sans-serif;font-size:1rem;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;margin:8px 0 16px;}",
    ".esf-score-msg{font-size:1.2rem;color:#c4b5fd;font-weight:600;margin-top:16px;}",
    ".esf-score-actions{text-align:center;padding:0 0 48px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}",
    ".esf-return-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:1rem;font-weight:700;padding:14px 36px;border-radius:50px;border:none;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;box-shadow:0 4px 14px rgba(124,58,237,0.3);transition:transform 0.15s;}",
    ".esf-return-btn:hover{transform:translateY(-2px);}",
    ".esf-retry-btn{cursor:pointer;font-family:Arial,sans-serif;font-size:0.95rem;font-weight:600;padding:14px 28px;border-radius:50px;border:2px solid #7c3aed;background:transparent;color:#7c3aed;transition:background 0.15s,color 0.15s;}",
    ".esf-retry-btn:hover{background:#7c3aed;color:#fff;}",
    "@media(max-width:640px){.esf-q-block{padding:18px 16px;}.esf-quiz-ready-btn,.esf-review-btn,.esf-return-btn{padding:14px 28px;}}",
  ].join("");
  document.head.appendChild(style);
  }

  var lessonWrapper = document.querySelector(".wrapper");

  /* ── Ready button ───────────────────────────────────────────────────────── */
  var readyZone = document.createElement("div");
  readyZone.id = "esf-quiz-ready-zone" + suffix;
  readyZone.className = "esf-quiz-ready-zone" + (BIL ? " lang-" + lang : "");
  if (BIL) readyZone.hidden = lang !== "es";
  readyZone.innerHTML = '<button class="esf-quiz-ready-btn" id="esf-quiz-ready-btn' + suffix + '">' + T.ready + "</button>";
  lessonWrapper.appendChild(readyZone);

  /* ── Quiz zone ──────────────────────────────────────────────────────────── */
  var quizZone = document.createElement("div");
  quizZone.id = "esf-quiz-zone" + suffix;
  quizZone.className = "esf-quiz-zone" + (BIL ? " lang-" + lang : "");

  var questions = data.questions;
  var questionsHTML = [
    '<div class="esf-quiz-header">',
      '<h2>' + (isEn ? "Chapter Quiz" : "Quiz del Capítulo") + "</h2>",
      '<p>' + (isEn ? "Answer all 10 questions, then click Review." : "Responde las 10 preguntas y luego haz clic en Revisar.") + "</p>",
    "</div>",
  ].join("");

  questions.forEach(function (q, i) {
    var name = "esf_q" + i + suffix;
    var opts = q.options.map(function (opt, j) {
      return '<label class="esf-option" data-qi="' + i + '" data-oi="' + j + '"><input type="radio" name="' + name + '" value="' + j + '"> ' + opt + "</label>";
    }).join("");
    questionsHTML += [
      '<div class="esf-q-block" id="esf-qb-' + i + suffix + '">',
        '<div class="esf-q-label">' + T.q + " " + (i + 1) + " " + T.of + " 10</div>",
        '<div class="esf-q-text">' + q.q + "</div>",
        '<div class="esf-options">' + opts + "</div>",
        '<div class="esf-feedback" id="esf-fb-' + i + suffix + '"></div>',
      "</div>",
    ].join("");
  });

  questionsHTML += [
    '<div class="esf-quiz-actions">',
      '<button class="esf-back-btn" id="esf-back-btn' + suffix + '">' + T.back + "</button>",
      '<button class="esf-review-btn" id="esf-review-btn' + suffix + '">' + T.review + "</button>",
    "</div>",
  ].join("");

  quizZone.innerHTML = questionsHTML;
  lessonWrapper.appendChild(quizZone);

  /* ── Score zone ─────────────────────────────────────────────────────────── */
  var scoreZone = document.createElement("div");
  scoreZone.id = "esf-score-zone" + suffix;
  scoreZone.className = "esf-score-zone" + (BIL ? " lang-" + lang : "");
  scoreZone.innerHTML = [
    '<div class="esf-score-card">',
      '<div class="esf-score-label">' + T.score + "</div>",
      '<div><span class="esf-score-number" id="esf-score-num' + suffix + '">0</span><span class="esf-score-denom"> / 10</span></div>',
      '<div class="esf-score-msg" id="esf-score-msg' + suffix + '"></div>',
    "</div>",
    '<div class="esf-score-actions">',
      '<button class="esf-return-btn" id="esf-return-btn' + suffix + '">' + T.back + "</button>",
      '<button class="esf-retry-btn" id="esf-retry-btn' + suffix + '">' + (isEn ? "Try Again" : "Intentar de Nuevo") + "</button>",
      '<button id="esf-share-btn' + suffix + '" style="background:linear-gradient(135deg,#25d366,#128c7e);color:#fff;border:none;cursor:pointer;font-family:Arial,sans-serif;font-size:0.95rem;font-weight:600;padding:14px 28px;border-radius:50px;">',
        (isEn ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"display:inline;vertical-align:-2px;margin-right:5px;\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path></svg>Share my result" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"display:inline;vertical-align:-2px;margin-right:5px;\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path></svg>Compartir mi resultado"),
      "</button>",
    "</div>",
  ].join("");
  lessonWrapper.appendChild(scoreZone);

  /* ── Option selection ───────────────────────────────────────────────────── */
  quizZone.addEventListener("change", function (e) {
    if (e.target.type !== "radio") return;
    var qi = parseInt(e.target.closest(".esf-option").dataset.qi);
    var block = document.getElementById("esf-qb-" + qi + suffix);
    block.querySelectorAll(".esf-option").forEach(function (el) { el.classList.remove("selected"); });
    e.target.closest(".esf-option").classList.add("selected");
  });

  function scrollToEl(el) {
    var top = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function showQuiz() {
    readyZone.style.display = "none";
    quizZone.classList.add("active");
    scoreZone.classList.remove("active");
    scrollToEl(quizZone);
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
      var radios = quizZone.querySelectorAll('input[name="esf_q' + i + suffix + '"]');
      var chosen = -1;
      radios.forEach(function (r) { if (r.checked) chosen = parseInt(r.value); });
      if (chosen === -1) { allAnswered = false; return; }

      var block = document.getElementById("esf-qb-" + i + suffix);
      var fb    = document.getElementById("esf-fb-" + i + suffix);
      var opts  = block.querySelectorAll(".esf-option");

      radios.forEach(function (r) { r.disabled = true; });
      opts[q.correct].classList.add("correct-answer");

      if (chosen === q.correct) {
        score++;
        block.classList.add("answered-correct");
        fb.className = "esf-feedback correct";
        fb.innerHTML = '<span class="esf-feedback-badge"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:-2px;margin-right:4px;"><path d="M20 6 9 17l-5-5"></path></svg>' + T.correct + "</span>" + q.feedback;
      } else {
        opts[chosen].classList.add("wrong-answer");
        block.classList.add("answered-wrong");
        fb.className = "esf-feedback wrong";
        fb.innerHTML = '<span class="esf-feedback-badge"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:-2px;margin-right:4px;"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>' + T.wrong + "</span>" + q.feedback;
      }
    });

    if (!allAnswered) { alert(T.unanswered); return; }

    document.getElementById("esf-score-num" + suffix).textContent = score;
    var msg = score === 10 ? T.perfect : score >= 8 ? T.great : score >= 6 ? T.good : score >= 4 ? T.ok : T.low;
    document.getElementById("esf-score-msg" + suffix).textContent = msg;

    quizZone.classList.remove("active");
    scoreZone.classList.add("active");
    scrollToEl(scoreZone);
  }

  function retry() {
    questions.forEach(function (q, i) {
      var block = document.getElementById("esf-qb-" + i + suffix);
      block.className = "esf-q-block";
      block.querySelectorAll(".esf-option").forEach(function (el) {
        el.classList.remove("selected", "correct-answer", "wrong-answer");
      });
      block.querySelectorAll("input[type=radio]").forEach(function (r) {
        r.checked = false; r.disabled = false;
      });
      var fb = document.getElementById("esf-fb-" + i + suffix);
      fb.className = "esf-feedback";
      fb.innerHTML = "";
    });
    showQuiz();
  }

  document.getElementById("esf-quiz-ready-btn" + suffix).addEventListener("click", showQuiz);
  document.getElementById("esf-back-btn" + suffix).addEventListener("click", showLesson);
  document.getElementById("esf-review-btn" + suffix).addEventListener("click", reviewAnswers);
  document.getElementById("esf-return-btn" + suffix).addEventListener("click", showLesson);
  document.getElementById("esf-retry-btn" + suffix).addEventListener("click", retry);
  document.getElementById("esf-share-btn" + suffix).addEventListener("click", function () {
    var chapterTitle = (document.querySelector("h1") || {}).textContent || "";
    var scoreNum = document.getElementById("esf-score-num" + suffix).textContent || "?";
    var courseUrl = "https://espanolsinfronteras.org/curso/" + (slug || "");
    var shareText = isEn
      ? "I scored " + scoreNum + "/10 on the quiz \"" + chapterTitle + "\" at Español Sin Fronteras. Try it free: " + courseUrl
      : "Saqué " + scoreNum + "/10 en el quiz \"" + chapterTitle + "\" en Español Sin Fronteras. Pruébalo gratis: " + courseUrl;
    if (navigator.share) {
      navigator.share({ title: "Español Sin Fronteras", text: shareText, url: courseUrl }).catch(function(){});
    } else {
      var wa = "https://wa.me/?text=" + encodeURIComponent(shareText);
      window.open(wa, "_blank", "noopener");
    }
  });
  } // end buildQuizUI

})();
