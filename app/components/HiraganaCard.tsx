export default function HiraganaCard({ char, romaji }) {
  if (!char) {
    return <div className="invisible" />;
  }

  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900 hover:border-indigo-500/50 transition-colors">
      <div className="flex items-center justify-center h-24 sm:h-32">
        <span className="text-4xl sm:text-5xl text-white">{char}</span>
      </div>
      <div className="bg-indigo-700 text-white text-center font-semibold py-2 text-xs sm:text-sm">
        {romaji.toUpperCase()}
      </div>
    </div>
  );
}
