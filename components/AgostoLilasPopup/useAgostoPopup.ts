"use client";

import { useCallback, useEffect, useState } from "react";

interface UseAgostoPopupOptions {
  /** Espera antes de abrir, em ms — deixa a animação do herói respirar. */
  delay?: number;
}

export interface UseAgostoPopupResult {
  open: boolean;
  /** Fecha o popup nesta visualização. */
  dismiss: () => void;
}

/**
 * Controla quando o convite do Agosto Lilás aparece na home.
 *
 * A dispensa não é persistida de propósito: enquanto a campanha estiver no ar,
 * o convite reaparece a cada carregamento da página.
 */
export function useAgostoPopup({
  delay = 2000,
}: UseAgostoPopupOptions = {}): UseAgostoPopupResult {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const dismiss = useCallback(() => setOpen(false), []);

  return { open, dismiss };
}
