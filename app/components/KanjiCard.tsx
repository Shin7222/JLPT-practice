export default function KanjiCard({ char, meaning, kunyomi, onyomi }) {
  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900 hover:border-indigo-500/50 transition-colors">
      <div className="flex items-center justify-center h-24 sm:h-28 pt-2">
        <span className="text-4xl sm:text-5xl text-white">{char}</span>
      </div>

      <div className="px-2 pb-2 text-center">
        <p className="text-slate-300 text-xs sm:text-sm font-medium truncate">
          {meaning}
        </p>
        <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">
          {kunyomi !== "—" && <span>{kunyomi}</span>}
          {kunyomi !== "—" && onyomi && " · "}
          <span>{onyomi}</span>
        </p>
      </div>

      <div className="bg-indigo-700 text-white text-center font-semibold py-1.5 text-xs sm:text-sm mt-1">
        {onyomi}
      </div>
    </div>
  );
}
