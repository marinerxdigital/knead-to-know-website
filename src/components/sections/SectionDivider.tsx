/**
 * Subtle section divider using coastal blue line + botanical motif.
 * Matches Knead To Know brand system.
 */
export function SectionDivider({ bg = "white" }: { bg?: "white" | "cream" | "blush" | "beige" }) {
  const bgClass = {
    white: "bg-white",
    cream: "bg-white",
    blush: "bg-white",
    beige: "bg-[#f8fafc]",
  }[bg];
  return (
    <div className={bgClass} aria-hidden="true">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-2 sm:px-8">
        <div className="h-px flex-1 bg-k2k-blue/20" />
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="text-k2k-blue/70">
          <path
            d="M1 5c3-4 6-4 8 0 2-4 5-4 8 0"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
        <div className="h-px flex-1 bg-k2k-blue/20" />
      </div>
    </div>
  );
}
