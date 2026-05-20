"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Package, LogIn } from "lucide-react";
import DuckLogo from "@/components/duck-logo";
import MobileMenu from "./mobile-menu";
import { NAV_LINKS, AUTH_LINKS } from "@/lib/utils/nav-links";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* z-30 — sits below the drawer backdrop (z-40) and drawer (z-50) */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-30
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* LEFT: Logo */}
            <Link href="/" aria-label="YellowDuck home">
              <DuckLogo size="md" variant="full" />
            </Link>

            {/* CENTER: Nav links — desktop only */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150
                      ${
                        isActive
                          ? "text-amber-600 dark:text-amber-400"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-amber-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: Auth buttons — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={AUTH_LINKS.login.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LogIn size={14} />
                {AUTH_LINKS.login.label}
              </Link>
              <Link
                href={AUTH_LINKS.cta.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-lg transition-colors shadow-sm shadow-amber-200 dark:shadow-none"
              >
                <Package size={14} />
                {AUTH_LINKS.cta.label}
              </Link>
            </div>

            {/* Mobile hamburger — md:hidden */}
            <button
              className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — rendered outside header to avoid z-index containment */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}