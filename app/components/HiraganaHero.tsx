import Link from "next/link";

export default function HiraganaHero() {
  return (
    <section className="bg-indigo-700 px-4 sm:px-6 py-14 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Hiragana
      </h1>

      <span className="inline-block bg-slate-900/40 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        Belajar Kata & Huruf Jepang
      </span>

      <p className="text-indigo-100 text-base sm:text-lg">
        Ingin menguji hafalan huruf hiragana kamu?
        <br />
        Silahkan bermain{" "}
        <Link
          href="/study/hiragana/quiz"
          className="text-amber-300 font-semibold hover:underline"
        >
          Tebak Hiragana
        </Link>
      </p>
    </section>
  );
}
