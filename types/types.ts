import { ReactNode } from "react";

import type { SurfaceAccent } from "@/components/ui/surface-card";

export interface EcosystemCardProps {
  number: number;
  title: string;
  accent: SurfaceAccent;
  items: string[];
}

export interface EcosystemBadgeProps {
  icon: ReactNode;
  text: string;
  accent?: SurfaceAccent;
}

export interface ChannelCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  accent: SurfaceAccent;
}

/** Perfis sociais de um membro. Deixe "" para esconder o ícone. */
export interface TeamSocials {
  linkedin?: string;
  github?: string;
  instagram?: string;
  site?: string
}

export interface TeamCardProps {
  photo: string;
  photo_alt: string;
  name: string;
  position: string;
  description: string;
  socials?: TeamSocials;
  accent?: SurfaceAccent;
}
