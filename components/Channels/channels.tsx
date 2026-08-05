"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "../ui/badge";
import { FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardTitle, CardContent } from "../ui/card";

const channels = [
  {
    icon: <FaDiscord className="text-2xl text-white" />,
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    title: "Discord",
    description:
      "Nosso hub principal. Canais por área, mentorias e eventos ao vivo.",
    link: "https://discord.gg/RK8qqKE2bn",
    borderGradient: "from-indigo-500/40 via-purple-500/40 to-blue-500/40",
    cardGlow: "hover:shadow-indigo-500/15",
  },
  {
    icon: <FaInstagram className="text-2xl text-white" />,
    iconBg: "bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600",
    title: "Instagram",
    description: "Conteúdo educativo, eventos e bastidores da comunidade.",
    link: "https://www.instagram.com/hyphencommunity",
    borderGradient: "from-pink-500/40 via-rose-500/40 to-purple-500/40",
    cardGlow: "hover:shadow-pink-500/15",
  },
];

export default function Channels() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="channels"
      ref={sectionRef}
      className="flex flex-col justify-center items-center min-h-[90vh] py-16 px-4 md:px-6 w-full bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="animate-on-scroll mb-4 z-10">
        <Badge
          variant="outline"
          className="px-4 py-2 gap-2 border-gray-700 text-gray-300 bg-gray-900/50 backdrop-blur-sm"
        >
          <LuShare2 className="text-sm" />
          Conecte-se
        </Badge>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-3 animate-on-scroll z-10">
        Entre nos nossos{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          canais
        </span>
      </h2>

      <p className="text-gray-400 text-center text-sm sm:text-base md:text-lg mb-10 md:mb-12 max-w-2xl px-2 animate-on-scroll z-10">
        Escolha o canal que mais combina com você e comece a fazer parte da
        comunidade agora mesmo.
      </p>

      {/* Channel cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl z-10">
        {channels.map((channel, index) => (
          <Card
            key={index}
            className={`animate-on-scroll fluid-card-hover group relative rounded-2xl border border-blue-500/10 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-7 shadow-xl shadow-blue-950/10 ring-0 ${channel.cardGlow}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            {/* Colored top border glow */}
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${channel.borderGradient} rounded-t-2xl`}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <div
              className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${channel.iconBg} mb-6 shadow-lg`}
            >
              {channel.icon}
            </div>

            <CardTitle className="relative text-xl font-bold text-white mb-2">
              {channel.title}
            </CardTitle>

            <CardContent className="p-0 relative">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                {channel.description}
              </p>

              <a
                href={channel.link}
                className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors"
              >
                Acessar
                <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
