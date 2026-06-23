import { Link, useRouterState } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const HIDE_ON = ["/custom-orders", "/contact"];

export function MobileOrderBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (HIDE_ON.includes(pathname)) return null;

  return (
    <div
      className="k2k-mobile-bar fixed inset-x-0 bottom-0 z-30 border-t border-k2k-black/10 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick order actions"
    >
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={BUSINESS.phoneTel}
          className="k2k-button k2k-button-outline inline-flex !min-h-11 flex-1 items-center justify-center gap-2 !px-4 !text-[0.65rem]"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden />
          Call
        </a>
        <Link
          to="/custom-orders"
          className="k2k-button k2k-button-primary inline-flex !min-h-11 flex-[1.4] items-center justify-center !px-4 !text-[0.65rem]"
        >
          Pre-Order Now
        </Link>
      </div>
    </div>
  );
}
