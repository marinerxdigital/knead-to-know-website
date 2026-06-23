import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

const WHEAT_SCORE = (
  <svg width="36" height="14" viewBox="0 0 36 14" fill="none" className="text-wheat/70">
    <path
      d="M2 10 C12 2 18 2 18 7 C18 2 24 2 34 10"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M18 7 V2"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

const HARBOR_WAVE = (
  <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
    <path
      d="M1 7c5-7 11-7 13-2 2-5 8-5 12 1"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

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
    cream: "bg-k2k-cream",
    blush: "bg-white",
    beige: "bg-k2k-cream",
  }[bg];

  const isWheat = accent === "wheat";

  const lineClass = isWheat ? "bg-wheat/30" : "bg-k2k-black/10";
  const waveClass = isWheat ? "text-wheat" : "text-k2k-blue/55";
  const dotClass = isWheat ? "bg-k2k-blue/50" : "bg-wheat/75";
  const scoreClass = isWheat ? "text-wheat/55" : "text-k2k-harbor/50";

  return (
    <div className={cn(bgClass, "border-y border-k2k-black")} aria-hidden="true">
      <ScrollReveal className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 sm:gap-4 sm:px-8 sm:py-5">
        {/* Wheat scoring accent — left */}
        <div className={cn("hidden shrink-0 sm:block", scoreClass)}>{WHEAT_SCORE}</div>

        {/* Primary scoring line */}
        <div className="relative h-px flex-1">
          <div className={cn("absolute inset-0 k2k-line-grow", lineClass)} />
          <div
            className={cn(
              "absolute inset-x-0 top-1/2 h-px -translate-y-1/2",
              isWheat ? "bg-k2k-black/[0.04]" : "bg-wheat/20",
            )}
            style={{ transform: "translateY(calc(-50% + 3px))" }}
          />
        </div>

        {/* Double wave motif with center accent */}
        <div className="group flex shrink-0 flex-col items-center gap-1">
          <div
            className={cn(
              waveClass,
              "transition-transform duration-300 ease-out group-hover:scale-110",
            )}
          >
            {HARBOR_WAVE}
          </div>
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full ring-1 ring-k2k-black transition-transform duration-300 ease-out group-hover:scale-125",
              dotClass,
            )}
          />
          <div
            className={cn(
              waveClass,
              "rotate-180 transition-transform duration-300 ease-out group-hover:scale-110",
            )}
          >
            {HARBOR_WAVE}
          </div>
        </div>

        {/* Mirrored scoring line */}
        <div className="relative h-px flex-1">
          <div className={cn("absolute inset-0 k2k-line-grow", lineClass)} />
          <div
            className={cn(
              "absolute inset-x-0 top-1/2 h-px -translate-y-1/2",
              isWheat ? "bg-k2k-black/[0.04]" : "bg-wheat/20",
            )}
            style={{ transform: "translateY(calc(-50% - 3px))" }}
          />
        </div>

        {/* Wheat scoring accent — right */}
        <div className={cn("hidden shrink-0 scale-x-[-1] sm:block", scoreClass)}>{WHEAT_SCORE}</div>
      </ScrollReveal>
    </div>
  );
}
