import Image from "next/image";

import type { Partner } from "../../data/partners";

/** Logo de parceiro institucional, exibido sem moldura nem fundo. */
export function PartnerMark({ name, logo, className }: Partner) {
  return (
    <Image
      src={logo}
      alt={name}
      className={`${className} w-auto object-contain`}
    />
  );
}
