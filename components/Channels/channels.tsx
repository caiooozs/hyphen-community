"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "../ui/badge";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { ChannelsCard } from "./components/channelsCard";
import type { SurfaceAccent } from "../ui/surface-card";

const channels: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  accent: SurfaceAccent;
}[] = [
  {
    icon: <FaDiscord className="text-2xl text-white" />,
    title: "Discord",
    description:
      "Nosso hub principal. Canais por área, mentorias e eventos ao vivo.",
    link: "https://discord.gg/RK8qqKE2bn",
    accent: "indigo",
  },
  {
    icon: <FaInstagram className="text-2xl text-white" />,
    title: "Instagram",
    description: "Conteúdo educativo, eventos e bastidores da comunidade.",
    link: "https://www.instagram.com/hyphencommunity",
    accent: "pink",
  },
];

export default function Channels() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="channels"
      ref={sectionRef}
      className="scroll-mt-28 relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 py-16 md:px-6"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.01] blur-3xl" />

      <div className="animate-on-scroll z-10 mb-4">
        <Badge
          variant="outline"
          className="gap-2 border-gray-700 bg-gray-900/50 px-4 py-2 text-gray-300 backdrop-blur-sm"
        >
          <LuShare2 className="text-sm" />
          Conecte-se
        </Badge>
      </div>

      <h2 className="animate-on-scroll z-10 mb-3 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        Entre nos nossos{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          canais
        </span>
      </h2>

      <p className="animate-on-scroll z-10 mb-10 max-w-2xl px-2 text-center text-sm text-gray-400 sm:text-base md:mb-12 md:text-lg">
        Escolha o canal que mais combina com você e comece a fazer parte da
        comunidade agora mesmo.
      </p>

      {/* Channel cards */}
      <div className="z-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {channels.map((channel) => (
          <ChannelsCard
            key={channel.link}
            icon={channel.icon}
            title={channel.title}
            description={channel.description}
            link={channel.link}
            accent={channel.accent}
          />
        ))}
      </div>
    </section>
  );
}
