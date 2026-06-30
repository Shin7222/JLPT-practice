export interface JlptQuestion {
  id: string;
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  type: "vocabulary" | "grammar" | "reading";
  passage?: string;
  question: string;
  options: string[];
  answer: number; // index jawaban benar
  explanation: string;
}

export interface UserAnswer {
  questionId: string;
  selected: number | null;
  isCorrect: boolean;
}

export interface TestResult {
  id: string;
  level: string;
  mode: "practice" | "exam";
  score: number;
  total: number;
  date: string;
  answers: UserAnswer[];
}
