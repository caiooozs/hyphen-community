"use client";

import { useEffect, useRef, useState } from "react";

import { quizFeedback, quizQuestions, VIOLENCE_OPTIONS } from "../data/quiz";
import { useQuiz } from "../hooks/useQuiz";
import AgostoReveal from "../Reveal/reveal";
import { Panel, Section, SectionLede, SectionTitle } from "../ui/section";
import { QuizCard } from "./components/quizCard";
import { QuizResult } from "./components/quizResult";

export function AgostoQuiz() {
  const quiz = useQuiz(quizQuestions, quizFeedback);
  const [revealed, setRevealed] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealed) return;
    revealRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [revealed]);

  return (
    <>
      <Section id="quiz" eyebrow="antes de qualquer explicação">
        <SectionTitle>Você reconhece cada tipo de violência?</SectionTitle>
        <SectionLede>
          5 situações reais, 5 tipos de violência previstos na Lei Maria da
          Penha. Sem dica! O gabarito vem só no final.
        </SectionLede>

        <Panel className="mt-2">
          {quiz.status === "finished" ? (
            <QuizResult
              score={quiz.score}
              total={quiz.total}
              message={quiz.feedbackMessage}
              onReveal={() => setRevealed(true)}
              onRestart={() => {
                setRevealed(false);
                quiz.restart();
              }}
            />
          ) : (
            <QuizCard
              question={quiz.question}
              questionNumber={quiz.questionNumber}
              total={quiz.total}
              options={VIOLENCE_OPTIONS}
              selected={quiz.selected}
              isLastQuestion={quiz.isLastQuestion}
              onSelect={quiz.answer}
              onNext={quiz.next}
            />
          )}
        </Panel>
      </Section>

      {revealed ? (
        <div ref={revealRef}>
          <AgostoReveal />
        </div>
      ) : null}
    </>
  );
}

export default AgostoQuiz;
