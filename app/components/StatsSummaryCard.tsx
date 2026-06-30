interface StatsSummaryCardProps {
  totalTests: number;
  averageScore: number;
  passCount: number;
}

export default function StatsSummaryCard({
  totalTests,
  averageScore,
  passCount,
}: StatsSummaryCardProps) {
  const stats = [
    { label: "Total Test", value: totalTests },
    { label: "Rata-rata Skor", value: `${averageScore}%` },
    { label: "Lulus", value: passCount },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">
            {stat.value}
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
