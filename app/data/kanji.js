export const kanjiGroups = [
  {
    title: "Angka",
    items: [
      { char: "一", meaning: "satu", kunyomi: "ひと(つ)", onyomi: "イチ" },
      { char: "二", meaning: "dua", kunyomi: "ふた(つ)", onyomi: "ニ" },
      { char: "三", meaning: "tiga", kunyomi: "みっ(つ)", onyomi: "サン" },
      { char: "四", meaning: "empat", kunyomi: "よっ(つ)", onyomi: "シ" },
      { char: "五", meaning: "lima", kunyomi: "いつ(つ)", onyomi: "ゴ" },
      { char: "六", meaning: "enam", kunyomi: "むっ(つ)", onyomi: "ロク" },
      { char: "七", meaning: "tujuh", kunyomi: "なな(つ)", onyomi: "シチ" },
      { char: "八", meaning: "delapan", kunyomi: "やっ(つ)", onyomi: "ハチ" },
      {
        char: "九",
        meaning: "sembilan",
        kunyomi: "ここの(つ)",
        onyomi: "キュウ",
      },
      { char: "十", meaning: "sepuluh", kunyomi: "とお", onyomi: "ジュウ" },
    ],
  },
  {
    title: "Waktu & Hari",
    items: [
      { char: "日", meaning: "hari, matahari", kunyomi: "ひ", onyomi: "ニチ" },
      { char: "月", meaning: "bulan", kunyomi: "つき", onyomi: "ゲツ" },
      { char: "年", meaning: "tahun", kunyomi: "とし", onyomi: "ネン" },
      { char: "今", meaning: "sekarang", kunyomi: "いま", onyomi: "コン" },
      { char: "時", meaning: "waktu, jam", kunyomi: "とき", onyomi: "ジ" },
      { char: "週", meaning: "minggu", kunyomi: "—", onyomi: "シュウ" },
      { char: "朝", meaning: "pagi", kunyomi: "あさ", onyomi: "チョウ" },
      { char: "昼", meaning: "siang", kunyomi: "ひる", onyomi: "チュウ" },
      { char: "夜", meaning: "malam", kunyomi: "よる", onyomi: "ヤ" },
      {
        char: "曜",
        meaning: "hari (dlm minggu)",
        kunyomi: "—",
        onyomi: "ヨウ",
      },
    ],
  },
  // Lanjutkan grup lain: Alam, Orang & Keluarga, Tubuh, Arah & Posisi,
  // Aktivitas, Tempat, Sifat, Sekolah & Pekerjaan — sampai total 100 kanji
];

// Flat list untuk quiz
export const kanjiList = kanjiGroups.flatMap((g) => g.items);
