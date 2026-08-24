"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface FadeInProps extends React.ComponentProps<"div"> {
  /** Atraso da transição, em ms — usado para escalonar blocos da mesma seção. */
  delay?: number;
  /** Anima já na montagem, sem esperar o scroll. Para conteúdo acima da dobra. */
  immediate?: boolean;
}

/**
 * Revela o conteúdo com fade + subida quando ele entra na viewport.
 *
 * Client component fino: as seções continuam sendo Server Components e só
 * passam seus filhos por aqui como slot.
 *
 * `prefers-reduced-motion` é tratado no CSS (variante `motion-reduce`), não em
 * JS — assim o conteúdo já nasce visível para quem pediu menos animação.
 */
export function FadeIn({
  delay = 0,
  immediate = false,
  className,
  style,
  children,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (immediate) {
      // Timer, não requestAnimationFrame: rAF não dispara em aba oculta, e o
      // conteúdo acima da dobra ficaria invisível até a aba ganhar foco.
      const timer = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setVisible(true);
          observer.disconnect(); // revela uma vez só
        }
      },
      // Sem rootMargin negativo no rodapé: ele criaria uma zona morta no fim
      // da página, onde o último bloco nunca chega a "entrar" na viewport
      // porque não sobra scroll. O threshold já segura o disparo cedo demais.
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      data-fade
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Sem JS o observer nunca roda e o conteúdo ficaria invisível para sempre.
 * Numa página que carrega telefones de emergência isso não é aceitável, então
 * o noscript força tudo a aparecer.
 */
export function FadeInNoScriptFallback() {
  return (
    <noscript>
      <style>{`[data-fade]{opacity:1 !important;transform:none !important}`}</style>
    </noscript>
  );
}
