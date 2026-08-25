import { FiAlertTriangle } from "react-icons/fi";

import { Panel, Section, SectionTitle } from "../ui/section";

const CARE_STEPS = [
  'Pergunte em particular e sem julgamento — "você está bem? quer conversar?"',
  "Em risco imediato, ligue 190 na hora, sem esperar",
  "Fora de emergência, oriente a pessoa a procurar o 180, a Delegacia da Mulher ou o Instituto Maria da Penha",
  "Se for no Senac, a coordenação, a psicologia ou o serviço social do seu polo também são porta de entrada",
];

export function AgostoCare() {
  return (
    <Section id="ajudar" eyebrow="se você desconfia de algo">
      <Panel className="flex flex-col gap-6">
        <SectionTitle>
          Não fique na dúvida. Pergunte, ajude, ligue.
        </SectionTitle>

        <div className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            Se você percebe que alguém pode estar sofrendo qualquer tipo de
            violência, seja ela física, psicológica, sexual, patrimonial ou
            moral, não hesite em oferecer ajuda ou acionar a polícia. Um
            &ldquo;você está bem?&rdquo; dito em particular, ou uma ligação pro
            190 num momento de risco, pode ser o que muda a situação de alguém.
          </p>
          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            Ao mesmo tempo, cuidado nunca é demais. Agir com atenção protege
            você e protege quem você quer ajudar.
          </p>
        </div>

        <ol className="flex flex-col gap-3">
          {CARE_STEPS.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#C9A6F5]/30 bg-[#C9A6F5]/10 font-mono text-[0.65rem] text-[#D9C2FA]">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-white/70">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <p className="flex items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-400/10 p-4 text-sm leading-relaxed text-amber-100/85">
          <FiAlertTriangle
            aria-hidden
            className="mt-0.5 shrink-0 text-base text-amber-300"
          />
          <span>
            <strong className="font-semibold text-white">
              Estando sozinho(a), nunca confronte quem está agredindo.
            </strong>{" "}
            Priorize sua segurança e o da pessoa antes de qualquer atitude.
            Pedir ajuda também é ajudar.{" "}
          </span>
        </p>
      </Panel>
    </Section>
  );
}

export default AgostoCare;
