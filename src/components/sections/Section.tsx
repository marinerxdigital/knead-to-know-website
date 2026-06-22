import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  bg = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: "white" | "cream" | "blush" | "beige";
  id?: string;
}) {
  // Remapped to new white + soft light palette; cream/blush/beige now near-white
  const bgClass = {
    white: "bg-white",
    cream: "bg-white",
    blush: "bg-white",
    beige: "bg-[#f8fafc]",
  }[bg];
  return (
    <section id={id} className={cn("py-20 sm:py-28", bgClass, className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <As
        className={cn(
          "mt-3 font-display text-4xl leading-[1.05] text-ink sm:text-5xl",
          As === "h1" && "text-5xl sm:text-6xl",
        )}
      >
        {title}
      </As>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
      )}
    </div>
  );
}
