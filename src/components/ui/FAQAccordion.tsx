import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQGroup {
  title: string;
  items: ReadonlyArray<FAQItem>;
}

interface Props {
  items?: ReadonlyArray<FAQItem>;
  groups?: ReadonlyArray<FAQGroup>;
  className?: string;
}

function FAQAccordionList({
  items,
  idPrefix,
}: {
  items: ReadonlyArray<FAQItem>;
  idPrefix: string;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={`${idPrefix}-${i}`}
          value={`${idPrefix}-item-${i}`}
          className="group/item mb-3 overflow-hidden rounded-2xl border border-k2k-blue/12 bg-white shadow-[0_4px_20px_-12px_rgba(31,52,71,0.12)] transition-all duration-300 last:mb-0 data-[state=open]:border-k2k-blue/25 data-[state=open]:shadow-[0_8px_28px_-14px_rgba(79,126,168,0.2)]"
        >
          <AccordionTrigger
            className={cn(
              "relative px-5 py-5 text-left font-display text-lg text-ink hover:no-underline sm:px-6 sm:text-xl",
              "before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-r-full before:bg-transparent before:transition-colors before:duration-300",
              "[&[data-state=open]]:text-k2k-navy [&[data-state=open]]:before:bg-wheat",
            )}
          >
            <span className="pr-4 leading-snug">{item.q}</span>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-6 text-base leading-relaxed text-muted-foreground sm:px-6">
            <div className="border-t border-k2k-blue/8 pt-4">{item.a}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQAccordion({ items, groups, className }: Props) {
  if (groups && groups.length > 0) {
    return (
      <div className={cn("space-y-12", className)}>
        {groups.map((group, gi) => (
          <div key={group.title}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-k2k-blue/15" aria-hidden />
              <h3 className="shrink-0 font-display text-xl text-k2k-navy">{group.title}</h3>
              <span className="h-px flex-1 bg-k2k-blue/15" aria-hidden />
            </div>
            <FAQAccordionList items={group.items} idPrefix={`group-${gi}`} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <FAQAccordionList items={items ?? []} idPrefix="faq" />
    </div>
  );
}