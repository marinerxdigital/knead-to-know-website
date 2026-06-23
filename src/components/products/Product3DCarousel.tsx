import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

const AUTOPLAY_MS = 4000;
const TRANSITION_MS = 750;

type CarouselOffset = -3 | -2 | -1 | 0 | 1 | 2 | 3;

interface CardPose {
  offset: CarouselOffset | number;
  translateX: number;
  translateZ: number;
  rotateY: number;
  scale: number;
  opacity: number;
  zIndex: number;
  pointerEvents: "auto" | "none";
  filter?: string;
}

function wrapOffset(index: number, activeIndex: number, total: number): number {
  let offset = index - activeIndex;
  const half = total / 2;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

function getCardPose(offset: number, compact: boolean): CardPose {
  const xUnit = compact ? 155 : 260;
  const zUnit = compact ? 90 : 150;

  const poses: Record<string, Omit<CardPose, "offset">> = {
    "0": {
      translateX: 0,
      translateZ: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 20,
      pointerEvents: "auto",
    },
    "-1": {
      translateX: -xUnit,
      translateZ: -zUnit,
      rotateY: compact ? 22 : 28,
      scale: compact ? 0.86 : 0.88,
      opacity: 0.88,
      zIndex: 12,
      pointerEvents: "none",
      filter: "brightness(0.97)",
    },
    "1": {
      translateX: xUnit,
      translateZ: -zUnit,
      rotateY: compact ? -22 : -28,
      scale: compact ? 0.86 : 0.88,
      opacity: 0.88,
      zIndex: 12,
      pointerEvents: "none",
      filter: "brightness(0.97)",
    },
    "-2": {
      translateX: -xUnit * 1.55,
      translateZ: -zUnit * 2.1,
      rotateY: compact ? 42 : 52,
      scale: compact ? 0.72 : 0.76,
      opacity: 0.35,
      zIndex: 6,
      pointerEvents: "none",
      filter: "brightness(0.92) blur(0.3px)",
    },
    "2": {
      translateX: xUnit * 1.55,
      translateZ: -zUnit * 2.1,
      rotateY: compact ? -42 : -52,
      scale: compact ? 0.72 : 0.76,
      opacity: 0.35,
      zIndex: 6,
      pointerEvents: "none",
      filter: "brightness(0.92) blur(0.3px)",
    },
  };

  if (Math.abs(offset) > 2) {
    const sign = offset < 0 ? -1 : 1;
    return {
      offset,
      translateX: sign * xUnit * 2.2,
      translateZ: -zUnit * 3,
      rotateY: sign * (compact ? 65 : 72),
      scale: 0.62,
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    };
  }

  const key = String(Math.max(-2, Math.min(2, offset)));
  return { offset, ...poses[key] };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useCompactCarousel() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return compact;
}

interface Product3DCarouselProps {
  products: Product[];
  className?: string;
  headingId?: string;
}

export function Product3DCarousel({
  products,
  className,
  headingId = "featured-products-carousel",
}: Product3DCarouselProps) {
  const total = products.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const compact = useCompactCarousel();
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const autoplayEnabled = !reducedMotion && !isPaused && !isHovering && total > 1;

  useEffect(() => {
    if (!autoplayEnabled) return;
    const id = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplayEnabled, goNext]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 48) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const activeProduct = products[activeIndex];

  if (total === 0) return null;

  if (reducedMotion) {
    return (
      <div className={cn("space-y-8", className)}>
        <div
          className="k2k-3d-carousel-reduced mx-auto max-w-md"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured bakery products"
        >
          <K2KProductCard product={activeProduct} className="w-full" />
        </div>
        <CarouselControls
          activeIndex={activeIndex}
          total={total}
          isPaused
          reducedMotion
          onPrev={goPrev}
          onNext={goNext}
          onTogglePause={() => {}}
          onGoTo={goTo}
        />
        <CarouselFooter />
      </div>
    );
  }

  return (
    <div className={cn("k2k-3d-carousel-root", className)}>
      <div
        ref={rootRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured bakery products"
        aria-labelledby={headingId}
        className="k2k-3d-carousel-focusable outline-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsHovering(false);
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="k2k-3d-carousel-viewport">
          <div className="k2k-3d-carousel-stage">
            {products.map((product, index) => {
              const offset = wrapOffset(index, activeIndex, total);
              const pose = getCardPose(offset, compact);

              return (
                <div
                  key={product.id}
                  className={cn(
                    "k2k-3d-carousel-item",
                    offset === 0 && "k2k-3d-carousel-item--active",
                  )}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${pose.translateX}px) translateZ(${pose.translateZ}px) rotateY(${pose.rotateY}deg) scale(${pose.scale})`,
                    opacity: pose.opacity,
                    zIndex: pose.zIndex,
                    pointerEvents: pose.pointerEvents,
                    filter: pose.filter,
                    transitionDuration: `${TRANSITION_MS}ms`,
                  }}
                  aria-hidden={offset !== 0}
                >
                  <K2KProductCard
                    product={product}
                    className={cn(
                      "k2k-3d-carousel-card w-[min(100%,280px)] sm:w-[min(100%,300px)] md:w-[320px]",
                      offset === 0 && "shadow-[var(--k2k-shadow-lg)]",
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {activeProduct.name}
          {activeProduct.price ? `, ${activeProduct.price}` : ""}
        </p>
      </div>

      <CarouselControls
        activeIndex={activeIndex}
        total={total}
        isPaused={isPaused || isHovering}
        reducedMotion={false}
        onPrev={goPrev}
        onNext={goNext}
        onTogglePause={() => setIsPaused((p) => !p)}
        onGoTo={goTo}
      />

      <CarouselFooter />
    </div>
  );
}

function CarouselControls({
  activeIndex,
  total,
  isPaused,
  reducedMotion,
  onPrev,
  onNext,
  onTogglePause,
  onGoTo,
}: {
  activeIndex: number;
  total: number;
  isPaused: boolean;
  reducedMotion: boolean;
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
  onGoTo: (index: number) => void;
}) {
  return (
    <div className="mt-8 flex flex-col items-center gap-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="k2k-3d-carousel-btn"
          aria-label="Previous product"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>

        {!reducedMotion && (
          <button
            type="button"
            onClick={onTogglePause}
            className="k2k-3d-carousel-btn k2k-3d-carousel-btn--subtle"
            aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
          >
            {isPaused ? (
              <Play className="h-4 w-4" aria-hidden />
            ) : (
              <Pause className="h-4 w-4" aria-hidden />
            )}
          </button>
        )}

        <button
          type="button"
          onClick={onNext}
          className="k2k-3d-carousel-btn"
          aria-label="Next product"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div
        className="flex flex-wrap items-center justify-center gap-2"
        role="tablist"
        aria-label="Product slides"
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to product ${i + 1}`}
            onClick={() => onGoTo(i)}
            className={cn(
              "h-2 rounded-full border border-k2k-black transition-all duration-300",
              i === activeIndex ? "w-7 bg-k2k-blue" : "w-2 bg-k2k-cream hover:bg-k2k-harbor/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselFooter() {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        to="/menu"
        className="k2k-button k2k-button-outline k2k-hover-lift inline-flex items-center gap-2"
      >
        Browse Full Menu
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

export default Product3DCarousel;
