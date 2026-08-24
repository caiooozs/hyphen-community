import type { Metadata, Viewport } from "next";

import AgostoNav from "@/components/HyphenAgostoLilas/Nav/nav";
import AgostoHero from "@/components/HyphenAgostoLilas/Hero/hero";
import AgostoQuiz from "@/components/HyphenAgostoLilas/Quiz/quiz";
import AgostoTech from "@/components/HyphenAgostoLilas/Tech/tech";
import AgostoBench from "@/components/HyphenAgostoLilas/Bench/bench";
import AgostoCare from "@/components/HyphenAgostoLilas/Care/care";
import AgostoHelp from "@/components/HyphenAgostoLilas/Help/help";
import AgostoManifesto from "@/components/HyphenAgostoLilas/Manifesto/manifesto";
import AgostoFooter from "@/components/HyphenAgostoLilas/Footer/footer";
import { FadeInNoScriptFallback } from "@/components/HyphenAgostoLilas/ui/fadeIn";

export const metadata: Metadata = {
  title: "Agosto Lilás — Hyphen Community",
  description:
    "Nem toda violência deixa hematoma. Teste o que você sabe sobre os 5 tipos de violência da Lei Maria da Penha e descubra por onde pedir ou oferecer ajuda.",
  // O laço roxo vem de `app/agostolilas/icon.svg` (convenção de arquivo).
  // O favicon.ico da raiz continua sendo emitido junto — é o padrão
  // recomendado: .ico para browsers antigos, .svg para os modernos, que
  // preferem o vetorial por causa do sizes="any".
};

export const viewport: Viewport = {
  themeColor: "#150A20",
};

export default function HyphenAgostoLilas() {
  return (
    <div className="relative min-h-screen w-full bg-[#150A20] text-white">
      <FadeInNoScriptFallback />

      {/* textura sutil sobre o roxo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:22px_22px]"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <AgostoNav />

        <main className="flex-1">
          <AgostoHero />
          <AgostoQuiz />
          <AgostoTech />
          <AgostoBench />
          <AgostoCare />
          <AgostoHelp />
          </main>

        <AgostoFooter />
      </div>
    </div>
  );
}
