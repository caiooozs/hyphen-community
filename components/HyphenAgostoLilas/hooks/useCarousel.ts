"use client";

import { useCallback, useEffect, useState } from "react";

export interface UseCarouselOptions {
  /** Intervalo do autoplay em ms. */
  interval?: number;
}

export interface UseCarouselResult {
  index: number;
  goTo: (i: number) => void;
  next: () => void;
  previous: () => void;
  pause: () => void;
  resume: () => void;
}

/**
 * Carrossel com autoplay. Pausa no hover/foco e respeita
 * `prefers-reduced-motion`, então quem pediu menos animação navega no manual.
 */
export function useCarousel(
  count: number,
  { interval = 5000 }: UseCarouselOptions = {},
): UseCarouselResult {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (count === 0) return;
      setIndex(((i % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  useEffect(() => {
    if (paused || reducedMotion || count <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      interval,
    );
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, count, interval]);

  return { index, goTo, next, previous, pause, resume };
}
