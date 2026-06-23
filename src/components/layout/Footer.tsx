import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const LOGO_SRC = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";

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
      <div className="h-px flex-1 bg-k2k-blue/15" />
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
      <div className="h-px flex-1 bg-k2k-blue/15" />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-[#f8f4ed]">
      <div className="pt-10">
        <FooterScoringDivider />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        {/* Brand column */}
        <div className="lg:pr-6">
          <div className="flex items-start gap-4">
            <img
              src={LOGO_SRC}
              alt="Knead To Know Bakery"
              className="h-16 w-16 shrink-0 rounded-full object-contain ring-1 ring-k2k-blue/15"
            />
            <div>
              <p className="font-display text-lg leading-tight text-ink">{BUSINESS.name}</p>
              <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-k2k-blue/75">
                Est. {BUSINESS.established}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Freshly baked sourdough bread, cookies, and bagels by pre-order only. Daniel Island,
            South Carolina.
          </p>
        </div>

        {/* Explore column */}
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">Explore</h4>
          <ul className="mt-5 space-y-2.5">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ink/75 transition-colors hover:text-k2k-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About column */}
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">About</h4>
          <ul className="mt-5 space-y-2.5">
            {ABOUT_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ink/75 transition-colors hover:text-k2k-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">Contact</h4>
          <ul className="mt-5 space-y-3.5 text-sm text-ink/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-k2k-blue" />
              <span>
                {BUSINESS.address}
                <br />
                <span className="text-muted-foreground">{BUSINESS.serviceArea}</span>
              </span>
            </li>
            {BUSINESS.phone && (
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a href={BUSINESS.phoneTel} className="transition-colors hover:text-k2k-blue">
                  {BUSINESS.phone}
                </a>
              </li>
            )}
            {BUSINESS.email && (
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-k2k-blue" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-k2k-blue"
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
                  className="transition-colors hover:text-k2k-blue"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>
            )}
            {!BUSINESS.email && !BUSINESS.instagramUrl && BUSINESS.phone && (
              <li className="text-muted-foreground">
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

      <div className="border-t border-k2k-blue/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
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
