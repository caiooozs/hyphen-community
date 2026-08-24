import * as React from "react";

import { cn } from "@/lib/utils";
import { FadeIn } from "./fadeIn";

/**
 * ── Primitivas visuais do Agosto Lilás ───────────────────────────────────────
 * Roxo profundo como base, lilás para os rótulos e branco para os destaques.
 * Todas as seções da página são montadas com estas peças.
 */

/** Rótulo minúsculo em lilás que abre cada seção. */
export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-medium tracking-[0.22em] text-[#C9A6F5] lowercase",
        className,
      )}
      {...props}
    />
  );
}

/** Título de seção. Branco puro — é o destaque da página. */
export function SectionTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl md:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

export function SectionLede({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-sm leading-relaxed text-white/65 sm:text-base",
        className,
      )}
      {...props}
    />
  );
}

/** Chip de citação legal, em fonte mono. */
export function LawTag({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "inline-flex rounded-lg border border-[#C9A6F5]/25 bg-[#C9A6F5]/10 px-3 py-2 font-mono text-[0.7rem] leading-relaxed text-[#D9C2FA]",
        className,
      )}
      {...props}
    />
  );
}

/** Painel de vidro sobre o roxo. Superfície padrão dos blocos de conteúdo. */
export function Panel({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_24px_60px_-32px_rgba(10,2,20,1)]",
        className,
      )}
      {...props}
    >
      {/* Decoração atrás do conteúdo (via -z-10 no contexto criado por `isolate`),
          para que o className do Panel controle o layout dos filhos diretamente. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#C9A6F5]/60 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.04] to-transparent"
      />
      {children}
    </div>
  );
}

type SectionProps = React.ComponentProps<"section"> & {
  eyebrow?: string;
  /** Largura do conteúdo. "narrow" para texto corrido, "wide" para grades. */
  width?: "narrow" | "wide";
  /** Atraso acumulado entre os blocos, em ms. 0 revela tudo de uma vez. */
  stagger?: number;
};

/**
 * Casca padrão de seção: espaçamento, largura máxima e rótulo.
 *
 * Cada filho direto entra com fade-in escalonado ao aparecer na viewport —
 * por isso as seções não precisam saber nada sobre animação.
 */
export function Section({
  eyebrow,
  width = "narrow",
  stagger = 100,
  className,
  children,
  ...props
}: SectionProps) {
  // toArray descarta null/false, então blocos condicionais não viram slot vazio.
  const blocks = React.Children.toArray(children);

  return (
    <section
      className={cn("relative w-full scroll-mt-24 px-5 py-16 md:py-24", className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col gap-6",
          width === "narrow" ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        {eyebrow ? (
          <FadeIn>
            <Eyebrow>{eyebrow}</Eyebrow>
          </FadeIn>
        ) : null}

        {blocks.map((block, index) => (
          <FadeIn key={index} delay={(index + (eyebrow ? 1 : 0)) * stagger}>
            {block}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
