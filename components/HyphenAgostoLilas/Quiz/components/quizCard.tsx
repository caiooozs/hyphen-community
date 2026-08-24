import { FiArrowRight } from "react-icons/fi";

import type { QuizQuestion, ViolenceType } from "../../types";
import { QuizOptions } from "./quizOptions";
import { QuizProgress } from "./quizProgress";

interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  total: number;
  options: ViolenceType[];
  selected: ViolenceType | null;
  isLastQuestion: boolean;
  onSelect: (option: ViolenceType) => void;
  onNext: () => void;
}

export function QuizCard({
  question,
  questionNumber,
  total,
  options,
  selected,
  isLastQuestion,
  onSelect,
  onNext,
}: QuizCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <QuizProgress total={total} current={questionNumber} />

      <p
        aria-live="polite"
        className="text-lg leading-snug font-medium text-balance text-white md:text-xl"
      >
        {question.scenario}
      </p>

      <QuizOptions
        options={options}
        correct={question.correct}
        selected={selected}
        onSelect={onSelect}
      />

      {selected !== null ? (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2A1636] transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
        >
          {isLastQuestion ? "ver resultado" : "próxima"}
          <FiArrowRight className="text-base" />
        </button>
      ) : null}
    </div>
  );
}
