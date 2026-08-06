"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { Highlighter } from "../ui/highlighter";
import { Card, CardTitle, CardContent } from "../ui/card";
import { EcosystemCard } from "./components/ecosystemCard";
import { EcosystemBadgeCard } from "./components/ecosystemBadgeCard";

const pillars = [
  {
    icon: <IoChatbubbleOutline className="text-2xl text-cyan-400" />,
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    title: "Comunidade e interação",
    titleColor: "text-cyan-400",
    items: [
      "Compartilhamento de oportunidades",
      "Troca de experiências",
      "Networking entre membros",
      "Avisos rápidos e comunicação direta",
    ],
  },
  {
    icon: <FaInstagram className="text-2xl text-pink-400" />,
    iconBg: "bg-pink-500/15 border-pink-500/30",
    title: "Conteúdo e divulgação",
    titleColor: "text-pink-400",
    items: [
      "Divulgação de eventos",
      "Atualizações da comunidade",
      "Conteúdo educativo",
      "Fortalecimento da marca Hyphen",
    ],
  },
  {
    icon: <TbWorld className="text-2xl text-cyan-400" />,
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    title: "Centralização e crescimento",
    titleColor: "text-green-400",
    items: [
      "Eventos de tecnologia",
      "Hackathons e Ideathons",
      "Oportunidades de carreira",
      "Futuras funcionalidades da comunidade",
    ],
  },
];

const badges = [
  {
    icon: <BsCalendarEvent className="text-lg text-cyan-400" />,
    text: "Eventos toda semana",
  },
  {
    icon: <HiOutlineUserGroup className="text-lg text-cyan-400" />,
    text: "Networking real",
  },
  {
    icon: <IoRocketOutline className="text-lg text-cyan-400" />,
    text: "Crescimento acelerado",
  },
];

export default function Ecosystem() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="flex flex-col justify-center items-center min-h-[90vh] py-16 px-4 md:px-6 w-full bg-black relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-3 animate-on-scroll z-10">
        Ecossistema{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
          Hyphen
        </span>
      </h2>

      <div className="text-white text-center text-sm sm:text-base md:text-lg mb-10 md:mb-12 max-w-2xl px-2 animate-on-scroll z-10">
        Três canais, um objetivo:{" "}
        <Highlighter action="highlight" color="blue" animationDuration={2000}>
          conectar pessoas, oportunidades e tecnologia.
        </Highlighter>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-8 z-10">
        {pillars.map((pillar) => (
          <EcosystemCard
            key={pillar.title}
            icon={pillar.icon}
            iconBg={pillar.iconBg}
            title={pillar.title}
            titleColor={pillar.titleColor}
            items={pillar.items}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-6xl z-10">
        {badges.map((badge) => (
          <EcosystemBadgeCard
            key={badge.text}
            icon={badge.icon}
            text={badge.text}
          />
        ))}
      </div>
    </section>
  );
}
