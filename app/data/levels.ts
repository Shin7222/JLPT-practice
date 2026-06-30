export interface LevelInfo {
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  title: string;
  desc: string;
  color: string;
  timeMinutes: number; // durasi ujian untuk 10 soal
}

export const levels: LevelInfo[] = [
  {
    level: "N5",
    title: "Pemula",
    desc: "Memahami kalimat dasar, hiragana, katakana, dan kanji sederhana.",
    color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    timeMinutes: 10,
  },
  {
    level: "N4",
    title: "Dasar",
    desc: "Memahami percakapan dan teks sehari-hari dengan kosakata terbatas.",
    color: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    timeMinutes: 12,
  },
  {
    level: "N3",
    title: "Menengah",
    desc: "Mampu memahami situasi sehari-hari dengan tingkat kesulitan menengah.",
    color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    timeMinutes: 15,
  },
  {
    level: "N2",
    title: "Mahir",
    desc: "Memahami artikel, berita, dan percakapan dalam berbagai situasi.",
    color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    timeMinutes: 18,
  },
  {
    level: "N1",
    title: "Tertinggi",
    desc: "Memahami bahasa Jepang tingkat lanjut dalam konteks akademik & profesional.",
    color: "border-rose-500/30 bg-rose-500/10 text-rose-400",
    timeMinutes: 20,
  },
];
