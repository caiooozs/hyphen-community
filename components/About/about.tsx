"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Card, CardTitle, CardContent } from "../ui/card";

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col justify-center items-center min-h-[90vh] py-16 px-4 md:px-6 w-full bg-gray-100 shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 md:mb-12 animate-on-scroll z-10">
        O que é a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
          Hyphen Community
        </span>
        ?
      </h2>

      <div className="animate-on-scroll w-full max-w-3xl px-2 z-10">
        <Card className="fluid-card-hover relative rounded-2xl border border-blue-500/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 sm:p-8 md:p-10 shadow-2xl shadow-blue-950/20 ring-0">
          {/* Inner glass overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none" />

          <div className="relative flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30">
              <HiOutlineUserGroup className="text-cyan-400 text-xl" />
            </div>
            <CardTitle className="text-lg md:text-xl font-bold text-white">Propósito Central</CardTitle>
          </div>

          <CardContent className="p-0 relative text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            A Hyphen é uma comunidade voltada para o desenvolvimento de talentos
            na área de tecnologia. Conectamos estudantes, profissionais e
            oportunidades por meio da divulgação de eventos, networking e
            compartilhamento de conhecimento — criando um ambiente que incentiva
            o aprendizado, a colaboração e o crescimento profissional.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
