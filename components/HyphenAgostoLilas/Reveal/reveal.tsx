import { violenceDefinitions } from "../data/violences";
import { LawTag, Panel, Section, SectionTitle } from "../ui/section";

export function AgostoReveal() {
  return (
    <Section id="gabarito" eyebrow="agora sim, o gabarito">
      <Panel className="flex flex-col gap-6">
        <SectionTitle>As 5 violências que a lei reconhece.</SectionTitle>

        <ul className="flex flex-col">
          {violenceDefinitions.map((violence, index) => (
            <li
              key={violence.type}
              className="flex gap-4 border-t border-white/10 py-4 first:border-t-0 first:pt-0"
            >
              <span className="mt-0.5 font-mono text-xs text-[#C9A6F5]/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-white/65">
                <strong className="font-semibold text-white">
                  {violence.type}
                </strong>{" "}
                — {violence.description}
              </p>
            </li>
          ))}
        </ul>

        <LawTag>Lei Maria da Penha (nº 11.340/2006), art. 7º</LawTag>
      </Panel>
    </Section>
  );
}

export default AgostoReveal;
