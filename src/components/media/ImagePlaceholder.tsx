import { AtmosphereFog } from "@/components/decor/AtmosphereFog";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  aspect?: "square" | "portrait" | "landscape" | "wide" | "tall";
  variant?: "blush" | "cream" | "beige" | "pink";
  className?: string;
}

const ASPECT = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  tall: "aspect-[3/4]",
};

const VARIANT = {
  blush: "from-blush via-cream to-pink/60",
  cream: "from-beige via-cream to-blush",
  beige: "from-beige via-blush to-cream",
  pink: "from-pink/70 via-blush to-cream",
};

export function ImagePlaceholder({
  label,
  aspect = "portrait",
  variant = "blush",
  className,
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br ring-1 ring-border/60",
        ASPECT[aspect],
        VARIANT[variant],
        className,
      )}
    >
      <AtmosphereFog variant="pink-top" className="opacity-60 mix-blend-multiply" />
      <AtmosphereFog
        variant="cream-bottom-right"
        motion="alt"
        className="opacity-60 mix-blend-multiply"
      />
      <svg
        aria-hidden
        className="absolute right-5 top-5 h-10 w-10 text-forest/30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="12" cy="9" r="2.5" />
        <path d="M9 9c-2 0-3 1-3 3v3h12v-3c0-2-1-3-3-3" />
        <path d="M5 18h14" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <span className="font-display text-sm italic tracking-wide text-forest-dark/80">
          {label}
        </span>
      </div>
    </div>
  );
}
