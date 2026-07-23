import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { OPPORTUNITIES, CATEGORY_CONFIG } from "@/data/opportunities";
import { useSEO } from "@/hooks/use-seo";
import {
  Search, Filter, X, ArrowRight, ExternalLink,
  GraduationCap, Star, Globe, ChevronRight, RefreshCw,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Filters = {
  q: string;
  category: string;
  isFree: boolean | null;
  age: number | null;
  level: string;
};

const INITIAL: Filters = { q: "", category: "all", isFree: null, age: null, level: "all" };

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BuscadorPage() {
  const { lang } = useLanguage();
  const t = lang === "es";

  useSEO({
    title: t
      ? "Buscador de Oportunidades | Español Sin Fronteras"
      : "Opportunity Finder | Español Sin Fronteras",
    description: t
      ? "Encuentra becas, olimpiadas, liderazgo, MUN y programas tech para jóvenes peruanos. Filtra por categoría, edad y costo."
      : "Find scholarships, olympiads, leadership programs, MUN, and tech opportunities for Peruvian students.",
    canonical: "https://espanolsinfronteras.org/buscador",
  });

  const [filters, setFilters] = useState<Filters>(INITIAL);
  const set = (key: keyof Filters, val: Filters[keyof Filters]) =>
    setFilters(f => ({ ...f, [key]: val }));

  const results = useMemo(() => {
    return OPPORTUNITIES.filter(o => {
      if (filters.category !== "all" && o.category !== filters.category) return false;
      if (filters.isFree === true && !o.isFree) return false;
      if (filters.isFree === false && o.isFree) return false;
      if (filters.level !== "all" && o.level !== filters.level && o.level !== "ambos") return false;
      if (filters.age !== null) {
        if (o.ageMin !== undefined && filters.age < o.ageMin) return false;
        if (o.ageMax !== undefined && filters.age > o.ageMax) return false;
      }
      if (filters.q.trim()) {
        const q = filters.q.toLowerCase();
        const haystack = [
          t ? o.nameEs : o.nameEn,
          t ? o.orgEs : o.orgEn,
          t ? o.descEs : o.descEn,
          ...(o.tags ?? []),
        ].join(" ").toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [filters, t]);

  const active = filters.q || filters.category !== "all" || filters.isFree !== null || filters.age !== null || filters.level !== "all";

  return (
    <main id="main-content" style={{ background: "var(--bg-page, #f8fafc)", minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg, #22577a 0%, #1a3f5c 100%)", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 999, marginBottom: 16 }}>
            {t ? "131 oportunidades verificadas" : "131 verified opportunities"}
          </span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.2 }}>
            {t ? "Encuentra tu oportunidad" : "Find Your Opportunity"}
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", margin: "0 0 24px" }}>
            {t
              ? "Becas, olimpiadas, liderazgo, MUN y tech — filtrado para ti."
              : "Scholarships, olympiads, leadership, MUN, and tech — filtered for you."}
          </p>

          {/* Search bar */}
          <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <Search size={18} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6b7280" }} />
            <input
              type="search"
              placeholder={t ? "Busca por nombre, tema o habilidad…" : "Search by name, topic, or skill…"}
              value={filters.q}
              onChange={e => set("q", e.target.value)}
              style={{
                width: "100%", padding: "14px 16px 14px 44px",
                border: "none", borderRadius: 12, fontSize: "1rem",
                background: "#fff", boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                outline: "none", boxSizing: "border-box",
              }}
            />
            {filters.q && (
              <button onClick={() => set("q", "")} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}>
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
          <Filter size={16} style={{ color: "#6b7280", flexShrink: 0 }} />

          {/* Category */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[
              { key: "all", es: "Todas", en: "All" },
              { key: "becas", es: "Becas", en: "Scholarships" },
              { key: "liderazgo", es: "Liderazgo", en: "Leadership" },
              { key: "competencias", es: "Olimpiadas", en: "Olympiads" },
              { key: "mun", es: "MUN", en: "MUN" },
              { key: "tech", es: "Tech", en: "Tech" },
            ].map(({ key, es, en }) => {
              const active = filters.category === key;
              const cfg = key !== "all" ? CATEGORY_CONFIG[key] : null;
              return (
                <button key={key} onClick={() => set("category", key)}
                  style={{
                    padding: "5px 12px", borderRadius: 999, fontSize: "0.82rem", fontWeight: 600,
                    border: active ? `2px solid ${cfg?.color ?? "#22577a"}` : "2px solid #e5e7eb",
                    background: active ? (cfg?.bg ?? "rgba(34,87,122,0.1)") : "#fff",
                    color: active ? (cfg?.color ?? "#22577a") : "#6b7280",
                    cursor: "pointer", transition: "all 0.15s",
                  }}>
                  {t ? es : en}
                </button>
              );
            })}
          </div>

          <div style={{ width: 1, height: 24, background: "#e5e7eb", margin: "0 4px" }} />

          {/* Cost */}
          {[
            { val: null, es: "Costo: todos", en: "Cost: all" },
            { val: true, es: "Solo gratis", en: "Free only" },
          ].map(({ val, es, en }) => (
            <button key={String(val)} onClick={() => set("isFree", val)}
              style={{
                padding: "5px 12px", borderRadius: 999, fontSize: "0.82rem", fontWeight: 600,
                border: filters.isFree === val ? "2px solid #22577a" : "2px solid #e5e7eb",
                background: filters.isFree === val ? "rgba(34,87,122,0.1)" : "#fff",
                color: filters.isFree === val ? "#22577a" : "#6b7280",
                cursor: "pointer", transition: "all 0.15s",
              }}>
              {t ? es : en}
            </button>
          ))}

          <div style={{ width: 1, height: 24, background: "#e5e7eb", margin: "0 4px" }} />

          {/* Level */}
          {[
            { val: "all", es: "Nivel: todos", en: "Level: all" },
            { val: "secundaria", es: "Secundaria", en: "High school" },
            { val: "universitario", es: "Universidad", en: "University" },
          ].map(({ val, es, en }) => (
            <button key={val} onClick={() => set("level", val)}
              style={{
                padding: "5px 12px", borderRadius: 999, fontSize: "0.82rem", fontWeight: 600,
                border: filters.level === val ? "2px solid #22577a" : "2px solid #e5e7eb",
                background: filters.level === val ? "rgba(34,87,122,0.1)" : "#fff",
                color: filters.level === val ? "#22577a" : "#6b7280",
                cursor: "pointer", transition: "all 0.15s",
              }}>
              {t ? es : en}
            </button>
          ))}

          {active && (
            <button onClick={() => setFilters(INITIAL)}
              style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, padding: "5px 12px", borderRadius: 999, fontSize: "0.82rem", fontWeight: 600, border: "2px solid #ef4444", background: "rgba(239,68,68,0.07)", color: "#ef4444", cursor: "pointer" }}>
              <RefreshCw size={13} /> {t ? "Limpiar" : "Clear"}
            </button>
          )}
        </div>
      </section>

      {/* ── Results ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: 20 }}>
          {t
            ? `${results.length} oportunidad${results.length !== 1 ? "es" : ""} encontrada${results.length !== 1 ? "s" : ""}`
            : `${results.length} opportunit${results.length !== 1 ? "ies" : "y"} found`}
        </p>

        {results.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
            <GraduationCap size={48} style={{ color: "#d1d5db", marginBottom: 16 }} />
            <h3 style={{ color: "#374151", marginBottom: 8 }}>{t ? "Sin resultados" : "No results"}</h3>
            <p style={{ color: "#6b7280", marginBottom: 20 }}>
              {t ? "Prueba con otros filtros o busca un término diferente." : "Try different filters or search terms."}
            </p>
            <button onClick={() => setFilters(INITIAL)}
              style={{ padding: "10px 24px", background: "#22577a", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600 }}>
              {t ? "Ver todas las oportunidades" : "See all opportunities"}
            </button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {results.map(o => {
              const cfg = CATEGORY_CONFIG[o.category];
              return (
                <Link key={o.id} to={`/oportunidades/${o.id}`}
                  style={{ textDecoration: "none", display: "block", background: "#fff", borderRadius: 14, border: "1px solid #e5e7eb", padding: "1.25rem", transition: "box-shadow 0.2s, transform 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>

                  {/* Category pill */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ display: "inline-block", background: cfg.bg, color: cfg.color, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 999 }}>
                      {t ? cfg.labelEs : cfg.labelEn}
                    </span>
                    {o.isFree && (
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#16a34a", background: "rgba(22,163,74,0.1)", padding: "3px 10px", borderRadius: 999 }}>
                        {t ? "Gratis" : "Free"}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 style={{ color: "#111827", fontSize: "1rem", fontWeight: 700, margin: "0 0 4px", lineHeight: 1.3 }}>
                    {t ? o.nameEs : o.nameEn}
                  </h3>
                  <p style={{ color: "#6b7280", fontSize: "0.82rem", margin: "0 0 10px" }}>
                    {t ? o.orgEs : o.orgEn}
                  </p>

                  {/* Desc */}
                  <p style={{ color: "#374151", fontSize: "0.88rem", lineHeight: 1.5, margin: "0 0 12px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {t ? o.descEs : o.descEn}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {(o.tags ?? []).slice(0, 4).map(tag => (
                      <span key={tag} style={{ fontSize: "0.72rem", background: "#f3f4f6", color: "#6b7280", padding: "2px 8px", borderRadius: 999 }}>
                        {tag}
                      </span>
                    ))}
                    {(o.ageMin || o.ageMax) && (
                      <span style={{ fontSize: "0.72rem", background: "#f3f4f6", color: "#6b7280", padding: "2px 8px", borderRadius: 999 }}>
                        {o.ageMin && o.ageMax ? `${o.ageMin}–${o.ageMax} años` : o.ageMin ? `${o.ageMin}+ años` : `hasta ${o.ageMax} años`}
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#22577a", fontSize: "0.85rem", fontWeight: 600 }}>
                    {t ? "Ver detalles" : "See details"} <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, #22577a 0%, #1a3f5c 100%)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, margin: "0 0 8px" }}>
          {t ? "¿No encuentras lo que buscas?" : "Can't find what you're looking for?"}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
          {t
            ? "Escríbenos y te ayudamos a encontrar la oportunidad perfecta para ti."
            : "Write to us and we'll help you find the right opportunity."}
        </p>
        <a href="mailto:espanolsinfronteras1@gmail.com"
          style={{ display: "inline-block", background: "#57cc99", color: "#fff", padding: "12px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
          {t ? "Contáctanos" : "Contact us"}
        </a>
      </section>
    </main>
  );
}
