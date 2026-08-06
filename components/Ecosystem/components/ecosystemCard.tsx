import { EcosystemCardProps } from "@/types/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IoIosArrowForward } from "react-icons/io";

export const EcosystemCard = ({
  icon,
  iconBg,
  title,
  titleColor,
  items,
}: EcosystemCardProps) => {
  return (
    <Card
      className={`animate-on-scroll fluid-card-hover group relative rounded-2xl border border-blue-500/10 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-7 shadow-xl shadow-blue-950/10 ring-0 hover:shadow-blue-500/15`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-blue-500/40 rounded-t-2xl`}
      />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

      <div
        className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${iconBg} mb-6 shadow-lg`}
      >
        {icon}
      </div>
      <CardTitle className="relative text-xl font-bold text-white mb-2">
        {title}
      </CardTitle>

      <CardContent className="p-0 relative">
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 text-xs sm:text-sm leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
