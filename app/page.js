import Link from "next/link";
import {
  Plane,
  Ship,
  Zap,
  Warehouse,
  CheckSquare,
  Truck,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Star,
  Package,
  ChevronRight,
  Globe,
  TrendingUp,
} from "lucide-react";
import {
  HERO,
  STATS,
  SERVICES,
  TRACKING_DEMO,
  TESTIMONIALS,
  COMPANY,
} from "@/lib/utils/site-data";

// ── Icon map for services ─────────────────────────────────────
const SERVICE_ICONS = { Plane, Ship, Zap, Warehouse, CheckSquare, Truck };

// ── Helper: star rating ───────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}
        />
      ))}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// PAGE
// ═════════════════════════════════════════════════════════════
export default function HomePage() {
  return (
    <main className="relative bg-white dark:bg-slate-950 overflow-hidden">

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f015 1px, transparent 1px), linear-gradient(to bottom, #e2e8f015 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Amber glow */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-200/30 dark:bg-slate-800/30 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                  {HERO.badge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                {HERO.headline.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? (
                      <>
                        Deliver{" "}
                        <span className="text-amber-500 relative">
                          Faster
                          <svg
                            className="absolute -bottom-2 left-0 w-full"
                            viewBox="0 0 200 8"
                            fill="none"
                          >
                            <path
                              d="M2 6 Q50 2, 100 5 Q150 8, 198 4"
                              stroke="#F59E0B"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        .
                      </>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h1>

              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                {HERO.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={HERO.ctaPrimary.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-colors shadow-lg shadow-amber-200 dark:shadow-amber-900/30"
                >
                  <Package size={18} />
                  {HERO.ctaPrimary.label}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={HERO.ctaSecondary.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {HERO.ctaSecondary.label}
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-2">
                {["DHL Partner", "FedEx Network", "IATA Certified"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CheckCircle2 size={13} className="text-amber-500" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dashboard preview card */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 p-6 space-y-5">

                {/* Mini top bar */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Live Shipments
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    4 Active
                  </span>
                </div>

                {/* Shipment rows */}
                {[
                  { id: "YD-887321", from: "Shanghai", to: "Lagos", status: "In Transit", color: "text-amber-600 bg-amber-50 dark:bg-amber-950" },
                  { id: "YD-887320", from: "Dubai", to: "London", status: "Delivered", color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950" },
                  { id: "YD-887319", from: "New York", to: "Toronto", status: "Out for Delivery", color: "text-blue-600 bg-blue-50 dark:bg-blue-950" },
                ].map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="space-y-0.5">
                      <p className="text-xs font-mono font-medium text-slate-700 dark:text-slate-200">
                        {s.id}
                      </p>
                      <p className="text-xs text-slate-400">
                        {s.from} → {s.to}
                      </p>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${s.color}`}>
                      {s.status}
                    </span>
                  </div>
                ))}

                {/* Mini map placeholder */}
                <div className="h-28 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden">
                  <Globe size={60} className="text-slate-300 dark:text-slate-700" />
                  {/* Ping dots */}
                  {[
                    { top: "30%", left: "72%", delay: "0s" },
                    { top: "55%", left: "20%", delay: "0.4s" },
                    { top: "40%", left: "50%", delay: "0.8s" },
                  ].map((dot, i) => (
                    <span
                      key={i}
                      className="absolute w-2.5 h-2.5 rounded-full bg-amber-500"
                      style={{ top: dot.top, left: dot.left }}
                    >
                      <span
                        className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75"
                        style={{ animationDelay: dot.delay }}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════ */}
      <section className="bg-slate-950 dark:bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <p className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center space-y-3 mb-14">
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              What We Offer
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              End-to-End Logistics
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              From cargo consolidation to last-mile delivery — every link in your supply chain,
              optimised.
            </p>
          </div>

          {/* 3-col grid (desktop), 2-col (tablet), 1-col (mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] ?? Truck;
              return (
                <div
                  key={service.id}
                  className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-100/50 dark:hover:shadow-amber-900/20 transition-all duration-300 cursor-pointer"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 to-amber-50/0 group-hover:from-amber-50/50 dark:group-hover:from-amber-950/30 transition-all duration-300 pointer-events-none" />

                  <div className="relative space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-950/70 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-amber-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{service.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LIVE TRACKING PREVIEW
      ══════════════════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14">
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              Real-Time Visibility
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Track Every Step
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Full end-to-end visibility from first mile to doorstep.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Timeline */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-7 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Tracking ID</p>
                  <p className="font-mono font-bold text-slate-900 dark:text-white text-sm">
                    {TRACKING_DEMO.trackingId}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 mb-0.5">ETA</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {TRACKING_DEMO.estimatedDelivery}
                  </p>
                </div>
              </div>

              {/* Route */}
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <MapPin size={13} className="text-amber-500" />
                  {TRACKING_DEMO.origin}
                </span>
                <div className="flex-1 border-t border-dashed border-slate-300 dark:border-slate-700" />
                <span className="flex items-center gap-1.5 text-slate-500">
                  <MapPin size={13} className="text-emerald-500" />
                  {TRACKING_DEMO.destination}
                </span>
              </div>

              {/* Steps */}
              <ol className="space-y-0">
                {TRACKING_DEMO.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    {/* Indicator column */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10
                          ${
                            step.done
                              ? "bg-emerald-500 text-white"
                              : step.active
                              ? "bg-amber-500 text-white ring-4 ring-amber-200 dark:ring-amber-900"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-300"
                          }
                        `}
                      >
                        {step.done ? (
                          <CheckCircle2 size={16} />
                        ) : step.active ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                        )}
                      </div>
                      {/* Connector line */}
                      {i < TRACKING_DEMO.steps.length - 1 && (
                        <div
                          className={`w-0.5 flex-1 my-1 ${
                            step.done ? "bg-emerald-300 dark:bg-emerald-800" : "bg-slate-200 dark:bg-slate-800"
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-5 ${i === TRACKING_DEMO.steps.length - 1 ? "" : ""}`}>
                      <p
                        className={`text-sm font-semibold ${
                          step.active
                            ? "text-amber-600 dark:text-amber-400"
                            : step.done
                            ? "text-slate-700 dark:text-slate-200"
                            : "text-slate-400"
                        }`}
                      >
                        {step.status}
                      </p>
                      <p className="text-xs text-slate-400">{step.location}</p>
                      <p className="text-xs text-slate-300 dark:text-slate-600 mt-0.5 flex items-center gap-1">
                        <Clock size={10} />
                        {step.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Map preview */}
            <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Route Map
                </span>
                <span className="text-xs text-slate-400">Live · Updated 2m ago</span>
              </div>

              {/* Map visual */}
              <div className="relative h-72 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* Stylized globe SVG */}
                <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10">
                  {/* Latitude lines */}
                  {[50, 100, 140, 180, 220].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#94a3b8" strokeWidth="0.5" />
                  ))}
                  {/* Longitude lines */}
                  {[50, 100, 150, 200, 250, 300, 350].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="280" stroke="#94a3b8" strokeWidth="0.5" />
                  ))}
                  {/* Continents (simplified blobs) */}
                  <ellipse cx="80" cy="120" rx="55" ry="45" fill="#cbd5e1" />
                  <ellipse cx="200" cy="100" rx="70" ry="50" fill="#cbd5e1" />
                  <ellipse cx="280" cy="140" rx="40" ry="55" fill="#cbd5e1" />
                  <ellipse cx="340" cy="110" rx="35" ry="40" fill="#cbd5e1" />
                  <ellipse cx="130" cy="180" rx="30" ry="20" fill="#cbd5e1" />
                </svg>

                {/* Route line */}
                <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full">
                  <path
                    d="M 310 115 Q 230 70, 160 130 Q 100 170, 80 160"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="8 4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Origin: Shanghai */}
                  <circle cx="310" cy="115" r="6" fill="#F59E0B" />
                  <circle cx="310" cy="115" r="12" fill="#F59E0B" opacity="0.25" />
                  {/* Current: Dubai */}
                  <circle cx="215" cy="118" r="7" fill="#3B82F6" />
                  <circle cx="215" cy="118" r="14" fill="#3B82F6" opacity="0.2" />
                  {/* Destination: Lagos */}
                  <circle cx="80" cy="160" r="6" fill="#10B981" />
                  <circle cx="80" cy="160" r="12" fill="#10B981" opacity="0.25" />
                </svg>

                {/* Labels */}
                <div className="absolute top-4 right-6 space-y-2">
                  {[
                    { label: "Shanghai", color: "bg-amber-500" },
                    { label: "Current Position", color: "bg-blue-500" },
                    { label: "Lagos", color: "bg-emerald-500" },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className={`w-2 h-2 rounded-full ${l.color}`} />
                      {l.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14">
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              Customer Stories
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Trusted by Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-300/50 dark:hover:border-amber-700/50 transition-colors"
              >
                <StarRating rating={t.rating} />
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-slate-900">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-none">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl px-8 py-16 sm:px-16 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/15 blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5">
                <TrendingUp size={13} className="text-amber-400" />
                <span className="text-xs text-amber-400 font-medium">
                  Start shipping in minutes
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Ready to ship{" "}
                <span className="text-amber-400">worldwide?</span>
              </h2>

              <p className="text-slate-400 max-w-md mx-auto text-lg">
                Join 50,000+ businesses that trust YellowDuck for their global logistics.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Link
                  href="/dashboard/shipments/new"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors shadow-lg shadow-amber-900/30 text-sm"
                >
                  <Package size={18} />
                  Create Shipment
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/tracking"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Track Package
                </Link>
              </div>

              {/* No credit card note */}
              <p className="text-xs text-slate-600 pt-2">
                No credit card required · Free plan available · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}