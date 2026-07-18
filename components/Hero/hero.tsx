import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { TypingAnimation } from "../ui/typing-animation";
import { Separator } from "../ui/separator";
import { BsStars } from "react-icons/bs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  const words = ["CONECTA!", "ENSINA!", "TE AJUDA A CRESCER NA ÁREA!"];
  return (
    <section className="flex flex-col justify-center items-center min-h-[90vh] py-16 px-4 md:px-6 w-full bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className="animate-hero-element z-10"
        style={{ animationDelay: "0.2s" }}
      >
        <Badge
          variant={"outline"}
          className="p-3 gap-1 border-blue-200/60 bg-blue-50/50 backdrop-blur-sm"
        >
          <BsStars className="text-blue-600" />
          <Separator orientation="vertical" className="bg-blue-100" />
          <AnimatedShinyText className="italic text-xs md:text-sm">
            Bem vindos à Hyphen Community!
          </AnimatedShinyText>
        </Badge>
      </div>

      <div className="flex flex-col w-full max-w-3xl justify-center items-center text-center mt-6 z-10">
        <div
          className="mb-6 md:mb-8 animate-hero-element"
          style={{ animationDelay: "0.4s" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight">
            A COMUNIDADE QUE
          </h1>
          <div className="min-h-[50px] md:min-h-[75px] mt-2 flex justify-center items-center">
            <TypingAnimation
              className="text-blue-700 font-bold text-3xl sm:text-4xl md:text-6xl tracking-tight"
              words={words}
              loop={true}
              duration={70}
            />
          </div>
        </div>

        <p
          className="text-sm sm:text-md md:text-lg text-gray-600 mb-8 max-w-2xl px-2 leading-relaxed animate-hero-element"
          style={{ animationDelay: "0.6s" }}
        >
          A <span className="text-blue-700 font-bold">Hyphen</span> é o ponto de
          encontro entre estudantes, profissionais e oportunidades. Networking
          descomplicado para quem está começando na tecnologia.
        </p>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 z-10 animate-hero-element"
        style={{ animationDelay: "0.8s" }}
      >
        <Button className="h-12 w-full sm:w-auto px-6 font-semibold shadow-lg shadow-blue-600/15 hover:shadow-blue-600/35 transition-all">
          <a
            href="https://linktr.ee/hyphencommunity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar na comunidade
          </a>
          <IoIosArrowForward />
        </Button>
        <Button
          className="h-12 w-full sm:w-auto px-6 font-semibold"
          variant={"outline"}
        >
          <a href="#channels"> Saiba mais</a>
        </Button>
      </div>

      {/* Subtle indicator hint for scrolling */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-1 text-gray-400 text-xs">
        <span>Saiba mais</span>
        <div className="w-1.5 h-3 rounded-full border border-gray-400 flex justify-center p-0.5">
          <div className="w-0.5 h-1 bg-gray-400 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
