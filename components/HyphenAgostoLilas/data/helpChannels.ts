import type { HelpChannel } from "../types";

export const helpChannels: HelpChannel[] = [
  {
    id: "180",
    tag: "denúncia e orientação",
    label: "180",
    description:
      "Central de Atendimento à Mulher. Denúncias, orientação e informações sobre a lei — gratuito, 24h, em todo o Brasil.",
    href: "tel:180",
  },
  {
    id: "190",
    tag: "emergência",
    label: "190",
    description:
      "Polícia Militar. Ligue na hora sempre que houver risco imediato — para você ou para quem você está ajudando.",
    href: "tel:190",
  },
  {
    id: "deam",
    tag: "registro presencial",
    label: "Delegacia Especializada de Atendimento à Mulher",
    description:
      "Delegacia da Mulher. É onde se registra boletim de ocorrência e se pede medida protetiva com apoio especializado.",
      href: "https://www2.pc.pe.gov.br/"
  },
  {
    id: "imp",
    tag: "orientação e rede de apoio",
    label: "Instituto Maria da Penha",
    description:
      "Instituto Maria da Penha. ONG criada pela própria Maria da Penha — orienta sobre direitos e conecta à rede de apoio.",
    href: "https://www.institutomariadapenha.org.br",
  },
  {
    id: "senac",
    tag: "dentro da própria escola",
    label: "Senac",
    description:
      "Coordenação, psicologia ou serviço social do seu polo. A rede de apoio pode começar antes mesmo de você sair da sala de aula.",
  },
  {
    id: "100",
    tag: "outras violações",
    label: "100",
    description:
      "Disque Direitos Humanos. Para violências e violações de direitos que vão além do previsto na Lei Maria da Penha.",
    href: "tel:100",
  },
];
