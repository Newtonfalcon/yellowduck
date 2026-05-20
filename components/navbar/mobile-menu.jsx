"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Package, LogIn } from "lucide-react";
import DuckLogo from "@/components/duck-logo";
import { NAV_LINKS, AUTH_LINKS } from "@/lib/utils/nav-links";

/**
 * MobileMenu — slide-out drawer for mobile navigation
 * Props:
 *  isOpen    — boolean
 *  onClose   — () => void
 *  pathname  — current route string (for active state)
 *
 * Z-index ladder:
 *  Navbar header  → z-30
 *  Backdrop       → z-40  (covers page + navbar)
 *  Drawer panel   → z-50  (sits on top of backdrop)
 */
export default function MobileMenu({ isOpen, onClose, pathname = "/" }) {
  // Lock body scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────────
          z-40 → above navbar (z-30), below drawer (z-50)
          pointer-events-none when closed so nothing is blocked
      ──────────────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── Drawer panel ─────────────────────────────────────
          z-50 → highest layer, fully interactive
          Tailwind's z-scale: z-10 / z-20 / z-30 / z-40 / z-50
          z-60 does NOT exist by default — that was the bug.
      ──────────────────────────────────────────────────────── */}
      <aside
        aria-label="Mobile navigation"
        className={`
          fixed top-0 left-0 z-50 h-full w-72
          bg-white dark:bg-slate-900
          border-r border-slate-200 dark:border-slate-800
          shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
          <DuckLogo size="sm" variant="full" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  transition-colors duration-150
                  ${
                    isActive
                      ? "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Auth CTAs */}
        <div className="px-4 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <Link
            href={AUTH_LINKS.login.href}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <LogIn size={15} />
            {AUTH_LINKS.login.label}
          </Link>
          <Link
            href={AUTH_LINKS.cta.href}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-sm font-semibold text-slate-900 transition-colors shadow-sm"
          >
            <Package size={15} />
            {AUTH_LINKS.cta.label}
          </Link>
        </div>
      </aside>
    </>
  );
}