import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 text-center max-w-3xl mx-auto">
      <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full mb-6">
        日本語能力試験 対策
      </span>

      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
        Latihan JLPT, <br />
        <span className="text-indigo-400">Siap Hadapi Ujian Asli</span>
      </h1>

      <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
        Soal lengkap dari N5 sampai N1, simulasi ujian dengan timer, pembahasan
        detail, dan tracking progress kamu.
      </p>

      <Link
        href="/practice"
        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
      >
        Mulai Test →
      </Link>
    </section>
  );
}
