import type { ViolenceDefinition } from "../types";

/** Gabarito do quiz — art. 7º da Lei nº 11.340/2006. */
export const violenceDefinitions: ViolenceDefinition[] = [
  {
    type: "Física",
    description:
      "Ofender a integridade ou a saúde corporal: empurrar, apertar, bater.",
  },
  {
    type: "Psicológica",
    description:
      "Controlar, ameaçar, humilhar, vigiar ou isolar alguém de amigos e família.",
  },
  {
    type: "Sexual",
    description:
      "Constranger alguém a presenciar, manter ou participar de conduta sexual não desejada.",
  },
  {
    type: "Patrimonial",
    description:
      "Controlar ou reter dinheiro, bens, documentos ou instrumentos de trabalho de outra pessoa.",
  },
  {
    type: "Moral",
    description:
      "Caluniar, difamar ou injuriar, destruindo a imagem ou credibilidade de alguém.",
  },
];
