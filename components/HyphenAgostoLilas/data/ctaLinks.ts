import type { CtaLink } from "../types";

/**
 * O Linktree do Transforma-se ainda não tem URL definida — enquanto o href
 * estiver vazio, o card não aparece na grade.
 */
export const ctaLinks: Omit<CtaLink, "icon">[] = [
  {
    id: "discord",
    title: "Entrar no Discord",
    subtitle: "vagas, eventos e o Hyphen Bot",
    href: "https://discord.gg/RK8qqKE2bn",
    primary: true,
  },
  {
    id: "whatsapp",
    title: "Falar no WhatsApp",
    subtitle: "fale direto com a comunidade",
    href: "https://wa.me/5581986914157",
  },
  {
    id: "instagram",
    title: "Seguir no Instagram",
    subtitle: "@hyphencommunity",
    href: "https://www.instagram.com/hyphencommunity",
  },
  {
    id: "transformase",
    title: "Sou do Transforma-se",
    subtitle: "acesse pelo nosso Linktree",
    href: "",
  },
];
