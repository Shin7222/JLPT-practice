"use client";

import { useState, useEffect } from "react";
import { hiraganaList } from "../data/hiragana";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomQuestion(usedChars) {
  const remaining = hiraganaList.filter((h) => !usedChars.includes(h.char));
  const pool = remaining.length > 0 ? remaining : hiraganaList;
  const correct = pool[Math.floor(Math.random() * pool.length)];

  const wrongOptions = shuffle(
    hiraganaList.filter((h) => h.char !== correct.char),
  ).slice(0, 3);

  const options = shuffle([correct, ...wrongOptions]);

  return { correct, options };
}

export default function HiraganaQuiz() {
  const [question, setQuestion] = useState(null);
  const [usedChars, setUsedChars] = useState([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong" | null

  useEffect(() => {
    setQuestion(getRandomQuestion([]));
  }, []);

  function handleAnswer(option) {
    if (feedback) return; // sudah jawab, tunggu klik "Lanjut"

    setSelected(option.romaji);
    const isCorrect = option.romaji === question.correct.romaji;
    setFeedback(isCorrect ? "correct" : "wrong");
    setTotal((t) => t + 1);
    if (isCorrect) setScore((s) => s + 1);

    // Kalau benar, auto-lanjut setelah delay singkat
    if (isCorrect) {
      setTimeout(() => goToNext(), 700);
    }
    // Kalau salah, TIDAK auto-lanjut — tunggu user klik "Lanjut"
  }

  function goToNext() {
    const newUsed = [...usedChars, question.correct.char];
    setUsedChars(newUsed);
    setQuestion(getRandomQuestion(newUsed));
    setSelected(null);
    setFeedback(null);
  }

  if (!question) return null;

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      {/* Score */}
      <div className="flex justify-between text-sm text-slate-400 mb-8">
        <span>
          Skor: <span className="text-white font-semibold">{score}</span> /{" "}
          {total}
        </span>
        <span>Soal ke-{total + 1}</span>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl py-16 flex items-center justify-center mb-6">
        <span className="text-7xl text-white">{question.correct.char}</span>
      </div>

      {/* Feedback Message */}
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

      {/* Options */}
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

      {/* Tombol Lanjut - hanya muncul kalau jawaban salah */}
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
