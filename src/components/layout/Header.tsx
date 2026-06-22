import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_URL = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/catering", label: "Catering" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={LOGO_URL}
            alt="Knead To Know Bakery"
            className="h-14 w-14 rounded-full object-contain md:h-16 md:w-16 lg:h-12 lg:w-12"
          />
          <span className="hidden font-display text-lg tracking-wide text-ink sm:block">
            Knead To Know
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative text-sm tracking-wide text-ink/75 transition hover:text-k2k-blue",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-k2k-blue after:transition-all after:content-['']",
                pathname === item.to && "text-k2k-blue after:w-full",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/custom-orders"
            className="hidden h-11 items-center justify-center rounded-full bg-k2k-blue px-5 text-sm font-medium text-white transition hover:bg-k2k-navy md:inline-flex"
          >
            Request an Order
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-base text-ink/80 hover:bg-white",
                  pathname === item.to && "bg-white text-k2k-blue",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/custom-orders"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-k2k-blue px-6 text-sm font-medium text-white"
            >
              Request an Order
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
