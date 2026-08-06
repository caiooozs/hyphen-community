import { ReactNode } from "react";

export interface EcosystemCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  titleColor: string;
  items: string[];
}

export interface EcosystemBadgeProps {
  icon: ReactNode;
  text: string;
}

export interface ChannelCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  link: string;
  borderGradient: string;
  cardGlow: string;
}
