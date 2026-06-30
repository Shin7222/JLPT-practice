import Link from "next/link";

const tools = [
  {
    title: "Hiragana",
    desc: "Belajar 46 karakter dasar ひらがな",
    href: "/study/hiragana",
    emoji: "あ",
  },
  {
    title: "Katakana",
    desc: "Belajar 46 karakter dasar カタカナ",
    href: "/study/katakana",
    emoji: "ア",
  },
  {
    title: "100 Kanji Dasar",
    desc: "Kanji paling sering muncul di N5-N4",
    href: "/study/kanji",
    emoji: "漢",
  },
];

export default function StudyToolsSection() {
  return (
    <section className="px-4 sm:px-6 py-12 max-w-6xl mx-auto mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        Belum Siap Test? Belajar Dulu di Sini
      </h2>
      <p className="text-slate-400 text-center mb-10">
        Kuasai dasar-dasar sebelum mencoba soal latihan
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 text-center transition-all"
          >
            <div className="text-4xl font-bold text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
              {tool.emoji}
            </div>
            <h3 className="text-white font-semibold mb-1">{tool.title}</h3>
            <p className="text-slate-500 text-sm">{tool.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
