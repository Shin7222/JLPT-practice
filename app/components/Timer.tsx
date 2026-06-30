"use client";

import { useEffect, useState, useCallback } from "react";

interface TimerProps {
  durationSeconds: number;
  onTimeUp: () => void;
}

export default function Timer({ durationSeconds, onTimeUp }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);

  const handleTimeUp = useCallback(() => {
    onTimeUp();
  }, [onTimeUp]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      handleTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, handleTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isLow = secondsLeft <= 60;

  return (
    <div
      className={`flex items-center gap-1.5 font-mono text-sm font-semibold px-3 py-1.5 rounded-lg ${
        isLow
          ? "bg-rose-500/10 text-rose-400 border border-rose-500/30"
          : "bg-slate-800 text-white border border-slate-700"
      }`}
    >
      ⏱ {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
