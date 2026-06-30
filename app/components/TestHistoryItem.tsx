import Link from "next/link";
import { TestResult } from "@/types/test";

interface TestHistoryItemProps {
  result: TestResult;
}

export default function TestHistoryItem({ result }: TestHistoryItemProps) {
  const percentage = Math.round((result.score / result.total) * 100);
  const isPass = result.score / result.total >= 0.6;

  const formattedDate = new Date(result.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link
      href={`/test/${result.level.toLowerCase()}/review?id=${result.id}`}
      className="flex items-center justify-between bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-xl px-4 py-3.5 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span
          className={`text-xs font-bold px-2.5 py-1 rounded-full ${
            isPass
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-rose-500/10 text-rose-400"
          }`}
        >
          {result.level}
        </span>
        <div>
          <p className="text-white text-sm font-medium">
            {result.score}/{result.total} ({percentage}%)
          </p>
          <p className="text-slate-500 text-xs">
            {result.mode === "exam" ? "Mode Ujian" : "Mode Latihan"} ·{" "}
            {formattedDate}
          </p>
        </div>
      </div>

      <span className="text-slate-600 text-sm">→</span>
    </Link>
  );
}
