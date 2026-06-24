import { cn } from "@/lib/utils";
import { LOGO_ALT, LOGO_SRC } from "@/lib/design-assets";

type BrandLogoVariant = "header" | "header-compact" | "footer" | "hero";

const sizeClasses: Record<BrandLogoVariant, string> = {
  /** Sticky nav — prominent on desktop, balanced on mobile */
  header:
    "h-[3.25rem] w-[3.25rem] sm:h-[3.75rem] sm:w-[3.75rem] md:h-[4.25rem] md:w-[4.25rem] lg:h-[4.75rem] lg:w-[4.75rem] xl:h-[5.25rem] xl:w-[5.25rem]",
  /** Nav after scroll — slightly smaller, still readable */
  "header-compact":
    "h-[2.75rem] w-[2.75rem] sm:h-[3rem] sm:w-[3rem] md:h-[3.25rem] md:w-[3.25rem] lg:h-[3.5rem] lg:w-[3.5rem]",
  footer: "h-[4rem] w-[4rem] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[5rem] lg:w-[5rem]",
  hero: "h-[4.75rem] w-[4.75rem] min-[400px]:h-[5.5rem] min-[400px]:w-[5.5rem] sm:h-[7rem] sm:w-[7rem] md:h-[9rem] md:w-[9rem] lg:h-[10.5rem] lg:w-[10.5rem] xl:h-[12rem] xl:w-[12rem]",
};

export function BrandLogo({
  variant = "header",
  className,
  ring = true,
}: {
  variant?: BrandLogoVariant;
  className?: string;
  ring?: boolean;
}) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      className={cn(
        "shrink-0 rounded-full object-contain",
        sizeClasses[variant],
        ring && "ring-2 ring-k2k-blue/20 ring-offset-2 ring-offset-[#f8f4ed]",
        className,
      )}
    />
  );
}

export { LOGO_SRC as BRAND_LOGO_SRC };
