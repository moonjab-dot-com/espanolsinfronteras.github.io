import { useState } from "react";
import { Link } from "react-router-dom";
import esfLogo from "@/assets/esf-logo.png";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  lang: "es" | "en";
  onToggleLang: () => void;
}

const navLinksEs = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#historia", label: "Historia" },
  { href: "/#micuento", label: "Mi Cuento" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#comentarios", label: "Comentarios" },
  { href: "/#contacto", label: "Contacto" },
];

const navLinksEn = [
  { href: "/#inicio", label: "Home" },
  { href: "/#cursos", label: "Courses" },
  { href: "/#historia", label: "About" },
  { href: "/#micuento", label: "My Story" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#comentarios", label: "Comments" },
  { href: "/#contacto", label: "Contact" },
];

const Layout = ({ children, lang, onToggleLang }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = lang === "es" ? navLinksEs : navLinksEn;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="nav-glass">
        <div className="section-container flex items-center justify-between h-[64px]">
          <Link to="/" className="flex items-center group">
            <img src={esfLogo} alt="Español Sin Fronteras" className="h-9 w-auto group-hover:brightness-110 transition-all" />
          </Link>

          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors rounded-xl hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-[64px] left-0 right-0 bg-[hsl(222,47%,11%)] md:bg-transparent p-4 md:p-0 gap-0.5 md:gap-0 items-start md:items-center shadow-2xl md:shadow-none z-50 border-b border-white/5 md:border-0`}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-3 py-2 text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="md:ml-2 mt-2 md:mt-0">
              <button
                onClick={onToggleLang}
                className="bg-white/[0.08] text-white/80 font-bold text-xs px-4 py-1.5 rounded-full hover:bg-white/15 hover:text-white transition-all border border-white/10"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-[hsl(222,47%,11%)] py-10 px-5 border-t border-white/5">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={esfLogo} alt="Español Sin Fronteras" className="h-7 w-auto opacity-60" />
          <p className="text-xs text-white/25">
            {lang === "es"
              ? "© 2025 Español Sin Fronteras. Todos los derechos reservados."
              : "© 2025 Español Sin Fronteras. All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
