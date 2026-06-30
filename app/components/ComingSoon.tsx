import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <span className="inline-block text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">
          Segera Hadir
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {title}
        </h1>

        <p className="text-slate-400 text-sm sm:text-base mb-8">
          {description}
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
