import { Link } from "@tanstack/react-router";

export function SeasonalBanner() {
  return (
    <aside
      className="k2k-seasonal-banner border-b border-k2k-blue/10 bg-k2k-cream"
      aria-label="Availability update"
    >
      <Link
        to="/menu"
        className="mx-auto flex min-h-9 max-w-7xl items-center justify-center overflow-hidden px-4 text-center text-[0.65rem] font-medium uppercase tracking-[0.16em] text-k2k-navy transition hover:text-k2k-blue sm:text-xs"
      >
        <span className="sr-only">
          Small-batch bakes are made to order. Pre-order early for your preferred pickup time. View
          the menu.
        </span>
        <span
          className="k2k-seasonal-banner-track flex items-center gap-3 whitespace-nowrap"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-wheat" />
          <span>Small-batch bakes made to order</span>
          <span className="text-k2k-blue/45">•</span>
          <span>Pre-order early for your preferred pickup time</span>
          <span className="text-k2k-blue underline underline-offset-4">View menu</span>
        </span>
      </Link>
    </aside>
  );
}
