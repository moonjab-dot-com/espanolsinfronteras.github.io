import { useEffect } from "react";

const BASE_URL = "https://espanolsinfronteras.org";

const DEFAULT_TITLE     = "Español Sin Fronteras | Plataforma Educativa Gratuita";
const DEFAULT_DESC      = "Aprende español, finanzas, programación, matemáticas, ciencias, ciberseguridad e inglés completamente gratis. Más de 89 lecciones en 8 materias accesibles desde 72+ países sin registro.";
const DEFAULT_OG_DESC   = "Aprende español, finanzas, programación, matemáticas y más completamente gratis. 89+ lecciones en 8 materias desde 72+ países.";
const DEFAULT_CANONICAL = `${BASE_URL}/`;

/**
 * Dynamically updates title, meta description, canonical URL, and Open Graph
 * tags per page. Optionally injects a Course JSON-LD script. All changes revert
 * on unmount so the homepage defaults are always restored correctly.
 */
export function useSEOMeta(
  title: string,
  description?: string,
  jsonLd?: object,
) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${window.location.pathname}`;

    document.title = title;

    const sel = <T extends Element>(q: string) => document.querySelector<T>(q);

    const metaDesc  = sel<HTMLMetaElement>('meta[name="description"]');
    const canonical = sel<HTMLLinkElement>('link[rel="canonical"]');
    const ogTitle   = sel<HTMLMetaElement>('meta[property="og:title"]');
    const ogDesc    = sel<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl     = sel<HTMLMetaElement>('meta[property="og:url"]');

    if (metaDesc  && description) metaDesc.content  = description;
    if (canonical)                canonical.href     = canonicalUrl;
    if (ogTitle)                  ogTitle.content    = title;
    if (ogDesc    && description) ogDesc.content     = description;
    if (ogUrl)                    ogUrl.content      = canonicalUrl;

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
      const m  = sel<HTMLMetaElement>('meta[name="description"]');
      const c  = sel<HTMLLinkElement>('link[rel="canonical"]');
      const ot = sel<HTMLMetaElement>('meta[property="og:title"]');
      const od = sel<HTMLMetaElement>('meta[property="og:description"]');
      const ou = sel<HTMLMetaElement>('meta[property="og:url"]');
      if (m)  m.content  = DEFAULT_DESC;
      if (c)  c.href     = DEFAULT_CANONICAL;
      if (ot) ot.content = DEFAULT_TITLE;
      if (od) od.content = DEFAULT_OG_DESC;
      if (ou) ou.content = DEFAULT_CANONICAL;
      if (script) document.head.removeChild(script);
    };
  }, [title, description, jsonLd]);
}
