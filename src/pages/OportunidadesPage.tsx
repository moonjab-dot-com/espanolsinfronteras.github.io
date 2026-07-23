import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight, Brain, Briefcase, ChevronRight, ExternalLink,
  Filter, Globe, GraduationCap, Lightbulb, MapPin,
  RefreshCw, Rocket, Sparkles, Star, Target, Trophy, Users, Zap,
  Code, Award, BookOpen, TrendingUp, Handshake, Info, Search, X,
} from "lucide-react";
import { OPPORTUNITIES as ALL_OPPS, type OppCategory } from "@/data/opportunities";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "all" | OppCategory;

// Re-export from shared data (keeping local variable name for compatibility)
const OPPORTUNITIES = ALL_OPPS;

// ─── (local data imported from @/data/opportunities) ─────────────────────────

const _legacy_placeholder = [
  {
    id: "__placeholder__",
    nameEs: "", nameEn: "", orgEs: "", orgEn: "", descEs: "", descEn: "",
    url: "",
    category: "becas" as const,
    tags: ["beca", "universidad", "stem", "humanidades"],
    ageMin: 16, ageMax: 22,
    isFree: true, lang: "es", level: "universitario",
  },
  {
    id: "pronabec",
    nameEs: "Portal de Becas PRONABEC",
    nameEn: "PRONABEC Scholarship Portal",
    orgEs: "Programa Nacional de Becas y Crédito Educativo",
    orgEn: "National Scholarship and Educational Credit Program",
    descEs: "Portal oficial con todos los programas de becas del gobierno peruano. Beca 18, Beca Especial, Beca Doble Oportunidad y más.",
    descEn: "Official portal with all Peruvian government scholarship programs. Beca 18, Special Scholarship, Second Chance Scholarship, and more.",
    url: "https://www.gob.pe/pronabec",
    category: "becas",
    tags: ["beca", "gobierno", "múltiples programas"],
    isFree: true, lang: "es", level: "ambos",
  },
  {
    id: "fulbright",
    nameEs: "Fulbright Perú",
    nameEn: "Fulbright Peru",
    orgEs: "Comisión Fulbright Perú — San Borja, Lima",
    orgEn: "Fulbright Commission Peru — San Borja, Lima",
    descEs: "70 años de intercambio académico entre Perú y EE.UU. Becas para estudios de posgrado, investigación y enseñanza. Altamente prestigioso.",
    descEn: "70 years of academic exchange between Peru and the US. Grants for graduate study, research, and teaching. Highly prestigious.",
    url: "https://www.fulbright.pe/",
    category: "becas",
    tags: ["usa", "posgrado", "investigación", "intercambio"],
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "becas-santander",
    nameEs: "Becas Santander",
    nameEn: "Santander Scholarships",
    orgEs: "Banco Santander",
    orgEn: "Banco Santander",
    descEs: "Miles de becas anuales para estudiantes universitarios latinoamericanos: movilidad, emprendimiento, idiomas, tecnología y más.",
    descEn: "Thousands of annual scholarships for Latin American university students: mobility, entrepreneurship, languages, technology, and more.",
    url: "https://www.becas-santander.com/",
    category: "becas",
    tags: ["beca", "movilidad", "universitario", "idiomas", "tech"],
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "oas",
    nameEs: "Becas OEA",
    nameEn: "OAS Scholarships",
    orgEs: "Organización de los Estados Americanos",
    orgEn: "Organization of American States",
    descEs: "Becas para ciudadanos peruanos para estudios de posgrado, investigación y desarrollo profesional en cualquier país de las Américas.",
    descEn: "Scholarships for Peruvian citizens for graduate studies, research, and professional development across the Americas.",
    url: "https://www.oas.org/es/becas/",
    category: "becas",
    tags: ["americas", "posgrado", "investigación"],
    isFree: true, lang: "both", level: "universitario",
  },
  {
    id: "yygs",
    nameEs: "YYGS — Yale Young Global Scholars",
    nameEn: "YYGS — Yale Young Global Scholars",
    orgEs: "Universidad de Yale",
    orgEn: "Yale University",
    descEs: "Programa académico de 2 semanas residencial en Yale para los mejores estudiantes secundarios del mundo. Ciencias, política y más.",
    descEn: "2-week residential academic program at Yale for top high school students worldwide. Science, policy, and more tracks.",
    url: "https://globalscholars.yale.edu/",
    category: "liderazgo",
    tags: ["yale", "liderazgo", "secundaria", "usa"],
    ageMin: 15, ageMax: 18,
    isFree: false, lang: "en", level: "escolar",
  },
  {
    id: "concytec",
    nameEs: "Olimpiadas Científicas — CONCYTEC",
    nameEn: "Science Olympiads — CONCYTEC",
    orgEs: "Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica",
    orgEn: "National Council of Science, Technology and Technological Innovation",
    descEs: "Olimpiadas nacionales de biología, química, física e informática. Los mejores representan al Perú en competencias internacionales.",
    descEn: "National olympiads in biology, chemistry, physics, and computer science. Top students represent Peru internationally.",
    url: "https://www.concytec.gob.pe/",
    category: "competencias",
    tags: ["ciencias", "olimpiada", "stem", "investigación"],
    ageMin: 12, ageMax: 19,
    isFree: true, lang: "es", level: "escolar",
  },
  {
    id: "pcimun",
    nameEs: "PCIMUN — Pontificia Conferencia Intl. MUN",
    nameEn: "PCIMUN — Pontifical International MUN",
    orgEs: "Pontificia Universidad Católica del Perú (PUCP)",
    orgEn: "Pontifical Catholic University of Peru (PUCP)",
    descEs: "Uno de los Modelos de Naciones Unidas más reconocidos de Latinoamérica, organizado por la PUCP. Delegados de toda la región.",
    descEn: "One of Latin America's most prestigious Model UN conferences, organized by PUCP. Delegates from across the region.",
    url: "https://www.instagram.com/pcimun_oficial/",
    category: "mun",
    tags: ["mun", "diplomacia", "oratoria", "debate", "lima", "pucp"],
    ageMin: 15, ageMax: 25,
    isFree: false, lang: "both", level: "ambos",
  },
  {
    id: "limamun",
    nameEs: "Lima MUN",
    nameEn: "Lima MUN",
    orgEs: "Lima Model United Nations",
    orgEn: "Lima Model United Nations",
    descEs: "Conferencia anual de Modelo de Naciones Unidas en Lima. Ideal para estudiantes que se inician en el debate y la diplomacia.",
    descEn: "Annual Model United Nations conference in Lima. Ideal for students beginning their journey in debate and diplomacy.",
    url: "https://www.instagram.com/limamun/",
    category: "mun",
    tags: ["mun", "debate", "diplomacia", "lima"],
    ageMin: 14, ageMax: 22,
    isFree: false, lang: "both", level: "ambos",
  },
  {
    id: "google-gen",
    nameEs: "Generation Google Scholars — LATAM",
    nameEn: "Generation Google Scholars — LATAM",
    orgEs: "Google",
    orgEn: "Google",
    descEs: "Beca anual de Google para universitarios latinoamericanos en carreras de tecnología e informática. Incluye apoyo económico y red de mentores.",
    descEn: "Annual Google scholarship for Latin American university students in technology and computer science. Includes financial support and mentor network.",
    url: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-latin-america",
    category: "tech",
    tags: ["google", "tech", "beca", "universitario", "stem"],
    ageMin: 18,
    isFree: true, lang: "both", level: "universitario",
  },
];

// ─── Category config ──────────────────────────────────────────────────────────

const CATS: {
  value: Category;
  icon: React.ReactNode;
  labelEs: string;
  labelEn: string;
  color: string;
  bg: string;
  darkBg: string;
  count?: number;
}[] = [
  { value: "all",          icon: <Sparkles className="w-5 h-5" />,      labelEs: "Todas",       labelEn: "All",          color: "#ffffff", bg: "#0f172a", darkBg: "#1e293b" },
  { value: "becas",        icon: <GraduationCap className="w-5 h-5" />, labelEs: "Becas",       labelEn: "Scholarships", color: "#1e40af", bg: "#dbeafe", darkBg: "#1e3a5f" },
  { value: "liderazgo",    icon: <Rocket className="w-5 h-5" />,        labelEs: "Liderazgo",   labelEn: "Leadership",   color: "#5b21b6", bg: "#ede9fe", darkBg: "#3b1f6e" },
  { value: "competencias", icon: <Trophy className="w-5 h-5" />,        labelEs: "Olimpiadas",  labelEn: "Olympiads",    color: "#92400e", bg: "#fef3c7", darkBg: "#4a2006" },
  { value: "mun",          icon: <Globe className="w-5 h-5" />,         labelEs: "MUN",         labelEn: "MUN",          color: "#0f766e", bg: "#ccfbf1", darkBg: "#0f3d38" },
  { value: "tech",         icon: <Code className="w-5 h-5" />,          labelEs: "Tecnología",  labelEn: "Technology",   color: "#9f1239", bg: "#fce7f3", darkBg: "#4a0a21" },
];

const CAT_GRADIENT: Record<Exclude<Category, "all">, string> = {
  becas:        "from-blue-500 to-indigo-600",
  liderazgo:    "from-violet-500 to-purple-700",
  competencias: "from-amber-400 to-orange-500",
  mun:          "from-teal-500 to-cyan-600",
  tech:         "from-rose-500 to-pink-600",
};

// ─── Marquee ──────────────────────────────────────────────────────────────────

function Marquee({ lang }: { lang: "es" | "en" }) {
  const labels = lang === "es"
    ? ["Becas", "Olimpiadas", "Liderazgo", "MUN", "Tecnología", "Yale", "PRONABEC", "Google", "PUCP", "Fulbright", "OEA", "Santander", "Harvard", "Oxford", "IMO", "UWC"]
    : ["Scholarships", "Olympiads", "Leadership", "MUN", "Technology", "Yale", "PRONABEC", "Google", "PUCP", "Fulbright", "OAS", "Santander", "Harvard", "Oxford", "IMO", "UWC"];
  const icons = [GraduationCap, Trophy, Rocket, Globe, Lightbulb, Code, Star, Award, TrendingUp, Handshake, BookOpen, Globe, Rocket, Globe];
  const doubled = [...labels, ...labels];

  return (
    <div className="overflow-hidden py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="flex gap-5 whitespace-nowrap" style={{ animation: "marqueeX 32s linear infinite" }}>
        {doubled.map((label, i) => {
          const Icon = icons[i % icons.length];
          return (
            <span key={i} className="inline-flex items-center gap-2 text-[13px] font-semibold px-4 py-1.5 rounded-full shrink-0"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.45)" }}>
              <Icon className="w-3.5 h-3.5" style={{ color: "#84cc16" }} />
              {label}
            </span>
          );
        })}
      </div>
      <style>{`@keyframes marqueeX { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

// ─── Quiz / ESF IA ───────────────────────────────────────────────────────────

interface QuizQ {
  id: string;
  qEs: string;
  qEn: string;
  options: { labelEs: string; labelEn: string; value: string }[];
}

const QS: QuizQ[] = [
  { id: "age",      qEs: "¿En qué etapa de tu vida estás?",          qEn: "What stage of life are you in?",
    options: [
      { labelEs: "Colegio (12–17)",         labelEn: "High school (12–17)",        value: "escolar" },
      { labelEs: "Universidad (18–25)",      labelEn: "University (18–25)",         value: "universitario" },
      { labelEs: "Egresado / Profesional",   labelEn: "Graduate / Professional",    value: "profesional" },
    ],
  },
  { id: "interest", qEs: "¿Qué área te apasiona más?",               qEn: "What area excites you most?",
    options: [
      { labelEs: "Ciencias y Matemáticas",  labelEn: "Science & Math",             value: "stem" },
      { labelEs: "Tecnología y Programación",labelEn: "Technology & Programming",  value: "tech" },
      { labelEs: "Liderazgo y Diplomacia",  labelEn: "Leadership & Diplomacy",     value: "liderazgo" },
      { labelEs: "Humanidades y Sociales",  labelEn: "Humanities & Social Sciences",value: "humanidades" },
    ],
  },
  { id: "goal",     qEs: "¿Cuál es tu objetivo principal?",           qEn: "What is your main goal?",
    options: [
      { labelEs: "Conseguir una beca",       labelEn: "Get a scholarship",          value: "beca" },
      { labelEs: "Competir en olimpiadas",   labelEn: "Compete in olympiads",       value: "competencia" },
      { labelEs: "Networking y liderazgo",   labelEn: "Networking & leadership",    value: "networking" },
      { labelEs: "Emprender o innovar",      labelEn: "Start a venture / innovate", value: "emprender" },
    ],
  },
  { id: "english",  qEs: "¿Cómo está tu inglés?",                    qEn: "How is your English?",
    options: [
      { labelEs: "Básico (puedo leer un poco)", labelEn: "Basic (can read a bit)", value: "basic" },
      { labelEs: "Intermedio",                  labelEn: "Intermediate",            value: "intermediate" },
      { labelEs: "Avanzado / Fluido",           labelEn: "Advanced / Fluent",       value: "advanced" },
    ],
  },
  { id: "cost",     qEs: "¿Puedes pagar costos de inscripción?",      qEn: "Can you pay application fees?",
    options: [
      { labelEs: "No, necesito solo gratis",  labelEn: "No, only free programs",    value: "free" },
      { labelEs: "Sí, con ayuda financiera",  labelEn: "Yes, with financial aid",   value: "aid" },
      { labelEs: "Sí, sin problema",          labelEn: "Yes, no problem",           value: "any" },
    ],
  },
  { id: "time",     qEs: "¿De cuánto tiempo dispones?",               qEn: "How much time can you dedicate?",
    options: [
      { labelEs: "Pocas horas por semana",    labelEn: "A few hours per week",       value: "light" },
      { labelEs: "Todo un verano / vacaciones",labelEn: "A full summer / vacation",  value: "summer" },
      { labelEs: "Un año completo",           labelEn: "A full year",                value: "year" },
    ],
  },
  { id: "location", qEs: "¿Dónde quieres que sea la experiencia?",    qEn: "Where do you want the experience?",
    options: [
      { labelEs: "En Perú (presencial/virtual)",  labelEn: "In Peru (in-person/virtual)", value: "peru" },
      { labelEs: "En el extranjero (residencial)",labelEn: "Abroad (residential)",         value: "abroad" },
      { labelEs: "100% virtual / remoto",         labelEn: "100% virtual / remote",        value: "virtual" },
    ],
  },
];

function matchOpps(a: Record<string, string>): Opportunity[] {
  return OPPORTUNITIES.map(opp => {
    let s = 0;
    // Level match
    if (a.age === "escolar"       && (opp.level === "escolar"       || opp.level === "ambos")) s += 4;
    if (a.age === "universitario" && (opp.level === "universitario" || opp.level === "ambos")) s += 4;
    if (a.age === "profesional"   && opp.level === "universitario")                            s += 3;
    // Interest match
    if (a.interest === "stem"        && (opp.tags.includes("stem") || opp.tags.includes("ciencias") || opp.category === "competencias")) s += 4;
    if (a.interest === "liderazgo"   && (opp.category === "liderazgo" || opp.category === "mun"))  s += 4;
    if (a.interest === "tech"        && opp.category === "tech")                                    s += 4;
    if (a.interest === "humanidades" && (opp.category === "mun" || opp.category === "liderazgo"))  s += 3;
    // Goal match
    if (a.goal === "beca"        && opp.category === "becas")                                 s += 5;
    if (a.goal === "competencia" && opp.category === "competencias")                          s += 5;
    if (a.goal === "networking"  && (opp.category === "liderazgo" || opp.category === "mun")) s += 5;
    if (a.goal === "emprender"   && (opp.category === "tech" || opp.tags.includes("emprendimiento"))) s += 5;
    // English match
    if (a.english === "basic"        && opp.lang === "es")   s += 3;
    if (a.english === "intermediate" && (opp.lang === "es" || opp.lang === "both")) s += 3;
    if (a.english === "advanced")                             s += 2;
    // Cost preference
    if (a.cost === "free" && opp.isFree)  s += 3;
    if (a.cost === "free" && !opp.isFree) s -= 3;
    if (a.cost === "any")                 s += 1;
    // Time match
    if (a.time === "summer" && opp.category === "liderazgo")   s += 2;
    if (a.time === "year"   && opp.category === "becas")        s += 2;
    if (a.time === "light"  && opp.category === "competencias") s += 2;
    // Location preference
    if (a.location === "peru"    && opp.lang === "es")                                            s += 2;
    if (a.location === "abroad"  && (opp.category === "becas" || opp.category === "liderazgo"))  s += 2;
    if (a.location === "virtual" && opp.tags.some(t => ["online", "virtual", "remoto", "digital"].includes(t))) s += 3;
    // Base free bonus
    if (opp.isFree) s += 1;
    return { opp, s };
  }).sort((a, b) => b.s - a.s).slice(0, 4).map(x => x.opp);
}

function ESFMatch({ lang }: { lang: "es" | "en" }) {
  const t = lang === "es";
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro");
  const [cur, setCur] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const [res, setRes] = useState<Opportunity[]>([]);

  function pick(val: string) {
    const next = { ...ans, [QS[cur].id]: val };
    setAns(next);
    if (cur + 1 < QS.length) setCur(c => c + 1);
    else { setRes(matchOpps(next)); setStep("results"); }
  }
  function reset() { setStep("intro"); setCur(0); setAns({}); setRes([]); }

  const q = QS[cur];
  const pct = Math.round((cur / QS.length) * 100);

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #0c1220 0%, #0f1f3d 40%, #0c1220 100%)",
        border: "1px solid rgba(132,204,22,0.15)",
        boxShadow: "0 0 60px rgba(132,204,22,0.05), 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-7 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#84cc16,#65a30d)" }}>
            <Brain className="w-4 h-4 text-slate-900" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "'Fredoka',sans-serif", letterSpacing: "0.01em" }}>ESF IA</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(132,204,22,0.2)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.3)" }}>BETA</span>
            </div>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t ? "Inteligencia de oportunidades" : "Opportunity intelligence"}
            </p>
          </div>
        </div>
        <Sparkles className="w-5 h-5" style={{ color: "rgba(132,204,22,0.5)" }} />
      </div>

      <div className="p-7 md:p-10">
        {step === "intro" && (
          <div className="text-center">
            <div className="relative mx-auto mb-7 w-16 h-16">
              <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: "rgba(132,204,22,0.25)" }} />
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#84cc16,#65a30d)" }}>
                <Target className="w-8 h-8 text-slate-900" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Fredoka',sans-serif", lineHeight: 1.1 }}>
              {t ? "¿Qué oportunidad\nencaja contigo?" : "Which opportunity\nfits you?"}
            </h2>
            <p className="text-base max-w-sm mx-auto mb-8" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
              {t
                ? "Responde 7 preguntas y te mostramos las 4 oportunidades que mejor encajan con tu perfil."
                : "Answer 7 questions and we'll show you the 4 opportunities that best match your profile."}
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-9 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              {[
                { Icon: Target,   label: t ? "7 preguntas" : "7 questions" },
                { Icon: Zap,      label: t ? "< 2 minutos" : "< 2 minutes" },
                { Icon: Award,    label: t ? "4 resultados" : "4 results" },
              ].map(({ Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" style={{ color: "#84cc16" }} /> {label}
                </span>
              ))}
            </div>
            <button
              onClick={() => setStep("quiz")}
              className="inline-flex items-center gap-2.5 font-bold text-[15px] px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-100"
              style={{ background: "linear-gradient(135deg,#84cc16,#65a30d)", color: "#0f172a", boxShadow: "0 8px 24px rgba(132,204,22,0.25)" }}
            >
              {t ? "Comenzar análisis" : "Start analysis"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {step === "quiz" && (
          <div className="max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-7">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: "linear-gradient(90deg,#84cc16,#a3e635)" }} />
              </div>
              <span className="text-[11px] font-semibold shrink-0" style={{ color: "#84cc16" }}>{cur + 1}/{QS.length}</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              {t ? "Pregunta" : "Question"} {cur + 1}
            </p>
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Fredoka',sans-serif" }}>
              {t ? q.qEs : q.qEn}
            </h3>
            <div className="flex flex-col gap-2.5">
              {q.options.map((opt, i) => (
                <button
                  key={opt.value}
                  onClick={() => pick(opt.value)}
                  className="flex items-center gap-3.5 text-left px-5 py-4 rounded-xl font-medium text-[14px] transition-all duration-150 hover:scale-[1.015]"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)" }}
                  onMouseEnter={e => { const b = e.currentTarget; b.style.background = "rgba(132,204,22,0.08)"; b.style.borderColor = "rgba(132,204,22,0.3)"; b.style.color = "#ffffff"; }}
                  onMouseLeave={e => { const b = e.currentTarget; b.style.background = "rgba(255,255,255,0.04)"; b.style.borderColor = "rgba(255,255,255,0.08)"; b.style.color = "rgba(255,255,255,0.8)"; }}
                >
                  <span className="w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center shrink-0"
                    style={{ background: "rgba(132,204,22,0.12)", color: "#84cc16" }}>
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
            <div className="text-center mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg,#84cc16,#65a30d)" }}>
                <Award className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Fredoka',sans-serif" }}>
                {t ? "Tu perfil encaja con:" : "Your profile matches:"}
              </h3>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {t ? "Haz clic para ir directo a la oportunidad." : "Click to go directly to the opportunity."}
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-7">
              {res.map((opp, idx) => {
                const catCfg = CATS.find(c => c.value === opp.category)!;
                const grad = CAT_GRADIENT[opp.category];
                return (
                  <a key={opp.id} href={opp.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.01] group"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 font-bold text-sm" style={{ background: "rgba(132,204,22,0.15)", color: "#84cc16" }}>
                      {idx + 1}
                    </div>
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${grad} shrink-0 flex items-center justify-center text-white`}>
                      {catCfg.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm leading-tight">{t ? opp.nameEs : opp.nameEn}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{t ? opp.orgEs : opp.orgEn}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 shrink-0 group-hover:opacity-100 transition-opacity" style={{ color: "rgba(132,204,22,0.5)" }} />
                  </a>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-4">
              <button onClick={reset} className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <RefreshCw className="w-3.5 h-3.5" />
                {t ? "Volver a empezar" : "Start over"}
              </button>
              <Link to="/oportunidades" className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
                style={{ background: "rgba(132,204,22,0.15)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.2)" }}>
                {t ? "Ver todas" : "See all"}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Category large card (AccessPlus style) ───────────────────────────────────

function CatCard({ cat, active, onClick, count, lang }: {
  cat: typeof CATS[number]; active: boolean; onClick: () => void; count: number; lang: "es" | "en";
}) {
  const label = lang === "es" ? cat.labelEs : cat.labelEn;
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-100 group"
      style={active
        ? { background: cat.bg, border: `2px solid ${cat.color}22`, boxShadow: `0 8px 24px ${cat.color}22` }
        : { background: "#f8fafc", border: "2px solid #e2e8f0" }
      }
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
        style={active
          ? { background: cat.bg, color: cat.color, border: `1.5px solid ${cat.color}44` }
          : { background: "#e2e8f0", color: "#64748b" }
        }
      >
        {cat.icon}
      </div>
      <span className="text-[13px] font-bold text-center leading-tight" style={{ color: active ? cat.color : "#64748b" }}>
        {label}
      </span>
      {cat.value !== "all" && (
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: active ? `${cat.color}18` : "#f1f5f9", color: active ? cat.color : "#94a3b8" }}>
          {count}
        </span>
      )}
    </button>
  );
}

// ─── Opportunity card ─────────────────────────────────────────────────────────

function OppCard({ opp, lang }: { opp: Opportunity; lang: "es" | "en" }) {
  const t = lang === "es";
  const catCfg = CATS.find(c => c.value === opp.category)!;
  const grad = CAT_GRADIENT[opp.category];

  return (
    <article
      className="group bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ border: "1.5px solid #e2e8f0" }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${grad} shrink-0`} />
      <div className="p-5 flex flex-col gap-3.5 flex-1">
        {/* Icon + badge row */}
        <div className="flex items-start justify-between gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: catCfg.bg, color: catCfg.color }}>
            {catCfg.icon}
          </div>
          <div className="flex gap-1.5 flex-wrap justify-end">
            {opp.isFree && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#dcfce7", color: "#15803d" }}>GRATIS</span>
            )}
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#f1f5f9", color: "#64748b" }}>
              {opp.lang === "es" ? "ES" : opp.lang === "en" ? "EN" : "ES/EN"}
            </span>
          </div>
        </div>

        {/* Name + org */}
        <div>
          <h3 className="font-bold text-slate-900 text-[14px] leading-tight group-hover:text-blue-700 transition-colors">
            {t ? opp.nameEs : opp.nameEn}
          </h3>
          <p className="text-slate-400 text-[12px] mt-0.5 leading-tight">{t ? opp.orgEs : opp.orgEn}</p>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-[13px] leading-relaxed flex-1">
          {t ? opp.descEs : opp.descEn}
        </p>

        {/* Meta */}
        {(opp.ageMin || opp.ageMax) && (
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <Users className="w-3 h-3 shrink-0" />
            {opp.ageMin && opp.ageMax ? `${opp.ageMin}–${opp.ageMax} años` : `${opp.ageMin}+ años`}
          </div>
        )}

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/oportunidades/${opp.id}`}
            className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all"
            style={{ background: "#f1f5f9", color: "#22577a", border: "1.5px solid #e2e8f0" }}
          >
            <Info className="w-3.5 h-3.5" />
            {t ? "Ver detalles" : "Details"}
          </Link>
          <a
            href={opp.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl text-[13px] font-bold text-white bg-gradient-to-r ${grad} hover:opacity-90 transition-opacity`}
          >
            {t ? "Postular" : "Apply"}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OportunidadesPage() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [active, setActive] = useState<Category>("all");
  const [q, setQ] = useState("");
  const [onlyFree, setOnlyFree] = useState(false);
  const [level, setLevel] = useState<"all" | "escolar" | "universitario">("all");

  const hasFilter = active !== "all" || q.trim() !== "" || onlyFree || level !== "all";

  const filtered = useMemo(() => {
    return OPPORTUNITIES.filter(o => {
      if (active !== "all" && o.category !== active) return false;
      if (onlyFree && !o.isFree) return false;
      if (level !== "all" && o.level !== level && o.level !== "ambos") return false;
      if (q.trim()) {
        const ql = q.toLowerCase();
        const hay = [t ? o.nameEs : o.nameEn, t ? o.orgEs : o.orgEn, t ? o.descEs : o.descEn, ...(o.tags ?? [])].join(" ").toLowerCase();
        if (!hay.includes(ql)) return false;
      }
      return true;
    });
  }, [active, q, onlyFree, level, t]);

  const freeCount = OPPORTUNITIES.filter(o => o.isFree).length;

  function clearAll() { setActive("all"); setQ(""); setOnlyFree(false); setLevel("all"); }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Dark hero ────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(160deg, #080d1a 0%, #0d1b38 55%, #080d1a 100%)" }} className="px-5 pt-14 pb-0">
        <div className="container-page">

          {/* Location badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-widest"
              style={{ background: "rgba(132,204,22,0.1)", color: "#84cc16", border: "1px solid rgba(132,204,22,0.2)" }}>
              <MapPin className="w-3 h-3" />
              {t ? "Oportunidades para peruanos" : "Opportunities for Peruvians"}
            </span>
          </div>

          {/* Floating illustration */}
          <div className="hidden md:flex justify-center mb-4">
            <img
              src="/Success-2--Streamline-Barcelona.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              onContextMenu={e => e.preventDefault()}
              onDragStart={e => e.preventDefault()}
              style={{ height: "140px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 10px 24px rgba(132,204,22,0.2))", userSelect: "none" }}
              loading="eager"
            />
          </div>

          {/* Headline */}
          <h1 className="text-center text-white mb-5"
            style={{ fontFamily: "'Fredoka',sans-serif", fontSize: "clamp(2.8rem,7.5vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, textWrap: "balance" }}>
            {t ? <>¿Buscando{" "}<span style={{ color: "#84cc16" }}>oportunidades</span>?</>
                : <>Looking for{" "}<span style={{ color: "#84cc16" }}>opportunities</span>?</>}
          </h1>

          {/* Sub */}
          <p className="text-center max-w-lg mx-auto mb-10 text-[16px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            {t
              ? "Becas, olimpiadas, MUNs, liderazgo, tecnología y mentoría — todo verificado, con links directos."
              : "Scholarships, olympiads, MUNs, leadership, technology, and mentoring — all verified, with direct links."}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {[
              { n: `${OPPORTUNITIES.length}+`, l: t ? "oportunidades" : "opportunities" },
              { n: `${freeCount}`,              l: t ? "gratuitas"     : "free" },
              { n: "6",                         l: t ? "categorías"    : "categories" },
              { n: "100%",                      l: t ? "verificadas"   : "verified" },
            ].map(({ n, l }) => (
              <div key={l} className="text-center">
                <p className="text-white font-bold" style={{ fontFamily: "'Fredoka',sans-serif", fontSize: "2.5rem", lineHeight: 1 }}>{n}</p>
                <p className="text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Marquee */}
        <Marquee lang={lang} />
      </section>

      {/* ── White content area ───────────────────────────────────────────────── */}
      <div className="bg-white">

        {/* ── Category cards (AccessPlus style) ──────────────────────────────── */}
        <section className="px-5 py-12">
          <div className="container-page">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {t ? "Categorías" : "Categories"}
                </p>
                <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Fredoka',sans-serif" }}>
                  {t ? "Explora por área" : "Browse by area"}
                </h2>
              </div>
              {active !== "all" && (
                <button onClick={() => setActive("all")} className="text-[13px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  {t ? "Ver todas" : "See all"} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
              {CATS.map(cat => (
                <CatCard
                  key={cat.value}
                  cat={cat}
                  active={active === cat.value}
                  onClick={() => setActive(cat.value)}
                  count={OPPORTUNITIES.filter(o => o.category === cat.value).length}
                  lang={lang}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ESF IA ─────────────────────────────────────────────────────────── */}
        <section className="px-5 py-2 pb-12">
          <div className="container-page max-w-2xl">
            <ESFMatch lang={lang} />
          </div>
        </section>

        {/* ── Search + Filter bar ────────────────────────────────────────────── */}
        <div className="px-5 pt-2 pb-6 border-t" style={{ borderColor: "#e2e8f0" }}>
          <div className="container-page">

            {/* Search input */}
            <div className="relative mb-4 max-w-lg">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder={t ? "Buscar por nombre, tema o habilidad…" : "Search by name, topic or skill…"}
                className="w-full pl-11 pr-10 py-3 rounded-2xl text-[14px] text-slate-900 outline-none transition-all focus:ring-2 focus:ring-blue-200"
                style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0" }}
              />
              {q && (
                <button onClick={() => setQ("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Pill filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mr-1">
                <Filter className="w-3 h-3 inline mr-1" />{t ? "Filtros:" : "Filters:"}
              </span>

              {/* Free toggle */}
              <button
                onClick={() => setOnlyFree(f => !f)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all"
                style={onlyFree
                  ? { background: "#dcfce7", color: "#15803d", border: "1.5px solid #86efac" }
                  : { background: "#f1f5f9", color: "#64748b", border: "1.5px solid #e2e8f0" }}
              >
                {t ? "Solo gratis" : "Free only"}
              </button>

              {/* Level */}
              {(["all", "escolar", "universitario"] as const).map(lv => (
                <button key={lv} onClick={() => setLevel(lv)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold transition-all"
                  style={level === lv
                    ? { background: "#dbeafe", color: "#1e40af", border: "1.5px solid #93c5fd" }
                    : { background: "#f1f5f9", color: "#64748b", border: "1.5px solid #e2e8f0" }}
                >
                  {lv === "all" ? (t ? "Todos los niveles" : "All levels") : lv === "escolar" ? (t ? "Colegio" : "High school") : (t ? "Universidad" : "University")}
                </button>
              ))}

              {/* Count + clear */}
              <span className="ml-auto text-[12px] text-slate-400 font-medium">
                {filtered.length} {t ? "resultado" : "result"}{filtered.length !== 1 ? "s" : ""}
              </span>
              {hasFilter && (
                <button onClick={clearAll} className="text-[12px] font-semibold text-rose-500 hover:text-rose-700 flex items-center gap-1 transition-colors">
                  <X className="w-3 h-3" />{t ? "Limpiar todo" : "Clear all"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────────────── */}
        <section className="px-5 pb-16">
          <div className="container-page">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(opp => <OppCard key={opp.id} opp={opp} lang={lang} />)}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20" style={{ color: "#94a3b8" }}>
                <Globe className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-medium">{t ? "No hay resultados para este filtro." : "No results for this filter."}</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Suggest CTA ────────────────────────────────────────────────────── */}
        <section className="px-5 py-14" style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
          <div className="container-page max-w-xl text-center">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#dbeafe", color: "#1e40af" }}>
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Fredoka',sans-serif" }}>
              {t ? "¿Conoces una oportunidad que falta?" : "Know of a missing opportunity?"}
            </h2>
            <p className="text-slate-500 text-[14px] mb-6 max-w-sm mx-auto leading-relaxed">
              {t
                ? "Mándanos el link verificado y la agregamos. Esta lista es para todos los estudiantes peruanos."
                : "Send us the verified link and we'll add it. This list is for all Peruvian students."}
            </p>
            <a
              href="mailto:moonjab.com@gmail.com?subject=Oportunidad para ESF"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-2xl text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#1e40af,#3b82f6)", boxShadow: "0 6px 20px rgba(59,130,246,0.25)" }}
            >
              <Rocket className="w-4 h-4" />
              {t ? "Sugerir oportunidad" : "Suggest opportunity"}
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
