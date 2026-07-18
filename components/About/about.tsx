"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AboutAnimatedBeam } from "./about-animated-beam";

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col justify-center items-center min-h-[90vh] py-16 px-4 md:px-6 w-full bg-gray-100 shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-4">
        <div className="flex-1 flex flex-col items-start justify-center animate-on-scroll w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que é a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Hyphen Community
            </span>
            ?
          </h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
            A Hyphen é uma comunidade voltada para o desenvolvimento de talentos
            na área de tecnologia. Conectamos estudantes, profissionais e
            oportunidades por meio da divulgação de eventos, networking e
            compartilhamento de conhecimento, criando um ambiente que incentiva
            o aprendizado, a colaboração e o crescimento profissional.
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center items-center animate-on-scroll">
          <AboutAnimatedBeam />
        </div>
      </div>
    </section>
  );
}
