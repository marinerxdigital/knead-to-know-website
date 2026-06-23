import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const FOG_VARIANTS = {
  "blue-top-right": "k2k-atmosphere-fog--blue-top-right",
  "blue-top-right-soft": "k2k-atmosphere-fog--blue-top-right-soft",
  "blue-top": "k2k-atmosphere-fog--blue-top",
  "blue-top-deep": "k2k-atmosphere-fog--blue-top-deep",
  "wheat-bottom-left": "k2k-atmosphere-fog--wheat-bottom-left",
  "wheat-bottom-right": "k2k-atmosphere-fog--wheat-bottom-right",
  "pink-top": "k2k-atmosphere-fog--pink-top",
  "cream-bottom-right": "k2k-atmosphere-fog--cream-bottom-right",
  "harbor-top-soft": "k2k-atmosphere-fog--harbor-top-soft",
} as const;

export type AtmosphereFogVariant = keyof typeof FOG_VARIANTS;

export function AtmosphereFog({
  variant,
  motion = "primary",
  className,
  style,
}: {
  variant: AtmosphereFogVariant;
  motion?: "primary" | "alt";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "k2k-atmosphere-fog",
        FOG_VARIANTS[variant],
        motion === "alt" ? "k2k-fog-wash-motion-alt" : "k2k-fog-wash-motion",
        className,
      )}
      style={style}
      aria-hidden
    />
  );
}
