import { TestResult } from "@/types/test";

const STORAGE_KEY = "jlpt_test_history";

export function saveTestResult(result: TestResult) {
  if (typeof window === "undefined") return;
  const existing = getTestHistory();
  const updated = [result, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function getTestHistory(): TestResult[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as TestResult[];
  } catch {
    return [];
  }
}

export function getLatestResult(): TestResult | null {
  const history = getTestHistory();
  return history.length > 0 ? history[0] : null;
}

// Baru ditambahkan:
export function clearTestHistory() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function getStatsSummary(history: TestResult[]) {
  if (history.length === 0) {
    return {
      totalTests: 0,
      averageScore: 0,
      bestLevel: null as string | null,
      passCount: 0,
    };
  }

  const totalTests = history.length;
  const totalPercentage = history.reduce(
    (sum, r) => sum + (r.score / r.total) * 100,
    0,
  );
  const averageScore = Math.round(totalPercentage / totalTests);

  const passCount = history.filter((r) => r.score / r.total >= 0.6).length;

  // Level yang paling sering dikerjakan
  const levelCounts: Record<string, number> = {};
  history.forEach((r) => {
    levelCounts[r.level] = (levelCounts[r.level] || 0) + 1;
  });
  const bestLevel =
    Object.entries(levelCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

  return { totalTests, averageScore, bestLevel, passCount };
}
