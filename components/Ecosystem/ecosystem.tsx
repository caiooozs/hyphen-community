"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";
import { Highlighter } from "../ui/highlighter";
import { EcosystemCard } from "./components/ecosystemCard";
import { EcosystemBadgeCard } from "./components/ecosystemBadgeCard";
import type { SurfaceAccent } from "../ui/surface-card";

const pillars: {
  number: number;
  title: string;
  accent: SurfaceAccent;
  items: string[];
}[] = [
  {
    number: 1,
    title: "Comunidade e interação",
    accent: "cyan",
    items: [
      "Compartilhamento de oportunidades",
      "Troca de experiências",
      "Networking entre membros",
      "Avisos rápidos e comunicação direta",
    ],
  },
  {
    number: 2,
    title: "Conteúdo e divulgação",
    accent: "pink",
    items: [
      "Divulgação de eventos",
      "Atualizações da comunidade",
      "Conteúdo educativo",
      "Fortalecimento da marca Hyphen",
    ],
  },
  {
    number: 3,
    title: "Centralização e crescimento",
    accent: "green",
    items: [
      "Eventos de tecnologia",
      "Hackathons e Ideathons",
      "Oportunidades de carreira",
      "Futuras funcionalidades da comunidade",
    ],
  },
];

const badges: { icon: React.ReactNode; text: string; accent: SurfaceAccent }[] =
  [
    {
      icon: <BsCalendarEvent className="text-lg text-white" />,
      text: "Eventos toda semana",
      accent: "cyan",
    },
    {
      icon: <HiOutlineUserGroup className="text-lg text-white" />,
      text: "Networking real",
      accent: "blue",
    },
    {
      icon: <IoRocketOutline className="text-lg text-white" />,
      text: "Crescimento acelerado",
      accent: "indigo",
    },
  ];

export default function Ecosystem() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="scroll-mt-28 relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#010411] via-[#080731] to-[#031c55] px-4 py-16 md:px-6"
    >
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/[0.03] blur-3xl" />

      <h2 className="animate-on-scroll z-10 mb-3 text-center text-xl font-bold text-white sm:text-2xl md:text-6xl">
        Ecossistema{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
          Hyphen
        </span>
      </h2>

      <div className="animate-on-scroll z-10 mb-10 max-w-2xl px-2 text-center text-sm text-white italic sm:text-base md:mb-12 md:text-sm">
        Três canais, um objetivo:{" "}
        <Highlighter action="highlight" color="blue" animationDuration={2000}>
          conectar pessoas, oportunidades e tecnologia.
        </Highlighter>
      </div>

      <div className="z-10 mb-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <EcosystemCard
            key={pillar.title}
            number={pillar.number}
            title={pillar.title}
            accent={pillar.accent}
            items={pillar.items}
          />
        ))}
      </div>

      <div className="z-10 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
        {badges.map((badge) => (
          <EcosystemBadgeCard
            key={badge.text}
            icon={badge.icon}
            text={badge.text}
            accent={badge.accent}
          />
        ))}
      </div>
    </section>
  );
}
