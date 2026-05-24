import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
}

/**
 * Thin wrapper around React Router's NavLink that exposes
 * a simpler string-based className API with an activeClassName prop.
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, ...props }, ref) => (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive }) => cn(className, isActive && activeClassName)}
      {...props}
    />
  ),
);

NavLink.displayName = "NavLink";

export { NavLink };
