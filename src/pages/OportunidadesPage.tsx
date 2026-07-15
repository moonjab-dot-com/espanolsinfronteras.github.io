import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Award, BookOpen, Brain, Briefcase, ChevronRight, ExternalLink,
  Filter, Globe, GraduationCap, Lightbulb, Rocket, Star,
  Trophy, Users, Zap, Target, MapPin, Calendar, RefreshCw,
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
  deadlineNote?: string;
  isFree: boolean;
  lang: "es" | "en" | "both";
  level: "escolar" | "universitario" | "ambos";
}

// ─── Verified Opportunities for Peruvians ─────────────────────────────────────

const OPPORTUNITIES: Opportunity[] = [
  // ── Becas
  {
    id: "beca18",
    nameEs: "Beca 18",
    nameEn: "Beca 18",
    orgEs: "PRONABEC – Gobierno del Perú",
    orgEn: "PRONABEC – Government of Peru",
    descEs: "La beca más importante del Perú para jóvenes de alto rendimiento académico con bajos recursos económicos. Cubre matrícula, pensión, hospedaje y más.",
    descEn: "Peru's most important scholarship for high-achieving youth from low-income families. Covers tuition, living allowance, housing and more.",
    url: "https://www.pronabec.gob.pe/beca-18/",
    category: "becas",
    tags: ["beca", "universidad", "gratuita", "stem", "humanidades"],
    ageMin: 16, ageMax: 22,
    isFree: true,
    lang: "es",
    level: "universitario",
  },
  {
    id: "beca-presidente",
    nameEs: "Beca Presidente de la República",
    nameEn: "Beca Presidente de la República",
    orgEs: "PRONABEC – Gobierno del Perú",
    orgEn: "PRONABEC – Government of Peru",
    descEs: "Beca de excelencia para los mejores egresados de universidades peruanas para estudios de posgrado en el extranjero.",
    descEn: "Excellence scholarship for top graduates of Peruvian universities to pursue postgraduate studies abroad.",
    url: "https://www.pronabec.gob.pe/beca-presidente-de-la-republica/",
    category: "becas",
    tags: ["posgrado", "exterior", "excelencia"],
    ageMin: 21,
    isFree: true,
    lang: "es",
    level: "universitario",
  },
  {
    id: "fulbright",
    nameEs: "Fulbright Perú",
    nameEn: "Fulbright Peru",
    orgEs: "Comisión Fulbright Perú",
    orgEn: "Fulbright Commission Peru",
    descEs: "Becas de intercambio académico entre Perú y Estados Unidos para estudios, investigación y enseñanza.",
    descEn: "Academic exchange grants between Peru and the United States for study, research, and teaching.",
    url: "https://www.fulbrightperu.info/",
    category: "becas",
    tags: ["usa", "posgrado", "investigación", "intercambio"],
    isFree: true,
    lang: "both",
    level: "universitario",
  },
  {
    id: "daad",
    nameEs: "Becas DAAD Perú",
    nameEn: "DAAD Scholarships Peru",
    orgEs: "DAAD – Servicio Alemán de Intercambio Académico",
    orgEn: "DAAD – German Academic Exchange Service",
    descEs: "Becas del gobierno alemán para estudiar o investigar en Alemania. Abiertas a peruanos para maestría y doctorado.",
    descEn: "German government scholarships to study or research in Germany. Open to Peruvians for Master's and PhD programs.",
    url: "https://www.daad.pe/",
    category: "becas",
    tags: ["alemania", "posgrado", "investigación"],
    isFree: true,
    lang: "both",
    level: "universitario",
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
    tags: ["americas", "posgrado", "desarrollo profesional"],
    isFree: true,
    lang: "both",
    level: "universitario",
  },

  // ── Liderazgo
  {
    id: "lala",
    nameEs: "LALA – Latin American Leadership Academy",
    nameEn: "LALA – Latin American Leadership Academy",
    orgEs: "Latin American Leadership Academy",
    orgEn: "Latin American Leadership Academy",
    descEs: "Programa intensivo de liderazgo de 10 días para jóvenes latinoamericanos con potencial de cambiar la región. Altamente competitivo.",
    descEn: "Intensive 10-day leadership program for Latin American youth with the potential to change the region. Highly competitive.",
    url: "https://lalalca.org/",
    category: "liderazgo",
    tags: ["liderazgo", "latam", "networking", "presencial"],
    ageMin: 16, ageMax: 20,
    isFree: true,
    lang: "both",
    level: "escolar",
  },
  {
    id: "yygs",
    nameEs: "YYGS – Yale Young Global Scholars",
    nameEn: "YYGS – Yale Young Global Scholars",
    orgEs: "Universidad de Yale",
    orgEn: "Yale University",
    descEs: "Programa académico intensivo de 2 semanas en Yale para estudiantes secundarios de todo el mundo. Múltiples tracks académicos.",
    descEn: "Intensive 2-week academic program at Yale for high school students worldwide. Multiple academic tracks available.",
    url: "https://globalscholars.yale.edu/",
    category: "liderazgo",
    tags: ["yale", "académico", "secundaria", "liderazgo", "usa"],
    ageMin: 15, ageMax: 18,
    isFree: false,
    lang: "en",
    level: "escolar",
  },

  // ── Competencias / Olimpiadas
  {
    id: "opm",
    nameEs: "Olimpiada Peruana de Matemáticas",
    nameEn: "Peruvian Mathematics Olympiad",
    orgEs: "Sociedad Matemática Peruana",
    orgEn: "Peruvian Mathematical Society",
    descEs: "La competencia matemática más importante del Perú. Los ganadores representan al Perú en la Olimpiada Iberoamericana e Internacional de Matemáticas.",
    descEn: "Peru's most important mathematics competition. Winners represent Peru at the Ibero-American and International Mathematics Olympiad.",
    url: "https://www.smpm.pe/",
    category: "competencias",
    tags: ["matemáticas", "olimpiada", "stem", "competencia"],
    ageMin: 12, ageMax: 19,
    isFree: true,
    lang: "es",
    level: "escolar",
  },
  {
    id: "concytec",
    nameEs: "Olimpiada Peruana de Ciencias",
    nameEn: "Peruvian Science Olympiad",
    orgEs: "CONCYTEC",
    orgEn: "CONCYTEC",
    descEs: "Olimpiada de ciencias organizada por CONCYTEC. Incluye biología, química, física e informática a nivel regional y nacional.",
    descEn: "Science olympiad organized by CONCYTEC. Includes biology, chemistry, physics, and computer science at regional and national level.",
    url: "https://www.gob.pe/concytec",
    category: "competencias",
    tags: ["ciencias", "olimpiada", "stem", "investigación"],
    ageMin: 12, ageMax: 19,
    isFree: true,
    lang: "es",
    level: "escolar",
  },

  // ── MUN
  {
    id: "pcimun",
    nameEs: "PCIMUN – Pontificia Conferencia Internacional",
    nameEn: "PCIMUN – Pontifical International Conference",
    orgEs: "Pontificia Universidad Católica del Perú (PUCP)",
    orgEn: "Pontifical Catholic University of Peru (PUCP)",
    descEs: "Modelo de Naciones Unidas organizado por la PUCP. Uno de los MUNs más reconocidos de América Latina, con delegados de toda la región.",
    descEn: "Model United Nations organized by PUCP. One of the most recognized MUNs in Latin America, with delegates from across the region.",
    url: "https://www.instagram.com/pcimun_oficial/",
    category: "mun",
    tags: ["mun", "diplomacia", "oratoria", "debate", "lima"],
    ageMin: 15, ageMax: 25,
    isFree: false,
    lang: "both",
    level: "ambos",
  },
  {
    id: "limamun",
    nameEs: "Lima MUN",
    nameEn: "Lima MUN",
    orgEs: "Lima MUN",
    orgEn: "Lima MUN",
    descEs: "Conferencia anual de Modelo de Naciones Unidas en Lima. Ideal para estudiantes que se inician en el debate diplomático.",
    descEn: "Annual Model United Nations conference in Lima. Ideal for students beginning diplomatic debate.",
    url: "https://www.instagram.com/limamun/",
    category: "mun",
    tags: ["mun", "debate", "diplomacia", "lima", "presencial"],
    ageMin: 14, ageMax: 22,
    isFree: false,
    lang: "both",
    level: "ambos",
  },

  // ── Mentoring & Tech
  {
    id: "nextgenfellow",
    nameEs: "Generation Google Scholars – Latinoamérica",
    nameEn: "Generation Google Scholars – Latin America",
    orgEs: "Google",
    orgEn: "Google",
    descEs: "Beca de Google para estudiantes universitarios latinoamericanos en carreras de tecnología. Incluye beca económica y comunidad de mentores.",
    descEn: "Google scholarship for Latin American university students in technology fields. Includes financial grant and mentor community.",
    url: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-latin-america",
    category: "tech",
    tags: ["google", "tech", "beca", "universitario", "stem"],
    ageMin: 18,
    isFree: true,
    lang: "both",
    level: "universitario",
  },
  {
    id: "microsoftlearn",
    nameEs: "Microsoft TEALS Program",
    nameEn: "Microsoft TEALS Program",
    orgEs: "Microsoft",
    orgEn: "Microsoft",
    descEs: "Programa de Microsoft para introducir ciencias de la computación en colegios. Conecta voluntarios de tech con estudiantes.",
    descEn: "Microsoft program to bring computer science to high schools. Connects tech volunteers with students.",
    url: "https://www.microsoft.com/en-us/teals",
    category: "tech",
    tags: ["microsoft", "programación", "colegios", "tech"],
    ageMin: 13, ageMax: 18,
    isFree: true,
    lang: "en",
    level: "escolar",
  },
  {
    id: "mtpe-mentoria",
    nameEs: "Red de Mentores Perú",
    nameEn: "Peru Mentor Network",
    orgEs: "Ministerio de Trabajo y Promoción del Empleo",
    orgEn: "Ministry of Labor and Employment Promotion",
    descEs: "Programa oficial del Ministerio de Trabajo que conecta jóvenes peruanos con profesionales que los guían en su desarrollo de carrera.",
    descEn: "Official Ministry of Labor program connecting Peruvian youth with professionals who guide their career development.",
    url: "https://www.gob.pe/mtpe",
    category: "mentoria",
    tags: ["mentoría", "carrera", "empleo", "gobierno"],
    ageMin: 18, ageMax: 29,
    isFree: true,
    lang: "es",
    level: "universitario",
  },
];

// ─── Quiz Data ────────────────────────────────────────────────────────────────

interface QuizQuestion {
  id: string;
  qEs: string;
  qEn: string;
  options: { labelEs: string; labelEn: string; value: string }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "age",
    qEs: "¿En qué etapa estás?",
    qEn: "What stage are you in?",
    options: [
      { labelEs: "Colegio (12–17 años)", labelEn: "High school (12–17)", value: "escolar" },
      { labelEs: "Universidad (18–25 años)", labelEn: "University (18–25)", value: "universitario" },
      { labelEs: "Egresado / Profesional", labelEn: "Graduated / Professional", value: "profesional" },
    ],
  },
  {
    id: "interest",
    qEs: "¿Qué área te apasiona más?",
    qEn: "What area are you most passionate about?",
    options: [
      { labelEs: "Ciencias y Matemáticas (STEM)", labelEn: "Science & Math (STEM)", value: "stem" },
      { labelEs: "Liderazgo y Diplomacia", labelEn: "Leadership & Diplomacy", value: "liderazgo" },
      { labelEs: "Tecnología y Programación", labelEn: "Technology & Coding", value: "tech" },
      { labelEs: "Ciencias Sociales y Humanidades", labelEn: "Social Sciences & Humanities", value: "humanidades" },
    ],
  },
  {
    id: "goal",
    qEs: "¿Cuál es tu meta principal?",
    qEn: "What is your main goal?",
    options: [
      { labelEs: "Conseguir una beca para estudiar", labelEn: "Get a scholarship to study", value: "beca" },
      { labelEs: "Competir y ganar premios", labelEn: "Compete and win prizes", value: "competencia" },
      { labelEs: "Hacer networking y crecer", labelEn: "Network and grow", value: "networking" },
      { labelEs: "Encontrar un mentor", labelEn: "Find a mentor", value: "mentoria" },
    ],
  },
  {
    id: "english",
    qEs: "¿Cuál es tu nivel de inglés?",
    qEn: "What is your English level?",
    options: [
      { labelEs: "Básico (entiendo poco)", labelEn: "Basic (I understand a little)", value: "basic" },
      { labelEs: "Intermedio (me defiendo)", labelEn: "Intermediate (I can manage)", value: "intermediate" },
      { labelEs: "Avanzado (fluido)", labelEn: "Advanced (fluent)", value: "advanced" },
    ],
  },
  {
    id: "time",
    qEs: "¿Cuánto tiempo puedes dedicar?",
    qEn: "How much time can you commit?",
    options: [
      { labelEs: "Pocas horas por semana", labelEn: "A few hours per week", value: "light" },
      { labelEs: "Vacaciones / verano completo", labelEn: "Full vacation / summer", value: "summer" },
      { labelEs: "Un año completo", labelEn: "A full year", value: "year" },
    ],
  },
];

// ─── Matching Logic ───────────────────────────────────────────────────────────

function matchOpportunities(answers: Record<string, string>): Opportunity[] {
  const scored = OPPORTUNITIES.map((opp) => {
    let score = 0;
    const a = answers;

    // Age/level match
    if (a.age === "escolar" && (opp.level === "escolar" || opp.level === "ambos")) score += 3;
    if (a.age === "universitario" && (opp.level === "universitario" || opp.level === "ambos")) score += 3;
    if (a.age === "profesional" && opp.level === "universitario") score += 2;

    // Interest match
    if (a.interest === "stem" && (opp.tags.includes("stem") || opp.tags.includes("matemáticas") || opp.tags.includes("ciencias"))) score += 3;
    if (a.interest === "liderazgo" && (opp.category === "liderazgo" || opp.category === "mun")) score += 3;
    if (a.interest === "tech" && opp.category === "tech") score += 3;
    if (a.interest === "humanidades" && (opp.category === "mun" || opp.category === "liderazgo" || opp.tags.includes("diplomacia"))) score += 2;

    // Goal match
    if (a.goal === "beca" && opp.category === "becas") score += 4;
    if (a.goal === "competencia" && opp.category === "competencias") score += 4;
    if (a.goal === "networking" && (opp.category === "liderazgo" || opp.category === "mun")) score += 4;
    if (a.goal === "mentoria" && opp.category === "mentoria") score += 4;

    // English level
    if (a.english === "basic" && opp.lang === "es") score += 2;
    if (a.english === "intermediate" && (opp.lang === "es" || opp.lang === "both")) score += 2;
    if (a.english === "advanced") score += 1;

    // Time commitment
    if (a.time === "light" && opp.category === "competencias") score += 1;
    if (a.time === "summer" && (opp.category === "liderazgo" || opp.tags.includes("presencial"))) score += 2;
    if (a.time === "year" && opp.category === "becas") score += 2;

    // Free preference
    if (opp.isFree) score += 1;

    return { opp, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((s) => s.opp);
}

// ─── Category Config ──────────────────────────────────────────────────────────

const CATEGORIES: { value: Category; labelEs: string; labelEn: string; icon: React.ReactNode; color: string }[] = [
  { value: "all",         labelEs: "Todas",        labelEn: "All",           icon: <Globe className="w-4 h-4" />,        color: "bg-slate-100 text-slate-700 border-slate-200" },
  { value: "becas",       labelEs: "Becas",        labelEn: "Scholarships",  icon: <GraduationCap className="w-4 h-4" />, color: "bg-blue-50 text-blue-700 border-blue-100" },
  { value: "liderazgo",   labelEs: "Liderazgo",    labelEn: "Leadership",    icon: <Rocket className="w-4 h-4" />,       color: "bg-violet-50 text-violet-700 border-violet-100" },
  { value: "competencias",labelEs: "Olimpiadas",   labelEn: "Olympiads",     icon: <Trophy className="w-4 h-4" />,       color: "bg-amber-50 text-amber-700 border-amber-100" },
  { value: "mun",         labelEs: "MUN",          labelEn: "MUN",           icon: <Users className="w-4 h-4" />,        color: "bg-teal-50 text-teal-700 border-teal-100" },
  { value: "mentoria",    labelEs: "Mentoría",     labelEn: "Mentoring",     icon: <Lightbulb className="w-4 h-4" />,    color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { value: "tech",        labelEs: "Tecnología",   labelEn: "Technology",    icon: <Zap className="w-4 h-4" />,          color: "bg-rose-50 text-rose-700 border-rose-100" },
];

const CAT_COLORS: Record<Exclude<Category, "all">, string> = {
  becas:        "from-blue-500 to-indigo-600",
  liderazgo:    "from-violet-500 to-purple-600",
  competencias: "from-amber-500 to-orange-500",
  mun:          "from-teal-500 to-cyan-600",
  mentoria:     "from-emerald-500 to-green-600",
  tech:         "from-rose-500 to-pink-600",
};

const CAT_BADGE: Record<Exclude<Category, "all">, string> = {
  becas:        "bg-blue-50 text-blue-700 border-blue-100",
  liderazgo:    "bg-violet-50 text-violet-700 border-violet-100",
  competencias: "bg-amber-50 text-amber-700 border-amber-100",
  mun:          "bg-teal-50 text-teal-700 border-teal-100",
  mentoria:     "bg-emerald-50 text-emerald-700 border-emerald-100",
  tech:         "bg-rose-50 text-rose-700 border-rose-100",
};

// ─── Opportunity Card ─────────────────────────────────────────────────────────

function OpportunityCard({ opp, lang }: { opp: Opportunity; lang: "es" | "en" }) {
  const t = lang === "es";
  const catConfig = CATEGORIES.find((c) => c.value === opp.category)!;
  const gradient = CAT_COLORS[opp.category];
  const badgeClass = CAT_BADGE[opp.category];

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                {catConfig.icon}
                {t ? catConfig.labelEs : catConfig.labelEn}
              </span>
              {opp.isFree && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-green-50 text-green-700 border-green-100">
                  <Star className="w-3 h-3" />
                  {t ? "Gratuito" : "Free"}
                </span>
              )}
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-tight group-hover:text-blue-700 transition-colors">
              {t ? opp.nameEs : opp.nameEn}
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">{t ? opp.orgEs : opp.orgEn}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed flex-1">
          {t ? opp.descEs : opp.descEn}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400">
          {(opp.ageMin || opp.ageMax) && (
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {opp.ageMin && opp.ageMax
                ? `${opp.ageMin}–${opp.ageMax} años`
                : opp.ageMin
                ? `${opp.ageMin}+ años`
                : ""}
            </span>
          )}
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {t ? "Para peruanos" : "For Peruvians"}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3" />
            {opp.lang === "es" ? "Español" : opp.lang === "en" ? "English" : "ES / EN"}
          </span>
        </div>

        {/* CTA */}
        <a
          href={opp.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full mt-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition-opacity`}
        >
          {t ? "Cómo postular" : "How to apply"}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}

// ─── ESF Match Quiz ───────────────────────────────────────────────────────────

function ESFMatch({ lang }: { lang: "es" | "en" }) {
  const t = lang === "es";
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Opportunity[]>([]);

  const q = QUIZ_QUESTIONS[current];

  function selectAnswer(value: string) {
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (current + 1 < QUIZ_QUESTIONS.length) {
      setCurrent((c) => c + 1);
    } else {
      setResults(matchOpportunities(newAnswers));
      setStep("results");
    }
  }

  function reset() {
    setStep("intro");
    setCurrent(0);
    setAnswers({});
    setResults([]);
  }

  const progress = ((current) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
      {step === "intro" && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            {t ? "ESF Match — Tu brújula de oportunidades" : "ESF Match — Your opportunity compass"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            {t ? "¿Cuál oportunidad es para ti?" : "Which opportunity is for you?"}
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-lg">
            {t
              ? "5 preguntas rápidas y te decimos exactamente qué programas aplican a tu perfil. Sin IA, solo match real."
              : "5 quick questions and we'll tell you exactly which programs match your profile. No AI, just real match."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><Target className="w-4 h-4 text-white/80" />{t ? "5 preguntas" : "5 questions"}</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-white/80" />{t ? "2 minutos" : "2 minutes"}</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-white/80" />{t ? "4 oportunidades personalizadas" : "4 personalized opportunities"}</span>
          </div>
          <button
            onClick={() => setStep("quiz")}
            className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/95 hover:scale-105 transition-all shadow-lg shadow-violet-900/30"
          >
            {t ? "Descubrir mis oportunidades" : "Discover my opportunities"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {step === "quiz" && (
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-white/60 mb-2">
              <span>{t ? `Pregunta ${current + 1} de ${QUIZ_QUESTIONS.length}` : `Question ${current + 1} of ${QUIZ_QUESTIONS.length}`}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            {t ? q.qEs : q.qEn}
          </h3>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {q.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectAnswer(opt.value)}
                className="flex items-center gap-3 w-full text-left bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl px-5 py-4 text-white font-medium transition-all duration-200 hover:scale-[1.02] group"
              >
                <span className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center text-sm font-bold transition-colors shrink-0">
                  {String.fromCharCode(65 + q.options.indexOf(opt))}
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
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              {t ? "Tu perfil encaja con..." : "Your profile matches..."}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              {t ? "¡Estas son tus oportunidades!" : "These are your opportunities!"}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {results.map((opp) => (
              <a
                key={opp.id}
                href={opp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${CAT_COLORS[opp.category]} shrink-0 flex items-center justify-center`}>
                  {CATEGORIES.find((c) => c.value === opp.category)?.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-sm leading-tight group-hover:text-white/90">
                    {t ? opp.nameEs : opp.nameEn}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5">{t ? opp.orgEs : opp.orgEn}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 shrink-0 mt-0.5 transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              {t ? "Volver a intentar" : "Try again"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OportunidadesPage() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? OPPORTUNITIES
    : OPPORTUNITIES.filter((o) => o.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[hsl(222,47%,8%)] via-[hsl(230,50%,12%)] to-[hsl(222,47%,8%)] py-20 px-5">
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-white/70 mb-6">
            <MapPin className="w-4 h-4 text-emerald-400" />
            {t ? "Solo para peruanos" : "For Peruvians only"}
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            {t ? "Tus oportunidades\nde crecimiento" : "Your opportunities\nfor growth"}
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto mb-8">
            {t
              ? "Becas, programas de liderazgo, olimpiadas, MUNs y más — verificados y con links directos. Todo para ti, estudiante peruano."
              : "Scholarships, leadership programs, olympiads, MUNs and more — verified with direct links. All for you, Peruvian student."}
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            <div className="text-center">
              <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>{OPPORTUNITIES.length}</p>
              <p>{t ? "Oportunidades" : "Opportunities"}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                {OPPORTUNITIES.filter((o) => o.isFree).length}
              </p>
              <p>{t ? "Gratuitas" : "Free"}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>6</p>
              <p>{t ? "Categorías" : "Categories"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESF Match */}
      <section className="py-16 px-5">
        <div className="container-page">
          <ESFMatch lang={lang} />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-20 px-5">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8 flex-wrap">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500 text-sm font-medium mr-1">
              {t ? "Filtrar por:" : "Filter by:"}
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat.value
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : `${cat.color} hover:opacity-80`
                }`}
              >
                {cat.icon}
                {t ? cat.labelEs : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp) => (
              <OpportunityCard key={opp.id} opp={opp} lang={lang} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>{t ? "No hay resultados para este filtro." : "No results for this filter."}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-white border-t border-slate-100 py-16 px-5">
        <div className="container-page text-center">
          <Briefcase className="w-10 h-10 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            {t ? "¿Conoces una oportunidad que falta?" : "Know an opportunity we're missing?"}
          </h2>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            {t
              ? "Escríbenos y la agregamos. Esta lista es para todos los estudiantes peruanos."
              : "Write to us and we'll add it. This list is for all Peruvian students."}
          </p>
          <a
            href="mailto:moonjab.com@gmail.com?subject=Oportunidad para ESF"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Rocket className="w-4 h-4" />
            {t ? "Sugerir oportunidad" : "Suggest opportunity"}
          </a>
        </div>
      </section>
    </div>
  );
}
