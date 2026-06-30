"use client";

import { useState, useEffect } from "react";
import StatsSummaryCard from "../components/StatsSummaryCard";
import TestHistoryItem from "../components/TestHistoryItem";
import {
  getTestHistory,
  getStatsSummary,
  clearTestHistory,
} from "@/utils/storage";
import { TestResult } from "@/types/test";

export default function DashboardPage() {
  const [history, setHistory] = useState<TestResult[]>([]);
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHistory(getTestHistory());
    setLoading(false);
  }, []);

  function handleClearHistory() {
    const confirmed = window.confirm(
      "Yakin mau hapus semua riwayat test? Tindakan ini tidak bisa dibatalkan.",
    );
    if (!confirmed) return;

    clearTestHistory();
    setHistory([]);
  }

  if (loading) return null;

  const stats = getStatsSummary(history);
  const availableLevels = Array.from(new Set(history.map((r) => r.level)));
  const filteredHistory =
    filterLevel === "all"
      ? history
      : history.filter((r) => r.level === filterLevel);

  if (history.length === 0) {
    return (
      <section className="px-4 sm:px-6 py-20 max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">📊</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">
          Belum Ada Riwayat Test
        </h1>
        <p className="text-slate-400 text-sm mb-8">
          Progress kamu akan muncul di sini setelah menyelesaikan test pertama.
        </p>

        <a
          href="/select-level"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Mulai Test Sekarang
        </a>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 py-12 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Progress Kamu</h1>
        <p className="text-slate-400 text-sm">
          Ringkasan dan riwayat hasil latihan JLPT
        </p>
      </div>

      <StatsSummaryCard
        totalTests={stats.totalTests}
        averageScore={stats.averageScore}
        passCount={stats.passCount}
      />

      {/* Filter & History */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold">Riwayat Test</h2>

        <div className="flex items-center gap-2">
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg px-3 py-1.5"
          >
            <option value="all">Semua Level</option>
            {availableLevels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2.5 mb-8">
        {filteredHistory.map((result) => (
          <TestHistoryItem key={result.id} result={result} />
        ))}
      </div>

      <button
        onClick={handleClearHistory}
        className="w-full text-rose-400 hover:text-rose-300 text-sm font-medium py-2 transition-colors"
      >
        Hapus Semua Riwayat
      </button>
    </section>
  );
}
