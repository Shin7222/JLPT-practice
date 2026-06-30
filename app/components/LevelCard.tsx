const levelInfo = [
  {
    level: "N5",
    title: "Pemula",
    desc: "Memahami kalimat dasar, hiragana, katakana, dan kanji sederhana.",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    level: "N4",
    title: "Dasar",
    desc: "Memahami percakapan dan teks sehari-hari dengan kosakata terbatas.",
    color: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  {
    level: "N3",
    title: "Menengah",
    desc: "Mampu memahami situasi sehari-hari dengan tingkat kesulitan menengah.",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    level: "N2",
    title: "Mahir",
    desc: "Memahami artikel, berita, dan percakapan dalam berbagai situasi.",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    level: "N1",
    title: "Tertinggi",
    desc: "Memahami bahasa Jepang tingkat lanjut dalam konteks akademik & profesional.",
    color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
];

export default function LevelCard() {
  return (
    <section className="px-4 sm:px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        Pilih Level Sesuai Kemampuanmu
      </h2>
      <p className="text-slate-400 text-center mb-10">
        Setiap level memiliki standar dan fokus materi yang berbeda
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {levelInfo.map((item) => (
          <div
            key={item.level}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors"
          >
            <span
              className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${item.color}`}
            >
              {item.level} — {item.title}
            </span>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
