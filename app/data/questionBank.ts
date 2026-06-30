import { JlptQuestion } from "@/types/test";

import { n5Questions } from "../data/questions/practice/n5";
import { n4Questions } from "../data/questions/practice/n4";
import { n3Questions } from "../data/questions/practice/n3";
import { n2Questions } from "../data/questions/practice/n2";
import { n1Questions } from "../data/questions/practice/n1";
import { n5ExamQuestions } from "../data/questions/exam/n5";
// import { n4ExamQuestions } from "@/data/questions/exam/n4"; // nanti setelah dibuat
// import { n3ExamQuestions } from "@/data/questions/exam/n3";
// import { n2ExamQuestions } from "@/data/questions/exam/n2";
// import { n1ExamQuestions } from "@/data/questions/exam/n1";

export const practiceQuestionBank: Record<string, JlptQuestion[]> = {
  n5: n5Questions,
  n4: n4Questions,
  n3: n3Questions,
  n2: n2Questions,
  n1: n1Questions,
};

export const examQuestionBank: Record<string, JlptQuestion[]> = {
  n5: n5ExamQuestions,
  // n4: n4ExamQuestions,
  // n3: n3ExamQuestions,
  // n2: n2ExamQuestions,
  // n1: n1ExamQuestions,
};

export function getQuestionBank(mode: "practice" | "exam") {
  return mode === "exam" ? examQuestionBank : practiceQuestionBank;
}
