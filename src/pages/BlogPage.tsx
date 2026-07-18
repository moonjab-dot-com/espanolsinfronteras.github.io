import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { BLOG_POSTS } from "@/data/blog";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "es" ? "es-PE" : "en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPage() {
  const { lang } = useLanguage();
  const t = lang === "es";

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ background: "#080D1C", padding: "64px 0 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(132,204,22,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <img src="/Digital-Nomad-Work-Beach-2--Streamline-Barcelona.png" alt="" aria-hidden="true"
          draggable={false}
          style={{ position: "absolute", right: "4%", bottom: 0, height: "90%", width: "auto", objectFit: "contain", opacity: 0.13, pointerEvents: "none", userSelect: "none", filter: "brightness(2) saturate(0)" }} />
        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "99px", background: "rgba(132,204,22,0.1)", border: "1px solid rgba(132,204,22,0.25)", marginBottom: "20px" }}>
            <BookOpen style={{ width: "13px", height: "13px", color: "#84cc16" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#84cc16" }}>
              {t ? "Blog ESF" : "ESF Blog"}
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            {t ? <>Recursos y guías<br /><span style={{ color: "#84cc16" }}>para tu futuro</span></> : <>Resources and guides<br /><span style={{ color: "#84cc16" }}>for your future</span></>}
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", maxWidth: "460px", lineHeight: 1.7 }}>
            {t
              ? "Artículos sobre becas, oportunidades, idiomas y tecnología — escritos para jóvenes peruanos."
              : "Articles about scholarships, opportunities, languages, and technology — written for young Peruvians."}
          </p>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section style={{ padding: "56px 0 80px" }}>
        <div className="container-page">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {BLOG_POSTS.map((post) => {
              const title = t ? post.titleEs : post.titleEn;
              const excerpt = t ? post.excerptEs : post.excerptEn;
              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
                >
                  <article
                    style={{
                      background: "#fff", borderRadius: "18px", padding: "28px",
                      border: "2px solid #e5e7eb", display: "flex", flexDirection: "column", gap: "16px",
                      height: "100%", transition: "transform 0.15s, box-shadow 0.15s",
                      boxShadow: "3px 3px 0 #e5e7eb",
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `5px 5px 0 ${post.categoryColor}40`; el.style.borderColor = `${post.categoryColor}60`; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "3px 3px 0 #e5e7eb"; el.style.borderColor = "#e5e7eb"; }}
                  >
                    {/* Category + reading time */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: post.categoryColor, padding: "3px 10px", borderRadius: "6px", background: `${post.categoryColor}15` }}>
                        {post.category}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#9ca3af", fontWeight: 500 }}>
                        <Clock style={{ width: "11px", height: "11px" }} />
                        {post.readingMinutes} {t ? "min" : "min"}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, letterSpacing: "-0.01em", margin: 0 }}>
                      {title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.65, margin: 0, flex: 1 }}>
                      {excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #f3f4f6" }}>
                      <span style={{ fontSize: "12px", color: "#9ca3af" }}>{formatDate(post.publishedAt, lang)}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 700, color: post.categoryColor }}>
                        {t ? "Leer" : "Read"} <ArrowRight style={{ width: "13px", height: "13px" }} />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
