import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface ScrollFAQAccordionProps {
  items: FAQItem[];
  heading: string;
  subheading?: string;
  className?: string;
}

export default function ScrollFAQAccordion({
  items,
  heading,
  subheading,
  className,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || items.length === 0) return;

      // Kill any prior triggers scoped to this container
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === containerRef.current)
        .forEach((t) => t.kill());

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (reducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60px',
          end: `+=${items.length * 280}`,
          scrub: 0.4,
          pin: true,
        },
      });

      items.forEach((item, index) => {
        tl.add(() => {
          setOpenItem(item.id);
        }, index * 2);
      });

      return () => {
        ScrollTrigger.getAll()
          .filter((t) => t.trigger === containerRef.current)
          .forEach((t) => t.kill());
      };
    },
    { dependencies: [items] },
  );

  return (
    <div
      ref={containerRef}
      className={cn("max-w-2xl mx-auto py-16 px-5 md:px-0", className)}
    >
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-foreground mb-3"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}
        >
          {heading}
        </h2>
        {subheading && (
          <p className="text-muted-foreground text-base max-w-sm mx-auto">
            {subheading}
          </p>
        )}
      </div>

      <Accordion.Root
        type="single"
        collapsible
        value={openItem ?? ""}
        onValueChange={(val) => setOpenItem(val || null)}
      >
        {items.map((item) => (
          <Accordion.Item
            value={item.id}
            key={item.id}
            className="mb-3 border border-border rounded-xl overflow-hidden bg-card"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() =>
                  setOpenItem(openItem === item.id ? null : item.id)
                }
              >
                <span
                  className={cn(
                    "font-semibold text-[15px] transition-colors duration-200",
                    openItem === item.id
                      ? "text-primary"
                      : "text-foreground",
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex-shrink-0 transition-colors duration-200",
                    openItem === item.id
                      ? "text-primary"
                      : "text-muted-foreground/50",
                  )}
                >
                  {openItem === item.id ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.32, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
