import type { StaticImageData } from "next/image";

import hyphenLogo from "../public/hyphen-logo.svg";
import senacLogo from "../public/senac-logo.png";

export interface Partner {
  name: string;
  logo: StaticImageData;
  /** Altura de exibição. Ajustada por logo para equilibrar o peso óptico:
   *  o Senac é horizontal (1.71:1) e o da Hyphen é vertical (0.80:1). */
  className: string;
}

export const partners: Partner[] = [
  {
    name: "Senac PE",
    logo: senacLogo,
    className: "h-9",
  },
  {
    name: "Hyphen Community",
    logo: hyphenLogo,
    className: "h-12",
  },
];
