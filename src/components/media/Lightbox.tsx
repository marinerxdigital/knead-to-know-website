import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxSlide {
  id: string;
  url: string;
  alt: string;
  caption: string;
  kind?: "image" | "video";
  poster?: string;
  category?: string;
}


interface LightboxProps {
  slides: LightboxSlide[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}

export function Lightbox({ slides, index, onClose, onIndexChange }: LightboxProps) {
  const total = slides.length;
  const current = slides[index];

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [goPrev, goNext, onClose]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cake media viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close viewer"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <figure
        className="relative mx-auto flex max-h-[90vh] w-full max-w-5xl flex-col items-center px-4 sm:px-12"
        onClick={(e) => e.stopPropagation()}
      >
        {current.kind === "video" ? (
          <video
            key={current.id}
            src={current.url}
            poster={current.poster}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="auto"
            className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
          />

        ) : (
          <img
            src={current.url}
            alt={current.alt}
            className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
          />
        )}
        <figcaption className="mt-4 max-w-2xl text-center text-white">
          {current.category && (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
              {current.category}
            </p>
          )}
          <p className="mt-1 font-display text-lg sm:text-xl">{current.caption}</p>
          {total > 1 && (
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
              {index + 1} / {total}
            </p>
          )}
        </figcaption>
      </figure>
    </div>
  );
}
