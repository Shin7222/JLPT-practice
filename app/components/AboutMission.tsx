const points = [
  {
    title: "Untuk Siapa",
    desc: "Pelajar bahasa Jepang dari level pemula (N5) hingga mahir (N1) yang ingin latihan soal dengan format menyerupai ujian asli.",
  },
  {
    title: "Kenapa Dibuat",
    desc: "Banyak materi latihan JLPT tersebar di berbagai sumber tanpa sistem yang terstruktur. Web ini menggabungkan latihan soal, simulasi ujian, dan pelacakan progres dalam satu tempat.",
  },
  {
    title: "Apa yang Ditawarkan",
    desc: "Latihan soal per level, simulasi ujian dengan timer, pembahasan jawaban, serta materi dasar Hiragana, Katakana, dan Kanji.",
  },
];

export default function AboutMission() {
  return (
    <section className="px-4 sm:px-6 py-14 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
        Tujuan Kami
      </h2>

      <div className="space-y-6">
        {points.map((point) => (
          <div
            key={point.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-indigo-400 font-semibold text-lg mb-2">
              {point.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
