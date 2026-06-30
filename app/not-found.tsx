import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-indigo-400 mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
