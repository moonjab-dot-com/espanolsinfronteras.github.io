import { useState, useCallback, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials, faqItems, socialLinks, partners } from "@/data/courses";
import { BrandScroller } from "@/components/ui/brand-scroller";
import {
  Backpack, BookOpen, ChevronDown, ExternalLink, Globe, GraduationCap,
  Handshake, Heart, Lightbulb, Mail, MessageCircle, Quote,
  Rocket, Sparkles, Trophy, Users,
} from "lucide-react";

// ─── Reveal ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, inView]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)", transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms` }}>
      {children}
    </div>
  );
}

// ─── Eyebrow pill (matches homepage pattern) ──────────────────────────────────

function Eyebrow({ icon: Icon, children }: { icon: React.ComponentType<{ style?: React.CSSProperties; className?: string }>; children: React.ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.25)", marginBottom: "20px" }}>
      <Icon style={{ width: "13px", height: "13px", color: "#84cc16" }} />
      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#84cc16" }}>{children}</span>
    </div>
  );
}

// ─── Avatar palette ───────────────────────────────────────────────────────────

const AVATAR_PALETTE = [
  "bg-blue-500","bg-emerald-500","bg-amber-500","bg-violet-500",
  "bg-rose-500","bg-teal-500","bg-indigo-500","bg-orange-500","bg-cyan-600",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NosotrosPage() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggle = useCallback((i: number) => setOpenFaq(p => p === i ? null : i), []);
  const items = testimonials.map((tm, i) => ({ text: tm.text, author: tm.author, colorIndex: i }));

  const owls = [
    { src: "/OWL_WITH_SPAIN_FLAG.png",            labelEs: "Comunicación",  labelEn: "Communication", accent: "#3b82f6" },
    { src: "/OWL_SCIENCE.png",                    labelEs: "Ciencias",      labelEn: "Science",       accent: "#10b981" },
    { src: "/OWL_CODING.png",                     labelEs: "Programación",  labelEn: "Coding",        accent: "#8b5cf6" },
    { src: "/OWL_NUMBER_ONE.png",                 labelEs: "Matemáticas",   labelEn: "Math",          accent: "#f59e0b" },
    { src: "/OWL_INVESTIGATOR_WITH_COMPUTER.png", labelEs: "Tecnología",    labelEn: "Technology",    accent: "#22577a" },
    { src: "/OWL_READING.png",                    labelEs: "Inglés",        labelEn: "English",       accent: "#f43f5e" },
  ];

  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#080D1C", minHeight: "70vh", paddingTop: "80px", paddingBottom: "80px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>
        {/* Dot-grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        {/* Lime glow */}
        <div style={{ position: "absolute", right: "-80px", top: "40%", transform: "translateY(-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* SVG watermark */}
        <img src="/WalkTogether-Streamline.svg" alt="" aria-hidden="true"
          style={{ position: "absolute", right: 0, bottom: 0, width: "320px", opacity: 0.04, pointerEvents: "none", userSelect: "none" }} />

        <div className="container-page" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "48px", alignItems: "center" }}>
            {/* Left */}
            <div style={{ maxWidth: "600px" }}>
              <Eyebrow icon={Heart}>{t ? "Nuestra misión" : "Our mission"}</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#fff", marginBottom: "20px" }}>
                {t ? <>Un futuro más justo<br /><span style={{ color: "#84cc16" }}>comienza con acceso.</span></> : <>A fairer future<br /><span style={{ color: "#84cc16" }}>starts with access.</span></>}
              </h1>
              <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "460px", marginBottom: "40px" }}>
                {t
                  ? "Español Sin Fronteras es una plataforma educativa 100% gratuita que nació del sueño de que nadie se quede sin estudiar."
                  : "Español Sin Fronteras is a 100% free educational platform born from the dream that no one should miss out on education."}
              </p>
              {/* Stats row */}
              <div style={{ display: "flex", gap: "40px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap" }}>
                {[
                  { v: "277+", l: t ? "Lecciones"  : "Lessons"   },
                  { v: "72+",  l: t ? "Países"     : "Countries" },
                  { v: "12",   l: t ? "Materias"   : "Subjects"  },
                  { v: "$0",   l: t ? "Costo"      : "Cost"      },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>{v}</p>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — owl mascot */}
            <div className="hidden lg:block" style={{ width: "260px", height: "320px", position: "relative" }}>
              <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)", filter: "blur(20px)" }} />
              <img src="/owl-logo.png" alt={t ? "Mascota ESF" : "ESF Mascot"} className="animate-float-slow"
                style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(132,204,22,0.2))", position: "relative", zIndex: 1 }} loading="eager" />
            </div>
          </div>
        </div>
        {/* Bottom lime stripe */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, transparent 0%, #84CC16 30%, #22C55E 70%, transparent 100%)", opacity: 0.5 }} />
      </section>

      {/* ── HISTORIA ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#080D1C", padding: "80px 0", position: "relative", overflow: "hidden" }} id="historia">
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        {/* Lime accent blob */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          {/* Two-column layout: content + illustration */}
          <div className="grid-opp-detail" style={{ gridTemplateColumns: "1fr auto", gap: "64px", alignItems: "center" }}>

            {/* Left: story content */}
            <div style={{ minWidth: 0 }}>
              <Reveal>
                <Eyebrow icon={Heart}>{t ? "La historia" : "The story"}</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "32px" }}>
                  {t ? <>La historia<br /><span style={{ color: "#84cc16" }}>detrás de ESF</span></> : <>The story<br /><span style={{ color: "#84cc16" }}>behind ESF</span></>}
                </h2>
              </Reveal>

              {/* Founder quote — brutalist dark */}
              <Reveal delay={60}>
                <div style={{ marginBottom: "36px", padding: "28px 32px", background: "rgba(132,204,22,0.06)", border: "2px solid #84cc16", borderRadius: "16px", boxShadow: "6px 6px 0 #84cc16", position: "relative" }}>
                  <Quote style={{ position: "absolute", top: "18px", left: "20px", width: "24px", height: "24px", color: "#84cc16", opacity: 0.4 }} />
                  <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.4, paddingLeft: "4px" }}>
                    {t ? '"Nadie debería quedarse sin estudiar por falta de tiempo o dinero."' : '"No one should miss out on education due to lack of time or money."'}
                  </blockquote>
                  <p style={{ marginTop: "14px", fontSize: "12px", fontWeight: 700, color: "#84cc16", letterSpacing: "0.08em" }}>— SALVADOR B., {t ? "FUNDADOR" : "FOUNDER"}</p>
                </div>
              </Reveal>

              {/* Timeline cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { icon: Lightbulb, accent: "#3b82f6", num: "01", textEs: <>Una idea clara: aprender no debería depender del <strong style={{ color: "#fff" }}>dinero</strong> ni de las circunstancias.</>, textEn: <>One clear idea: learning shouldn't depend on <strong style={{ color: "#fff" }}>money</strong> or circumstances.</> },
                  { icon: Rocket,    accent: "#84cc16", num: "02", textEs: <>En 2024, esa idea se convirtió en una plataforma con más de <strong style={{ color: "#fff" }}>277 capítulos</strong> 100% gratuitos.</>, textEn: <>In 2024, that idea became a platform with over <strong style={{ color: "#fff" }}>277 chapters</strong>, 100% free.</> },
                  { icon: Globe,     accent: "#8b5cf6", num: "03", textEs: <>Llega a estudiantes en más de <strong style={{ color: "#fff" }}>72 países</strong>. El conocimiento no tiene fronteras.</>, textEn: <>Reaches students in over <strong style={{ color: "#fff" }}>72 countries</strong>. Knowledge knows no borders.</> },
                  { icon: Backpack,  accent: "#f59e0b", num: "04", textEs: <>Más allá de lo digital: <strong style={{ color: "#fff" }}>1,471+ libros</strong> y útiles donados en Lima.</>, textEn: <>Beyond digital: <strong style={{ color: "#fff" }}>1,471+ books</strong> and supplies donated in Lima.</> },
                ].map((card, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 22px", background: "rgba(255,255,255,0.04)", border: `2px solid ${card.accent}22`, borderRadius: "14px", boxShadow: `3px 3px 0 ${card.accent}33`, transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s" }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `5px 5px 0 ${card.accent}66`; el.style.borderColor = `${card.accent}55`; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = `3px 3px 0 ${card.accent}33`; el.style.borderColor = `${card.accent}22`; }}>
                      <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "12px", background: `${card.accent}18`, border: `1.5px solid ${card.accent}44`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <card.icon style={{ width: "18px", height: "18px", color: card.accent }} />
                      </div>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, fontWeight: 500 }}>{t ? card.textEs : card.textEn}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="hidden lg:block" style={{ width: "340px", flexShrink: 0, position: "relative" }}>
              {/* Glow behind illustration */}
              <div style={{ position: "absolute", inset: "20%", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.12) 0%, transparent 70%)", filter: "blur(30px)", pointerEvents: "none" }} />
              <img
                src="/About-Our-Team-1--Streamline-Barcelona.png"
                alt={t ? "El equipo de Español Sin Fronteras" : "The Español Sin Fronteras team"}
                draggable={false}
                onContextMenu={e => e.preventDefault()}
                onDragStart={e => e.preventDefault()}
                style={{ width: "100%", height: "auto", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 20px 40px rgba(132,204,22,0.15))" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TUTORES ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#EEF1F9", padding: "80px 0", overflow: "hidden" }} id="tutores">
        <div className="container-page">
          <Reveal>
            <div style={{ marginBottom: "48px" }}>
              <Eyebrow icon={GraduationCap}>{t ? "Nuestros tutores" : "Our tutors"}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {t ? <>Un búho para <span style={{ color: "#84cc16" }}>cada materia</span></> : <>An owl for <span style={{ color: "#84cc16" }}>every subject</span></>}
              </h2>
            </div>
          </Reveal>
          <div className="grid-tutores" style={{ maxWidth: "800px" }}>
            {owls.map(({ src, labelEs, labelEn, accent }, i) => (
              <Reveal key={src} delay={i * 70}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{ width: "80px", height: "80px", borderRadius: "20px", background: "#fff", border: `2px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", transition: "transform 0.35s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.2s", transformStyle: "preserve-3d", cursor: "default" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "perspective(300px) rotateX(-12deg) rotateY(14deg) scale(1.12)"; el.style.boxShadow = `4px 4px 0 ${accent}`; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "none"; }}
                  >
                    <img src={src} alt={t ? labelEs : labelEn} style={{ width: "68px", height: "68px", objectFit: "contain" }} loading="lazy" />
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#6b7280", textAlign: "center", lineHeight: 1.3 }}>{t ? labelEs : labelEn}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALIANZAS ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0", overflow: "hidden" }} id="alianzas">
        <div className="container-page">
          <Reveal>
            <div style={{ marginBottom: "48px" }}>
              <Eyebrow icon={Handshake}>{t ? "Alianzas estratégicas" : "Strategic partnerships"}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "14px" }}>
                {t ? <>Organizaciones que <span style={{ color: "#84cc16" }}>creen en la misión</span></> : <>Organizations that <span style={{ color: "#84cc16" }}>believe in the mission</span></>}
              </h2>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 14px", borderRadius: "99px", background: "rgba(132,204,22,0.08)", border: "1px solid rgba(132,204,22,0.2)", fontSize: "12px", fontWeight: 700, color: "#84cc16" }}>
                <Handshake style={{ width: "12px", height: "12px" }} />
                {partners.length} {t ? "alianzas activas" : "active alliances"}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={80}><BrandScroller items={partners} lang={lang} direction="forward" duration={40} className="mb-3" label={t ? "Organizaciones aliadas" : "Partner organizations"} /></Reveal>
        <Reveal delay={140}><BrandScroller items={[...partners].reverse()} lang={lang} direction="reverse" duration={34} /></Reveal>
        <Reveal delay={200}>
          <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", textAlign: "center", fontSize: "12px", color: "rgba(107,114,128,0.6)", marginTop: "40px", fontWeight: 500 }}>
            {t ? "Hecho con" : "Made with"} <Heart style={{ width: "12px", height: "12px", color: "#f43f5e" }} /> {t ? "desde Perú para el mundo" : "from Peru for the world"}
          </p>
        </Reveal>
      </section>

      {/* ── GALERÍA ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#080D1C", padding: "80px 0", position: "relative", overflow: "hidden" }} id="galeria">
        {/* Dot-grid texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <img src="/Startup-Streamline.svg" alt="" aria-hidden="true"
          style={{ position: "absolute", left: "-20px", bottom: "20px", width: "260px", opacity: 0.04, pointerEvents: "none", userSelect: "none" }} />

        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ marginBottom: "48px" }}>
              <Eyebrow icon={Globe}>{t ? "Galería" : "Gallery"}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {t ? <>Educación <span style={{ color: "#84cc16" }}>en acción</span></> : <>Education <span style={{ color: "#84cc16" }}>in action</span></>}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "16px" }}>
            {[
              { src: "/media1.png", captionEs: "Educación en acción",  captionEn: "Education in action", accent: "#84cc16" },
              { src: "/media2.png", captionEs: "Nuestro impacto",      captionEn: "Our impact",          accent: "#38a3a5" },
              { src: "/media3.png", captionEs: "Comunidad ESF",        captionEn: "ESF Community",       accent: "#5b21b6" },
            ].map(({ src, captionEs, captionEn, accent }, i) => (
              <Reveal key={i} delay={i * 70}>
                <div style={{ borderRadius: "16px", border: `2px solid ${accent}`, overflow: "hidden", background: "#111827", boxShadow: `4px 4px 0 ${accent}`, transition: "transform 0.15s, box-shadow 0.15s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `6px 6px 0 ${accent}`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = `4px 4px 0 ${accent}`; }}>
                  <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                    <img src={src} alt={t ? captionEs : captionEn}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      loading="lazy" />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 700, color: accent }}>{t ? captionEs : captionEn}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LECTURA GRATUITA ─────────────────────────────────────────────────── */}
      <section style={{ background: "#EEF1F9", padding: "80px 0" }} id="lectura">
        <div className="container-page">
          <Reveal>
            <div style={{ maxWidth: "680px", padding: "40px 44px", background: "#fff", border: "2px solid #84cc16", borderRadius: "20px", boxShadow: "6px 6px 0 #84cc16", display: "flex", alignItems: "flex-start", gap: "28px" }}>
              {/* Owl */}
              <div className="hidden sm:block" style={{ flexShrink: 0, width: "100px" }}>
                <img src="/OWL_INVESTIGADOR_WITH_BOOK.png" alt="" aria-hidden="true"
                  className="animate-float-slow" style={{ width: "100px", height: "100px", objectFit: "contain" }} loading="lazy" />
              </div>
              <div style={{ flex: 1 }}>
                <Eyebrow icon={BookOpen}>{t ? "Lectura gratuita" : "Free reading"}</Eyebrow>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.2, marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Trophy style={{ width: "22px", height: "22px", color: "#84cc16", flexShrink: 0 }} />
                  {t ? "El Gran Sueño de Cris" : "Cris's Big Dream"}
                </h2>
                <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.7, marginBottom: "24px" }}>
                  {t
                    ? "Un niño apasionado por el tenis enfrenta desafíos para alcanzar su gran sueño. Una historia de perseverancia, esfuerzo y amor por el deporte."
                    : "A boy passionate about tennis faces challenges to achieve his big dream. A story of perseverance, effort, and love for sport."}
                </p>
                <a href="https://drive.google.com/file/d/1om4ew8uDccRSxu-CHqDueuWVKJPk-dX_/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#080D1C", color: "#84cc16", fontSize: "13px", fontWeight: 800, borderRadius: "10px", textDecoration: "none", letterSpacing: "0.03em", transition: "opacity 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  {t ? "Descargar cuento" : "Download story"} <ExternalLink style={{ width: "13px", height: "13px" }} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0" }} id="faq">
        <div className="container-page">
          <Reveal>
            <div style={{ marginBottom: "48px" }}>
              <Eyebrow icon={MessageCircle}>{t ? "Preguntas frecuentes" : "FAQ"}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {t ? "¿Tienes dudas?" : "Have questions?"}
              </h2>
            </div>
          </Reveal>
          <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              const q = t ? item.questionEs : item.questionEn;
              const a = t ? item.answerEs : item.answerEn;
              return (
                <Reveal key={i} delay={i * 40}>
                  <div style={{ border: `2px solid ${isOpen ? "#84cc16" : "#e5e7eb"}`, borderRadius: "14px", overflow: "hidden", transition: "border-color 0.2s", boxShadow: isOpen ? "4px 4px 0 #84cc16" : "none" }}>
                    <button
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "18px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                      onClick={() => toggle(i)} aria-expanded={isOpen}>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>{q}</span>
                      <div style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", background: isOpen ? "#84cc16" : "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }}>
                        <ChevronDown style={{ width: "14px", height: "14px", color: isOpen ? "#0f172a" : "#6b7280" }} />
                      </div>
                    </button>
                    <div style={{ maxHeight: isOpen ? "300px" : "0", overflow: "hidden", transition: "max-height 0.3s ease", padding: isOpen ? "0 22px 20px" : "0 22px" }}>
                      <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.7 }}>{a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#EEF1F9", padding: "80px 0", position: "relative", overflow: "hidden" }} id="testimonios">
        <img src="/FacetimeMeeting-Streamline.svg" alt="" aria-hidden="true"
          style={{ position: "absolute", right: "-20px", top: "30px", width: "240px", opacity: 0.05, pointerEvents: "none", userSelect: "none" }} />
        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ marginBottom: "48px" }}>
              <Eyebrow icon={Quote}>{t ? "Testimonios" : "Testimonials"}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "8px" }}>
                {t ? "Lo que dicen nuestros estudiantes" : "What our students say"}
              </h2>
              <p style={{ fontSize: "15px", color: "#6b7280", maxWidth: "400px" }}>
                {t ? "Historias reales de personas que estudian entre el trabajo, el bus y la casa." : "Real stories from people studying between work, the bus, and home."}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
              {[0, 1, 2].map(col => {
                const colItems = items.filter((_, i) => i % 3 === col);
                const dur = [24, 29, 26][col];
                return (
                  <div key={col} className={col === 2 ? "hidden lg:block" : ""}>
                    <div className="overflow-hidden h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                      <div className="flex flex-col gap-4 animate-marquee-y" style={{ "--marquee-duration": `${dur}s` } as React.CSSProperties}>
                        {[0, 1].map(dup => (
                          <div key={dup} className="flex flex-col gap-4" aria-hidden={dup === 1}>
                            {colItems.map((item, i) => (
                              <div key={`${dup}-${i}`} style={{ padding: "20px 22px", borderRadius: "16px", border: "2px solid #e5e7eb", background: "#fff", boxShadow: "2px 2px 0 #e5e7eb" }}>
                                <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.6, marginBottom: "14px" }}>"{item.text}"</p>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                  <div className={`w-9 h-9 rounded-full ${AVATAR_PALETTE[item.colorIndex % AVATAR_PALETTE.length]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                    {item.author.trim().charAt(0).toUpperCase()}
                                  </div>
                                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{item.author}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#080D1C", padding: "80px 0", position: "relative", overflow: "hidden" }} id="contacto">
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <img src="/OnlineLearning-Streamline.svg" alt="" aria-hidden="true"
          style={{ position: "absolute", right: "-20px", bottom: "-20px", width: "280px", opacity: 0.04, pointerEvents: "none", userSelect: "none" }} />

        <div className="container-page" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Reveal>
            <div style={{ maxWidth: "560px", margin: "0 auto" }}>
              {/* Owl */}
              <div style={{ width: "72px", height: "72px", margin: "0 auto 24px" }}>
                <img src="/OWL_WITH_THE_EARTH.png" alt="" aria-hidden="true"
                  className="animate-float-slow" style={{ width: "100%", height: "100%", objectFit: "contain", opacity: 0.7 }} loading="lazy" />
              </div>
              <Eyebrow icon={Sparkles}>{t ? "¿Hablamos?" : "Let's connect"}</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "16px" }}>
                {t ? <>¿Tienes algo<br /><span style={{ color: "#84cc16" }}>que decirnos?</span></> : <>Something<br /><span style={{ color: "#84cc16" }}>to tell us?</span></>}
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "380px", margin: "0 auto 36px" }}>
                {t
                  ? "¿Tienes preguntas, sugerencias o quieres colaborar? Nos encantaría escucharte."
                  : "Have questions, suggestions, or want to collaborate? We'd love to hear from you."}
              </p>
              <a href="mailto:espanolsinfronteras1@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 36px", background: "#84cc16", color: "#080D1C", fontSize: "15px", fontWeight: 800, borderRadius: "12px", textDecoration: "none", letterSpacing: "0.03em", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                <Mail style={{ width: "16px", height: "16px" }} />
                {t ? "Escribirnos" : "Write to us"}
              </a>

              {/* Social links */}
              {(() => {
                const SOCIAL_META: Record<string, { color: string; icon: JSX.Element | null }> = {
                  Instagram: { color: "#E1306C", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                  TikTok:    { color: "#fff",     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg> },
                  Facebook:  { color: "#1877F2", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                  LinkedIn:  { color: "#0A66C2", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  Spotify:   { color: "#1DB954", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg> },
                };
                return (
                  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginTop: "40px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    {socialLinks.map(link => {
                      const meta = SOCIAL_META[link.name] ?? { color: "#84cc16", icon: null };
                      return (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "10px", border: "1.5px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "all 0.18s" }}
                          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = meta.color; el.style.color = "#fff"; el.style.background = `${meta.color}18`; }}
                          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "rgba(255,255,255,0.55)"; el.style.background = "rgba(255,255,255,0.04)"; }}>
                          <span style={{ color: meta.color, display: "flex", alignItems: "center" }}>{meta.icon}</span>
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
