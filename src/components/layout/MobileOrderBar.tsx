import { Link, useRouterState } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const HIDE_ON = ["/custom-orders", "/contact", "/menu"] as const;

export function isMobileOrderBarVisible(pathname: string) {
  return !HIDE_ON.includes(pathname as (typeof HIDE_ON)[number]);
}

export function MobileOrderBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (!isMobileOrderBarVisible(pathname)) return null;

  return (
    <div
      className="k2k-mobile-bar fixed inset-x-0 bottom-0 border-t border-[#111111] bg-white/95 px-4 pt-3 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick order actions"
    >
      <div className="mx-auto flex max-w-lg items-stretch gap-2.5">
        <a
          href={BUSINESS.phoneTel}
          className="k2k-button k2k-button-outline inline-flex !min-h-11 flex-1 items-center justify-center gap-2 !px-4 !text-[0.68rem] !tracking-[0.16em]"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden />
          Call
        </a>
        <Link
          to="/custom-orders"
          className="k2k-button k2k-button-primary inline-flex !min-h-11 flex-[1.35] items-center justify-center !px-4 !text-[0.68rem] !tracking-[0.16em]"
        >
          Pre-Order Now
        </Link>
      </div>
    </div>
  );
}
