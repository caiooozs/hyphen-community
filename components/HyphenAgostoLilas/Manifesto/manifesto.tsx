import { Section } from "../ui/section";

export function AgostoManifesto() {
  return (
    <Section id="manifesto" eyebrow="por que isso importa pra gente">
      <blockquote className="text-2xl leading-snug font-bold tracking-tight text-balance text-white sm:text-3xl md:text-4xl">
        A gente não quer só{" "}
        <em className="text-[#C9A6F5] not-italic">divulgar evento</em>. A gente
        quer que{" "}
        <em className="text-[#C9A6F5] not-italic">
          tecnologia transforme sociedade
        </em>
        .
      </blockquote>

      <p className="text-sm leading-relaxed text-white/60 sm:text-base">
        É por isso que essa página existe em vez de só um post. É por isso que
        causas como essa viram tema de hackathon dentro da Hyphen. E é por isso
        que, além do Discord, do WhatsApp e do Instagram, quem já é do
        Transforma-se também tem um Linktree só nosso — pra centralizar tudo num
        lugar só.
      </p>
    </Section>
  );
}

export default AgostoManifesto;
