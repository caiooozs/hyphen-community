import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";

import { TeamCardProps } from "@/types/types";
import { SurfaceCard, SurfaceDivider } from "@/components/ui/surface-card";

const SOCIAL_ICONS = {
  linkedin: {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    aria: (name: string) => `${name} no LinkedIn`,
  },
  github: {
    label: "GitHub",
    icon: <FaGithub />,
    aria: (name: string) => `${name} no GitHub`,
  },
  instagram: {
    label: "Instagram",
    icon: <FaInstagram />,
    aria: (name: string) => `${name} no Instagram`,
  },
  site: {
    label: "Portfólio",
    icon: <FaGlobe />,
    // "Fulano no Portfólio" soaria errado — daí o texto próprio.
    aria: (name: string) => `Portfólio de ${name}`,
  },
} as const;

const SOCIAL_ORDER = ["linkedin", "github", "instagram", "site"] as const;

export const TeamCard = ({
  description,
  name,
  photo,
  position,
  photo_alt,
  socials,
  accent = "cyan",
}: TeamCardProps) => {
  const links = SOCIAL_ORDER.filter((key) => socials?.[key]);

  return (
    <SurfaceCard
      accent={accent}
      padding="lg"
      className="animate-on-scroll h-full"
    >
      <div className="flex items-center gap-4">
        {/* gradient-ringed portrait */}
        <span
          className="relative shrink-0 rounded-2xl p-[2px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/surface:scale-105"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--surface-from), var(--surface-to))",
          }}
        >
          <span className="relative block size-20 overflow-hidden rounded-[0.875rem] bg-slate-950">
            <Image
              src={photo}
              alt={photo_alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </span>
        </span>

        <div className="min-w-0">
          <h3 className="text-lg font-bold tracking-tight break-words text-white">
            {name}
          </h3>
          {position ? (
            <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.65rem] leading-tight font-light text-white/70">
              {position}
            </span>
          ) : null}
        </div>
      </div>

      <SurfaceDivider className="mt-5" />

      <p className="mt-5 text-xs leading-relaxed break-words text-white/55 transition-colors duration-300 group-hover/surface:text-white/75 sm:text-sm">
        {description}
      </p>

      {links.length > 0 ? (
        <div className="mt-auto flex items-center gap-2 pt-6">
          {links.map((key) => (
            <a
              key={key}
              href={socials?.[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={SOCIAL_ICONS[key].aria(name)}
              title={SOCIAL_ICONS[key].label}
              className="group/social grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              {SOCIAL_ICONS[key].icon}
            </a>
          ))}
        </div>
      ) : null}
    </SurfaceCard>
  );
};

export default TeamCard;
