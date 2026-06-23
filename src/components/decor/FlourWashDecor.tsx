import { KTK_DECOR } from "@/lib/design-assets";
import { cn } from "@/lib/utils";

export function FlourWashDecor({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute z-0 overflow-visible", className)} aria-hidden>
      <div className="k2k-fog-wash-motion">
        <img
          src={KTK_DECOR.flourWash}
          alt=""
          className="ktk-flour-wash-img block max-w-none"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
