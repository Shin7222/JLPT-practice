import HiraganaHero from "../../components/HiraganaHero";
import HiraganaCard from "../../components/HiraganaCard";
import {
  hiraganaRows,
  hiraganaDakutenRows,
  hiraganaHandakutenRows,
} from "../../data/hiragana";

function HiraganaGrid({ rows }) {
  return (
    <div className="space-y-3">
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-5 gap-2 sm:gap-4">
          {row.map((item, j) => (
            <HiraganaCard
              key={item ? item.char : `empty-${i}-${j}`}
              char={item?.char}
              romaji={item?.romaji}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function HiraganaPage() {
  return (
    <>
      <HiraganaHero />

      <section className="px-4 sm:px-6 py-12 max-w-4xl mx-auto">
        {/* Hiragana Dasar */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
          Hiragana Dasar
        </h2>
        <HiraganaGrid rows={hiraganaRows} />

        {/* Dakuten */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-5">
          Dakuten{" "}
          <span className="text-slate-500 text-base font-normal">(゛)</span>
        </h2>
        <HiraganaGrid rows={hiraganaDakutenRows} />

        {/* Handakuten */}
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-5">
          Handakuten{" "}
          <span className="text-slate-500 text-base font-normal">(゜)</span>
        </h2>
        <HiraganaGrid rows={hiraganaHandakutenRows} />
      </section>
    </>
  );
}
