import Link from "next/link";
import { notFound } from "next/navigation";
import { levels } from "../../data/levels";

interface PageProps {
  params: Promise<{ level: string }>;
}

export default async function SelectModePage({ params }: PageProps) {
  const { level } = await params;
  const levelInfo = levels.find(
    (l) => l.level.toLowerCase() === level.toLowerCase(),
  );

  if (!levelInfo) {
    notFound();
  }

  return (
    <section className="px-4 sm:px-6 py-16 max-w-2xl mx-auto text-center">
      <span className="inline-block text-sm font-bold px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 mb-4">
        {levelInfo.level} — {levelInfo.title}
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        Pilih Mode Latihan
      </h1>
      <p className="text-slate-400 mb-10">
        Mau latihan santai atau coba simulasi ujian asli?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Mode Latihan */}
        <Link
          href={`/test/${levelInfo.level.toLowerCase()}?mode=practice`}
          className="border border-slate-800 bg-slate-900 hover:border-indigo-500/50 rounded-2xl p-6 text-left transition-colors"
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            📖 Mode Latihan
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Tanpa timer. Langsung tahu jawaban benar/salah setiap soal. Cocok
            untuk belajar santai.
          </p>
        </Link>

        {/* Mode Ujian */}
        <Link
          href={`/test/${levelInfo.level.toLowerCase()}?mode=exam`}
          className="border border-slate-800 bg-slate-900 hover:border-indigo-500/50 rounded-2xl p-6 text-left transition-colors"
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            ⏱ Mode Ujian
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Timer {levelInfo.timeMinutes} menit. Tidak ada feedback sampai
            selesai. Simulasi ujian asli.
          </p>
        </Link>
      </div>
    </section>
  );
}
