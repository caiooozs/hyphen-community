import { ChannelCardProps } from "@/types/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IoIosArrowForward } from "react-icons/io";

export const ChannelsCard = ({
  icon,
  iconBg,
  title,
  description,
  link,
  borderGradient,
  cardGlow,
}: ChannelCardProps) => {
  return (
    <Card
      className={`animate-on-scroll fluid-card-hover group relative rounded-2xl border border-blue-500/10 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-7 shadow-xl shadow-blue-950/10 ring-0 ${cardGlow}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${borderGradient} rounded-t-2xl`}
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
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
          {description}
        </p>

        <a
          href={link}
          className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors"
        >
          Acessar
          <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
};