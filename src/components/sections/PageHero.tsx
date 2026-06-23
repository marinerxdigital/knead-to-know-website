import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const WHEAT_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png";
const DOUGH_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png";

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

function WheatScoringMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 32" fill="none" aria-hidden className={cn("text-wheat/40", className)}>
      <path
        d="M4 24 C20 4 36 4 40 16 C44 4 60 4 76 24"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path d="M40 16 V4" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  );
}

function HarborLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 10"
      fill="none"
      aria-hidden
      className={cn("text-k2k-harbor/50", className)}
    >
      <path
        d="M2 6 C35 1 70 1 70 5 C70 1 105 1 138 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroIconAccent({ src, className }: { src: string; className?: string }) {
  return (
    <div
      className={cn(
        "k2k-float-gentle pointer-events-none absolute flex h-11 w-11 items-center justify-center rounded-full border border-k2k-black bg-white/90 shadow-[var(--k2k-shadow-sm)] backdrop-blur-sm",
        className,
      )}
      aria-hidden
    >
      <img src={src} alt="" className="k2k-icon-hover h-5 w-5 object-contain opacity-75" />
    </div>
  );
}

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
        "group relative overflow-hidden border-b border-k2k-black bg-k2k-cream pb-14 pt-14 sm:pb-20 sm:pt-24",
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
            className="absolute inset-0 bg-gradient-to-r from-k2k-cream/98 via-k2k-cream/88 to-k2k-cream/55"
            aria-hidden
          />
        </>
      )}

      {!hasBgImage && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(106,158,192,0.14),transparent_55%)]"
          aria-hidden
        />
      )}

      <WheatScoringMark className="pointer-events-none absolute left-6 top-20 hidden w-20 opacity-50 lg:block xl:left-12" />
      <WheatScoringMark className="pointer-events-none absolute right-8 top-32 hidden w-16 scale-x-[-1] opacity-35 lg:block" />
      <HeroIconAccent src={WHEAT_ICON} className="right-[12%] top-[18%] hidden lg:flex" />
      <HeroIconAccent
        src={DOUGH_ICON}
        className="left-[8%] bottom-[22%] hidden opacity-80 lg:flex [animation-delay:2s]"
      />

      <div
        className={cn(
          "relative mx-auto max-w-7xl min-w-0 px-[var(--k2k-section-x)]",
          image && imagePosition === "right"
            ? "grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            : "max-w-4xl",
          isCenter && "text-center",
        )}
      >
        <div className={cn(isCenter && "mx-auto")}>
          <div
            className={cn(
              "k2k-stagger-1 mb-4 flex items-center gap-3 sm:mb-5",
              isCenter && "justify-center",
            )}
          >
            <span className="h-px w-8 bg-k2k-black/20" aria-hidden />
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-k2k-blue sm:text-xs sm:tracking-[0.24em]">
              {eyebrow}
            </p>
            {WHEAT_SVG}
          </div>

          <h1
            className={cn(
              "k2k-stagger-2 font-display text-[clamp(1.875rem,4.5vw+0.5rem,3.75rem)] leading-[1.06] text-ink text-balance sm:text-5xl sm:leading-[1.04] lg:text-6xl",
              isCenter && "mx-auto max-w-3xl",
            )}
          >
            {title}
          </h1>

          {intro && (
            <p
              className={cn(
                "k2k-stagger-3 mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:mt-5 sm:text-lg md:text-xl",
                isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {intro}
            </p>
          )}

          {children && <div className="k2k-stagger-4 mt-8">{children}</div>}
        </div>

        {image && imagePosition === "right" && (
          <div className="k2k-stagger-4 k2k-hero-frame overflow-hidden rounded-[1.75rem] border border-k2k-black p-2">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        )}
      </div>

      <HarborLine className="pointer-events-none absolute bottom-6 left-1/2 w-40 -translate-x-1/2 sm:w-52" />
    </section>
  );
}
