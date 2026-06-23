import { cn } from "@/lib/utils";

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
    beige: "bg-[#f8f4ed]",
  }[bg];

  const isWheat = accent === "wheat";

  const lineClass = isWheat ? "bg-wheat/25" : "bg-k2k-blue/18";
  const waveClass = isWheat ? "text-wheat" : "text-k2k-blue/60";
  const dotClass = isWheat ? "bg-k2k-blue/40" : "bg-wheat/70";

  return (
    <div className={bgClass} aria-hidden="true">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 sm:gap-5 sm:px-8 sm:py-4">
        {/* Primary scoring line */}
        <div className="relative h-px flex-1">
          <div className={cn("absolute inset-0 k2k-line-grow", lineClass)} />
          <div
            className={cn(
              "absolute inset-x-0 top-1/2 h-px -translate-y-1/2",
              isWheat ? "bg-k2k-blue/8" : "bg-wheat/15",
            )}
            style={{ transform: "translateY(calc(-50% + 3px))" }}
          />
        </div>

        {/* Double wave motif with center accent */}
        <div className="flex shrink-0 flex-col items-center gap-1">
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className={waveClass}>
            <path
              d="M1 7c5-7 11-7 13-2 2-5 8-5 12 1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span className={cn("h-1 w-1 rounded-full", dotClass)} />
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" className={waveClass}>
            <path
              d="M1 3c5 7 11 7 13 2 2 5 8 5 12-1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Mirrored scoring line */}
        <div className="relative h-px flex-1">
          <div className={cn("absolute inset-0 k2k-line-grow", lineClass)} />
          <div
            className={cn(
              "absolute inset-x-0 top-1/2 h-px -translate-y-1/2",
              isWheat ? "bg-k2k-blue/8" : "bg-wheat/15",
            )}
            style={{ transform: "translateY(calc(-50% - 3px))" }}
          />
        </div>
      </div>
    </div>
  );
}