/**
 * Subtle section divider — a thin forest-green hairline flanked by a small
 * leaf accent. Used between major homepage sections to give soft visual
 * rhythm without adding noise. Keep usage sparing.
 */
export function SectionDivider({
  bg = "cream",
}: {
  bg?: "cream" | "blush" | "beige" | "white";
}) {
  const bgClass = {
    cream: "bg-cream",
    blush: "bg-blush",
    beige: "bg-beige/60",
    white: "bg-white",
  }[bg];
  return (
    <div className={bgClass} aria-hidden="true">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-2 sm:px-8">
        <div className="h-px flex-1 bg-forest/15" />
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          className="text-forest/60"
        >
          <path
            d="M1 5c3-4 6-4 8 0 2-4 5-4 8 0"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
        <div className="h-px flex-1 bg-forest/15" />
      </div>
    </div>
  );
}
