import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { courses } from "@/data/courses";
import { ArrowLeft, BookOpen, ChevronRight, ExternalLink } from "lucide-react";
import { courseIconMap } from "@/lib/course-icons";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns a safe href for a chapter link.
 * External URLs (http/https) are returned as-is.
 * Relative paths get a leading "/" and URI-encoded.
 */
function getChapterHref(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  return encodeURI(href.startsWith("/") ? href : `/${href}`);
}

/**
 * Returns true for external URLs (Google Drive, etc.)
 */
const isExternal = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

// ─── Color map ────────────────────────────────────────────────────────────────

const COLOR_MAP = {
  blue: {
    header:  "bg-gradient-to-br from-blue-50 to-indigo-50",
    icon:    "from-blue-500 to-blue-600",
    text:    "text-blue-600",
    badge:   "bg-blue-50 text-blue-700 border-blue-200",
    accent:  "hsl(221,83%,53%)",
  },
  green: {
    header:  "bg-gradient-to-br from-emerald-50 to-teal-50",
    icon:    "from-emerald-500 to-emerald-600",
    text:    "text-emerald-600",
    badge:   "bg-emerald-50 text-emerald-700 border-emerald-200",
    accent:  "hsl(156,64%,38%)",
  },
  teal: {
    header:  "bg-gradient-to-br from-teal-50 to-cyan-50",
    icon:    "from-teal-500 to-teal-600",
    text:    "text-teal-600",
    badge:   "bg-teal-50 text-teal-700 border-teal-200",
    accent:  "hsl(172,66%,35%)",
  },
  violet: {
    header:  "bg-gradient-to-br from-violet-50 to-purple-50",
    icon:    "from-violet-500 to-violet-600",
    text:    "text-violet-600",
    badge:   "bg-violet-50 text-violet-700 border-violet-200",
    accent:  "hsl(262,83%,58%)",
  },
  amber: {
    header:  "bg-gradient-to-br from-amber-50 to-orange-50",
    icon:    "from-amber-500 to-amber-600",
    text:    "text-amber-600",
    badge:   "bg-amber-50 text-amber-700 border-amber-200",
    accent:  "hsl(38,92%,50%)",
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const t = lang === "es";

  const course = courses.find((c) => c.slug === slug);

  // ── 404 state ────────────────────────────────────────────────────────────
  if (!course) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center max-w-sm">
          <p className="text-6xl font-extrabold text-primary/20 mb-4" aria-hidden="true">404</p>
          <h1 className="text-xl font-bold text-foreground mb-2">
            {t ? "Curso no encontrado" : "Course not found"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {t
              ? "El curso que buscas no existe o fue movido."
              : "The course you're looking for doesn't exist or was moved."}
          </p>
          <Link to="/" className="btn-primary">
            {t ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>
      </div>
    );
  }

  const title       = t ? course.titleEs       : course.titleEn;
  const description = t ? course.descriptionEs : course.descriptionEn;
  const color       = COLOR_MAP[course.colorClass] ?? COLOR_MAP.blue;
  const Icon        = courseIconMap[course.icon];

  return (
    <article aria-label={title}>
      {/* ── Course header ───────────────────────────────────────────────── */}
      <header className={`${color.header} border-b border-border py-14 px-5 relative overflow-hidden`}>
        {/* Subtle corner decoration */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-bl-full opacity-[0.04]"
          style={{ background: color.accent }}
          aria-hidden="true"
        />

        <div className="container-page relative z-10">
          {/* Breadcrumb */}
          <nav aria-label={t ? "Navegación de migas" : "Breadcrumb"} className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t ? "Inicio" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
              </li>
              <li>
                <Link
                  to="/#cursos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t ? "Cursos" : "Courses"}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          {/* Back link (visible on mobile) */}
          <Link
            to="/#cursos"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group md:hidden"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
            {t ? "Todos los cursos" : "All courses"}
          </Link>

          {/* Course meta */}
          <div className="flex items-start gap-5">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${color.icon} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
              aria-hidden="true"
            >
              {Icon && <Icon className="w-7 h-7 text-white" strokeWidth={2} />}
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-1.5">
                {title}
              </h1>
              <p className="text-muted-foreground text-[15px] max-w-lg mb-4">
                {description}
              </p>
              <span className={`badge-pill ${color.badge}`}>
                <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                {course.chapters.length} {t ? "capítulos" : "chapters"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Chapter list ────────────────────────────────────────────────── */}
      <section className="py-14 px-5" aria-labelledby="chapters-heading">
        <div className="container-page max-w-3xl">
          <h2
            id="chapters-heading"
            className="text-base font-bold text-foreground flex items-center gap-3 mb-6"
          >
            <span
              className="w-1 h-5 rounded-full"
              style={{ background: color.accent }}
              aria-hidden="true"
            />
            {t ? "Capítulos del curso" : "Course chapters"}
          </h2>

          <ol className="grid gap-2.5" aria-label={t ? `Capítulos de ${title}` : `Chapters of ${title}`}>
            {course.chapters.map((ch) => {
              const href = getChapterHref(ch.href);
              const external = isExternal(ch.href);

              return (
                <li key={ch.id}>
                  <a
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="chapter-card"
                    aria-label={`${t ? "Capítulo" : "Chapter"} ${ch.id}: ${ch.title}${external ? (t ? " (abre en nueva pestaña)" : " (opens in new tab)") : ""}`}
                  >
                    <span className="chapter-number" aria-hidden="true">
                      {ch.id}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="font-semibold text-foreground text-sm">
                        {ch.title}
                      </span>
                    </span>
                    {external ? (
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary flex-shrink-0 transition-colors" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 transition-all group-hover:text-primary group-hover:translate-x-0.5" aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Back CTA ────────────────────────────────────────────────────── */}
      <div className="px-5 pb-16">
        <div className="container-page max-w-3xl">
          <Link
            to="/#cursos"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
            {t ? "Ver todos los cursos" : "See all courses"}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CoursePage;
