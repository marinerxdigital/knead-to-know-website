import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  aspect?: "square" | "portrait" | "landscape" | "wide" | "tall";
  className?: string;
}

const ASPECT = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  tall: "aspect-[3/4]",
};

export function CakeImage({ src, alt, aspect = "portrait", className }: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl bg-white ring-1 ring-border/60",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full object-cover", ASPECT[aspect])}
      />
    </div>
  );
}
