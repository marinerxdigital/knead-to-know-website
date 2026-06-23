import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/business";
import { BrandLogo } from "@/components/brand/BrandLogo";

const WHEAT_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png";

/** Center nav per premium brief — full nav remains in mobile drawer */
const PRIMARY_NAV = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const MOBILE_NAV = [
  { to: "/", label: "Home" },
  ...PRIMARY_NAV,
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/catering", label: "Catering" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-k2k-blue/15 bg-white/95 shadow-[0_8px_32px_-12px_rgba(31,52,71,0.12)] backdrop-blur-md"
            : "border-b border-transparent bg-white/85 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 transition-[height] duration-300 sm:px-8 lg:grid-cols-[1fr_auto_1fr]",
            scrolled ? "h-[4.5rem] lg:h-[5rem]" : "h-[5.25rem] sm:h-[5.5rem] lg:h-[6.25rem]",
          )}
        >
          {/* Logo + wordmark */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 sm:gap-4"
            onClick={() => setOpen(false)}
          >
            <BrandLogo
              variant={scrolled ? "header-compact" : "header"}
              className="transition-all duration-300 group-hover:scale-[1.03]"
            />
            <span className="hidden min-w-0 flex-col md:flex">
              <span className="flex items-center gap-1.5">
                <img src={WHEAT_ICON} alt="" className="h-4 w-4 opacity-70" aria-hidden />
                <span className="truncate font-display text-base leading-tight tracking-wide text-ink transition-colors group-hover:text-k2k-navy lg:text-lg">
                  Knead To Know
                </span>
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-k2k-blue/75 lg:text-[0.7rem]">
                Sweet &amp; Sour
              </span>
            </span>
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
            {PRIMARY_NAV.map((item) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "group relative px-4 py-2 text-sm tracking-wide transition-colors duration-200",
                    isActive ? "text-k2k-blue" : "text-ink/70 hover:text-k2k-blue",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-4 right-4 h-px origin-left bg-k2k-blue transition-transform duration-300 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Phone + Pre-Order */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <a
              href={BUSINESS.phoneTel}
              className="hidden items-center gap-1.5 rounded-full border border-k2k-blue/15 px-3.5 py-2 text-sm font-medium text-k2k-navy transition hover:border-k2k-blue/30 hover:bg-k2k-blue/5 md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-k2k-blue" aria-hidden />
              <span className="hidden xl:inline">{BUSINESS.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <Link
              to="/custom-orders"
              className="k2k-button k2k-button-primary hidden !min-h-10 !px-5 !text-[0.68rem] !tracking-[0.18em] shadow-[0_10px_28px_-8px_rgba(79,126,168,0.45)] hover:shadow-[0_14px_32px_-8px_rgba(79,126,168,0.55)] sm:inline-flex"
            >
              Pre-Order Now
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
                open
                  ? "border-k2k-blue/30 bg-k2k-blue text-white"
                  : "border-border bg-background text-ink hover:border-k2k-blue/25",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 bg-k2k-navy/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-x-0 top-[5.25rem] z-[35] sm:top-[5.5rem] lg:top-[6.25rem] max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-b border-k2k-blue/15 bg-white shadow-[0_24px_48px_-16px_rgba(31,52,71,0.18)] transition-all duration-300 ease-out lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6 sm:px-8">
          <a
            href={BUSINESS.phoneTel}
            className="mb-4 flex items-center justify-center gap-2 rounded-2xl border border-k2k-blue/15 bg-[#f8f4ed] py-3.5 text-sm font-medium text-k2k-navy"
          >
            <Phone className="h-4 w-4 text-k2k-blue" />
            {BUSINESS.phone}
          </a>

          <ul className="space-y-1">
            {MOBILE_NAV.map((item) => {
              const isActive = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base transition-colors",
                      isActive
                        ? "bg-[#f8f4ed] font-medium text-k2k-blue"
                        : "text-ink/80 hover:bg-[#f8f4ed]/80 hover:text-k2k-blue",
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-wheat" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/custom-orders"
            onClick={() => setOpen(false)}
            className="k2k-button k2k-button-primary mt-6 w-full !min-h-12 shadow-[0_10px_28px_-8px_rgba(79,126,168,0.45)]"
          >
            Pre-Order Now
          </Link>
        </nav>
      </div>
    </>
  );
}
