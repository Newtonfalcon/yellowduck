import Link from "next/link";
import { TwitterIcon, LinkedinIcon, InstagramIcon, GithubIcon } from "./social-icons"; 
import {
 
  MapPin,
  Mail,
  Phone,
  Search,
} from "lucide-react";
import DuckLogo from "@/components/duck-logo";
import { COMPANY, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/utils/site-data";

const SOCIAL_ICONS = { Twitter: TwitterIcon, Linkedin: LinkedinIcon, Instagram: InstagramIcon, Github: GithubIcon };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Column 1: Company Info ── */}
          <div className="lg:col-span-2 space-y-5">
            <DuckLogo size="md" variant="full" />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {COMPANY.description}
            </p>

            {/* Contact */}
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
                >
                  <Mail size={14} className="text-amber-500 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
                >
                  <Phone size={14} className="text-amber-500 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-8 h-8 rounded-md border border-slate-700 flex items-center justify-center text-slate-500 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                  >
                    {Icon && <Icon size={14} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Column 2: Company ── */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Support + Tracking ── */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-widest mb-4">
                Support
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.support.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-amber-400 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tracking shortcut widget */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
              <p className="text-xs font-semibold text-slate-200 uppercase tracking-widest">
                Quick Track
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter tracking ID"
                  className="flex-1 min-w-0 bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <Link
                  href="/tracking"
                  className="p-2 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors"
                  aria-label="Track"
                >
                  <Search size={14} className="text-slate-900" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {year} {COMPANY.name} Logistics Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-slate-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}