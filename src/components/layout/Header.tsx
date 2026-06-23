import { useEffect, useRef, useState } from "react";
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
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const measure = () => setHeaderHeight(el.getBoundingClientRect().height);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [scrolled]);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "k2k-site-header sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-k2k-blue/15 bg-white/95 shadow-[0_8px_32px_-12px_rgba(31,52,71,0.12)] backdrop-blur-md"
            : "border-b border-transparent bg-white/85 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-[minmax(0,auto)_1fr_auto] items-center gap-2 px-4 transition-[height] duration-300 sm:gap-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:px-8",
            scrolled
              ? "h-[4.25rem] sm:h-[4.5rem] lg:h-[5rem]"
              : "h-[4.5rem] sm:h-[5rem] lg:h-[5.75rem]",
          )}
        >
          {/* Logo + wordmark */}
          <Link
            to="/"
            className="group flex min-w-0 max-w-full items-center gap-2.5 sm:gap-3 lg:gap-4"
            onClick={() => setOpen(false)}
          >
            <BrandLogo
              variant={scrolled ? "header-compact" : "header"}
              className={cn(
                "shrink-0 transition-all duration-300 group-hover:scale-[1.03]",
                scrolled
                  ? "!h-10 !w-10 sm:!h-11 sm:!w-11 md:!h-12 md:!w-12 lg:!h-[3.5rem] lg:!w-[3.5rem]"
                  : "!h-11 !w-11 sm:!h-12 sm:!w-12 md:!h-14 md:!w-14 lg:!h-16 lg:!w-16 xl:!h-[4.5rem] xl:!w-[4.5rem]",
              )}
            />
            <span className="hidden min-w-0 flex-col overflow-hidden sm:flex">
              <span className="flex min-w-0 items-center gap-1.5">
                <img
                  src={WHEAT_ICON}
                  alt=""
                  className="k2k-icon-hover h-3.5 w-3.5 shrink-0 opacity-70 sm:h-4 sm:w-4"
                  aria-hidden
                />
                <span className="k2k-wordmark-title truncate group-hover:text-k2k-navy">
                  Knead To Know
                </span>
              </span>
              <span className="k2k-wordmark-tagline truncate">Sweet &amp; Sour</span>
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
                    "k2k-nav-link group relative px-4 py-2.5 text-sm",
                    isActive && "k2k-nav-link--active",
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
          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 lg:gap-3">
            <a
              href={BUSINESS.phoneTel}
              className="hidden min-h-11 items-center gap-1.5 rounded-full border border-k2k-blue/15 px-3.5 py-2 text-sm font-bold text-k2k-navy transition hover:border-k2k-blue/30 hover:bg-k2k-blue/5 md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-k2k-blue" aria-hidden />
              <span className="hidden xl:inline">{BUSINESS.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <Link
              to="/custom-orders"
              className="k2k-button k2k-button-primary hidden !min-h-11 !px-5 !text-[0.68rem] !tracking-[0.18em] shadow-[0_10px_28px_-8px_rgba(59,110,145,0.45)] hover:shadow-[0_14px_32px_-8px_rgba(59,110,145,0.55)] sm:inline-flex"
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
          "k2k-mobile-nav-drawer fixed inset-x-0 z-[35] overflow-y-auto overscroll-contain border-b border-[#111111] bg-white shadow-[0_24px_48px_-16px_rgba(31,52,71,0.18)] transition-all duration-300 ease-out lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
        style={{
          top: headerHeight > 0 ? headerHeight : undefined,
          maxHeight: headerHeight > 0 ? `calc(100dvh - ${headerHeight}px)` : undefined,
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6 lg:px-8">
          <a
            href={BUSINESS.phoneTel}
            className="k2k-bordered mb-3 flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-[#f8f4ed] px-4 py-3 text-sm font-bold text-k2k-navy"
          >
            <Phone className="h-4 w-4 text-k2k-blue" />
            {BUSINESS.phone}
          </a>

          <ul className="space-y-0.5">
            {MOBILE_NAV.map((item) => {
              const isActive = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "k2k-nav-link--mobile flex min-h-11 items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors",
                      PRIMARY_NAV.some((n) => n.to === item.to)
                        ? isActive
                          ? "bg-[#f8f4ed] text-k2k-navy"
                          : "text-k2k-black hover:bg-[#f8f4ed]/80 hover:text-k2k-blue"
                        : isActive
                          ? "bg-[#f8f4ed] text-k2k-blue"
                          : "k2k-text-secondary hover:bg-[#f8f4ed]/80 hover:text-k2k-blue",
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
            className="k2k-button k2k-button-primary mt-5 w-full !min-h-12 !text-[0.72rem] shadow-[0_10px_28px_-8px_rgba(59,110,145,0.45)]"
          >
            Pre-Order Now
          </Link>
        </nav>
      </div>
    </>
  );
}
