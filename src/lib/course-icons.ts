/**
 * Explicit icon registry for course cards.
 *
 * Only importing the 9 icons actually used avoids pulling in the entire
 * lucide-react bundle (1000+ icons → ~700KB). This gives a ~95% reduction.
 */
import {
  Calculator,
  Code,
  DollarSign,
  FlaskConical,
  Languages,
  MessageCircle,
  Shield,
  Sun,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const courseIconMap: Record<string, LucideIcon> = {
  Calculator,
  Code,
  DollarSign,
  FlaskConical,
  Languages,
  MessageCircle,
  Shield,
  Sun,
  TrendingUp,
};
