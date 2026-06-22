import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  eyebrow = "Ready to begin",
  title = "Ready to plan your cake?",
  text = "Tell us about your event, your guest count, your inspiration, and your date. We'll review the details and follow up with availability and next steps.",
  primaryLabel = "Start an Inquiry",
  primaryTo = "/inquiry",
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: "/inquiry" | "/gallery" | "/flavors" | "/about" | "/contact";
  secondaryLabel?: string;
  secondaryTo?: "/inquiry" | "/gallery" | "/flavors" | "/about" | "/contact";
}) {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-forest px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-pink">{eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          {text}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to={primaryTo}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-pink px-7 text-sm font-medium text-forest-dark transition hover:bg-white"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary-foreground/30 px-7 text-sm font-medium text-primary-foreground transition hover:border-primary-foreground/60"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
