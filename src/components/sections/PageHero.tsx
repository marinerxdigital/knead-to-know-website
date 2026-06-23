import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const WHEAT_SVG = (
  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className="text-wheat" aria-hidden>
    <path
      d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);

export function PageHero({
  eyebrow,
  title,
  intro,
  align = "left",
  image,
  imageAlt,
  imagePosition = "right",
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
  imagePosition?: "right" | "background";
  children?: ReactNode;
  className?: string;
}) {
  const isCenter = align === "center";
  const hasBgImage = image && imagePosition === "background";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-k2k-blue/10 bg-[#f8f4ed] pb-16 pt-16 sm:pb-20 sm:pt-24",
        hasBgImage && "min-h-[42vh]",
        className,
      )}
    >
      {hasBgImage && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#f8f4ed]/98 via-[#f8f4ed]/88 to-[#f8f4ed]/55"
            aria-hidden
          />
        </>
      )}

      {!hasBgImage && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,167,199,0.14),transparent_55%)]"
          aria-hidden
        />
      )}

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-5 sm:px-8",
          image && imagePosition === "right"
            ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            : "max-w-4xl",
          isCenter && "text-center",
        )}
      >
        <div className={cn(isCenter && "mx-auto")}>
          <div
            className={cn(
              "mb-5 flex items-center gap-3",
              isCenter && "justify-center",
            )}
          >
            <span className="h-px w-8 bg-k2k-blue/25" aria-hidden />
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-k2k-blue">
              {eyebrow}
            </p>
            {WHEAT_SVG}
          </div>

          <h1
            className={cn(
              "font-display text-4xl leading-[1.04] text-ink sm:text-5xl lg:text-6xl",
              isCenter && "mx-auto max-w-3xl",
            )}
          >
            {title}
          </h1>

          {intro && (
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl",
                isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {intro}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>

        {image && imagePosition === "right" && (
          <div className="k2k-hero-frame overflow-hidden rounded-[1.75rem] p-2">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}