import KanaQuiz from "../../../components/KanaQuiz";
import { hiraganaList } from "../../../data/hiragana";

export default function HiraganaQuizPage() {
  return (
    <section className="px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        Tebak Hiragana
      </h1>
      <p className="text-slate-400 text-center text-sm mb-4">
        Pilih romaji yang tepat untuk huruf yang ditampilkan
      </p>

      <KanaQuiz list={hiraganaList} />
    </section>
  );
}
