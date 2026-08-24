import Link from "next/link";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";

import { partners } from "../data/partners";
import { FadeIn } from "../ui/fadeIn";
import { PartnerMark } from "./components/partnerMark";

const EMERGENCY = [
  {
    number: "190",
    href: "tel:190",
    label: "Polícia Militar",
    detail: "risco imediato — ligue na hora",
  },
  {
    number: "180",
    href: "tel:180",
    label: "Central de Atendimento à Mulher",
    detail: "denúncia e orientação, gratuito",
  },
];

const NAVIGATION = [
  { label: "O quiz", href: "#quiz" },
  { label: "Tecnologia tem lado", href: "#tecnologia" },
  { label: "Banco Vermelho", href: "#banco-vermelho" },
  { label: "Como ajudar", href: "#ajudar" },
  { label: "Canais de ajuda", href: "#ajuda" },
];

export function AgostoFooter() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0F0618] px-5 pt-14 pb-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {/* Emergência primeiro: é o dado mais útil da página inteira. */}
        <FadeIn>
          <div className="rounded-2xl border border-[#C9A6F5]/25 bg-[#C9A6F5]/[0.07] p-6 md:p-7">
            <p className="flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.22em] text-[#C9A6F5] lowercase">
              <FiPhone aria-hidden className="text-sm" />
              em caso de violência
            </p>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {EMERGENCY.map((line) => (
                <a
                  key={line.number}
                  href={line.href}
                  className="group/tel flex items-baseline gap-4 rounded-xl transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
                >
                  <span className="text-4xl leading-none font-bold tracking-tight text-white md:text-5xl">
                    {line.number}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {line.label}
                    </span>
                    <span className="text-xs text-white/50">{line.detail}</span>
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-5 border-t border-white/10 pt-4 text-xs text-white/45">
              Funcionam 24 horas, todos os dias, em todo o Brasil.
            </p>
          </div>
        </FadeIn>

        {/* Marca, navegação e apoio institucional */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-mono text-sm tracking-tight text-white">
                hyphen community
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                Comunidade de estudantes de tecnologia do Senac-PE. Esta página
                faz parte da campanha do Agosto Lilás, mês da Lei Maria da
                Penha.
              </p>
              <p className="mt-4 font-mono text-xs text-white/35">Recife, PE</p>
            </div>

            <nav className="md:col-span-3" aria-label="Seções desta página">
              <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-white/35 lowercase">
                nesta página
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-4">
              <h2 className="text-[0.7rem] font-medium tracking-[0.22em] text-white/35 lowercase">
                rede e apoio institucional
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5">
                {partners.map((partner) => (
                  <PartnerMark key={partner.name} {...partner} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Barra inferior */}
        <FadeIn delay={200}>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-white/35">
              Lei nº 11.340/2006 · Lei Maria da Penha
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/"
                className="group/back inline-flex items-center gap-1.5 text-xs text-white/55 transition-colors hover:text-white"
              >
                Voltar para a Hyphen
                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/back:translate-x-0.5 group-hover/back:-translate-y-0.5" />
              </Link>
              <p className="text-xs text-white/30">
                © {new Date().getFullYear()} Hyphen Community
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

export default AgostoFooter;
