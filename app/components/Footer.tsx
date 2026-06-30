import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold text-indigo-400">日</span>
              <span className="text-base font-semibold text-white">
                JLPT<span className="text-indigo-400">Practice</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              Latihan soal JLPT dari N5 sampai N1, gratis dan terstruktur.
            </p>
          </div>

          {/* Belajar */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Belajar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/study/hiragana"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Hiragana
                </Link>
              </li>
              <li>
                <Link
                  href="/study/katakana"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Katakana
                </Link>
              </li>
              <li>
                <Link
                  href="/study/kanji"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  100 Kanji
                </Link>
              </li>
            </ul>
          </div>

          {/* Latihan */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Latihan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/select-level"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Mulai Test
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Progress
                </Link>
              </li>
            </ul>
          </div>

          {/* Lainnya */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Lainnya</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  Tentang
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} JLPT Practice. Dibuat untuk membantu
            pelajar bahasa Jepang.
          </p>
        </div>
      </div>
    </footer>
  );
}
