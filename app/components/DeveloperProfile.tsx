export default function DeveloperProfile() {
  return (
    <section className="px-4 sm:px-6 py-14 bg-slate-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          Dibuat Oleh
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          {/* Ganti dengan foto asli kamu nanti */}
          <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/40 mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-400">S</span>
          </div>

          <h3 className="text-white font-semibold text-lg">Shin</h3>
          <p className="text-indigo-400 text-sm mb-4">Fullstack Developer</p>

          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
            Dibangun sebagai proyek pribadi untuk membantu pelajar bahasa Jepang
            berlatih JLPT secara gratis dan terstruktur.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://github.com/Shin7222"
              className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
