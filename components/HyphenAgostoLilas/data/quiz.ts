import type { QuizFeedback, QuizQuestion, ViolenceType } from "../types";

/** Alternativas oferecidas em todas as perguntas. */
export const VIOLENCE_OPTIONS: ViolenceType[] = [
  "Física",
  "Psicológica",
  "Sexual",
  "Patrimonial",
  "Moral",
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "celular",
    scenario:
      "Ele revira seu celular todo dia e decide quem você pode seguir ou não nas redes sociais.",
    correct: "Psicológica",
  },
  {
    id: "cartao",
    scenario:
      "Ele fica com seu cartão e decide quanto você pode gastar do seu próprio salário.",
    correct: "Patrimonial",
  },
  {
    id: "reputacao",
    scenario:
      "Ele espalha pros amigos que ela é 'louca' e que ninguém vai acreditar nela.",
    correct: "Moral",
  },
  {
    id: "agressao",
    scenario:
      "Ele empurra, aperta o braço com força ou dá um tapa 'sem querer' quando discutem.",
    correct: "Física",
  },
  {
    id: "consentimento",
    scenario:
      "Ele insiste em fazer sexo mesmo quando ela diz não, chamando isso de 'obrigação de namorada'.",
    correct: "Sexual",
  },
];

/** Avaliado de cima para baixo — o primeiro minScore atingido vence. */
export const quizFeedback: QuizFeedback[] = [
  {
    minScore: 5,
    message:
      "Você reconhece todas. Agora imagina quanta gente na sua roda não reconhece — é aí que entra o próximo passo.",
  },
  {
    minScore: 3,
    message:
      "Boa base. Reconhecer é o primeiro passo pra agir — e é exatamente daí que nascem soluções boas.",
  },
  {
    minScore: 0,
    message:
      "A maioria das pessoas erra mais da metade nesse quiz. Por isso esse assunto precisa estar dentro de hackathon, não só em campanha de mês.",
  },
];
