import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const t = lang === "es";

  useEffect(() => {
    // Log 404s for debugging — replace with analytics event in production
    console.warn("[404] Page not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5">
      <div className="text-center max-w-md">
        {/* Decorative number */}
        <p
          className="text-[8rem] font-extrabold leading-none text-primary/10 mb-4 select-none"
          aria-hidden="true"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.06em" }}
        >
          404
        </p>

        <h1 className="text-2xl font-extrabold text-foreground mb-2">
          {t ? "Página no encontrada" : "Page not found"}
        </h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
          {t
            ? "La página que buscas no existe o fue movida. Explora nuestros cursos gratuitos mientras tanto."
            : "The page you're looking for doesn't exist or was moved. Explore our free courses in the meantime."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t ? "Ir al inicio" : "Go home"}
          </Link>
          <Link to="/#cursos" className="btn-outline">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            {t ? "Ver cursos" : "See courses"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
