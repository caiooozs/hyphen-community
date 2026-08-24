import { EcosystemCardProps } from "@/types/types";
import {
  SurfaceCard,
  SurfaceEyebrow,
  SurfaceDivider,
} from "@/components/ui/surface-card";

export const EcosystemCard = ({
  number,
  title,
  accent,
  items,
}: EcosystemCardProps) => {
  const label = number.toString().padStart(2, "0");

  return (
    <SurfaceCard accent={accent} padding="lg" className="animate-on-scroll">
      {/* watermark numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-1 z-0 text-[6rem] leading-none font-bold text-white/[0.04] transition-colors duration-500 select-none group-hover/surface:text-white/[0.07]"
      >
        {label}
      </span>

      <div className="flex items-center gap-3">
        <span
          className="grid size-8 place-items-center rounded-lg border border-white/10 text-xs font-bold text-white"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--surface-from) 28%, transparent), color-mix(in oklab, var(--surface-to) 28%, transparent))",
          }}
        >
          {label}
        </span>
        <SurfaceEyebrow>Pilar</SurfaceEyebrow>
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-white md:text-xl">
        {title}
      </h3>

      <span
        aria-hidden
        className="mt-3 block h-[2px] w-10 rounded-full transition-all duration-500 group-hover/surface:w-16"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--surface-from), var(--surface-to))",
        }}
      />

      <SurfaceDivider className="mt-5" />

      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-xs leading-relaxed text-white/60 transition-colors duration-300 group-hover/surface:text-white/75 sm:text-sm"
          >
            <span
              aria-hidden
              className="mt-[0.45rem] size-1.5 shrink-0 rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--surface-from), var(--surface-to))",
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </SurfaceCard>
  );
};
