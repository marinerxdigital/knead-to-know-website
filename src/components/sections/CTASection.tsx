import { useId } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { KTK_ICONS } from "@/lib/design-assets";
import { cn } from "@/lib/utils";

type RouteTo =
  | "/gallery"
  | "/about"
  | "/contact"
  | "/menu"
  | "/custom-orders"
  | "/catering"
  | "/faq";

function ScoringLine({ className, delay }: { className?: string; delay?: string }) {
  return (
    <div className={cn("relative h-px flex-1 overflow-hidden", className)}>
      <div
        className="absolute inset-0 k2k-line-grow bg-current opacity-100"
        style={delay ? { animationDelay: delay } : undefined}
      />
    </div>
  );
}

function ScoringWave({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="12"
      viewBox="0 0 28 12"
      fill="none"
      className={cn("shrink-0", className)}
    >
      <path
        d="M1 8c5-8 11-8 14-2 3-6 9-6 12 2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CTASection({
  eyebrow = "Ready to begin",
  title = "Ready to order fresh bakes?",
  text = "Tell us about your gathering or order needs, date, and preferences. We'll confirm availability and next steps.",
  primaryLabel = "Start an Inquiry",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
  secondaryIsPhone = false,
  tertiaryLabel,
  tertiaryTo,
  compact = false,
  headingId: headingIdProp,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: RouteTo;
  secondaryLabel?: string;
  secondaryTo?: RouteTo | string;
  secondaryIsPhone?: boolean;
  tertiaryLabel?: string;
  tertiaryTo?: RouteTo;
  compact?: boolean;
  headingId?: string;
}) {
  const generatedHeadingId = useId();
  const headingId = headingIdProp ?? generatedHeadingId;

  return (
    <section
      className={cn(
        "k2k-cta-section border-t border-k2k-black/[0.06] bg-white",
        compact ? "py-12 sm:py-16" : "py-16 sm:py-24",
      )}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl px-[var(--k2k-section-x)]">
        <ScrollReveal>
          <div
            className={cn(
              "group relative mx-auto overflow-hidden rounded-[2.5rem] border border-k2k-black bg-k2k-blue",
              compact && "rounded-[2rem]",
            )}
          >
            {/* Layered background composition */}
            <div
              className={cn(
                "pointer-events-none absolute -right-16 -top-16 rounded-full border border-white/10",
                compact ? "h-48 w-48" : "h-64 w-64",
              )}
              aria-hidden="true"
            />
            <div
              className={cn(
                "pointer-events-none absolute right-0 top-0 bg-k2k-harbor/25",
                compact ? "h-32 w-32" : "h-40 w-40",
              )}
              style={{ borderRadius: "0 0 0 100%" }}
              aria-hidden="true"
            />
            <div
              className={cn(
                "pointer-events-none absolute -bottom-20 -left-12 rounded-full bg-k2k-navy/20",
                compact ? "h-36 w-36" : "h-48 w-48",
              )}
              aria-hidden="true"
            />

            {/* Decorative brand icons — floating */}
            <img
              src={KTK_ICONS.wheat}
              alt=""
              className={cn(
                "k2k-icon-hover pointer-events-none absolute k2k-float-gentle opacity-20",
                compact ? "right-8 top-10 h-10 w-10" : "right-12 top-14 h-14 w-14",
              )}
              aria-hidden="true"
            />
            <img
              src={KTK_ICONS.cookie}
              alt=""
              className={cn(
                "k2k-icon-hover pointer-events-none absolute hidden k2k-float-gentle opacity-15 sm:block",
                compact ? "left-[38%] top-8 h-8 w-8" : "left-[42%] top-10 h-10 w-10",
              )}
              style={{ animationDelay: "2s" }}
              aria-hidden="true"
            />

            {/* Decorative scoring lines — top */}
            <div
              className={cn(
                "pointer-events-none absolute inset-x-6 flex items-center gap-4 text-white/20 sm:inset-x-10",
                compact ? "top-5" : "top-7",
              )}
              aria-hidden="true"
            >
              <ScoringLine delay="0.1s" />
              <ScoringWave className="text-wheat/70" />
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-wheat/60" />
              <ScoringWave className="text-white/30" />
              <ScoringLine delay="0.3s" />
            </div>

            <div
              className={cn(
                "relative grid items-center gap-8 px-5 sm:gap-10 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
                compact ? "py-10 sm:py-14 lg:py-16" : "py-12 sm:py-20 lg:py-28",
              )}
            >
              {/* Text block */}
              <ScrollReveal delay={1} className="text-center lg:text-left">
                <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-white sm:text-sm">
                  <span
                    className="relative hidden h-px w-10 overflow-hidden lg:block"
                    aria-hidden="true"
                  >
                    <span
                      className="absolute inset-0 k2k-line-grow bg-wheat/50"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </span>
                  <img
                    src={KTK_ICONS.wheat}
                    alt=""
                    className="k2k-icon-hover h-4 w-4 shrink-0 opacity-70"
                    aria-hidden="true"
                  />
                  {eyebrow}
                </p>
                <h2
                  id={headingId}
                  className={cn(
                    "mt-4 max-w-2xl font-display leading-[1.06] text-white text-balance sm:mt-5 sm:leading-[1.02] lg:mx-0",
                    compact
                      ? "text-3xl sm:text-5xl lg:text-[3.25rem]"
                      : "text-[clamp(1.875rem,5vw+0.5rem,4.25rem)] sm:text-6xl lg:text-[4.25rem]",
                  )}
                >
                  {title}
                </h2>
                <p
                  className={cn(
                    "mx-auto mt-4 max-w-xl leading-relaxed text-white text-pretty sm:mt-6 lg:mx-0",
                    compact ? "text-sm sm:text-base" : "text-sm sm:text-lg",
                  )}
                >
                  {text}
                </p>
              </ScrollReveal>

              {/* Actions block */}
              <ScrollReveal
                delay={2}
                className="flex w-full flex-col items-stretch gap-3 sm:items-center sm:gap-4 lg:items-start lg:pl-4"
              >
                <Link
                  to={primaryTo}
                  className={cn(
                    "k2k-hover-lift inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-k2k-black bg-white px-5 text-sm font-medium text-k2k-navy shadow-[0_14px_36px_-10px_rgba(17,17,17,0.35)] transition hover:bg-white/95 sm:w-auto sm:min-h-12 sm:px-8 sm:text-base",
                    compact && "sm:min-h-11 sm:px-7 sm:text-sm",
                  )}
                >
                  {primaryLabel}
                  <ArrowRight className="k2k-icon-hover h-4 w-4 shrink-0" />
                </Link>

                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 lg:justify-start">
                  {secondaryLabel && secondaryTo && secondaryIsPhone ? (
                    <a
                      href={secondaryTo}
                      className={cn(
                        "k2k-hover-lift inline-flex min-h-11 w-full items-center justify-center rounded-full border border-k2k-black/25 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-white/65 hover:bg-white/10 sm:w-auto sm:px-7",
                        compact && "sm:min-h-11",
                      )}
                    >
                      {secondaryLabel}
                    </a>
                  ) : (
                    secondaryLabel &&
                    secondaryTo && (
                      <Link
                        to={secondaryTo as RouteTo}
                        className={cn(
                          "k2k-hover-lift inline-flex min-h-11 w-full items-center justify-center rounded-full border border-k2k-black/25 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-white/65 hover:bg-white/10 sm:w-auto sm:px-7",
                          compact && "sm:min-h-11",
                        )}
                      >
                        {secondaryLabel}
                      </Link>
                    )
                  )}
                  {tertiaryLabel && tertiaryTo && (
                    <Link
                      to={tertiaryTo}
                      className={cn(
                        "k2k-hover-lift inline-flex min-h-11 w-full items-center justify-center rounded-full border border-k2k-black/25 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-white/65 hover:bg-white/10 sm:w-auto sm:px-7",
                        compact && "sm:min-h-11",
                      )}
                    >
                      {tertiaryLabel}
                    </Link>
                  )}
                </div>

                <div className="mt-1 hidden items-center gap-3 lg:flex" aria-hidden="true">
                  <ScoringLine className="w-12 text-wheat/40" delay="0.5s" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-wheat">
                    Pre-order only
                  </span>
                  <img src={KTK_ICONS.bread} alt="" className="k2k-icon-hover h-4 w-4 opacity-50" />
                </div>
              </ScrollReveal>
            </div>

            {/* Decorative scoring lines — bottom */}
            <div
              className={cn(
                "pointer-events-none absolute inset-x-6 flex items-center gap-4 text-white/12 sm:inset-x-10",
                compact ? "bottom-5" : "bottom-7",
              )}
              aria-hidden="true"
            >
              <ScoringLine delay="0.4s" />
              <ScoringWave className="text-white/25" />
              <span className="h-1 w-1 shrink-0 rounded-full bg-white/30" />
              <ScoringLine delay="0.6s" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
