import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight, Award, BookOpen, Brain, Briefcase, ChevronRight,
  ExternalLink, Filter, Globe, GraduationCap, Lightbulb,
  MapPin, RefreshCw, Rocket, Star, Target, Trophy, Users, Zap,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "all" | "becas" | "liderazgo" | "competencias" | "mun" | "mentoria" | "tech";

interface Opportunity {
  id: string;
  nameEs: string;
  nameEn: string;
  orgEs: string;
  orgEn: string;
  descEs: string;
  descEn: string;
  url: string;
  category: Exclude<Category, "all">;
  tags: string[];
  ageMin?: number;
  ageMax?: number;
  isFree: boolean;
  lang: "es" | "en" | "both";
  level: "escolar" | "universitario" | "ambos";
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const OPPORTUNITIES: Opportunity[] = [
  {
    id: "beca18",
    nameEs: "Beca 18",
    nameEn: "Beca 18",
    orgEs: "PRONABEC – Gobierno del Perú",
    orgEn: "PRONABEC – Government of Peru",
    descEs: "La beca más importante del Perú para jóvenes de alto rendimiento con bajos recursos. Cubre matrícula, pensión y hospedaje.",
    descEn: "Peru's most important scholarship for high-achieving youth from low-income families. Covers tuition, pension and housing.",
    url: "https://www.pronabec.gob.pe/beca-18/",
    category: "becas",
    tags: ["beca", "universidad", "gratuita", "stem", "humanidades"],
    ageMin: 16, ageMax: 22,
    isFree: true, lang: "es", level: "universitario",
  },
  {
    id: "beca-presidente",
    nameEs: "Beca Presidente de la República",
    nameEn: "Beca Presidente de la República",
    orgEs: "PRONABEC – Gobierno del Perú",
    orgEn: "PRONABEC – Government of Peru",
    descEs: "Beca de excelencia para los mejores egresados universitarios peruanos para estudios de posgrado en el extranjero.",
    descEn: "Excellence scholarship for top Peruvian university graduates for postgraduate studies abroad.",
    url: "https://www.pronabec.gob.pe/beca-presidente-de-la-republica/",
    category: "becas",
    tags: ["posgrado", "exterior", "excelencia"],
    ageMin: 21,
    isFree: true, lang: "es", level: "universitario",
  },
  {
    id: "fulbright",
    nameEs: "Fulbright Perú",
    nameEn: "Fulbright Peru",
    orgEs: "Comisión Fulbright Perú",
    orgEn: "Fulbright Commission Peru",
    descEs: "Becas de intercambio entre Perú y EE.UU. para estudios, investigación y enseñanza. Muy prestigioso.",
    descEn: "Exchange grants between Peru and the US for study, research, and teaching. Highly prestigious.",
    url: "https://www.fulbrightperu.info/",
    category: "becas",
    tags: ["usa", "posgrado", "investigación", "intercambio"],
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "daad",
    nameEs: "Becas DAAD Perú",
    nameEn: "DAAD Scholarships Peru",
    orgEs: "DAAD – Servicio Alemán de Intercambio Académico",
    orgEn: "DAAD – German Academic Exchange Service",
    descEs: "Becas del gobierno alemán para peruanos que quieran hacer maestría o doctorado en Alemania.",
    descEn: "German government scholarships for Peruvians pursuing Master's or PhD programs in Germany.",
    url: "https://www.daad.pe/",
    category: "becas",
    tags: ["alemania", "posgrado", "investigación"],
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "oas",
    nameEs: "Becas OEA",
    nameEn: "OAS Scholarships",
    orgEs: "Organización de los Estados Americanos",
    orgEn: "Organization of American States",
    descEs: "Becas para peruanos para estudios de posgrado e investigación en cualquier país de las Américas.",
    descEn: "Scholarships for Peruvians for graduate studies and research across the Americas.",
    url: "https://www.oas.org/es/becas/",
    category: "becas",
    tags: ["americas", "posgrado", "desarrollo profesional"],
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "lala",
    nameEs: "LALA — Latin American Leadership Academy",
    nameEn: "LALA — Latin American Leadership Academy",
    orgEs: "Latin American Leadership Academy",
    orgEn: "Latin American Leadership Academy",
    descEs: "Programa intensivo de liderazgo de 10 días para jóvenes latinoamericanos con potencial de cambiar la región.",
    descEn: "Intensive 10-day leadership program for Latin American youth with the potential to change the region.",
    url: "https://lalalca.org/",
    category: "liderazgo",
    tags: ["liderazgo", "latam", "networking", "presencial"],
    ageMin: 16, ageMax: 20,
    isFree: true, lang: "both", level: "escolar",
  },
  {
    id: "yygs",
    nameEs: "YYGS — Yale Young Global Scholars",
    nameEn: "YYGS — Yale Young Global Scholars",
    orgEs: "Universidad de Yale",
    orgEn: "Yale University",
    descEs: "Programa académico de 2 semanas en Yale para los mejores estudiantes secundarios del mundo.",
    descEn: "2-week academic program at Yale for top high school students worldwide.",
    url: "https://globalscholars.yale.edu/",
    category: "liderazgo",
    tags: ["yale", "académico", "secundaria", "liderazgo", "usa"],
    ageMin: 15, ageMax: 18,
    isFree: false, lang: "en", level: "escolar",
  },
  {
    id: "opm",
    nameEs: "Olimpiada Peruana de Matemáticas",
    nameEn: "Peruvian Mathematics Olympiad",
    orgEs: "Sociedad Matemática Peruana",
    orgEn: "Peruvian Mathematical Society",
    descEs: "La competencia matemática más importante del Perú. Los ganadores van a las olimpiadas internacionales.",
    descEn: "Peru's most important mathematics competition. Winners go to international olympiads.",
    url: "https://www.smpm.pe/",
    category: "competencias",
    tags: ["matemáticas", "olimpiada", "stem", "competencia"],
    ageMin: 12, ageMax: 19,
    isFree: true, lang: "es", level: "escolar",
  },
  {
    id: "concytec",
    nameEs: "Olimpiada Peruana de Ciencias",
    nameEn: "Peruvian Science Olympiad",
    orgEs: "CONCYTEC",
    orgEn: "CONCYTEC",
    descEs: "Olimpiada de ciencias: biología, química, física e informática. Regional y nacional. Organizada por CONCYTEC.",
    descEn: "Science olympiad: biology, chemistry, physics, and computer science. Regional and national.",
    url: "https://www.gob.pe/concytec",
    category: "competencias",
    tags: ["ciencias", "olimpiada", "stem", "investigación"],
    ageMin: 12, ageMax: 19,
    isFree: true, lang: "es", level: "escolar",
  },
  {
    id: "pcimun",
    nameEs: "PCIMUN — PUCP",
    nameEn: "PCIMUN — PUCP",
    orgEs: "Pontificia Universidad Católica del Perú",
    orgEn: "Pontifical Catholic University of Peru",
    descEs: "Uno de los MUNs más reconocidos de Latinoamérica, organizado por la PUCP con delegados de toda la región.",
    descEn: "One of Latin America's most recognized MUNs, organized by PUCP with delegates from across the region.",
    url: "https://www.instagram.com/pcimun_oficial/",
    category: "mun",
    tags: ["mun", "diplomacia", "oratoria", "debate", "lima"],
    ageMin: 15, ageMax: 25,
    isFree: false, lang: "both", level: "ambos",
  },
  {
    id: "limamun",
    nameEs: "Lima MUN",
    nameEn: "Lima MUN",
    orgEs: "Lima MUN",
    orgEn: "Lima MUN",
    descEs: "Conferencia anual de Modelo de Naciones Unidas en Lima. Ideal para empezar en el debate diplomático.",
    descEn: "Annual Model United Nations conference in Lima. Ideal for beginners in diplomatic debate.",
    url: "https://www.instagram.com/limamun/",
    category: "mun",
    tags: ["mun", "debate", "diplomacia", "lima", "presencial"],
    ageMin: 14, ageMax: 22,
    isFree: false, lang: "both", level: "ambos",
  },
  {
    id: "google-gen",
    nameEs: "Generation Google Scholars — Latinoamérica",
    nameEn: "Generation Google Scholars — Latin America",
    orgEs: "Google",
    orgEn: "Google",
    descEs: "Beca de Google para universitarios latinoamericanos en carreras STEM. Incluye apoyo económico y red de mentores.",
    descEn: "Google scholarship for Latin American university students in STEM. Includes financial support and mentor network.",
    url: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-latin-america",
    category: "tech",
    tags: ["google", "tech", "beca", "universitario", "stem"],
    ageMin: 18,
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "mtpe",
    nameEs: "Red de Mentores — MTPE",
    nameEn: "MTPE Mentor Network",
    orgEs: "Ministerio de Trabajo y Promoción del Empleo",
    orgEn: "Ministry of Labor and Employment Promotion",
    descEs: "Programa oficial del Ministerio de Trabajo que conecta jóvenes peruanos con profesionales para guiar su carrera.",
    descEn: "Official program connecting Peruvian youth with professionals to guide their career.",
    url: "https://www.gob.pe/mtpe",
    category: "mentoria",
    tags: ["mentoría", "carrera", "empleo", "gobierno"],
    ageMin: 18, ageMax: 29,
    isFree: true, lang: "es", level: "universitario",
  },
];

// ─── Category config ──────────────────────────────────────────────────────────

const CATS = [
  { value: "all"          as Category, emoji: "✨", labelEs: "Todas",      labelEn: "All",          bg: "#0f0f0f",  text: "#ffffff" },
  { value: "becas"        as Category, emoji: "🎓", labelEs: "Becas",      labelEn: "Scholarships", bg: "#dbeafe",  text: "#1e40af" },
  { value: "liderazgo"    as Category, emoji: "🚀", labelEs: "Liderazgo",  labelEn: "Leadership",   bg: "#ede9fe",  text: "#5b21b6" },
  { value: "competencias" as Category, emoji: "🏆", labelEs: "Olimpiadas", labelEn: "Olympiads",    bg: "#fef3c7",  text: "#92400e" },
  { value: "mun"          as Category, emoji: "🌍", labelEs: "MUN",        labelEn: "MUN",          bg: "#ccfbf1",  text: "#0f766e" },
  { value: "mentoria"     as Category, emoji: "💡", labelEs: "Mentoría",   labelEn: "Mentoring",    bg: "#dcfce7",  text: "#14532d" },
  { value: "tech"         as Category, emoji: "⚡", labelEs: "Tecnología", labelEn: "Technology",   bg: "#fce7f3",  text: "#831843" },
];

const CAT_GRADIENT: Record<Exclude<Category,"all">, string> = {
  becas:        "from-blue-500 to-indigo-600",
  liderazgo:    "from-violet-500 to-purple-700",
  competencias: "from-amber-400 to-orange-500",
  mun:          "from-teal-500 to-cyan-600",
  mentoria:     "from-emerald-500 to-green-600",
  tech:         "from-rose-500 to-pink-600",
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

const MARQUEE_ITEMS = ["Becas", "Olimpiadas", "Liderazgo", "MUN", "Mentoría", "Tecnología", "Yale", "PRONABEC", "Google", "PUCP", "Fulbright", "DAAD", "OEA", "LALA"];

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden py-4 border-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div
        className="flex gap-6 whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
          >
            <span style={{ color: "#84cc16" }}>+</span> {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

interface QuizQ { id: string; qEs: string; qEn: string; options: { labelEs: string; labelEn: string; value: string }[] }

const QS: QuizQ[] = [
  {
    id: "age", qEs: "¿En qué etapa estás?", qEn: "What stage are you in?",
    options: [
      { labelEs: "Colegio (12–17 años)",         labelEn: "High school (12–17)",    value: "escolar" },
      { labelEs: "Universidad (18–25 años)",      labelEn: "University (18–25)",     value: "universitario" },
      { labelEs: "Egresado / Profesional",        labelEn: "Graduate / Professional", value: "profesional" },
    ],
  },
  {
    id: "interest", qEs: "¿Qué área te apasiona?", qEn: "What area are you most passionate about?",
    options: [
      { labelEs: "Ciencias y Matemáticas (STEM)", labelEn: "Science & Math (STEM)",    value: "stem" },
      { labelEs: "Liderazgo y Diplomacia",         labelEn: "Leadership & Diplomacy",   value: "liderazgo" },
      { labelEs: "Tecnología y Programación",      labelEn: "Technology & Coding",       value: "tech" },
      { labelEs: "Sociales y Humanidades",         labelEn: "Social Sciences",           value: "humanidades" },
    ],
  },
  {
    id: "goal", qEs: "¿Cuál es tu meta?", qEn: "What is your main goal?",
    options: [
      { labelEs: "Conseguir una beca",    labelEn: "Get a scholarship",   value: "beca" },
      { labelEs: "Competir y ganar",      labelEn: "Compete and win",     value: "competencia" },
      { labelEs: "Hacer networking",      labelEn: "Network and grow",    value: "networking" },
      { labelEs: "Encontrar un mentor",   labelEn: "Find a mentor",       value: "mentoria" },
    ],
  },
  {
    id: "english", qEs: "¿Tu nivel de inglés?", qEn: "Your English level?",
    options: [
      { labelEs: "Básico", labelEn: "Basic", value: "basic" },
      { labelEs: "Intermedio", labelEn: "Intermediate", value: "intermediate" },
      { labelEs: "Avanzado", labelEn: "Advanced", value: "advanced" },
    ],
  },
  {
    id: "time", qEs: "¿Cuánto tiempo puedes dedicar?", qEn: "How much time can you commit?",
    options: [
      { labelEs: "Pocas horas semanales",     labelEn: "A few hours a week",   value: "light" },
      { labelEs: "Vacaciones / verano",       labelEn: "Full summer / break",  value: "summer" },
      { labelEs: "Un año completo",           labelEn: "A full year",          value: "year" },
    ],
  },
];

function matchOpps(answers: Record<string, string>): Opportunity[] {
  return OPPORTUNITIES.map((opp) => {
    let s = 0;
    const a = answers;
    if (a.age === "escolar"       && (opp.level === "escolar"      || opp.level === "ambos"))     s += 3;
    if (a.age === "universitario" && (opp.level === "universitario" || opp.level === "ambos"))     s += 3;
    if (a.age === "profesional"   && opp.level === "universitario")                               s += 2;
    if (a.interest === "stem"     && (opp.tags.includes("stem") || opp.tags.includes("matemáticas"))) s += 3;
    if (a.interest === "liderazgo"&& (opp.category === "liderazgo" || opp.category === "mun"))    s += 3;
    if (a.interest === "tech"     && opp.category === "tech")                                     s += 3;
    if (a.interest === "humanidades" && (opp.category === "mun" || opp.category === "liderazgo")) s += 2;
    if (a.goal === "beca"         && opp.category === "becas")                                    s += 4;
    if (a.goal === "competencia"  && opp.category === "competencias")                             s += 4;
    if (a.goal === "networking"   && (opp.category === "liderazgo" || opp.category === "mun"))    s += 4;
    if (a.goal === "mentoria"     && opp.category === "mentoria")                                 s += 4;
    if (a.english === "basic"     && opp.lang === "es")                                           s += 2;
    if (a.english === "intermediate" && (opp.lang === "es" || opp.lang === "both"))               s += 2;
    if (a.english === "advanced")                                                                  s += 1;
    if (a.time === "summer"       && opp.category === "liderazgo")                                s += 2;
    if (a.time === "year"         && opp.category === "becas")                                    s += 2;
    if (opp.isFree) s += 1;
    return { opp, s };
  }).sort((a, b) => b.s - a.s).slice(0, 3).map((x) => x.opp);
}

// ─── ESF Match component ──────────────────────────────────────────────────────

function ESFMatch({ lang }: { lang: "es" | "en" }) {
  const t = lang === "es";
  const [step, setStep] = useState<"intro"|"quiz"|"results">("intro");
  const [cur,  setCur]  = useState(0);
  const [ans,  setAns]  = useState<Record<string, string>>({});
  const [res,  setRes]  = useState<Opportunity[]>([]);

  function pick(val: string) {
    const next = { ...ans, [QS[cur].id]: val };
    setAns(next);
    if (cur + 1 < QS.length) setCur(c => c + 1);
    else { setRes(matchOpps(next)); setStep("results"); }
  }
  function reset() { setStep("intro"); setCur(0); setAns({}); setRes([]); }

  const q = QS[cur];
  const pct = (cur / QS.length) * 100;

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg" style={{ background: "#84cc16" }}>
            🧠
          </div>
          <div>
            <p className="text-white font-bold text-sm" style={{ fontFamily: "'Fredoka', sans-serif", letterSpacing: "0.01em" }}>
              ESF Match
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {t ? "Tu brújula de oportunidades" : "Your opportunity compass"}
            </p>
          </div>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(132,204,22,0.15)", color: "#84cc16" }}>
          {t ? "Sin IA · Solo match real" : "No AI · Real match"}
        </span>
      </div>

      <div className="p-8 md:p-12">
        {step === "intro" && (
          <div className="text-center">
            <p className="text-5xl mb-6">🎯</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              {t ? "¿Cuál oportunidad\nes para ti?" : "Which opportunity\nis for you?"}
            </h2>
            <p className="mb-8 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              {t
                ? "5 preguntas rápidas y te decimos exactamente qué programas aplican a tu perfil."
                : "5 quick questions and we'll tell you which programs match your profile."}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              {[
                { icon: "❓", label: t ? "5 preguntas" : "5 questions" },
                { icon: "⚡", label: t ? "2 minutos" : "2 minutes" },
                { icon: "🎁", label: t ? "3 match personalizados" : "3 personalized matches" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStep("quiz")}
              className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-100"
              style={{ background: "#84cc16", color: "#0f172a" }}
            >
              {t ? "Descubrir mis oportunidades" : "Discover my opportunities"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === "quiz" && (
          <div className="max-w-xl mx-auto">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                <span>{t ? `Pregunta ${cur + 1} de ${QS.length}` : `Question ${cur + 1} of ${QS.length}`}</span>
                <span>{Math.round(pct)}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: "#84cc16" }}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              {t ? q.qEs : q.qEn}
            </h3>
            <div className="flex flex-col gap-3">
              {q.options.map((opt, i) => (
                <button
                  key={opt.value}
                  onClick={() => pick(opt.value)}
                  className="flex items-center gap-4 text-left px-5 py-4 rounded-2xl font-medium transition-all hover:scale-[1.02] active:scale-100"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(132,204,22,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(132,204,22,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-xl text-sm font-bold flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,255,255,0.08)", color: "#84cc16" }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  {t ? opt.labelEs : opt.labelEn}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "results" && (
          <div>
            <div className="text-center mb-8">
              <p className="text-4xl mb-3">🎉</p>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                {t ? "¡Tu match perfecto!" : "Your perfect match!"}
              </h3>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                {t ? "Estas oportunidades aplican a tu perfil:" : "These opportunities match your profile:"}
              </p>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              {res.map((opp) => {
                const catCfg = CATS.find(c => c.value === opp.category)!;
                return (
                  <a
                    key={opp.id}
                    href={opp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-[1.01]"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: catCfg.bg }}
                    >
                      {catCfg.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm leading-tight">{t ? opp.nameEs : opp.nameEn}</p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{t ? opp.orgEs : opp.orgEn}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
                  </a>
                );
              })}
            </div>
            <div className="text-center">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <RefreshCw className="w-4 h-4" />
                {t ? "Intentar de nuevo" : "Try again"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Opportunity Card ─────────────────────────────────────────────────────────

function OppCard({ opp, lang }: { opp: Opportunity; lang: "es" | "en" }) {
  const t = lang === "es";
  const catCfg = CATS.find(c => c.value === opp.category)!;
  const grad = CAT_GRADIENT[opp.category];

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
      <div className={`h-1 w-full bg-gradient-to-r ${grad}`} />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
            style={{ background: catCfg.bg }}
          >
            {catCfg.emoji}
          </div>
          {opp.isFree && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#dcfce7", color: "#15803d" }}>
              GRATIS
            </span>
          )}
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-blue-700 transition-colors">
            {t ? opp.nameEs : opp.nameEn}
          </h3>
          <p className="text-slate-400 text-xs mt-0.5">{t ? opp.orgEs : opp.orgEn}</p>
        </div>
        <p className="text-slate-600 text-xs leading-relaxed flex-1">{t ? opp.descEs : opp.descEn}</p>
        <div className="flex items-center gap-3 text-[10px] text-slate-400 pt-1 border-t border-slate-100">
          {(opp.ageMin || opp.ageMax) && (
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {opp.ageMin && opp.ageMax ? `${opp.ageMin}–${opp.ageMax}` : `${opp.ageMin}+`} años
            </span>
          )}
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            {opp.lang === "es" ? "Español" : opp.lang === "en" ? "English" : "ES/EN"}
          </span>
        </div>
        <a
          href={opp.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${grad} hover:opacity-90 transition-opacity`}
        >
          {t ? "Ver oportunidad" : "View opportunity"} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

// ─── Category chip ────────────────────────────────────────────────────────────

function CatChip({ cat, active, onClick, lang }: {
  cat: typeof CATS[number];
  active: boolean;
  onClick: () => void;
  lang: "es" | "en";
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-100"
      style={active
        ? { background: "#0f0f0f", color: "#ffffff", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }
        : { background: cat.bg, color: cat.text }
      }
    >
      <span>{cat.emoji}</span>
      {lang === "es" ? cat.labelEs : cat.labelEn}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OportunidadesPage() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? OPPORTUNITIES : OPPORTUNITIES.filter(o => o.category === active);
  const freeCount = OPPORTUNITIES.filter(o => o.isFree).length;

  return (
    <div style={{ background: "#fafafa" }}>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #0c0c14 0%, #111827 60%, #0c1425 100%)" }} className="px-5 pt-16 pb-0">
        <div className="container-page">

          {/* Eyebrow */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(132,204,22,0.12)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.2)" }}
            >
              <MapPin className="w-3.5 h-3.5" />
              {t ? "Solo para peruanos" : "For Peruvians only"}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-center text-white leading-tight mb-6"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 700,
            }}
          >
            {t ? (
              <>¿Buscando{" "}<br className="sm:hidden" /><span style={{ color: "#84cc16" }}>oportunidades</span>?</>
            ) : (
              <>Looking for{" "}<br className="sm:hidden" /><span style={{ color: "#84cc16" }}>opportunities</span>?</>
            )}
          </h1>

          <p
            className="text-center max-w-xl mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "1.05rem" }}
          >
            {t
              ? "Becas, olimpiadas, MUNs, liderazgo y más — todo verificado, con links directos. Para ti, estudiante peruano."
              : "Scholarships, olympiads, MUNs, leadership programs and more — all verified, with direct links. For you, Peruvian student."}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { num: `${OPPORTUNITIES.length}+`, label: t ? "oportunidades" : "opportunities" },
              { num: `${freeCount}`,              label: t ? "gratuitas"     : "free" },
              { num: "6",                         label: t ? "categorías"    : "categories" },
              { num: "100%",                      label: t ? "verificadas"   : "verified" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-white font-bold"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2.25rem" }}
                >
                  {s.num}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Category pill buttons */}
          <div className="flex flex-wrap justify-center gap-3 pb-12">
            {CATS.map((cat) => (
              <CatChip
                key={cat.value}
                cat={cat}
                active={active === cat.value}
                onClick={() => setActive(cat.value)}
                lang={lang}
              />
            ))}
          </div>

        </div>

        {/* Marquee */}
        <Marquee />
      </section>

      {/* ── ESF Match ────────────────────────────────────────────────────────── */}
      <section className="px-5 py-16">
        <div className="container-page max-w-3xl">
          <ESFMatch lang={lang} />
        </div>
      </section>

      {/* ── Cards grid ───────────────────────────────────────────────────────── */}
      <section className="px-5 pb-20">
        <div className="container-page">
          {/* Section label */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                {t ? "Oportunidades" : "Opportunities"}
              </p>
              <h2
                className="text-2xl font-bold text-slate-900"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {t ? "Revisa todas las categorías" : "Browse all categories"}
              </h2>
            </div>
            <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-slate-100 text-slate-500">
              {filtered.length} {t ? "resultados" : "results"}
            </span>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((opp) => (
              <OppCard key={opp.id} opp={opp} lang={lang} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-3">🔍</p>
              <p>{t ? "Sin resultados para este filtro." : "No results for this filter."}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA bottom ───────────────────────────────────────────────────────── */}
      <section
        className="px-5 py-16 text-center"
        style={{ background: "#0f172a" }}
      >
        <div className="container-page max-w-xl">
          <p className="text-4xl mb-4">📬</p>
          <h2
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            {t ? "¿Conoces una oportunidad que falta?" : "Know an opportunity we're missing?"}
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
            {t
              ? "Escríbenos y la agregamos. Esta lista es para todos los estudiantes peruanos."
              : "Write to us and we'll add it. This list is for all Peruvian students."}
          </p>
          <a
            href="mailto:moonjab.com@gmail.com?subject=Oportunidad para ESF"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-2xl transition-all hover:scale-105"
            style={{ background: "#84cc16", color: "#0f172a" }}
          >
            <Rocket className="w-4 h-4" />
            {t ? "Sugerir oportunidad" : "Suggest opportunity"}
          </a>
        </div>
      </section>

    </div>
  );
}
