import KanaQuiz from "../../../components/KanaQuiz";
import { katakanaList } from "../../../data/katakana";

export default function KatakanaQuizPage() {
  return (
    <section className="px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        Tebak Katakana
      </h1>
      <p className="text-slate-400 text-center text-sm mb-4">
        Pilih romaji yang tepat untuk huruf yang ditampilkan
      </p>

      <KanaQuiz list={katakanaList} />
    </section>
  );
}
