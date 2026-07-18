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

      {/* 3 pillar cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-8 z-10">
        {pillars.map((pillar, index) => (
          <Card
            key={index}
            className="animate-on-scroll fluid-card-hover relative rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950 p-6 md:p-7 shadow-xl shadow-blue-950/10 ring-0"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

            <div
              className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${pillar.iconBg} border mb-5`}
            >
              {pillar.icon}
            </div>

            <CardTitle
              className={`relative text-lg font-bold ${pillar.titleColor} mb-4`}
            >
              {pillar.title}
            </CardTitle>

            <CardContent className="p-0 relative">
              <ul className="space-y-2.5">
                {pillar.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-6xl z-10">
        {badges.map((badge, index) => (
          <Card
            key={index}
            className="animate-on-scroll fluid-card-hover flex flex-row items-center gap-3 rounded-xl border border-blue-500/20 bg-gradient-to-r from-slate-900 to-blue-950 px-5 py-4 shadow-lg shadow-blue-950/10 ring-0"
            style={{ transitionDelay: `${(index + 3) * 100}ms` }}
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30">
              {badge.icon}
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm">
              {badge.text}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
