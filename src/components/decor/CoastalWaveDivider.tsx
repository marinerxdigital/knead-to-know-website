import { useId } from "react";
import { cn } from "@/lib/utils";

const WAVE_PERIOD = 480;
const VIEW_HEIGHT = 100;

function wavePath(baseY: number, amplitude: number, periods: number, width: number) {
  const segment = width / periods;
  let d = `M 0 ${baseY}`;
  for (let i = 0; i < periods; i++) {
    const midX = i * segment + segment / 2;
    const endX = (i + 1) * segment;
    d += ` Q ${midX} ${baseY - amplitude} ${endX} ${baseY}`;
  }
  return d;
}

const PERIODS = 4;
const TOP_WAVE = wavePath(32, 14, PERIODS, WAVE_PERIOD);
const GOLD_WAVE = wavePath(50, 18, PERIODS, WAVE_PERIOD);
const BOTTOM_WAVE = wavePath(68, 14, PERIODS, WAVE_PERIOD);

function WaveSvg({
  paths,
  maskId,
}: {
  paths: { d: string; stroke: string; strokeWidth: number; opacity: number }[];
  maskId: string;
}) {
  const gradientId = `${maskId}-gradient`;
  const maskRef = `${maskId}-mask`;

  return (
    <svg
      viewBox={`0 0 ${WAVE_PERIOD} ${VIEW_HEIGHT}`}
      preserveAspectRatio="none"
      className="block h-full w-full"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="4%" stopColor="white" stopOpacity="1" />
          <stop offset="96%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={maskRef}>
          <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </mask>
      </defs>
      <g mask={`url(#${maskRef})`}>
        {paths.map((path) => (
          <path
            key={path.d}
            d={path.d}
            fill="none"
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={path.opacity}
          />
        ))}
      </g>
    </svg>
  );
}

function DriftingWaveLayer({
  driftClass,
  paths,
  maskId,
}: {
  driftClass: string;
  paths: { d: string; stroke: string; strokeWidth: number; opacity: number }[];
  maskId: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", driftClass)}>
      <div className="k2k-wave-flow-track flex h-full w-[200%]">
        <div className="h-full w-1/2 shrink-0">
          <WaveSvg paths={paths} maskId={`${maskId}-a`} />
        </div>
        <div className="h-full w-1/2 shrink-0" aria-hidden="true">
          <WaveSvg paths={paths} maskId={`${maskId}-b`} />
        </div>
      </div>
    </div>
  );
}

export function CoastalWaveDivider({ className }: { className?: string }) {
  const layerId = useId().replace(/:/g, "");

  return (
    <div
      className={cn(
        "k2k-coastal-wave-divider relative aspect-[96/14] w-full max-w-[100vw] overflow-hidden sm:aspect-[192/18]",
        className,
      )}
      aria-hidden="true"
    >
      <DriftingWaveLayer
        driftClass="k2k-wave-layer-slow"
        maskId={`${layerId}-top`}
        paths={[{ d: TOP_WAVE, stroke: "var(--k2k-blue)", strokeWidth: 3, opacity: 0.96 }]}
      />
      <DriftingWaveLayer
        driftClass="k2k-wave-layer-gold"
        maskId={`${layerId}-gold`}
        paths={[{ d: GOLD_WAVE, stroke: "var(--k2k-wheat)", strokeWidth: 4.5, opacity: 1 }]}
      />
      <DriftingWaveLayer
        driftClass="k2k-wave-layer-fast"
        maskId={`${layerId}-bottom`}
        paths={[{ d: BOTTOM_WAVE, stroke: "var(--k2k-blue)", strokeWidth: 3, opacity: 0.94 }]}
      />
    </div>
  );
}
