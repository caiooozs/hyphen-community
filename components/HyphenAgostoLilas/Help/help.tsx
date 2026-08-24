"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { cn } from "@/lib/utils";
import { helpChannels } from "../data/helpChannels";
import { useCarousel } from "../hooks/useCarousel";
import { Section, SectionLede, SectionTitle } from "../ui/section";
import { HelpCard } from "./components/helpCard";

export function AgostoHelp() {
  const { index, goTo, next, previous, pause, resume } = useCarousel(
    helpChannels.length,
  );

  return (
    <Section id="ajuda" eyebrow="todas as portas de entrada" width="wide">
      <SectionTitle>Formas de pedir ou oferecer ajuda.</SectionTitle>
      <SectionLede>
        O carrossel passa sozinho. Passe o mouse para pausar, ou navegue pelos
        controles.
      </SectionLede>

      <div
        className="mt-2 flex flex-col gap-5"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
      >
        <div
          className="overflow-hidden rounded-2xl"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Canais de ajuda"
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {helpChannels.map((channel, i) => (
              <div
                key={channel.id}
                className="w-full shrink-0 px-0.5"
                aria-hidden={i !== index}
              >
                <HelpCard {...channel} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {helpChannels.map((channel, i) => (
              <button
                key={channel.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para ${channel.label}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none",
                  i === index
                    ? "w-7 bg-[#C9A6F5]"
                    : "w-1.5 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Canal anterior"
              className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/35 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo canal"
              className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/15 text-white/60 transition-all hover:border-white/35 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AgostoHelp;
