"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";

import { useAgostoPopup } from "./useAgostoPopup";

/**
 * Convite para a página do Agosto Lilás, exibido na home.
 *
 * Usa <dialog> nativo pelo focus trap, pela inertização do fundo e pelo
 * ::backdrop. O estado do React é a única fonte de verdade sobre estar aberto:
 * todo caminho de fechamento chama `dismiss()`, e um efeito sincroniza o
 * elemento. Depender do evento `close` do <dialog> deixaria o estado preso
 * aberto sempre que ele não disparasse.
 *
 * Fechar vale só para o carregamento atual — a cada reload o convite volta.
 */
export function AgostoLilasPopup() {
  const { open, dismiss } = useAgostoPopup();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // O <dialog> modal não trava o scroll do fundo no Chrome.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="agosto-popup-title"
      // Escape: cancela o fechamento nativo e passa pelo estado, para o
      // cleanup do scroll e a gravação da dispensa acontecerem sempre.
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          dismiss();
        }
      }}
      onClick={(event) => {
        // Clique no ::backdrop tem o próprio <dialog> como target.
        if (event.target === dialogRef.current) dismiss();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg bg-transparent p-0 text-white backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative isolate overflow-hidden rounded-2xl border border-[#C9A6F5]/25 bg-[#1A0D26] p-7 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] md:p-8">
        {/* brilho roxo que amarra o card à identidade da campanha */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 -z-10 h-56 w-56 rounded-full bg-[#7C3AED]/35 blur-[90px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#C9A6F5] to-transparent"
        />

        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar"
          className="absolute top-4 right-4 grid size-8 cursor-pointer place-items-center rounded-full border border-white/10 text-white/50 transition-all hover:border-white/30 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
        >
          <FiX className="text-sm" />
        </button>

        <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A6F5]/30 bg-[#C9A6F5]/10 px-3 py-1.5 text-[0.7rem] font-medium tracking-[0.14em] text-[#D9C2FA] lowercase">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-[#C9A6F5] shadow-[0_0_10px_2px_rgba(201,166,245,0.6)]"
          />
          Agosto lilás
        </span>

        <h2
          id="agosto-popup-title"
          className="mt-5 pr-6 text-2xl leading-tight font-bold tracking-tight text-balance text-white md:text-3xl"
        >
          Você reconhece todos os tipos de violência contra mulher?
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Nem toda violência deixa hematoma, às vezes ela tira sua conta, seu
          nome, sua independência. Se concientize.
        </p>
                <p className="mt-3 text-sm leading-relaxed text-white/65 font-bold">
                Você não precisa passar por isso sozinha.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/agostolilas"
            className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2A1636] transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
          >
            Me conscientizar
            <FiArrowRight className="text-base transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={dismiss}
            className="cursor-pointer rounded-full px-4 py-3 text-sm font-medium text-white/50 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
          >
            Agora não
          </button>
        </div>

        <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
          <a href="tel:180" className="font-semibold text-white/70 hover:underline">
            180
          </a>{" "}
          · Central de Atendimento à Mulher — gratuito, 24h, em todo o Brasil.
        </p>
      </div>
    </dialog>
  );
}

export default AgostoLilasPopup;
