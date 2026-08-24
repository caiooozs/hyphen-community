import { cn } from "@/lib/utils";

import type { ViolenceType } from "../../types";

interface QuizOptionsProps {
  options: ViolenceType[];
  correct: ViolenceType;
  selected: ViolenceType | null;
  onSelect: (option: ViolenceType) => void;
}

export function QuizOptions({
  options,
  correct,
  selected,
  onSelect,
}: QuizOptionsProps) {
  const answered = selected !== null;

  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const isCorrect = answered && option === correct;
        const isWrongPick = answered && option === selected && !isCorrect;

        return (
          <button
            key={option}
            type="button"
            disabled={answered}
            onClick={() => onSelect(option)}
            className={cn(
              "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
              "focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none",
              !answered &&
                "cursor-pointer border-white/15 bg-white/[0.04] text-white/80 hover:-translate-y-0.5 hover:border-[#C9A6F5]/60 hover:bg-white/[0.09] hover:text-white",
              isCorrect &&
                "border-emerald-400/60 bg-emerald-400/15 text-emerald-200",
              isWrongPick && "border-rose-400/60 bg-rose-400/15 text-rose-200",
              answered && !isCorrect && !isWrongPick && "border-white/10 text-white/30",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
