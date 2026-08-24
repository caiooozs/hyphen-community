import { FadeIn } from "../ui/fadeIn";
import { Eyebrow } from "../ui/section";

const LAW_FACTS = [
  { label: "Lei nº 11.340/2006", detail: "Maria da Penha" },
  { label: "Art. 7º", detail: "formas de violência" },
];

export function AgostoHero() {
  return (
    <section className="relative w-full overflow-hidden px-5 pt-16 pb-12 md:pt-24 md:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7C3AED]/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-24 h-[380px] w-[380px] rounded-full bg-[#C9A6F5]/10 blur-[110px]"
      />

      {/* Acima da dobra: entra na carga, não no scroll. */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-7">
        <FadeIn immediate>
          <Eyebrow>recife · estudantes de tecnologia</Eyebrow>
        </FadeIn>

        <FadeIn immediate delay={120}>
          <h1 className="text-3xl leading-[1.12] font-bold tracking-tight text-balance text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Nem toda violência deixa{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#C9A6F5]">hematoma</span>
              <span
                aria-hidden
                className="absolute inset-x-0 top-1/2 z-0 h-[3px] -translate-y-1/2 rounded-full bg-[#C9A6F5]/70"
              />
            </span>, às vezes ela tira sua conta, seu nome, sua independência.
          </h1>
        </FadeIn>

        <FadeIn immediate delay={260}>
          <p className="max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
            Agosto é o mês da Lei Maria da Penha. A Hyphen abriu esse
            espaço pra testar o que a gente realmente sabe sobre as 5 violências
            que a lei reconhece, e pra deixar claro por onde pedir ou oferecer
            ajuda.
          </p>
        </FadeIn>

        <FadeIn immediate delay={400}>
          <dl className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-10">
            {LAW_FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-0.5">
                <dt className="font-mono text-sm font-medium text-white">
                  {fact.label}
                </dt>
                <dd className="text-xs text-white/50">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

export default AgostoHero;
