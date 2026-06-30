"use client";

import { useState, useEffect } from "react";
import { KanaItem } from "@/types/kana";

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

interface Question {
  correct: KanaItem;
  options: KanaItem[];
}

function getRandomQuestion(
  fullList: KanaItem[],
  usedChars: string[],
): Question {
  const remaining = fullList.filter((h) => !usedChars.includes(h.char));
  const pool = remaining.length > 0 ? remaining : fullList;
  const correct = pool[Math.floor(Math.random() * pool.length)];

  const wrongOptions = shuffle(
    fullList.filter((h) => h.char !== correct.char),
  ).slice(0, 3);

  const options = shuffle([correct, ...wrongOptions]);

  return { correct, options };
}

interface KanaQuizProps {
  list: KanaItem[];
}

export default function KanaQuiz({ list }: KanaQuizProps) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [usedChars, setUsedChars] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    setQuestion(getRandomQuestion(list, []));
  }, [list]);

  function handleAnswer(option: KanaItem) {
    if (feedback || !question) return;

    setSelected(option.romaji);
    const isCorrect = option.romaji === question.correct.romaji;
    setFeedback(isCorrect ? "correct" : "wrong");
    setTotal((t) => t + 1);
    if (isCorrect) setScore((s) => s + 1);

    if (isCorrect) {
      setTimeout(() => goToNext(), 700);
    }
  }

  function goToNext() {
    if (!question) return;
    const newUsed = [...usedChars, question.correct.char];
    setUsedChars(newUsed);
    setQuestion(getRandomQuestion(list, newUsed));
    setSelected(null);
    setFeedback(null);
  }

  if (!question) return null;

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="flex justify-between text-sm text-slate-400 mb-8">
        <span>
          Skor: <span className="text-white font-semibold">{score}</span> /{" "}
          {total}
        </span>
        <span>Soal ke-{total + 1}</span>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl py-16 flex items-center justify-center mb-6">
        <span className="text-7xl text-white">{question.correct.char}</span>
      </div>

      {feedback === "wrong" && (
        <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 mb-4 text-center">
          <p className="text-rose-400 font-semibold text-sm">Kurang tepat</p>
          <p className="text-white text-sm mt-1">
            Jawaban yang benar:{" "}
            <span className="font-bold text-emerald-400">
              {question.correct.romaji.toUpperCase()}
            </span>
          </p>
        </div>
      )}

      {feedback === "correct" && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 mb-4 text-center">
          <p className="text-emerald-400 font-semibold text-sm">Benar!</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 mb-4">
        {question.options.map((option) => {
          const isSelected = selected === option.romaji;
          const isCorrectAnswer = option.romaji === question.correct.romaji;

          let style =
            "border-slate-800 bg-slate-900 hover:border-indigo-500/50";

          if (feedback) {
            if (isCorrectAnswer) {
              style = "border-emerald-500 bg-emerald-500/10";
            } else if (isSelected && !isCorrectAnswer) {
              style = "border-rose-500 bg-rose-500/10";
            } else {
              style = "border-slate-800 bg-slate-900 opacity-50";
            }
          }

          return (
            <button
              key={option.romaji}
              onClick={() => handleAnswer(option)}
              disabled={!!feedback}
              className={`border rounded-xl py-4 text-white font-semibold text-lg transition-colors ${style}`}
            >
              {option.romaji.toUpperCase()}
            </button>
          );
        })}
      </div>

      {feedback === "wrong" && (
        <button
          onClick={goToNext}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Lanjut →
        </button>
      )}
    </div>
  );
}
