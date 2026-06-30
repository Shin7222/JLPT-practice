"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTestHistory } from "@/utils/storage";
import { TestResult } from "@/types/test";
import { getQuestionBank } from "../../../data/questionBank";

export default function ReviewPage() {
  const searchParams = useSearchParams();
  const resultId = searchParams.get("id");

  const [result, setResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const history = getTestHistory();
    const found = history.find((r) => r.id === resultId) ?? null;
    setResult(found);
  }, [resultId]);

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

  const levelKey = result.level.toLowerCase();
  const allQuestions = getQuestionBank(result.mode)[levelKey] ?? [];

  return (
    <section className="px-4 sm:px-6 py-10 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Pembahasan Soal
        </h1>
        <p className="text-slate-400 text-sm">
          {result.level} · Skor {result.score}/{result.total}
        </p>
      </div>

      <div className="space-y-6">
        {result.answers.map((userAnswer, index) => {
          const question = allQuestions.find(
            (q) => q.id === userAnswer.questionId,
          );
          if (!question) return null;

          return (
            <div
              key={userAnswer.questionId}
              className="border border-slate-800 bg-slate-900 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-slate-500">
                  Soal {index + 1}
                </span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    userAnswer.isCorrect
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-rose-500/10 text-rose-400"
                  }`}
                >
                  {userAnswer.isCorrect ? "Benar" : "Salah"}
                </span>
              </div>

              {question.passage && (
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 mb-3 text-slate-400 text-sm">
                  {question.passage}
                </div>
              )}

              <p className="text-white font-medium mb-4">{question.question}</p>

              <div className="space-y-2 mb-4">
                {question.options.map((option, optIndex) => {
                  const isUserChoice = userAnswer.selected === optIndex;
                  const isCorrectAnswer = optIndex === question.answer;

                  let style = "border-slate-800 text-slate-400";
                  if (isCorrectAnswer) {
                    style =
                      "border-emerald-500/50 bg-emerald-500/10 text-emerald-400";
                  } else if (isUserChoice && !isCorrectAnswer) {
                    style = "border-rose-500/50 bg-rose-500/10 text-rose-400";
                  }

                  return (
                    <div
                      key={optIndex}
                      className={`border rounded-lg px-3 py-2 text-sm flex items-center gap-2 ${style}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-semibold shrink-0">
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      {option}
                      {isUserChoice && (
                        <span className="ml-auto text-xs">Jawabanmu</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
                <p className="text-slate-400 text-sm leading-relaxed">
                  💡 {question.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/select-level"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Coba Level Lain
        </Link>
      </div>
    </section>
  );
}
