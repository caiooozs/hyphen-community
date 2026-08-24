"use client";

import { useCallback, useMemo, useState } from "react";

import type { QuizFeedback, QuizQuestion, ViolenceType } from "../types";

export type QuizStatus = "answering" | "answered" | "finished";

export interface UseQuizResult {
  question: QuizQuestion;
  questionNumber: number;
  total: number;
  score: number;
  selected: ViolenceType | null;
  status: QuizStatus;
  isLastQuestion: boolean;
  feedbackMessage: string;
  answer: (option: ViolenceType) => void;
  next: () => void;
  restart: () => void;
}

/**
 * Máquina de estados do quiz. Não conhece DOM nem JSX — a UI só consome
 * `status` e dispara `answer`/`next`/`restart`.
 */
export function useQuiz(
  questions: QuizQuestion[],
  feedback: QuizFeedback[],
): UseQuizResult {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<ViolenceType | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const question = questions[index];
  const isLastQuestion = index === total - 1;

  const status: QuizStatus = finished
    ? "finished"
    : selected
      ? "answered"
      : "answering";

  const answer = useCallback(
    (option: ViolenceType) => {
      // Ignora cliques depois que a pergunta já foi respondida.
      if (selected !== null) return;
      setSelected(option);
      if (option === questions[index].correct) setScore((s) => s + 1);
    },
    [index, questions, selected],
  );

  const next = useCallback(() => {
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      setSelected(null);
      return;
    }
    setFinished(true);
  }, [index, total]);

  const restart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }, []);

  const feedbackMessage = useMemo(() => {
    const match = [...feedback]
      .sort((a, b) => b.minScore - a.minScore)
      .find((f) => score >= f.minScore);
    return match?.message ?? "";
  }, [feedback, score]);

  return {
    question,
    questionNumber: index + 1,
    total,
    score,
    selected,
    status,
    isLastQuestion,
    feedbackMessage,
    answer,
    next,
    restart,
  };
}
