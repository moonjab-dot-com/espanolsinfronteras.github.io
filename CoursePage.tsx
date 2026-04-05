import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import { ArrowLeft, BookOpen, ChevronRight, icons } from "lucide-react";

interface CoursePageProps {
  lang: "es" | "en";
}

const colorMap: Record<string, { bg: string; light: string; text: string; accent: string; gradient: string }> = {
  blue: { bg: "bg-blue-500", light: "bg-gradient-to-br from-blue-50 to-indigo-50", text: "text-blue-600", accent: "border-blue-200", gradient: "from-blue-500 to-blue-600" },
  green: { bg: "bg-emerald-500", light: "bg-gradient-to-br from-emerald-50 to-teal-50", text: "text-emerald-600", accent: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600" },
  teal: { bg: "bg-teal-500", light: "bg-gradient-to-br from-teal-50 to-cyan-50", text: "text-teal-600", accent: "border-teal-200", gradient: "from-teal-500 to-teal-600" },
};

const CoursePage = ({ lang }: CoursePageProps) => {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[64px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {lang === "es" ? "Curso no encontrado" : "Course not found"}
          </h1>
          <Link to="/" className="btn-primary">
            {lang === "es" ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>
      </div>
    );
  }

  const title = lang === "es" ? course.titleEs : course.titleEn;
  const description = lang === "es" ? course.descriptionEs : course.descriptionEn;
  const color = colorMap[course.colorClass] || colorMap.blue;

  return (
    <div className="pt-[64px]">
      <div className={`${color.light} py-16 px-5 border-b border-border relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
        <div className="section-container relative z-10">
          <Link
            to="/#cursos"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {lang === "es" ? "Todos los cursos" : "All courses"}
          </Link>
          <div className="flex items-center gap-5 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              {(() => { const Icon = icons[course.icon as keyof typeof icons]; return Icon ? <Icon className="w-7 h-7 text-white" strokeWidth={2} /> : null; })()}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{title}</h1>
              <p className="text-muted-foreground text-sm mt-1.5 max-w-md">{description}</p>
            </div>
          </div>
          <div className={`mt-5 inline-flex items-center gap-2 ${color.text} text-sm font-bold bg-card border ${color.accent} px-4 py-2 rounded-full shadow-sm`}>
            <BookOpen className="w-4 h-4" />
            {course.chapters.length} {lang === "es" ? "capítulos" : "chapters"}
          </div>
        </div>
      </div>

      <div className="py-14 px-5">
        <div className="section-container max-w-3xl">
          <h2 className="text-lg font-bold mb-8 text-foreground flex items-center gap-3">
            <div className="w-1 h-6 bg-primary rounded-full" />
            {lang === "es" ? "Capítulos" : "Chapters"}
          </h2>
          <div className="grid gap-3">
            {course.chapters.map((ch) => (
              <div key={ch.id} className="chapter-card group">
                <div className="chapter-number group-hover:bg-primary group-hover:text-white transition-all duration-200">{ch.id}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {ch.title}
                  </h3>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
