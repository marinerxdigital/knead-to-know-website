/**
 * Signature scoring-line divider — references the blade score bakers cut
 * into a sourdough loaf before baking, doubled as a quiet tide-line motif.
 */
export function SectionDivider({
  bg = "white",
  accent = "blue",
}: {
  bg?: "white" | "cream" | "blush" | "beige";
  accent?: "blue" | "wheat";
}) {
  const bgClass = {
    white: "bg-white",
    cream: "bg-white",
    blush: "bg-white",
    beige: "bg-[#f8fafc]",
  }[bg];
  const colorClass = accent === "wheat" ? "text-wheat" : "text-k2k-blue/70";
  const lineClass = accent === "wheat" ? "bg-wheat/30" : "bg-k2k-blue/20";

  return (
    <div className={bgClass} aria-hidden="true">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-2 sm:px-8">
        <div className={`h-px flex-1 ${lineClass}`} />
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className={colorClass}>
          <path
            d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
        <div className={`h-px flex-1 ${lineClass}`} />
      </div>
    </div>
  );
}
