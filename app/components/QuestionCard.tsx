import { JlptQuestion } from "@/types/test";

interface QuestionCardProps {
  question: JlptQuestion;
  selected: number | null;
  onSelect: (index: number) => void;
  showFeedback: boolean; // true di mode practice setelah jawab
}

export default function QuestionCard({
  question,
  selected,
  onSelect,
  showFeedback,
}: QuestionCardProps) {
  return (
    <div>
      {question.passage && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4 text-slate-300 text-sm leading-relaxed">
          {question.passage}
        </div>
      )}

      <h2 className="text-white text-lg sm:text-xl font-medium mb-6 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrectAnswer = index === question.answer;

          let style =
            "border-slate-800 bg-slate-900 hover:border-indigo-500/50";

          if (showFeedback && selected !== null) {
            if (isCorrectAnswer) {
              style = "border-emerald-500 bg-emerald-500/10";
            } else if (isSelected && !isCorrectAnswer) {
              style = "border-rose-500 bg-rose-500/10";
            } else {
              style = "border-slate-800 bg-slate-900 opacity-50";
            }
          } else if (isSelected) {
            style = "border-indigo-500 bg-indigo-500/10";
          }

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              disabled={showFeedback && selected !== null}
              className={`w-full text-left border rounded-xl px-4 py-3.5 text-white transition-colors flex items-center gap-3 ${style}`}
            >
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-semibold shrink-0">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {showFeedback && selected !== null && (
        <div
          className={`mt-4 rounded-xl px-4 py-3 text-sm ${
            selected === question.answer
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
              : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
          }`}
        >
          <p className="font-semibold mb-1">
            {selected === question.answer ? "Benar!" : "Kurang tepat"}
          </p>
          <p className="text-slate-300">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
