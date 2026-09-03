import Link from "next/link";

import { FaDiscord, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { BsCalendarEvent } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";

import { Button } from "../ui/button";

const socials = [
  {
    label: "Discord",
    href: "https://discord.gg/RK8qqKE2bn",
    icon: <FaDiscord className="text-lg" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hyphencommunity",
    icon: <FaInstagram className="text-lg" />,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/hyphencommunity",
    icon: <SiLinktree className="text-lg" />,
  },
];

const navigation = [
  { label: "Sobre", href: "#about" },
  { label: "Comunidade", href: "#ecosystem" },
  { label: "Conectar-se", href: "#channels" },
  { label: "Equipe", href: "#team" },
  { label: "Agosto Lilás", href: "/agostolilas" },
];

const highlights = [
  { icon: <BsCalendarEvent />, text: "Eventos toda semana" },
  { icon: <HiOutlineUserGroup />, text: "Networking real" },
  { icon: <IoRocketOutline />, text: "Hackathons e Ideathons" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#010411] text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + sobre a comunidade */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-1">
              <img src="/hyphen-logo.png" alt="Hyphen" className="h-14" />
              <span className="text-lg font-light tracking-wide">Hyphen</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              A Hyphen é uma comunidade voltada para o desenvolvimento de
              talentos na área de tecnologia. Conectamos estudantes,
              profissionais e oportunidades por meio de eventos, networking e
              compartilhamento de conhecimento.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2.5 text-xs text-white/50"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-cyan-400">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.map((item) =>
                item.href.startsWith("#") ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Canais */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Canais
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {socials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="text-sm text-white/35">
                HyphenLab{" "}
                <span className="ml-1 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[0.6rem] text-white/50">
                  em breve
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.65rem] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Faça parte
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Entre na comunidade e acompanhe eventos, vagas e conteúdos toda
              semana.
            </p>
            <a
              href="https://linktr.ee/hyphencommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Button className="h-11 w-full rounded-full border border-white/20 bg-white/10 px-5 font-semibold text-white transition-all hover:bg-white/20">
                Entrar na comunidade
                <FaArrowRight className="ml-2" />
              </Button>
            </a>

            <div className="mt-5 flex items-center gap-2">
              {socials.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Hyphen Community. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/40">
            Feito pela comunidade, para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
