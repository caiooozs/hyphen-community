import type { Testimonial } from "../types";

/**
 * ── DEPOIMENTOS ──────────────────────────────────────────────────────────────
 * Espaço reservado para as falas das pessoas selecionadas pela Hyphen.
 * Enquanto a lista estiver vazia, o bloco de depoimentos não é renderizado —
 * a seção "tecnologia tem lado" continua publicável do jeito que está.
 *
 * Para publicar um depoimento, basta descomentar/duplicar o modelo abaixo:
 *
 *   {
 *     id: "nome-da-pessoa",
 *     quote: "A fala da pessoa, na íntegra.",
 *     author: "Nome da Pessoa",
 *     role: "Curso, cargo ou vínculo",   // opcional
 *   },
 */
export const testimonials: Testimonial[] = [];
