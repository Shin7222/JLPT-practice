import KanaHero from "../../components/KanaHero";
import KanaCard from "../../components/KanaCard";
import {
  hiraganaRows,
  hiraganaDakutenRows,
  hiraganaHandakutenRows,
} from "../..//data/hiragana";
import { KanaItem } from "@/types/kana";

interface HiraganaGridProps {
  rows: (KanaItem | null)[][];
}

function HiraganaGrid({ rows }: HiraganaGridProps) {
  return (
    <div className="space-y-3">
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-5 gap-2 sm:gap-4">
          {row.map((item, j) => (
            <KanaCard
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
      <KanaHero title="Hiragana" quizHref="/study/hiragana/quiz" />

      <section className="px-4 sm:px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
          Hiragana Dasar
        </h2>
        <HiraganaGrid rows={hiraganaRows} />

        <h2 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-5">
          Dakuten{" "}
          <span className="text-slate-500 text-base font-normal">(゛)</span>
        </h2>
        <HiraganaGrid rows={hiraganaDakutenRows} />

        <h2 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-5">
          Handakuten{" "}
          <span className="text-slate-500 text-base font-normal">(゜)</span>
        </h2>
        <HiraganaGrid rows={hiraganaHandakutenRows} />
      </section>
    </>
  );
}
