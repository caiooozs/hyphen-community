import type { ReactNode } from "react";

/** Os cinco tipos de violência previstos no art. 7º da Lei Maria da Penha. */
export type ViolenceType =
  | "Física"
  | "Psicológica"
  | "Sexual"
  | "Patrimonial"
  | "Moral";

export interface QuizQuestion {
  id: string;
  scenario: string;
  correct: ViolenceType;
}

export interface QuizFeedback {
  /** Acertos mínimos (inclusive) para esta mensagem ser usada. */
  minScore: number;
  message: string;
}

export interface ViolenceDefinition {
  type: ViolenceType;
  description: string;
}

export interface HelpChannel {
  id: string;
  tag: string;
  /** Número ou sigla em destaque no card (180, 190, DEAM...). */
  label: string;
  description: string;
  href?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  /** Curso, cargo ou vínculo — opcional. */
  role?: string;
}

export interface CtaLink {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: ReactNode;
  primary?: boolean;
}
