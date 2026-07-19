import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { OPPORTUNITIES, CATEGORY_CONFIG } from "@/data/opportunities";
import { useSEO } from "@/hooks/use-seo";
import {
  ArrowLeft, Calendar, MapPin, ExternalLink, Users,
  BookOpen, Tag, CheckCircle, Info, Link2,
} from "lucide-react";

// ─── Detail Page ──────────────────────────────────────────────────────────────

export default function OpportunityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const t = lang === "es";

  const opp = OPPORTUNITIES.find((o) => o.id === id);

  useSEO({
    title: opp
      ? (t ? `${opp.nameEs} 2026 — ${opp.orgEs} | Español Sin Fronteras` : `${opp.nameEn} 2026 — ${opp.orgEn} | Español Sin Fronteras`)
      : "Oportunidad | Español Sin Fronteras",
    description: opp
      ? (t ? `${opp.descEs} Información verificada y gratuita en Español Sin Fronteras — sin registro.` : `${opp.descEn} Verified and free information at Español Sin Fronteras — no sign-up.`)
      : "Oportunidades verificadas para jóvenes peruanos — Español Sin Fronteras.",
    canonical: opp ? `https://espanolsinfronteras.org/oportunidades/${opp.id}` : undefined,
  });

  if (!opp) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-5">
        <p className="text-2xl font-bold text-foreground">{t ? "Oportunidad no encontrada" : "Opportunity not found"}</p>
        <Link to="/oportunidades" className="btn-primary">{t ? "Ver todas" : "See all"}</Link>
      </div>
    );
  }

  const name  = t ? opp.nameEs  : opp.nameEn;
  const org   = t ? opp.orgEs   : opp.orgEn;
  const desc  = t ? opp.longDescEs : opp.longDescEn;
  const areas = t ? opp.areasEs : opp.areasEn;
  const cat   = CATEGORY_CONFIG[opp.category];
  const deadline = t ? opp.deadlineMonthEs : opp.deadlineMonthEn;
  const eligibility = t ? opp.eligibilityEs : opp.eligibilityEn;
  const process     = t ? opp.processEs     : opp.processEn;
  const additional  = t ? opp.additionalInfoEs : opp.additionalInfoEn;

  const locationLabel = {
    presencial: t ? "Presencial" : "In-person",
    virtual:    t ? "Virtual"    : "Virtual",
    ambos:      t ? "Presencial / Virtual" : "In-person / Virtual",
  }[opp.location];

  const levelLabel = {
    escolar:       t ? "Secundaria" : "High School",
    universitario: t ? "Universidad" : "University",
    ambos:         t ? "Secundaria / Universidad" : "High School / University",
  }[opp.level];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── Dark hero header ──────────────────────────────────── */}
      <section style={{
        background: "#22577a",
        paddingTop: "48px", paddingBottom: "48px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
        {/* Mascot faint bg */}
        {opp.mascotImage && (
          <img src={opp.mascotImage} alt="" aria-hidden="true" style={{
            position: "absolute", right: "5%", bottom: 0, height: "180px",
            opacity: 0.08, objectFit: "contain", pointerEvents: "none", userSelect: "none",
          }} />
        )}
        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          {/* Back link */}
          <Link to="/oportunidades" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.6)", fontSize: "13px", fontWeight: 600, textDecoration: "none", marginBottom: "20px" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            <ArrowLeft style={{ width: "14px", height: "14px" }} />
            {t ? "Todas las oportunidades" : "All opportunities"}
          </Link>

          {/* Category chip */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "99px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.85)" }}>
              {t ? cat.labelEs : cat.labelEn}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "10px", letterSpacing: "-0.02em" }}>
            {name}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 500, marginBottom: "24px" }}>{org}</p>

          {/* Quick meta chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {[
              { icon: Calendar, text: deadline },
              { icon: MapPin, text: locationLabel },
              { icon: Users, text: levelLabel },
              opp.ageMin ? { icon: BookOpen, text: `${opp.ageMin}${opp.ageMax ? `–${opp.ageMax}` : "+"} ${t ? "años" : "years"}` } : null,
              { icon: Tag, text: opp.isFree ? (t ? "Gratuito" : "Free") : (t ? "Costo de inscripción" : "Registration fee") },
            ].filter((m): m is { icon: React.ComponentType<{ style?: React.CSSProperties }>; text: string } => m !== null)
             .map((meta, i) => {
              const MetaIcon = meta.icon;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  <MetaIcon style={{ width: "12px", height: "12px", color: "#84cc16" }} />
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{meta.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="container-page" style={{ paddingTop: "48px", paddingBottom: "80px" }}>
        <div className="grid-opp-detail">

          {/* ── Main column ────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", minWidth: 0 }}>

            {/* Description */}
            <Card title={t ? "Sobre el programa" : "About the program"} icon={BookOpen}>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#374151" }}>{desc}</p>
            </Card>

            {/* Areas */}
            {areas.length > 0 && (
              <Card title={t ? "Área de actuación" : "Areas of focus"} icon={Tag}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {areas.map((area) => (
                    <span key={area} style={{
                      padding: "5px 12px", borderRadius: "8px",
                      background: cat.bg, border: `1px solid ${cat.color}30`,
                      fontSize: "13px", fontWeight: 600, color: cat.color,
                    }}>{area}</span>
                  ))}
                </div>
              </Card>
            )}

            {/* Eligibility */}
            <Card title={t ? "Elegibilidad y guía de aplicación" : "Eligibility and application guide"} icon={CheckCircle}>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#374151" }}>{eligibility}</p>
            </Card>

            {/* Process */}
            <Card title={t ? "Sobre el proceso" : "About the process"} icon={Info}>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#374151" }}>{process}</p>
            </Card>

            {/* Additional info */}
            {additional && (
              <Card title={t ? "Información adicional" : "Additional information"} icon={Info}>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#374151" }}>{additional}</p>
              </Card>
            )}

            {/* Useful links */}
            {opp.usefulLinks && opp.usefulLinks.length > 0 && (
              <Card title={t ? "Links útiles" : "Useful links"} icon={Link2}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {opp.usefulLinks.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#22577a", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                      <ExternalLink style={{ width: "13px", height: "13px" }} />
                      {t ? link.labelEs : link.labelEn}
                    </a>
                  ))}
                </div>
              </Card>
            )}

            {/* Tags */}
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", marginBottom: "10px" }}>Tags</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {opp.tags.map((tag) => (
                  <span key={tag} style={{ padding: "3px 10px", borderRadius: "6px", background: "#f3f4f6", border: "1px solid #e5e7eb", fontSize: "12px", fontWeight: 500, color: "#6b7280" }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "80px" }}>

            {/* CTA card */}
            <div style={{
              background: "#22577a", borderRadius: "20px", padding: "28px",
              display: "flex", flexDirection: "column", gap: "16px",
            }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>
                  {t ? "Acceso rápido" : "Quick access"}
                </p>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", lineHeight: 1.5 }}>
                  {t ? "Ve directo al sitio oficial de la oportunidad." : "Go directly to the official opportunity site."}
                </p>
              </div>
              <a href={opp.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 20px", borderRadius: "12px", background: "#84cc16", color: "#0f172a", fontSize: "14px", fontWeight: 800, textDecoration: "none", letterSpacing: "0.03em", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {t ? "Aplicar ahora" : "Apply now"} <ExternalLink style={{ width: "14px", height: "14px" }} />
              </a>
            </div>

            {/* Meta card */}
            <div style={{ background: "#fff", borderRadius: "20px", padding: "24px", border: "2px solid #e5e7eb", display: "flex", flexDirection: "column", gap: "16px" }}>
              <MetaRow icon={Calendar} label={t ? "Plazo de inscripción" : "Application deadline"} value={deadline} />
              <MetaRow icon={MapPin} label={t ? "Localización" : "Location"} value={locationLabel} />
              <MetaRow icon={Users} label={t ? "Nivel" : "Level"} value={levelLabel} />
              {opp.ageMin && (
                <MetaRow icon={BookOpen} label={t ? "Edad" : "Age"} value={`${opp.ageMin}${opp.ageMax ? `–${opp.ageMax}` : "+"} ${t ? "años" : "yrs"}`} />
              )}
              <MetaRow icon={Tag} label={t ? "Costo" : "Cost"} value={opp.isFree ? (t ? "100% Gratuito" : "100% Free") : (t ? "Con costo" : "Paid")} highlight={opp.isFree} />
              <MetaRow icon={BookOpen} label={t ? "Idioma" : "Language"} value={opp.lang === "es" ? "Español" : opp.lang === "en" ? "English" : "ES / EN"} />
            </div>

            {/* Back */}
            <Link to="/oportunidades" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "12px", borderRadius: "12px", border: "2px solid #e5e7eb", color: "#6b7280", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#22577a"; e.currentTarget.style.color = "#22577a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#6b7280"; }}
            >
              <ArrowLeft style={{ width: "14px", height: "14px" }} />
              {t ? "Ver todas las oportunidades" : "See all opportunities"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Card({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ style?: React.CSSProperties }>; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", borderRadius: "20px", padding: "28px", border: "2px solid #e5e7eb" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <Icon style={{ width: "16px", height: "16px", color: "#22577a" }} />
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function MetaRow({ icon: Icon, label, value, highlight = false }: {
  icon: React.ComponentType<{ style?: React.CSSProperties }>;
  label: string; value: string; highlight?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <Icon style={{ width: "14px", height: "14px", color: "#22577a", marginTop: "2px", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", marginBottom: "2px" }}>{label}</p>
        <p style={{ fontSize: "14px", fontWeight: 700, color: highlight ? "#22577a" : "#0f172a", lineHeight: 1.3 }}>{value}</p>
      </div>
    </div>
  );
}
