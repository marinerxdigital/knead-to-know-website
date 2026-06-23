import { MessageCircle, Phone, ShoppingBag, ShoppingCart, Trash2, X } from "lucide-react";
import type { TrayLine } from "@/lib/preorder-tray";
import {
  buildSmsHref,
  estimatedTotal,
  formatMoney,
  itemCount,
  orderDisplayName,
  trayDetails,
} from "@/lib/preorder-tray";
import { QuantityControl } from "@/components/menu/QuantityControl";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

function TrayContent({
  lines,
  onSetQty,
  onRemove,
  onClear,
  className,
}: {
  lines: TrayLine[];
  onSetQty: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
  className?: string;
}) {
  const details = trayDetails(lines);
  const total = estimatedTotal(lines);
  const count = itemCount(lines);
  const isEmpty = count === 0;

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="border-b border-k2k-black/10 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-k2k-blue" aria-hidden />
          <h2 className="font-display text-xl text-ink">Pre-Order Tray</h2>
        </div>
        <p className="mt-1 text-xs text-k2k-navy">
          {BUSINESS.orderingModel} · {BUSINESS.fulfillment}
        </p>
      </div>

      {isEmpty ? (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-k2k-black/15 bg-k2k-cream/60">
            <ShoppingCart className="h-6 w-6 text-k2k-blue" aria-hidden />
          </span>
          <p className="font-display text-xl text-ink">Your tray is empty</p>
          <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-k2k-navy/90">
            Tap any menu item to add it here. When you&apos;re ready, text Wendy your tray — no
            checkout, just a quick SMS.
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy">
            Pre-order only · Baked fresh to order
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="k2k-button k2k-button-outline mt-6 inline-flex !min-h-11 items-center gap-2 !px-6 !text-xs"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Wendy
          </a>
        </div>
      ) : (
        <>
          <ul className="max-h-[min(42vh,320px)] flex-1 space-y-3 overflow-y-auto px-5 py-4 sm:max-h-[360px] sm:px-6">
            {details.map((line) => (
              <li
                key={line.productId}
                className="k2k-surface rounded-xl p-3 transition duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-display text-sm text-ink">
                      {orderDisplayName(line.product)}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-k2k-navy">
                      {line.product.priceLabel}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(line.productId)}
                    aria-label={`Remove ${line.product.name} from tray`}
                    className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-k2k-navy/50 transition hover:bg-k2k-cream hover:text-k2k-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-k2k-blue/30"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <QuantityControl
                    value={line.quantity}
                    onChange={(q) => onSetQty(line.productId, q)}
                    min={0}
                    label={line.product.name}
                    compact
                  />
                  <span className="text-sm font-medium tabular-nums text-k2k-navy">
                    {formatMoney(line.lineTotal)}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-k2k-black/10 px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy/90">
                Estimated Total
              </span>
              <span className="font-display text-2xl tabular-nums text-ink">
                {formatMoney(total)}
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-k2k-navy/90">
              Final order timing and availability are confirmed directly with Wendy.
            </p>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={buildSmsHref(lines)}
                className="k2k-button k2k-button-primary inline-flex w-full !min-h-11 items-center justify-center gap-2 !text-xs"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Text Wendy
              </a>
              <a
                href={BUSINESS.phoneTel}
                className="k2k-button k2k-button-outline inline-flex w-full !min-h-11 items-center justify-center gap-2 !text-xs"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Wendy
              </a>
              <button
                type="button"
                onClick={onClear}
                className="text-xs font-medium uppercase tracking-wider text-k2k-navy/60 transition hover:text-k2k-blue"
              >
                Clear order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** Desktop sticky sidebar tray */
export function PreOrderTraySidebar({
  lines,
  onSetQty,
  onRemove,
  onClear,
}: {
  lines: TrayLine[];
  onSetQty: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
}) {
  return (
    <aside
      className="k2k-preorder-tray-sidebar k2k-surface sticky top-[5.5rem] hidden h-fit w-full max-h-[calc(100vh-6.5rem)] min-w-[280px] max-w-[340px] overflow-hidden rounded-[1.75rem] lg:flex lg:flex-col lg:self-start"
      aria-label="Pre-order tray"
    >
      <TrayContent lines={lines} onSetQty={onSetQty} onRemove={onRemove} onClear={onClear} />
    </aside>
  );
}

/** Mobile bottom drawer */
export function PreOrderTrayMobile({
  lines,
  onSetQty,
  onRemove,
  onClear,
  expanded,
  onToggle,
}: {
  lines: TrayLine[];
  onSetQty: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
  expanded: boolean;
  onToggle: () => void;
}) {
  const count = itemCount(lines);
  const total = estimatedTotal(lines);

  return (
    <div className="k2k-preorder-tray-mobile fixed inset-x-0 bottom-0 z-40 lg:hidden">
      {expanded && (
        <button
          type="button"
          aria-label="Close pre-order tray"
          className="fixed inset-0 bg-k2k-navy/25 backdrop-blur-[2px]"
          onClick={() => onToggle()}
        />
      )}

      <div
        className={cn(
          "relative border-t border-k2k-black bg-white shadow-[0_-12px_40px_-8px_rgba(17,17,17,0.15)] transition-transform duration-300 ease-out",
          expanded ? "k2k-tray-drawer-open" : "",
        )}
      >
        {!expanded && (
          <div className="flex items-center gap-2.5 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-k2k-black bg-k2k-blue text-sm font-bold text-white">
                {count}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">
                  {count === 0 ? "Pre-Order Tray" : `${count} item${count === 1 ? "" : "s"}`}
                </p>
                {count > 0 ? (
                  <p className="text-xs tabular-nums text-k2k-blue">Est. {formatMoney(total)}</p>
                ) : (
                  <p className="truncate text-xs text-k2k-navy">
                    Tap items to build your tray
                  </p>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={expanded}
              aria-controls="mobile-preorder-tray"
              className="k2k-button k2k-button-primary !min-h-11 shrink-0 !px-4 !text-[10px] sm:!px-5"
            >
              {count === 0 ? "View Tray" : "Review Order"}
            </button>
            {count === 0 && (
              <a
                href={BUSINESS.phoneTel}
                className="k2k-button k2k-button-outline inline-flex !min-h-11 !min-w-11 shrink-0 items-center justify-center !px-0"
                aria-label="Call Wendy"
              >
                <Phone className="h-4 w-4" />
              </a>
            )}
          </div>
        )}

        {expanded && (
          <div
            id="mobile-preorder-tray"
            className="k2k-tray-drawer-panel max-h-[min(78vh,520px)] overflow-hidden"
          >
            <button
              type="button"
              onClick={onToggle}
              aria-label="Close tray"
              className="absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-k2k-black/20"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <TrayContent
              lines={lines}
              onSetQty={onSetQty}
              onRemove={onRemove}
              onClear={onClear}
              className="max-h-[min(78vh,520px)]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
