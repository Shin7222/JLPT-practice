import LevelSelectCard from "../components/LevelSelectCard";
import { levels } from "../data/levels";

export default function SelectLevelPage() {
  return (
    <section className="px-4 sm:px-6 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Pilih Level JLPT
        </h1>
        <p className="text-slate-400">
          Pilih level sesuai kemampuanmu untuk mulai latihan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {levels.map((info) => (
          <LevelSelectCard key={info.level} info={info} />
        ))}
      </div>
    </section>
  );
}
