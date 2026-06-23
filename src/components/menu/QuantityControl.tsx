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
      className={cn("inline-flex items-center gap-1", compact ? "gap-0.5" : "gap-1")}
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
          "inline-flex items-center justify-center rounded-full border border-k2k-black bg-white text-k2k-navy transition hover:bg-k2k-cream disabled:opacity-35",
          compact ? "h-8 w-8" : "h-9 w-9",
        )}
      >
        <Minus className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden />
      </button>
      <span
        className={cn(
          "min-w-[2rem] text-center font-medium tabular-nums text-ink",
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
          "inline-flex items-center justify-center rounded-full border border-k2k-black bg-white text-k2k-navy transition hover:bg-k2k-cream disabled:opacity-35",
          compact ? "h-8 w-8" : "h-9 w-9",
        )}
      >
        <Plus className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} aria-hidden />
      </button>
    </div>
  );
}
