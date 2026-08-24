import type { StaticImageData } from "next/image";

import hyphenLogo from "../public/hyphen-logo.svg";
import senacLogo from "../public/senac-logo.png";

export interface Partner {
  name: string;
  logo: StaticImageData;
  className: string;
  link: string
}

export const partners: Partner[] = [
  {
    name: "Senac PE",
    logo: senacLogo,
    className: "h-9",
    link: "https://www.pe.senac.br/"
  },
  {
    name: "Hyphen Community",
    logo: hyphenLogo,
    className: "h-12",
    link: "https://www.hyphencommunity.com.br/"
  },
];
