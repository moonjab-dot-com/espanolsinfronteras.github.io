import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { courses, testimonials, faqItems, socialLinks } from "@/data/courses";
import owlLogo from "@/assets/owl-logo.png";
import {
  BookOpen, Globe, Layers, ChevronRight, Mail, ExternalLink,
  ChevronDown, BookText, ArrowRight, Quote, Heart, Star,
  Sparkles, GraduationCap, icons,
} from "lucide-react";

interface HomePageProps {
  lang: "es" | "en";
}

const courseColors = [
  { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", gradient: "from-blue-500 to-blue-600", ring: "ring-blue-200" },
  { bg: "bg-emerald-500", light: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", gradient: "from-emerald-500 to-emerald-600", ring: "ring-emerald-200" },
  { bg: "bg-violet-500", light: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", gradient: "from-violet-500 to-violet-600", ring: "ring-violet-200" },
  { bg: "bg-amber-500", light: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", gradient: "from-amber-500 to-amber-600", ring: "ring-amber-200" },
  { bg: "bg-teal-500", light: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", gradient: "from-teal-500 to-teal-600", ring: "ring-teal-200" },
  { bg: "bg-rose-500", light: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", gradient: "from-rose-500 to-rose-600", ring: "ring-rose-200" },
  { bg: "bg-indigo-500", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-indigo-600", ring: "ring-indigo-200" },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const HomePage = ({ lang }: HomePageProps) => {
  const t = lang === "es";
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO - Dark, bold, unique ===== */}
      <section className="hero-section min-h-[100vh] flex items-center px-5 pt-[64px]" id="inicio">
        {/* Animated blobs */}
        <div className="hero-blob w-[500px] h-[500px] bg-blue-500 -top-40 -right-40 animate-blob" />
        <div className="hero-blob w-[400px] h-[400px] bg-emerald-400 bottom-0 left-[-10%] animate-blob" style={{ animationDelay: "-3s" }} />
        <div className="hero-blob w-[300px] h-[300px] bg-violet-500 top-1/2 right-1/4 animate-blob" style={{ animationDelay: "-5s" }} />

        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t ? "100% Gratuito · 65+ países" : "100% Free · 65+ countries"}
              </div>

              <h1 className="animate-fade-up animate-delay-100 text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] mb-6 tracking-tight text-white">
                {t ? "Aprender no tiene" : "Learning has no"}
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                  {t ? "fronteras" : "borders"}
                </span>
              </h1>

              <p className="animate-fade-up animate-delay-200 text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
                {t
                  ? "Plataforma educativa gratuita con más de 70 lecciones en español, finanzas, programación, matemáticas, ciberseguridad, ciencias e inglés."
                  : "Free educational platform with 70+ lessons in Spanish, finance, programming, math, cybersecurity, science, and English."}
              </p>

              <div className="animate-fade-up animate-delay-300 flex flex-col sm:flex-row gap-4">
                <a href="#cursos" className="btn-primary">
                  {t ? "Explorar cursos" : "Explore courses"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="#historia" className="btn-outline-light">
                  {t ? "Nuestra historia" : "Our story"}
                </a>
              </div>

              {/* Mini stats inline */}
              <div className="animate-fade-up animate-delay-400 flex gap-8 mt-12">
                {[
                  { v: "70+", l: t ? "Lecciones" : "Lessons" },
                  { v: "65+", l: t ? "Países" : "Countries" },
                  { v: "7", l: t ? "Materias" : "Subjects" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-extrabold text-white">{s.v}</div>
                    <div className="text-xs text-white/40 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Owl mascot with floating elements */}
            <div className="hidden lg:flex justify-center relative">
              <div className="relative">
                {/* Glow behind owl */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl scale-125" />
                <img
                  src={owlLogo}
                  alt="ESF Owl"
                  className="relative z-10 w-64 h-64 object-contain drop-shadow-2xl animate-float-slow"
                />
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-float" style={{ animationDelay: "-2s" }}>
                  <Star className="w-3 h-3 inline mr-1" />
                  {t ? "Gratis" : "Free"}
                </div>
                <div className="absolute bottom-4 -left-8 bg-white/10 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg animate-float" style={{ animationDelay: "-4s" }}>
                  <GraduationCap className="w-3 h-3 inline mr-1" />
                  70+ {t ? "lecciones" : "lessons"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 80V30C240 0 480 60 720 40C960 20 1200 60 1440 30V80H0Z" fill="white" /></svg>
        </div>
      </section>

      {/* ===== COURSES ===== */}
      <section className="py-24 px-5" id="cursos">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-label">
                <BookOpen className="w-3.5 h-3.5" />
                {t ? "Cursos gratuitos" : "Free courses"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                {t ? "Elige tu camino de aprendizaje" : "Choose your learning path"}
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                {t ? "7 materias, más de 70 capítulos. Todo 100% gratuito." : "7 subjects, 70+ chapters. Everything 100% free."}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {courses.map((course, i) => {
              const color = courseColors[i % courseColors.length];
              return (
                <Reveal key={course.slug} delay={i * 80}>
                  <Link to={`/curso/${course.slug}`} className="group block h-full">
                    <div className={`card-course h-full flex flex-col hover:ring-2 ${color.ring} hover:ring-offset-2 transition-all`}>
                      <div className={`w-14 h-14 bg-gradient-to-br ${color.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {(() => { const Icon = icons[course.icon as keyof typeof icons]; return Icon ? <Icon className="w-6 h-6 text-white" strokeWidth={2.5} /> : null; })()}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {t ? course.titleEs : course.titleEn}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {t ? course.descriptionEs : course.descriptionEn}
                      </p>
                      <div className={`flex items-center gap-1.5 text-xs font-bold ${color.text} mt-auto pt-4 border-t border-border/50`}>
                        {course.chapters.length} {t ? "capítulos" : "chapters"}
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HISTORIA ===== */}
      <section className="py-24 px-5 bg-secondary/40" id="historia">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <span className="section-label">
                  <Heart className="w-3.5 h-3.5" />
                  {t ? "Nuestra misión" : "Our mission"}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {t ? "La historia detrás de ESF" : "The story behind ESF"}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="w-full h-full bg-gradient-to-bl from-primary/8 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24">
                  <div className="w-full h-full bg-gradient-to-tr from-accent/8 to-transparent" />
                </div>

                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 border border-primary/10 shadow-sm">
                    <img src={owlLogo} alt="ESF" className="w-11 h-11 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Español Sin Fronteras</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                      {t ? "Fundado en 2024" : "Founded in 2024"}
                    </p>
                  </div>
                </div>
                <div className="text-muted-foreground leading-[1.85] space-y-4 text-[15px] relative z-10">
                  {t ? (
                    <>
                      <p>Salvador, convencido de que aprender no debería costar dinero, conoció a un niño que no podía estudiar por tener que trabajar para ayudar en su hogar. Esto lo inspiró a crear <strong className="text-foreground">"Español Sin Fronteras"</strong>, una plataforma 100% gratuita.</p>
                      <p>Aquí puedes aprender español, finanzas, programación, matemáticas y ciencias con más de 70 capítulos llenos de contenido. Su misión es simple: <strong className="text-foreground">que nadie se quede sin estudiar</strong> por falta de tiempo o dinero.</p>
                      <p>Desde su lanzamiento, la plataforma ha sido utilizada en más de <strong className="text-foreground">65 países</strong>, demostrando que el deseo de aprender no tiene fronteras.</p>
                    </>
                  ) : (
                    <>
                      <p>Salvador, convinced that learning shouldn't cost money, met a child who couldn't study because he had to work to help at home. This inspired him to create <strong className="text-foreground">"Español Sin Fronteras,"</strong> a 100% free platform.</p>
                      <p>Here you can learn Spanish, finance, programming, math, and science with 70+ chapters full of content. The mission is simple: <strong className="text-foreground">no one should miss out on education</strong> due to lack of time or money.</p>
                      <p>Since its launch, the platform has been used in <strong className="text-foreground">65+ countries</strong>, proving that the desire to learn has no borders.</p>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MI CUENTO ===== */}
      <section className="py-24 px-5" id="micuento">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <span className="section-label">
                  <BookText className="w-3.5 h-3.5" />
                  {t ? "Lectura gratuita" : "Free reading"}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                  {t ? "Mi Cuento" : "My Story"}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 rounded-3xl p-8 md:p-12 border border-border shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="relative z-10">
                  {t ? (
                    <>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <BookText className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">El Gran Sueño de Cris</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        ¡Te encantará <strong className="text-foreground">"El Gran Sueño de Cris"</strong>! Un niño apasionado por el tenis enfrenta desafíos para lograr su meta. ¡Una aventura llena de emoción e inspiración!
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <BookText className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Cris's Big Dream</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        You'll love <strong className="text-foreground">"Cris's Big Dream"</strong>! A boy passionate about tennis faces challenges to achieve his goal. An adventure full of excitement and inspiration!
                      </p>
                    </>
                  )}
                  <a
                    href="https://drive.google.com/file/d/1om4ew8uDccRSxu-CHqDueuWVKJPk-dX_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {t ? "Descargar cuento" : "Download story"}
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-5 bg-secondary/40" id="faq">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-label">
                <Sparkles className="w-3.5 h-3.5" />
                {t ? "Dudas" : "Help"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                {t ? "Preguntas Frecuentes" : "FAQ"}
              </h2>
            </div>
          </Reveal>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqItems.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-shadow hover:shadow-md">
                  <button
                    className="w-full px-6 py-5 text-left font-semibold text-foreground flex justify-between items-center text-[15px] gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{t ? item.questionEs : item.questionEn}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? "bg-primary text-white rotate-180" : "bg-secondary text-muted-foreground"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                        {t ? item.answerEs : item.answerEn}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-5" id="comentarios">
        <div className="section-container">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-label">
                <Star className="w-3.5 h-3.5" />
                {t ? "Testimonios" : "Testimonials"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                {t ? "Voces de nuestra comunidad" : "Voices from our community"}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="max-w-xl mx-auto">
              <div className="bg-card border border-border rounded-3xl p-10 md:p-12 text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full" />
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-8 relative z-10">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground text-lg leading-[1.8] mb-8 min-h-[80px] relative z-10 font-medium">
                  "{testimonials[currentTestimonial]}"
                </p>
                <div className="flex justify-center gap-2 relative z-10">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${i === currentTestimonial ? "bg-primary w-10" : "bg-border w-2.5 hover:bg-primary/30"}`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-24 px-5" id="contacto">
        <div className="section-container">
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <div className="bg-[hsl(222,47%,11%)] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                {/* Blobs */}
                <div className="absolute w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -top-20 -left-20" />
                <div className="absolute w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -bottom-10 -right-10" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                    {t ? "¿Hablamos?" : "Let's talk?"}
                  </h2>
                  <p className="text-white/50 mb-8 max-w-sm mx-auto leading-relaxed">
                    {t
                      ? "¿Tienes preguntas o sugerencias? ¡Nos encantaría escucharte!"
                      : "Have questions or suggestions? We'd love to hear from you!"}
                  </p>
                  <a href="mailto:espanolsinfronteras1@gmail.com" className="btn-accent">
                    <Mail className="w-4 h-4 mr-2" />
                    {t ? "Enviar correo" : "Send email"}
                  </a>
                  <div className="flex justify-center gap-6 mt-10 flex-wrap">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-all text-sm font-medium hover:-translate-y-0.5"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
