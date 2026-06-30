import Link from "next/link";

export default function KanjiHero() {
  return (
    <section className="bg-indigo-700 px-4 sm:px-6 py-14 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        100 Kanji Dasar
      </h1>

      <span className="inline-block bg-slate-900/40 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        Kanji Paling Sering Muncul di N5–N4
      </span>

      <p className="text-indigo-100 text-base sm:text-lg">
        Ingin menguji hafalan kanji kamu?
        <br />
        Silahkan bermain{" "}
        <Link
          href="/study/kanji/quiz"
          className="text-amber-300 font-semibold hover:underline"
        >
          Tebak Kanji
        </Link>
      </p>
    </section>
  );
}
