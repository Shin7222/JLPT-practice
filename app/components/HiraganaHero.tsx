import Link from "next/link";

interface KanaHeroProps {
  title: string;
  quizHref: string;
}

export default function KanaHero({ title, quizHref }: KanaHeroProps) {
  return (
    <section className="bg-indigo-700 px-4 sm:px-6 py-14 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      <span className="inline-block bg-slate-900/40 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        Belajar Kata & Huruf Jepang
      </span>
      <p className="text-indigo-100 text-base sm:text-lg">
        Ingin menguji hafalan huruf {title.toLowerCase()} kamu?
        <br />
        Silahkan bermain{" "}
        <Link
          href={quizHref}
          className="text-amber-300 font-semibold hover:underline"
        >
          Tebak {title}
        </Link>
      </p>
    </section>
  );
}
