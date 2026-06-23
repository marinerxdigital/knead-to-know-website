import { Link } from "@tanstack/react-router";
import { BookOpen, Compass, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { KTK_DECOR } from "@/lib/design-assets";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

const EXPLORE_LINKS = [
  { to: "/menu" as const, label: "Menu" },
  { to: "/custom-orders" as const, label: "Custom Orders" },
  { to: "/catering" as const, label: "Catering" },
  { to: "/gallery" as const, label: "Gallery" },
] as const;

const ABOUT_LINKS = [
  { to: "/about" as const, label: "About" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contact" as const, label: "Contact" },
  { to: "/privacy" as const, label: "Privacy" },
] as const;

function FooterScoringDivider() {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 sm:px-8" aria-hidden="true">
      <div className="relative h-px flex-1">
        <div className="absolute inset-0 k2k-line-grow bg-k2k-blue/15" />
      </div>
      <div className="flex items-center gap-2">
        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="text-k2k-blue/50">
          <path
            d="M1 6c3-5 7-5 8-1.5 1-3.5 5-3.5 7 0.5"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
        <span className="h-1 w-1 rounded-full bg-wheat" />
        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="text-k2k-blue/50">
          <path
            d="M1 6c3-5 7-5 8-1.5 1-3.5 5-3.5 7 0.5"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="relative h-px flex-1">
        <div className="absolute inset-0 k2k-line-grow bg-k2k-blue/15" />
      </div>
    </div>
  );
}

function NewsletterPlaceholder() {
  return (
    <div className="k2k-card k2k-bordered mx-auto max-w-7xl rounded-[1.5rem] bg-white/90 px-6 py-5 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-k2k-blue/70">
            Stay in the loop
          </p>
          <p className="mt-1 font-display text-lg text-ink">Join our neighbor list — coming soon</p>
          <p className="k2k-text-secondary mt-1 text-sm">
            Seasonal drops, pickup reminders, and bakery news for Daniel Island neighbors.
          </p>
        </div>
        <div
          className="flex w-full shrink-0 items-center gap-3 rounded-full border border-[#111111] bg-[#f8f4ed]/60 px-5 py-3 sm:w-auto"
          aria-hidden="true"
        >
          <span className="k2k-text-secondary text-sm">your@email.com</span>
          <span className="ml-auto rounded-full bg-k2k-blue/10 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-k2k-navy/60">
            Soon
          </span>
        </div>
      </div>
    </div>
  );
}

export function Footer({ showMobileBarOffset = false }: { showMobileBarOffset?: boolean }) {
  return (
    <footer
      className={cn(
        "relative mt-0 overflow-hidden border-t border-k2k-black/[0.06] bg-[#f8f4ed]",
        showMobileBarOffset && "k2k-footer-mobile-pad",
      )}
    >
      <img
        src={KTK_DECOR.cornerFlourish}
        alt=""
        className="ktk-corner-flourish"
        loading="lazy"
        aria-hidden
      />
      <div className="pt-10">
        <FooterScoringDivider />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:px-8 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1 lg:pr-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <BrandLogo
              variant="footer"
              className="!h-14 !w-14 sm:!h-16 sm:!w-16 lg:!h-[4.5rem] lg:!w-[4.5rem]"
            />
            <div className="min-w-0 pt-0.5">
              <p className="k2k-wordmark-title text-base sm:text-lg">Knead To Know</p>
              <p className="k2k-wordmark-tagline mt-0.5">Sweet &amp; Sour</p>
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-k2k-blue/75">
                Est. {BUSINESS.established}
              </p>
            </div>
          </div>
          <p className="k2k-text-secondary mt-6 max-w-xs text-sm leading-relaxed">
            Freshly baked sourdough bread, cookies, and bagels by pre-order only. Daniel Island,
            South Carolina.
          </p>
        </div>

        {/* Explore column */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
            <Compass className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Explore
          </h4>
          <ul className="mt-4 space-y-1 sm:mt-5 sm:space-y-1.5">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="k2k-text-secondary inline-flex min-h-11 items-center py-1 text-sm font-medium transition-colors hover:text-k2k-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About column */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
            <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden />
            About
          </h4>
          <ul className="mt-4 space-y-1 sm:mt-5 sm:space-y-1.5">
            {ABOUT_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="k2k-text-secondary inline-flex min-h-11 items-center py-1 text-sm font-medium transition-colors hover:text-k2k-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Contact
          </h4>
          <ul className="k2k-text-body mt-4 space-y-2.5 text-sm sm:mt-5 sm:space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-k2k-blue" />
              <span>
                {BUSINESS.address}
                <br />
                <span className="k2k-text-secondary">{BUSINESS.serviceArea}</span>
              </span>
            </li>
            {BUSINESS.phone && (
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a
                  href={BUSINESS.phoneTel}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-k2k-blue"
                >
                  {BUSINESS.phone}
                </a>
              </li>
            )}
            {BUSINESS.email && (
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex min-h-11 items-center break-all transition-colors hover:text-k2k-blue"
                >
                  {BUSINESS.email}
                </a>
              </li>
            )}
            {BUSINESS.instagramUrl && BUSINESS.instagramHandle && (
              <li className="flex items-center gap-2.5">
                <Instagram className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-k2k-blue"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>
            )}
            {!BUSINESS.email && !BUSINESS.instagramUrl && BUSINESS.phone && (
              <li className="k2k-text-secondary">
                Call{" "}
                <a href={BUSINESS.phoneTel} className="underline hover:text-k2k-blue">
                  {BUSINESS.phone}
                </a>{" "}
                or use the{" "}
                <Link to="/contact" className="underline hover:text-k2k-blue">
                  contact form
                </Link>
                .
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="px-5 pb-12 sm:px-8">
        <NewsletterPlaceholder />
      </div>

      <div className="border-t border-k2k-blue/10">
        <div className="k2k-text-secondary mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs sm:flex-row sm:px-8">
          <p>© 2026 {BUSINESS.name} · Baked with love on Daniel Island, SC</p>
          {BUSINESS.instagramUrl ? (
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-k2k-blue"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-ink/40">
              <Instagram className="h-3.5 w-3.5" />
              Instagram coming soon
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
