import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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
}) {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-k2k-blue">
        {/* Layered background composition — solid shapes only, no gradients */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-k2k-harbor/25"
          style={{ borderRadius: "0 0 0 100%" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-k2k-navy/20"
          aria-hidden="true"
        />

        {/* Decorative scoring lines — top */}
        <div
          className="pointer-events-none absolute inset-x-8 top-8 flex items-center gap-3 sm:inset-x-12"
          aria-hidden="true"
        >
          <div className="h-px flex-1 bg-white/15" />
          <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="text-wheat/80">
            <path
              d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-1 w-1 rounded-full bg-wheat/60" />
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="relative grid items-center gap-10 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          {/* Text block — asymmetric on lg */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
              <span className="hidden h-px w-8 bg-wheat/50 lg:block" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] text-white text-balance sm:text-5xl lg:mx-0 lg:text-[3.25rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/80 text-pretty sm:text-base lg:mx-0">
              {text}
            </p>
          </div>

          {/* Actions block */}
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Link
              to={primaryTo}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-k2k-navy shadow-[0_12px_32px_-8px_rgba(17,17,17,0.25)] transition hover:bg-white/95 sm:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
              {secondaryLabel && secondaryTo && secondaryIsPhone ? (
                <a
                  href={secondaryTo}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/5"
                >
                  {secondaryLabel}
                </a>
              ) : (
                secondaryLabel &&
                secondaryTo && (
                  <Link
                    to={secondaryTo as RouteTo}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/5"
                  >
                    {secondaryLabel}
                  </Link>
                )
              )}
              {tertiaryLabel && tertiaryTo && (
                <Link
                  to={tertiaryTo}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/5"
                >
                  {tertiaryLabel}
                </Link>
              )}
            </div>

            {/* Wheat accent detail */}
            <div className="mt-2 hidden items-center gap-2 lg:flex" aria-hidden="true">
              <span className="h-px w-10 bg-wheat/40" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-wheat/70">
                Pre-order only
              </span>
            </div>
          </div>
        </div>

        {/* Decorative scoring lines — bottom */}
        <div
          className="pointer-events-none absolute inset-x-8 bottom-8 flex items-center gap-3 sm:inset-x-12"
          aria-hidden="true"
        >
          <div className="h-px flex-1 bg-white/10" />
          <svg width="24" height="10" viewBox="0 0 24 10" fill="none" className="text-white/25">
            <path
              d="M1 3c4 7 9 7 11 2 2 5 7 5 9-1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}