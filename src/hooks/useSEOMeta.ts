import { useEffect } from "react";

const DEFAULT_TITLE = "Español Sin Fronteras | Plataforma Educativa Gratuita";
const DEFAULT_DESC  =
  "Aprende español, finanzas, programación, matemáticas, ciencias, ciberseguridad e inglés completamente gratis. Más de 89 lecciones en 8 materias accesibles desde 72+ países sin registro.";

/**
 * Dynamically updates `<title>` and `<meta name="description">` per page.
 * Optionally injects a JSON-LD script tag (e.g. per-course Course schema).
 * All changes are reverted on unmount.
 */
export function useSEOMeta(
  title: string,
  description?: string,
  jsonLd?: object,
) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta && description) meta.content = description;

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id   = "page-jsonld";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      const m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (m) m.content = DEFAULT_DESC;
      if (script) document.head.removeChild(script);
    };
  }, [title, description, jsonLd]);
}
