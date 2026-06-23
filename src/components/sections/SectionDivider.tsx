import { KTK_DECOR } from "@/lib/design-assets";
import { cn } from "@/lib/utils";

export function SectionDivider({
  bg = "white",
  accent: _accent = "blue",
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

  return (
    <div className={cn(bgClass)} aria-hidden="true">
      <img
        src={KTK_DECOR.sectionDivider}
        alt=""
        className="h-auto w-full pointer-events-none select-none"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}