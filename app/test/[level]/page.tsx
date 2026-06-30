"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import QuestionCard from "../../components/QuestionCard";
import ProgressBar from "../../components/ProgressBar";
import Timer from "../../components/Timer";
import { getQuestionsForLevel } from "@/utils/shuffle";
import { saveTestResult } from "@/utils/storage";
import { levels } from "../../data/levels";
import { getQuestionBank } from "../../data/questionBank";
import { JlptQuestion, UserAnswer, TestResult } from "@/types/test";

export default function TestPage() {
  const router = useRouter();
  const params = useParams<{ level: string }>();
  const searchParams = useSearchParams();

  const level = params.level;
  const mode = searchParams.get("mode") === "exam" ? "exam" : "practice";

  const levelInfo = levels.find((l) => l.level.toLowerCase() === level);
  const allQuestions = getQuestionBank(mode)[level] ?? [];

  const [questions, setQuestions] = useState<JlptQuestion[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [practiceShowFeedback, setPracticeShowFeedback] = useState(false);
  const [shuffleWarning, setShuffleWarning] = useState(false);

  const reshuffleQuestions = useCallback(() => {
    const picked = getQuestionsForLevel(allQuestions, allQuestions.length);
    setQuestions(picked);
    setAnswers(Array(picked.length).fill(null));
    setCurrentIndex(0);
    setPracticeShowFeedback(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // Inisialisasi soal pertama kali
  useEffect(() => {
    reshuffleQuestions();
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  // Deteksi user keluar/kembali ke tab — hanya berlaku di mode exam
  useEffect(() => {
    if (mode !== "exam") return;

    function handleVisibilityChange() {
      if (document.visibilityState === "visible" && isReady) {
        reshuffleQuestions();
        setShuffleWarning(true);
        setTimeout(() => setShuffleWarning(false), 4000);
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [mode, isReady, reshuffleQuestions]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  function handleSelect(optionIndex: number) {
    if (mode === "practice" && practiceShowFeedback) return;

    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);

    if (mode === "practice") {
      setPracticeShowFeedback(true);
    }
  }

  function goToNext() {
    if (isLastQuestion) {
      handleSubmit();
      return;
    }
    setCurrentIndex((i) => i + 1);
    setPracticeShowFeedback(false);
  }

  function goToPrev() {
    if (mode !== "practice") return;
    if (currentIndex === 0) return;
    setCurrentIndex((i) => i - 1);
    setPracticeShowFeedback(answers[currentIndex - 1] !== null);
  }

  function handleSubmit() {
    const userAnswers: UserAnswer[] = questions.map((q, i) => ({
      questionId: q.id,
      selected: answers[i],
      isCorrect: answers[i] === q.answer,
    }));

    const score = userAnswers.filter((a) => a.isCorrect).length;

    const result: TestResult = {
      id: `${level}-${Date.now()}`,
      level: level.toUpperCase(),
      mode,
      score,
      total: questions.length,
      date: new Date().toISOString(),
      answers: userAnswers,
    };

    saveTestResult(result);
    router.push(`/test/${level}/result?id=${result.id}`);
  }

  if (!isReady) {
    return (
      <div className="text-center py-20 text-slate-400">Memuat soal...</div>
    );
  }

  if (!levelInfo || questions.length === 0) {
    return (
      <div className="text-center py-20 text-slate-400">
        Soal untuk level ini belum tersedia.
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 py-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-indigo-400">
          {levelInfo.level} — {mode === "exam" ? "Mode Ujian" : "Mode Latihan"}
        </span>
        {mode === "exam" && (
          <Timer
            durationSeconds={levelInfo.timeMinutes * 60}
            onTimeUp={handleSubmit}
          />
        )}
      </div>

      {shuffleWarning && (
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm rounded-xl px-4 py-3 mb-6">
          ⚠️ Kamu sempat keluar dari halaman test. Soal diacak ulang dari awal.
        </div>
      )}

      <div className="mb-8">
        <ProgressBar current={currentIndex + 1} total={questions.length} />
      </div>

      <QuestionCard
        question={currentQuestion}
        selected={answers[currentIndex]}
        onSelect={handleSelect}
        showFeedback={mode === "practice" && practiceShowFeedback}
      />

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={goToPrev}
          disabled={mode === "exam" || currentIndex === 0}
          className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-400 disabled:opacity-30 hover:text-white transition-colors"
        >
          ← Sebelumnya
        </button>

        <button
          onClick={goToNext}
          disabled={answers[currentIndex] === null}
          className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-indigo-500 hover:bg-indigo-600 disabled:opacity-30 disabled:hover:bg-indigo-500 text-white transition-colors"
        >
          {isLastQuestion ? "Selesai" : "Selanjutnya →"}
        </button>
      </div>
    </section>
  );
}
