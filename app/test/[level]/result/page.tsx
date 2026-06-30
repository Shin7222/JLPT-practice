"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Link from "next/link";
import { getTestHistory } from "@/utils/storage";
import { TestResult } from "@/types/test";

const PASS_THRESHOLD = 0.6; // 60%

export default function ResultPage() {
  const params = useParams<{ level: string }>();
  const searchParams = useSearchParams();
  const resultId = searchParams.get("id");

  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const history = getTestHistory();
    const found = history.find((r) => r.id === resultId) ?? null;
    setResult(found);
    setLoading(false);
  }, [resultId]);

  if (loading) return null;

  if (!result) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-slate-400 mb-6">Hasil test tidak ditemukan.</p>
        <Link
          href="/select-level"
          className="text-indigo-400 hover:underline text-sm"
        >
          ← Kembali pilih level
        </Link>
      </div>
    );
  }

  const percentage = Math.round((result.score / result.total) * 100);
  const isPass = result.score / result.total >= PASS_THRESHOLD;

  return (
    <section className="px-4 sm:px-6 py-16 max-w-md mx-auto text-center">
      <span
        className={`inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-6 ${
          isPass
            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
            : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
        }`}
      >
        {isPass ? "LULUS ✓" : "BELUM LULUS"}
      </span>

      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Hasil Test {result.level}
      </h1>
      <p className="text-slate-400 text-sm mb-8">
        {result.mode === "exam" ? "Mode Ujian" : "Mode Latihan"}
      </p>

      {/* Score Circle */}
      <div className="relative w-40 h-40 mx-auto mb-8">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-800"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={`${(percentage / 100) * 276.5} 276.5`}
            strokeLinecap="round"
            className={isPass ? "text-emerald-500" : "text-rose-500"}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}%</span>
          <span className="text-slate-400 text-sm">
            {result.score}/{result.total}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href={`/test/${params.level}/review?id=${result.id}`}
          className="block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3.5 rounded-xl transition-colors"
        >
          Lihat Pembahasan
        </Link>
        <Link
          href={`/select-level/${params.level}`}
          className="block border border-slate-800 hover:border-slate-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
        >
          Coba Lagi
        </Link>
        <Link
          href="/select-level"
          className="block text-slate-400 hover:text-white text-sm py-2 transition-colors"
        >
          Pilih Level Lain
        </Link>
      </div>
    </section>
  );
}
