import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/data/courses";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  href: string;
  labelEs: string;
  labelEn: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { href: "/#cursos",      labelEs: "Cursos",      labelEn: "Courses"  },
  { href: "/#historia",    labelEs: "Historia",    labelEn: "About"    },
  { href: "/#galeria",     labelEs: "Galería",     labelEn: "Gallery"  },
  { href: "/#faq",         labelEs: "FAQ",         labelEn: "FAQ"      },
  { href: "/#contacto",    labelEs: "Contacto",    labelEn: "Contact"  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  const { lang, toggleLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Add subtle shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabel = (item: NavItem) => lang === "es" ? item.labelEs : item.labelEn;

  return (
    <header
      className="nav-root"
      style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : undefined }}
      role="banner"
    >
      <div className="container-page w-full flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Español Sin Fronteras — Inicio"
        >
          <img
            src="/esf-logo.png"
            alt="Español Sin Fronteras"
            className="h-8 w-auto group-hover:brightness-110 transition-all duration-200"
            width={32}
            height={32}
          />
          <span className="hidden sm:block text-white/90 font-semibold text-sm tracking-tight group-hover:text-white transition-colors">
            Español Sin Fronteras
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-[13px] font-medium text-white/55 hover:text-white rounded-lg hover:bg-white/6 transition-all duration-150"
            >
              {navLabel(item)}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/12 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/8 transition-all duration-150"
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/8 transition-all"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[60px] left-0 right-0 bg-[hsl(222,47%,7%)] border-t border-white/6 shadow-2xl z-50 animate-fade-in"
        >
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-3 text-sm font-medium text-white/65 hover:text-white hover:bg-white/6 rounded-xl transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {navLabel(item)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { lang } = useLanguage();
  const t = lang === "es";
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[hsl(222,47%,7%)] border-t border-white/6 py-12 px-5"
      role="contentinfo"
    >
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" aria-label="Español Sin Fronteras — Inicio">
              <img
                src="/esf-logo.png"
                alt="Español Sin Fronteras"
                className="h-7 w-auto opacity-75 hover:opacity-100 transition-opacity"
                width={28}
                height={28}
              />
            </Link>
            <p className="text-white/30 text-xs max-w-[220px] leading-relaxed">
              {t
                ? "Educación gratuita para el mundo. Sin registro, sin barreras."
                : "Free education for the world. No sign-up, no barriers."}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-white/25 text-[11px] font-semibold uppercase tracking-[0.15em]">
              {t ? "Comunidad" : "Community"}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-xs font-medium transition-colors"
                  aria-label={`${link.name} — ${link.handle}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            © {year} Español Sin Fronteras. {t ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <p className="text-white/15 text-xs">
            {t ? "Hecho con ❤️ desde Lima, Perú" : "Made with ❤️ from Lima, Peru"}
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Nav />
    <main className="flex-1 pt-[60px]" id="main-content" tabIndex={-1}>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
