/**
 * BrandScroller — infinite marquee for partner logos / pills.
 *
 * Usage:
 *   <BrandScroller items={partners} lang="es" direction="forward" duration={40} />
 *
 * Accessibility:
 *   - Wrapping <ul> is role="list" with aria-label
 *   - Animation pauses on hover (via CSS named-group) and on prefers-reduced-motion
 *   - Duplicated items are aria-hidden to avoid double-announcing to screen readers
 */

import { useMemo } from "react";
import type { Partner } from "@/data/courses";
import {
  FiDollarSign,
  FiUsers,
  FiBook,
  FiGlobe,
  FiTrendingUp,
  FiPieChart,
  FiCode,
  FiAward,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// ─── Category → icon map ──────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, IconType> = {
  finance:    FiDollarSign,
  youth:      FiUsers,
  education:  FiBook,
  language:   FiGlobe,
  growth:     FiTrendingUp,
  economics:  FiPieChart,
  technology: FiCode,
  fellowship: FiAward,
};

// ─── PartnerPill ──────────────────────────────────────────────────────────────

interface PartnerPillProps {
  partner: Partner;
  lang: string;
  /** When true the pill is decorative (aria-hidden) — used for the duplicate set */
  decorative?: boolean;
}

function PartnerPill({ partner, lang, decorative = false }: PartnerPillProps) {
  const Icon = CATEGORY_ICONS[partner.category] ?? FiBook;
  const tagline = lang === "es" ? partner.taglineEs : partner.taglineEn;

  return (
    <li
      className={[
        "inline-flex shrink-0 items-center gap-3 px-4 py-2.5",
        "rounded-2xl border bg-white shadow-sm",
        "hover:shadow-md hover:-translate-y-0.5",
        "transition-all duration-200 cursor-default select-none",
        "whitespace-nowrap",
      ].join(" ")}
      aria-hidden={decorative ? "true" : undefined}
    >
      {/* Colored icon badge */}
      <span
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center",
          "rounded-xl border text-sm font-extrabold",
          partner.color,
        ].join(" ")}
        aria-hidden="true"
      >
        <Icon className="h-3.5 w-3.5" />
      </span>

      {/* Text */}
      <span className="flex flex-col leading-tight min-w-0">
        <span className="text-[13px] font-bold text-foreground">
          {partner.name}
        </span>
        <span className="text-[11px] text-muted-foreground">
          {tagline}
        </span>
      </span>
    </li>
  );
}

// ─── BrandScroller ────────────────────────────────────────────────────────────

export interface BrandScrollerProps {
  items: Partner[];
  lang: string;
  direction?: "forward" | "reverse";
  /** Animation cycle duration in seconds */
  duration?: number;
  className?: string;
  label?: string;
}

export function BrandScroller({
  items,
  lang,
  direction = "forward",
  duration = 36,
  className = "",
  label,
}: BrandScrollerProps) {
  // Memoise the deduplicated list so we don't re-create arrays on each render
  const visibleItems = useMemo(() => items, [items]);

  const animClass =
    direction === "forward" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    /*
     * Outer wrapper:
     *   - overflow-hidden clips the scrolling track
     *   - mask-image fades the left/right edges
     *   - group/scroller enables the CSS hover-pause selector
     */
    <div
      className={[
        "relative overflow-hidden",
        // Edge fade via CSS mask (webkit prefix for Safari)
        "[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]",
        "[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]",
        "group/scroller",
        className,
      ].join(" ")}
      aria-label={label}
    >
      {/*
       * Track: two identical sets of pills placed end-to-end.
       * translateX(0 → -50%) moves exactly one full set, creating a seamless loop.
       * hover/scroller:paused uses Tailwind's named-group variant.
       */}
      <ul
        className={[
          "flex w-max gap-3",
          animClass,
          // Pause on hover — named group variant
          "group-hover/scroller:[animation-play-state:paused]",
        ].join(" ")}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        role="list"
      >
        {/* First set — visible, announced */}
        {visibleItems.map((p) => (
          <PartnerPill key={p.name} partner={p} lang={lang} />
        ))}
        {/* Second set — decorative duplicate for seamless loop */}
        {visibleItems.map((p) => (
          <PartnerPill key={`dup-${p.name}`} partner={p} lang={lang} decorative />
        ))}
      </ul>
    </div>
  );
}

export default BrandScroller;
