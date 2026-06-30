export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function getQuestionsForLevel(
  allQuestions: import("@/types/test").JlptQuestion[],
  count: number,
) {
  return shuffleArray(allQuestions).slice(0, count);
}
