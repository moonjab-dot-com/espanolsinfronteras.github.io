/**
 * ESF Quiz Engine — Español Sin Fronteras
 * Handles lesson → quiz → score → return flow.
 * Each HTML page sets window.QUIZ_DATA before this script runs.
 */
(function () {
  const data = window.QUIZ_DATA;
  if (!data) return;

  const lang = data.lang || "es";
  const isEn = lang === "en";

  const T = {
    ready:    isEn ? "I am Ready — Take the Quiz" : "Estoy Listo — Tomar el Quiz",
    review:   isEn ? "Review My Answers" : "Revisar Mis Respuestas",
    back:     isEn ? "← Return to Lesson" : "← Regresar a la Lección",
    score:    isEn ? "Your Score" : "Tu Puntaje",
    correct:  isEn ? "Correct" : "Correcto",
    wrong:    isEn ? "Incorrect" : "Incorrecto",
    perfect:  isEn ? "Perfect! Outstanding work." : "¡Perfecto! Trabajo sobresaliente.",
    great:    isEn ? "Excellent! You've mastered this chapter." : "¡Excelente! Dominas este capítulo.",
    good:     isEn ? "Good job! Review the highlighted topics." : "¡Buen trabajo! Repasa los temas marcados.",
    ok:       isEn ? "Keep studying — you're almost there." : "Sigue estudiando — casi lo tienes.",
    low:      isEn ? "Review the lesson and try again." : "Repasa la lección e inténtalo de nuevo.",
    q:        isEn ? "Question" : "Pregunta",
    of:       isEn ? "of" : "de",
    unanswered: isEn ? "Please answer all questions before reviewing." : "Por favor responde todas las preguntas antes de revisar.",
  };

  /* ── Inject styles ──────────────────────────────────────────────── */
  const style = document.createElement("style");
  style.textContent = `
    #esf-quiz-ready-zone { text-align:center; padding: 40px 0 20px; }
    #esf-quiz-ready-btn {
      display: inline-block; cursor: pointer; font-family: Arial, sans-serif;
      font-size: 1rem; font-weight: 700; letter-spacing: 0.04em;
      padding: 16px 40px; border-radius: 50px; border: none;
      background: linear-gradient(135deg, #7c3aed, #4f46e5);
      color: #fff; box-shadow: 0 4px 16px rgba(124,58,237,0.35);
      transition: transform 0.15s, box-shadow 0.15s;
    }
    #esf-quiz-ready-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(124,58,237,0.45); }

    #esf-quiz-zone { display:none; }
    #esf-quiz-zone.active { display:block; }

    .esf-quiz-header { text-align:center; padding: 32px 0 24px; }
    .esf-quiz-header h2 { font-family: Arial, sans-serif; font-size: 1.5rem; color: #0f172a; margin-bottom: 6px; }
    .esf-quiz-header p { color: #64748b; font-family: Arial, sans-serif; font-size: 0.9rem; }

    .esf-q-block {
      border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px 28px;
      margin-bottom: 20px; background: #fff;
      transition: border-color 0.2s;
    }
    .esf-q-block.answered-correct { border-color: #22c55e; background: #f0fdf4; }
    .esf-q-block.answered-wrong   { border-color: #ef4444; background: #fef2f2; }

    .esf-q-label {
      font-family: Arial, sans-serif; font-size: 0.75rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.1em; color: #7c3aed; margin-bottom: 8px;
    }
    .esf-q-text { font-size: 1rem; font-weight: 600; color: #0f172a; margin-bottom: 16px; line-height: 1.5; }

    .esf-options { display: flex; flex-direction: column; gap: 10px; }
    .esf-option {
      display: flex; align-items: flex-start; gap: 10px; cursor: pointer;
      padding: 10px 14px; border-radius: 8px; border: 1.5px solid #e2e8f0;
      font-family: Arial, sans-serif; font-size: 0.95rem; color: #1e293b;
      transition: background 0.1s, border-color 0.1s;
      user-select: none;
    }
    .esf-option:hover { background: #f5f3ff; border-color: #c4b5fd; }
    .esf-option input[type=radio] { margin-top: 3px; accent-color: #7c3aed; flex-shrink:0; }
    .esf-option.selected { background: #ede9fe; border-color: #7c3aed; }
    .esf-option.correct-answer { background: #dcfce7 !important; border-color: #22c55e !important; }
    .esf-option.wrong-answer   { background: #fee2e2 !important; border-color: #ef4444 !important; }

    .esf-feedback {
      display: none; margin-top: 14px; padding: 12px 16px;
      border-radius: 8px; font-family: Arial, sans-serif; font-size: 0.9rem; line-height: 1.5;
    }
    .esf-feedback.correct { background: #dcfce7; color: #166534; display: block; }
    .esf-feedback.wrong   { background: #fee2e2; color: #991b1b; display: block; }
    .esf-feedback-badge { font-weight: 700; margin-right: 6px; }

    .esf-quiz-actions { text-align: center; padding: 16px 0 40px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    #esf-review-btn {
      cursor: pointer; font-family: Arial, sans-serif; font-size: 1rem; font-weight: 700;
      padding: 14px 36px; border-radius: 50px; border: none;
      background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #fff;
      box-shadow: 0 4px 14px rgba(124,58,237,0.3); transition: transform 0.15s;
    }
    #esf-review-btn:hover { transform: translateY(-2px); }
    #esf-back-btn {
      cursor: pointer; font-family: Arial, sans-serif; font-size: 0.95rem; font-weight: 600;
      padding: 14px 28px; border-radius: 50px;
      border: 2px solid #7c3aed; background: transparent; color: #7c3aed;
      transition: background 0.15s, color 0.15s;
    }
    #esf-back-btn:hover { background: #7c3aed; color: #fff; }

    #esf-score-zone { display:none; }
    #esf-score-zone.active { display:block; }
    .esf-score-card {
      text-align: center; background: #0f172a; color: #e2e8f0;
      border-radius: 20px; padding: 48px 32px; margin: 32px 0;
    }
    .esf-score-number { font-size: 5rem; font-weight: 900; color: #a78bfa; line-height: 1; }
    .esf-score-denom  { font-size: 2rem; font-weight: 400; color: #94a3b8; }
    .esf-score-label  { font-family: Arial, sans-serif; font-size: 1rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; margin: 8px 0 16px; }
    .esf-score-msg    { font-size: 1.2rem; color: #c4b5fd; font-weight: 600; margin-top: 16px; }
    .esf-score-actions { text-align:center; padding: 0 0 48px; display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
    #esf-return-btn {
      cursor: pointer; font-family: Arial, sans-serif; font-size: 1rem; font-weight: 700;
      padding: 14px 36px; border-radius: 50px; border: none;
      background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #fff;
      box-shadow: 0 4px 14px rgba(124,58,237,0.3); transition: transform 0.15s;
    }
    #esf-return-btn:hover { transform: translateY(-2px); }
    #esf-retry-btn {
      cursor: pointer; font-family: Arial, sans-serif; font-size: 0.95rem; font-weight: 600;
      padding: 14px 28px; border-radius: 50px;
      border: 2px solid #7c3aed; background: transparent; color: #7c3aed;
      transition: background 0.15s, color 0.15s;
    }
    #esf-retry-btn:hover { background: #7c3aed; color: #fff; }

    @media (max-width: 640px) {
      .esf-q-block { padding: 18px 16px; }
      #esf-quiz-ready-btn, #esf-review-btn, #esf-return-btn { padding: 14px 28px; }
    }
  `;
  document.head.appendChild(style);

  /* ── Get lesson wrapper ─────────────────────────────────────────── */
  const lessonWrapper = document.querySelector(".wrapper");

  /* ── Build ready button ─────────────────────────────────────────── */
  const readyZone = document.createElement("div");
  readyZone.id = "esf-quiz-ready-zone";
  readyZone.innerHTML = `<button id="esf-quiz-ready-btn">${T.ready}</button>`;
  lessonWrapper.appendChild(readyZone);

  /* ── Build quiz zone ────────────────────────────────────────────── */
  const quizZone = document.createElement("div");
  quizZone.id = "esf-quiz-zone";

  const questions = data.questions;
  let questionsHTML = `
    <div class="esf-quiz-header">
      <h2>${isEn ? "Chapter Quiz" : "Quiz del Capítulo"}</h2>
      <p>${isEn ? "Answer all 10 questions, then click Review." : "Responde las 10 preguntas y luego haz clic en Revisar."}</p>
    </div>
  `;

  questions.forEach(function (q, i) {
    const name = "esf_q" + i;
    const optionsHTML = q.options.map(function (opt, j) {
      return `<label class="esf-option" data-qi="${i}" data-oi="${j}">
        <input type="radio" name="${name}" value="${j}"> ${opt}
      </label>`;
    }).join("");

    questionsHTML += `
      <div class="esf-q-block" id="esf-qb-${i}">
        <div class="esf-q-label">${T.q} ${i + 1} ${T.of} 10</div>
        <div class="esf-q-text">${q.q}</div>
        <div class="esf-options">${optionsHTML}</div>
        <div class="esf-feedback" id="esf-fb-${i}"></div>
      </div>
    `;
  });

  questionsHTML += `
    <div class="esf-quiz-actions">
      <button id="esf-back-btn">${T.back}</button>
      <button id="esf-review-btn">${T.review}</button>
    </div>
  `;

  quizZone.innerHTML = questionsHTML;
  lessonWrapper.appendChild(quizZone);

  /* ── Build score zone ───────────────────────────────────────────── */
  const scoreZone = document.createElement("div");
  scoreZone.id = "esf-score-zone";
  scoreZone.innerHTML = `
    <div class="esf-score-card">
      <div class="esf-score-label">${T.score}</div>
      <div><span class="esf-score-number" id="esf-score-num">0</span><span class="esf-score-denom"> / 10</span></div>
      <div class="esf-score-msg" id="esf-score-msg"></div>
    </div>
    <div class="esf-score-actions">
      <button id="esf-return-btn">${T.back}</button>
      <button id="esf-retry-btn">${isEn ? "Try Again" : "Intentar de Nuevo"}</button>
    </div>
  `;
  lessonWrapper.appendChild(scoreZone);

  /* ── Option selection highlight ─────────────────────────────────── */
  quizZone.addEventListener("change", function (e) {
    if (e.target.type !== "radio") return;
    const qi = parseInt(e.target.closest(".esf-option").dataset.qi);
    const block = document.getElementById("esf-qb-" + qi);
    block.querySelectorAll(".esf-option").forEach(function (el) { el.classList.remove("selected"); });
    e.target.closest(".esf-option").classList.add("selected");
  });

  /* ── Show quiz ───────────────────────────────────────────────────── */
  function showQuiz() {
    readyZone.style.display = "none";
    // scroll lesson back to top
    window.scrollTo({ top: lessonWrapper.offsetTop - 20, behavior: "smooth" });
    quizZone.classList.add("active");
    scoreZone.classList.remove("active");
  }

  /* ── Show lesson ─────────────────────────────────────────────────── */
  function showLesson() {
    quizZone.classList.remove("active");
    scoreZone.classList.remove("active");
    readyZone.style.display = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ── Review ──────────────────────────────────────────────────────── */
  function reviewAnswers() {
    let score = 0;
    let allAnswered = true;

    questions.forEach(function (q, i) {
      const radios = quizZone.querySelectorAll('input[name="esf_q' + i + '"]');
      let chosen = -1;
      radios.forEach(function (r) { if (r.checked) chosen = parseInt(r.value); });

      if (chosen === -1) { allAnswered = false; return; }

      const block = document.getElementById("esf-qb-" + i);
      const fb    = document.getElementById("esf-fb-" + i);
      const opts  = block.querySelectorAll(".esf-option");

      // lock inputs
      radios.forEach(function (r) { r.disabled = true; });

      opts[q.correct].classList.add("correct-answer");
      if (chosen === q.correct) {
        score++;
        block.classList.add("answered-correct");
        fb.className = "esf-feedback correct";
        fb.innerHTML = `<span class="esf-feedback-badge">✓ ${T.correct}</span>${q.feedback}`;
      } else {
        opts[chosen].classList.add("wrong-answer");
        block.classList.add("answered-wrong");
        fb.className = "esf-feedback wrong";
        fb.innerHTML = `<span class="esf-feedback-badge">✗ ${T.wrong}</span>${q.feedback}`;
      }
    });

    if (!allAnswered) {
      alert(T.unanswered);
      return;
    }

    // Show score
    document.getElementById("esf-score-num").textContent = score;
    const msg = score === 10 ? T.perfect : score >= 8 ? T.great : score >= 6 ? T.good : score >= 4 ? T.ok : T.low;
    document.getElementById("esf-score-msg").textContent = msg;

    quizZone.classList.remove("active");
    scoreZone.classList.add("active");
    window.scrollTo({ top: lessonWrapper.offsetTop - 20, behavior: "smooth" });
  }

  /* ── Retry ───────────────────────────────────────────────────────── */
  function retry() {
    questions.forEach(function (q, i) {
      const block = document.getElementById("esf-qb-" + i);
      block.className = "esf-q-block";
      block.querySelectorAll(".esf-option").forEach(function (el) {
        el.classList.remove("selected", "correct-answer", "wrong-answer");
      });
      block.querySelectorAll("input[type=radio]").forEach(function (r) {
        r.checked = false;
        r.disabled = false;
      });
      document.getElementById("esf-fb-" + i).className = "esf-feedback";
      document.getElementById("esf-fb-" + i).innerHTML = "";
    });
    showQuiz();
  }

  /* ── Wire events ─────────────────────────────────────────────────── */
  document.getElementById("esf-quiz-ready-btn").addEventListener("click", showQuiz);
  document.getElementById("esf-back-btn").addEventListener("click", showLesson);
  document.getElementById("esf-review-btn").addEventListener("click", reviewAnswers);
  document.getElementById("esf-return-btn").addEventListener("click", showLesson);
  document.getElementById("esf-retry-btn").addEventListener("click", retry);

})();
