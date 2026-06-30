"use client";

import { useState, useEffect } from "react";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Tipe soal random: "meaning" (tebak arti) atau "reading" (tebak onyomi)
function getRandomQuestion(fullList, usedKeys) {
  const remaining = fullList.filter((k) => !usedKeys.includes(k.char));
  const pool = remaining.length > 0 ? remaining : fullList;
  const correct = pool[Math.floor(Math.random() * pool.length)];

  const questionType = Math.random() < 0.5 ? "meaning" : "reading";

  const getValue = (item) =>
    questionType === "meaning" ? item.meaning : item.onyomi;

  const wrongOptions = shuffle(
    fullList.filter((k) => k.char !== correct.char),
  ).slice(0, 3);

  const options = shuffle([correct, ...wrongOptions]).map((item) => ({
    key: item.char,
    label: getValue(item),
  }));

  return {
    correct: { char: correct.char, label: getValue(correct) },
    questionType,
    options,
  };
}

export default function KanjiQuiz({ list }) {
  const [question, setQuestion] = useState(null);
  const [usedKeys, setUsedKeys] = useState([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setQuestion(getRandomQuestion(list, []));
  }, [list]);

  function handleAnswer(option) {
    if (feedback) return;

    setSelected(option.key);
    const isCorrect = option.label === question.correct.label;
    setFeedback(isCorrect ? "correct" : "wrong");
    setTotal((t) => t + 1);
    if (isCorrect) setScore((s) => s + 1);

    if (isCorrect) {
      setTimeout(() => goToNext(), 700);
    }
  }

  function goToNext() {
    const newUsed = [...usedKeys, question.correct.char];
    setUsedKeys(newUsed);
    setQuestion(getRandomQuestion(list, newUsed));
    setSelected(null);
    setFeedback(null);
  }

  if (!question) return null;

  const promptText =
    question.questionType === "meaning"
      ? "Apa arti kanji ini?"
      : "Bagaimana cara baca (onyomi) kanji ini?";

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="flex justify-between text-sm text-slate-400 mb-6">
        <span>
          Skor: <span className="text-white font-semibold">{score}</span> /{" "}
          {total}
        </span>
        <span>Soal ke-{total + 1}</span>
      </div>

      <p className="text-slate-400 text-sm text-center mb-3">{promptText}</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl py-14 flex items-center justify-center mb-6">
        <span className="text-7xl text-white">{question.correct.char}</span>
      </div>

      {feedback === "wrong" && (
        <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 mb-4 text-center">
          <p className="text-rose-400 font-semibold text-sm">Kurang tepat</p>
          <p className="text-white text-sm mt-1">
            Jawaban yang benar:{" "}
            <span className="font-bold text-emerald-400">
              {question.correct.label}
            </span>
          </p>
        </div>
      )}

      {feedback === "correct" && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 mb-4 text-center">
          <p className="text-emerald-400 font-semibold text-sm">Benar!</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-2.5 mb-4">
        {question.options.map((option) => {
          const isSelected = selected === option.key;
          const isCorrectAnswer = option.label === question.correct.label;

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
              key={option.key}
              onClick={() => handleAnswer(option)}
              disabled={!!feedback}
              className={`border rounded-xl py-3.5 px-4 text-white font-medium text-left transition-colors ${style}`}
            >
              {option.label}
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
