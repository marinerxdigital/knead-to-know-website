import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type RouteTo =
  | "/inquiry"
  | "/gallery"
  | "/flavors"
  | "/about"
  | "/contact"
  | "/menu"
  | "/custom-orders"
  | "/catering"
  | "/faq";

function ScoringLine({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px flex-1", className)}>
      <div className="absolute inset-0 k2k-line-grow bg-current opacity-100" />
    </div>
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
}) {
  return (
    <section
      className={cn(
        "px-5 sm:px-8",
        compact ? "pb-12 sm:pb-16" : "pb-20 sm:pb-28",
      )}
    >
      <div
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-k2k-blue",
          compact && "rounded-[2rem]",
        )}
      >
        {/* Layered background composition — solid shapes only, no gradients */}
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

        {/* Decorative scoring lines — top */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-8 flex items-center gap-3 text-white/15 sm:inset-x-12",
            compact ? "top-6" : "top-8",
          )}
          aria-hidden="true"
        >
          <ScoringLine />
          <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="shrink-0 text-wheat/80">
            <path
              d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-1 w-1 shrink-0 rounded-full bg-wheat/60" />
          <ScoringLine />
        </div>

        <div
          className={cn(
            "relative grid items-center gap-10 px-6 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
            compact ? "py-12 sm:py-14 lg:py-16" : "py-16 sm:py-20 lg:py-24",
          )}
        >
          {/* Text block — asymmetric on lg */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
              <span className="relative hidden h-px w-8 overflow-hidden lg:block" aria-hidden="true">
                <span className="absolute inset-0 k2k-line-grow bg-wheat/50" />
              </span>
              {eyebrow}
            </p>
            <h2
              className={cn(
                "mt-4 max-w-xl font-display leading-[1.05] text-white text-balance lg:mx-0",
                compact
                  ? "text-3xl sm:text-4xl lg:text-[2.75rem]"
                  : "text-4xl sm:text-5xl lg:text-[3.25rem]",
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mx-auto mt-5 max-w-lg leading-relaxed text-white/80 text-pretty lg:mx-0",
                compact ? "text-sm sm:text-base" : "text-sm sm:text-base",
              )}
            >
              {text}
            </p>
          </div>

          {/* Actions block — offset for asymmetric rhythm */}
          <div className="flex flex-col items-center gap-3 lg:items-start lg:pl-4">
            <Link
              to={primaryTo}
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-full bg-white font-medium text-k2k-navy shadow-[0_12px_32px_-8px_rgba(17,17,17,0.25)] transition hover:bg-white/95 sm:w-auto",
                compact ? "h-11 px-6 text-sm" : "h-12 px-7 text-sm",
              )}
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
              {secondaryLabel && secondaryTo && secondaryIsPhone ? (
                <a
                  href={secondaryTo}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-white/35 font-medium text-white transition hover:border-white/60 hover:bg-white/5",
                    compact ? "h-11 px-6 text-sm" : "h-12 px-7 text-sm",
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
                      "inline-flex items-center justify-center rounded-full border border-white/35 font-medium text-white transition hover:border-white/60 hover:bg-white/5",
                      compact ? "h-11 px-6 text-sm" : "h-12 px-7 text-sm",
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
                    "inline-flex items-center justify-center rounded-full border border-white/35 font-medium text-white transition hover:border-white/60 hover:bg-white/5",
                    compact ? "h-11 px-6 text-sm" : "h-12 px-7 text-sm",
                  )}
                >
                  {tertiaryLabel}
                </Link>
              )}
            </div>

            {/* Wheat accent detail */}
            <div className="mt-2 hidden items-center gap-2 lg:flex" aria-hidden="true">
              <span className="relative h-px w-10 overflow-hidden">
                <span className="absolute inset-0 k2k-line-grow bg-wheat/40" />
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-wheat/70">
                Pre-order only
              </span>
            </div>
          </div>
        </div>

        {/* Decorative scoring lines — bottom */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-8 flex items-center gap-3 text-white/10 sm:inset-x-12",
            compact ? "bottom-6" : "bottom-8",
          )}
          aria-hidden="true"
        >
          <ScoringLine />
          <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="shrink-0 text-white/25">
            <path
              d="M1 3c4 7 9 7 11 2 2 5 7 5 9-1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <ScoringLine />
        </div>
      </div>
    </section>
  );
}