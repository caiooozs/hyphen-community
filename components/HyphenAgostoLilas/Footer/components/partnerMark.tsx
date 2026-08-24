import Image from "next/image";

import type { Partner } from "../../data/partners";
import Link from "next/link";

export function PartnerMark({ name, logo, className, link }: Partner) {
  return (
    <>
    <Link href={link} target="_blank">
    <Image
      src={logo}
      alt={name}
      className={`${className} w-auto object-contain transition-all transform hover:scale-105`}
    />
    </Link>
    </>
  );
}
