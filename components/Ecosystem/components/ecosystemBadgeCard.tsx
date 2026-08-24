import { EcosystemBadgeProps } from "@/types/types";
import { SurfaceCard, SurfaceIcon } from "@/components/ui/surface-card";

export const EcosystemBadgeCard = ({
  icon,
  text,
  accent = "cyan",
}: EcosystemBadgeProps) => {
  return (
    <SurfaceCard accent={accent} padding="sm" className="animate-on-scroll">
      <div className="flex flex-row items-center gap-3">
        <SurfaceIcon className="size-9 rounded-lg">{icon}</SurfaceIcon>
        <span className="text-xs font-semibold text-white sm:text-sm">
          {text}
        </span>
      </div>
    </SurfaceCard>
  );
};
