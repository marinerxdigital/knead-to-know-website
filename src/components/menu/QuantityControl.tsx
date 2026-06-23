import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantityControl({
  value,
  onChange,
  min = 0,
  max = 99,
  label,
  compact = false,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  label: string;
  compact?: boolean;
}) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={cn("inline-flex items-center", compact ? "gap-1" : "gap-1.5")}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          dec();
        }}
        disabled={value <= min}
        aria-label={`Decrease quantity for ${label}`}
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-k2k-black bg-white text-k2k-navy transition hover:bg-k2k-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-k2k-blue/30 disabled:opacity-35",
          "h-11 w-11",
        )}
      >
        <Minus className="h-4 w-4" aria-hidden />
      </button>
      <span
        className={cn(
          "min-w-[2.25rem] text-center font-medium tabular-nums text-ink",
          compact ? "text-sm" : "text-base",
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          inc();
        }}
        disabled={value >= max}
        aria-label={`Increase quantity for ${label}`}
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-k2k-black bg-white text-k2k-navy transition hover:bg-k2k-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-k2k-blue/30 disabled:opacity-35",
          "h-11 w-11",
        )}
      >
        <Plus className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
