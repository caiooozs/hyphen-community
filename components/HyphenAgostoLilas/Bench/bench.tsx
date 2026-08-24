import { LawTag, Panel, Section, SectionTitle } from "../ui/section";

export function AgostoBench() {
  return (
    <Section id="banco-vermelho" eyebrow="um símbolo que você já viu">
      <Panel className="flex flex-col gap-6">
        <SectionTitle>O banco vazio, pintado de vermelho.</SectionTitle>

        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            Talvez você já tenha passado por um banco vermelho no seu polo do
            Senac ou em algum espaço público sem saber o que ele significa.
            Desde 2024 a lei prevê a instalação desses bancos em locais de
            grande circulação — inclusive escolas — como símbolo nacional contra
            o feminicídio.
          </p>
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            A cor remete ao sangue das vítimas. O assento vazio representa o
            lugar de uma mulher que teve a vida interrompida pela violência.
            Muitos bancos trazem frases de resistência e o número do 180 pintado
            ali mesmo.
          </p>
        </div>

        {/* Banco vermelho desenhado em CSS — o assento fica deliberadamente vazio. */}
        <div aria-hidden className="flex items-end justify-center gap-1 py-6">
          <span className="h-12 w-2.5 rounded-sm bg-[#B91C3C]" />
          <span className="h-3 w-40 rounded-sm bg-[#DC2645] shadow-[0_0_40px_-6px_rgba(220,38,69,0.7)] sm:w-56" />
          <span className="h-12 w-2.5 rounded-sm bg-[#B91C3C]" />
        </div>

        <LawTag>
          Lei nº 14.942/2024 · Projeto Banco Vermelho — da próxima vez que passar
          por um, você vai saber o que aquele vazio significa
        </LawTag>
      </Panel>
    </Section>
  );
}

export default AgostoBench;
