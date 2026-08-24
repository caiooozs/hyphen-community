import { cn } from "@/lib/utils";

interface QuizProgressProps {
  total: number;
  /** Índice da pergunta atual, começando em 1. */
  current: number;
}

export function QuizProgress({ total, current }: QuizProgressProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex flex-1 items-center gap-1.5"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={`Pergunta ${current} de ${total}`}
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-500",
              i < current - 1 && "bg-[#C9A6F5]",
              i === current - 1 && "bg-white",
              i > current - 1 && "bg-white/15",
            )}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-white/45">
        {current}/{total}
      </span>
    </div>
  );
}
