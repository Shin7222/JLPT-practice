import Link from "next/link";
import { LevelInfo } from "../data/levels";

interface LevelSelectCardProps {
  info: LevelInfo;
}

export default function LevelSelectCard({ info }: LevelSelectCardProps) {
  return (
    <Link
      href={`/select-level/${info.level.toLowerCase()}`}
      className={`block border rounded-2xl p-6 hover:scale-[1.02] transition-transform ${info.color}`}
    >
      <span className="inline-block text-xs font-bold px-3 py-1 rounded-full border border-current mb-3">
        {info.level}
      </span>
      <h3 className="text-white font-semibold text-lg mb-1">{info.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{info.desc}</p>
    </Link>
  );
}
