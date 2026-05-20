"use client";


export default function DuckLogo({ size = "md", variant = "full", className = "" }) {
  const sizeMap = { sm: 32, md: 44, lg: 64 };
  const px = typeof size === "number" ? size : sizeMap[size] ?? 44;

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* ── SVG Icon ── */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="YellowDuck logo icon"
      >
        {/* Wave base */}
        <path
          d="M4 46 C10 40, 18 52, 26 46 C34 40, 42 52, 50 46 C56 42, 60 46, 62 46"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M2 52 C8 46, 16 58, 24 52 C32 46, 40 58, 48 52 C54 48, 58 52, 62 52"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Duck body */}
        <ellipse cx="32" cy="36" rx="14" ry="10" fill="#FCD34D" />

        {/* Duck head */}
        <circle cx="44" cy="26" r="8" fill="#FCD34D" />

        {/* Duck bill */}
        <path
          d="M51 26 L58 24 L57 28 L51 28 Z"
          fill="#F97316"
        />

        {/* Duck eye */}
        <circle cx="46.5" cy="23.5" r="1.5" fill="#1E293B" />
        <circle cx="47" cy="23" r="0.5" fill="white" />

        {/* Duck wing */}
        <path
          d="M24 34 Q28 28 36 32 Q32 38 24 34 Z"
          fill="#FDE68A"
          opacity="0.9"
        />

        {/* Duck tail */}
        <path
          d="M18 36 Q14 30 16 34 Q12 32 14 38 Q16 40 20 38 Z"
          fill="#FCD34D"
        />

        {/* Water splash dots */}
        <circle cx="18" cy="49" r="1.2" fill="#F59E0B" opacity="0.5" />
        <circle cx="38" cy="51" r="1" fill="#F59E0B" opacity="0.4" />
        <circle cx="52" cy="49" r="1.5" fill="#F59E0B" opacity="0.5" />
      </svg>

      {/* ── Wordmark ── */}
      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black tracking-tight text-slate-900 dark:text-white"
            style={{ fontSize: px * 0.42, letterSpacing: "-0.02em" }}
          >
            yellow
            <span className="text-amber-500">duck</span>
          </span>
          <span
            className="font-medium tracking-widest text-slate-400 uppercase"
            style={{ fontSize: px * 0.18 }}
          >
            logistics
          </span>
        </div>
      )}
    </div>
  );
}