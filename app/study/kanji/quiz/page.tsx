import KanjiQuiz from "../../../components/KanjiQuiz";
import { kanjiList } from "../../../data/kanji";

export default function KanjiQuizPage() {
  return (
    <section className="px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        Tebak Kanji
      </h1>
      <p className="text-slate-400 text-center text-sm mb-4">
        Tebak arti atau cara baca kanji yang ditampilkan
      </p>

      <KanjiQuiz list={kanjiList} />
    </section>
  );
}
