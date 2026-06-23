import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBg = "white" | "cream" | "blush" | "beige";
type SectionVariant = "default" | "editorial" | "inset";

const bgClasses: Record<SectionBg, string> = {
  white: "bg-white",
  cream: "bg-white",
  blush: "bg-white",
  beige: "bg-[#f8f4ed]",
};

const variantClasses: Record<SectionVariant, { section: string; inner: string }> = {
  default: {
    section: "py-20 sm:py-28",
    inner: "mx-auto max-w-7xl px-5 sm:px-8",
  },
  editorial: {
    section: "py-24 sm:py-32",
    inner: "mx-auto max-w-7xl px-5 sm:px-8",
  },
  inset: {
    section: "py-16 sm:py-20",
    inner:
      "mx-auto max-w-7xl px-5 sm:px-8 [&>div]:rounded-[2rem] [&>div]:border [&>div]:border-k2k-blue/10 [&>div]:bg-white [&>div]:p-8 sm:[&>div]:p-12",
  },
};

export function Section({
  children,
  className,
  bg = "white",
  variant = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  bg?: SectionBg;
  variant?: SectionVariant;
  id?: string;
}) {
  const styles = variantClasses[variant];

  return (
    <section
      id={id}
      className={cn(styles.section, bgClasses[bg], variant === "editorial" && "relative", className)}
    >
      {variant === "editorial" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-k2k-blue/8"
          aria-hidden="true"
        />
      )}
      <div className={styles.inner}>
        {variant === "inset" ? <div>{children}</div> : children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  decorative = false,
  className,
}: {
  children: ReactNode;
  decorative?: boolean;
  className?: string;
}) {
  if (decorative) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <span className="h-px w-6 bg-k2k-blue/30" aria-hidden="true" />
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-k2k-blue text-balance">
          {children}
        </p>
        <span className="h-1 w-1 shrink-0 rounded-full bg-wheat" aria-hidden="true" />
      </div>
    );
  }

  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.24em] text-k2k-blue text-balance",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
  decorative = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  decorative?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "center" && decorative && "flex flex-col items-center",
      )}
    >
      {eyebrow && <Eyebrow decorative={decorative}>{eyebrow}</Eyebrow>}
      <As
        className={cn(
          "mt-4 font-display leading-[1.05] text-ink text-balance",
          As === "h1" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl lg:text-[3.25rem]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </As>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg sm:leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {intro}
        </p>
      )}
      {decorative && (
        <div
          className={cn(
            "mt-6 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-k2k-blue/20" />
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className="text-wheat/80">
            <path
              d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-px w-12 bg-k2k-blue/20" />
        </div>
      )}
    </div>
  );
}