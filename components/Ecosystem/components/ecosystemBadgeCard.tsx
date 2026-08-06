import { EcosystemBadgeProps } from "@/types/types";
import { Card } from "@/components/ui/card";

export const EcosystemBadgeCard = ({ icon, text }: EcosystemBadgeProps) => {
  return (
    <Card className="animate-on-scroll fluid-card-hover group relative rounded-xl border border-blue-500/20 bg-gradient-to-r from-slate-900 to-blue-950 p-4 shadow-xl shadow-blue-950/10 ring-0 hover:shadow-blue-500/15">
      <div className="flex flex-row items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30">
          {icon}
        </div>
        <span className="text-white font-semibold text-xs sm:text-sm">
          {text}
        </span>
      </div>
    </Card>
  );
};
