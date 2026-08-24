import { ChannelCardProps } from "@/types/types";
import {
  SurfaceCard,
  SurfaceIcon,
  SurfaceDivider,
} from "@/components/ui/surface-card";
import { IoIosArrowForward } from "react-icons/io";

export const ChannelsCard = ({
  icon,
  title,
  description,
  link,
  accent,
}: ChannelCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-on-scroll block rounded-2xl focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none"
    >
      <SurfaceCard accent={accent} padding="lg" className="h-full">
        <div className="flex items-start justify-between gap-4">
          <SurfaceIcon className="size-12">{icon}</SurfaceIcon>
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover/surface:border-white/25 group-hover/surface:text-white"
          >
            <IoIosArrowForward className="text-sm transition-transform duration-500 group-hover/surface:translate-x-0.5" />
          </span>
        </div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-white md:text-xl">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-white/60 transition-colors duration-300 group-hover/surface:text-white/75 sm:text-sm">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <SurfaceDivider />
          <span
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--surface-from)" }}
          >
            Acessar
            <IoIosArrowForward className="transition-transform duration-300 group-hover/surface:translate-x-1" />
          </span>
        </div>
      </SurfaceCard>
    </a>
  );
};
