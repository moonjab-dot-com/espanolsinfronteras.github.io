import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { BLOG_POSTS } from "@/data/blog";
import { useSEO } from "@/hooks/use-seo";
import { ArrowLeft, Clock, BookOpen, Tag } from "lucide-react";

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "es" ? "es-PE" : "en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const t = lang === "es";

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useSEO({
    title: post
      ? `${t ? post.titleEs : post.titleEn} | Español Sin Fronteras`
      : "Blog | Español Sin Fronteras",
    description: post
      ? (t ? post.excerptEs : post.excerptEn)
      : "Recursos y guías para jóvenes peruanos — Español Sin Fronteras.",
    canonical: post ? `https://espanolsinfronteras.org/blog/${post.slug}` : undefined,
  });

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-5">
        <p className="text-2xl font-bold">{t ? "Artículo no encontrado" : "Article not found"}</p>
        <Link to="/blog" className="btn-primary">{t ? "Ver todos los artículos" : "See all articles"}</Link>
      </div>
    );
  }

  const title   = t ? post.titleEs   : post.titleEn;
  const content = t ? post.contentEs : post.contentEn;

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ background: "#080D1C", padding: "48px 0 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
        <div className="container-page" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
          {/* Back */}
          <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 600, textDecoration: "none", marginBottom: "24px", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <ArrowLeft style={{ width: "14px", height: "14px" }} /> {t ? "Todos los artículos" : "All articles"}
          </Link>

          {/* Category */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 14px", borderRadius: "99px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", marginBottom: "18px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: post.categoryColor }}>{post.category}</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {title}
          </h1>

          {/* Meta */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
              <BookOpen style={{ width: "13px", height: "13px" }} />
              {formatDate(post.publishedAt, lang)}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
              <Clock style={{ width: "13px", height: "13px" }} />
              {post.readingMinutes} {t ? "min de lectura" : "min read"}
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="container-page" style={{ paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="grid-opp-detail">

          {/* Article body */}
          <article
            style={{ background: "#fff", borderRadius: "20px", padding: "clamp(24px, 5vw, 44px)", border: "2px solid #e5e7eb", lineHeight: 1.8 }}
            className="blog-content"
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "80px" }}>

            {/* Tags */}
            <div style={{ background: "#fff", borderRadius: "18px", padding: "22px", border: "2px solid #e5e7eb" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
                <Tag style={{ width: "14px", height: "14px", color: "#22577a" }} />
                <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#6b7280" }}>Tags</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{ padding: "3px 10px", borderRadius: "6px", background: "#f3f4f6", border: "1px solid #e5e7eb", fontSize: "12px", fontWeight: 500, color: "#6b7280" }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA — Free courses */}
            <div style={{ background: "#080D1C", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                {t ? "Español Sin Fronteras" : "Español Sin Fronteras"}
              </p>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0 }}>
                {t ? "277+ lecciones gratuitas. Sin registro. Sin barreras." : "277+ free lessons. No sign-up. No barriers."}
              </p>
              <Link to="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "11px 18px", borderRadius: "10px", background: "#84cc16", color: "#080D1C", fontSize: "13px", fontWeight: 800, textDecoration: "none", letterSpacing: "0.02em", transition: "opacity 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {t ? "Ver cursos gratis" : "See free courses"} <ArrowRight style={{ width: "13px", height: "13px" }} />
              </Link>
            </div>

            {/* Opportunities CTA */}
            <Link to="/oportunidades" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "12px", borderRadius: "12px", border: "2px solid #e5e7eb", color: "#374151", fontSize: "13px", fontWeight: 600, textDecoration: "none", background: "#fff", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#84cc16"; e.currentTarget.style.color = "#080D1C"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#374151"; }}
            >
              {t ? "Ver oportunidades →" : "See opportunities →"}
            </Link>
          </aside>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: "56px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", marginBottom: "24px", letterSpacing: "-0.01em" }}>
              {t ? "Más artículos" : "More articles"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "18px" }}>
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#fff", borderRadius: "16px", padding: "22px", border: "2px solid #e5e7eb", display: "flex", flexDirection: "column", gap: "10px", transition: "transform 0.15s, box-shadow 0.15s", boxShadow: "2px 2px 0 #e5e7eb" }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translate(-2px,-2px)"; el.style.boxShadow = `4px 4px 0 ${rp.categoryColor}40`; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "2px 2px 0 #e5e7eb"; }}
                  >
                    <span style={{ fontSize: "11px", fontWeight: 700, color: rp.categoryColor, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>{rp.category}</span>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, margin: 0 }}>
                      {t ? rp.titleEs : rp.titleEn}
                    </p>
                    <span style={{ fontSize: "12px", color: "#9ca3af" }}>{rp.readingMinutes} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Inline so we avoid a separate import ────────────────────────────────────
function ArrowRight({ style }: { style?: React.CSSProperties }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
