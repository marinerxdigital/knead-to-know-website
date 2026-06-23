import { CoastalWaveDivider } from "@/components/decor/CoastalWaveDivider";
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
    <div
      className={cn(bgClass, "k2k-section-divider py-1 sm:py-1.5")}
      aria-hidden="true"
    >
      <CoastalWaveDivider />
    </div>
  );
}