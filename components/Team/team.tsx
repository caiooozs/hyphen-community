"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "../ui/badge";
import { FiUsers } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import TeamCard from "./components/teamCard";
import { members } from "./mockdata";
import type { SurfaceAccent } from "../ui/surface-card";

const ACCENT_CYCLE: SurfaceAccent[] = ["cyan", "violet", "green"];

export const Team = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="team"
      ref={sectionRef}
      className="scroll-mt-28 relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#010411] via-[#080731] to-[#031c55] px-4 py-16 md:px-6"
    >
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-violet-600/[0.04] blur-3xl" />

      <div className="animate-on-scroll z-10 mb-4">
        <Badge
          variant="outline"
          className="gap-2 border-white/15 bg-white/[0.04] px-4 py-2 text-white/80 backdrop-blur-sm"
        >
          <FiUsers className="text-sm" />
          Quem faz acontecer
        </Badge>
      </div>

      <h2 className="animate-on-scroll z-10 mb-3 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        Equipe{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Hyphen
        </span>
      </h2>

      <p className="animate-on-scroll z-10 mb-10 max-w-2xl px-2 text-center text-sm text-white/60 sm:text-base md:mb-12">
        Conheça a equipe por trás de toda infraestrutura da comunidade
      </p>

      <div className="z-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <TeamCard
            key={member.name}
            description={member.description}
            name={member.name}
            photo={member.photo}
            photo_alt={member.photo_alt}
            position={member.position}
            socials={member.socials}
            accent={ACCENT_CYCLE[index % ACCENT_CYCLE.length]}
          />
        ))}
      </div>

      <div className="animate-on-scroll z-10 mt-12 flex flex-col items-center gap-4 text-center">
        <p className="max-w-xl text-sm text-white/50">
          Quer construir a Hyphen com a gente? A comunidade é aberta e feita por
          quem participa.
        </p>
        <a
          href="https://linktr.ee/hyphencommunity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="h-11 rounded-full border border-white/20 bg-white/10 px-6 font-semibold text-white transition-all hover:bg-white/20">
            Junte-se a nós!
            <FaArrowRight className="ml-2" />
          </Button>
        </a>
      </div>
    </section>
  );
};
