import { FiArrowDown, FiRotateCcw } from "react-icons/fi";

interface QuizResultProps {
  score: number;
  total: number;
  message: string;
  onReveal: () => void;
  onRestart: () => void;
}

export function QuizResult({
  score,
  total,
  message,
  onReveal,
  onRestart,
}: QuizResultProps) {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          {score}
        </span>
        <span className="font-mono text-xl text-white/40">/{total}</span>
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
        {message}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onReveal}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2A1636] transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
        >
          ver o gabarito
          <FiArrowDown className="text-base" />
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C9A6F5] focus-visible:outline-none"
        >
          <FiRotateCcw className="text-sm" />
          refazer
        </button>
      </div>
    </div>
  );
}
