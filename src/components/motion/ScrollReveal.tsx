import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDelay = 0 | 1 | 2 | 3 | 4;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  id,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: RevealDelay;
  id?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref as never}
      className={cn(
        "k2k-reveal",
        visible && "k2k-revealed",
        delay > 0 && `k2k-reveal-delay-${delay}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
}
