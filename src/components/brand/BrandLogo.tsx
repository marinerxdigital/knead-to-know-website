import { cn } from "@/lib/utils";

const LOGO_SRC = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";

type BrandLogoVariant = "header" | "header-compact" | "footer" | "hero";

const sizeClasses: Record<BrandLogoVariant, string> = {
  /** Sticky nav — prominent on desktop, balanced on mobile */
  header:
    "h-[3.25rem] w-[3.25rem] sm:h-[3.75rem] sm:w-[3.75rem] md:h-[4.25rem] md:w-[4.25rem] lg:h-[4.75rem] lg:w-[4.75rem] xl:h-[5.25rem] xl:w-[5.25rem]",
  /** Nav after scroll — slightly smaller, still readable */
  "header-compact":
    "h-[2.75rem] w-[2.75rem] sm:h-[3rem] sm:w-[3rem] md:h-[3.25rem] md:w-[3.25rem] lg:h-[3.5rem] lg:w-[3.5rem]",
  footer: "h-[4rem] w-[4rem] sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[5rem] lg:w-[5rem]",
  hero: "h-[5rem] w-[5rem] sm:h-[6rem] sm:w-[6rem] md:h-[7rem] md:w-[7rem] lg:h-[8rem] lg:w-[8rem]",
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
      alt="Knead To Know Sweet & Sour bakery logo"
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
