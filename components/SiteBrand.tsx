type SiteBrandProps = {
  className?: string;
  compact?: boolean;
};

export default function SiteBrand({
  className = "",
  compact = false,
}: SiteBrandProps) {
  const iconSize = compact ? "h-8 w-8" : "h-9 w-9";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className={`grid ${iconSize} shrink-0 place-items-center rounded-lg border border-blue-300/20 bg-blue-950/70 shadow-[0_0_24px_-8px_rgba(0,213,220,0.65)]`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-blue-100"
        >
          <circle cx="6" cy="7" r="2" className="fill-accent stroke-accent-glow" />
          <circle cx="18" cy="7" r="2" className="fill-accent-cyan/30 stroke-accent-cyan" />
          <circle cx="12" cy="18" r="2" className="fill-blue-200/20 stroke-blue-100" />
          <path d="m7.7 8.1 3.2 7.8M16.3 8.1l-3.2 7.8M8 7h8" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-white sm:text-base">
          Multi Agent
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.26em] text-accent-cyan sm:text-[10px]">
          Debates
        </span>
      </span>
    </span>
  );
}
