import KanjiHero from "../../components/KanjiHero";
import KanjiCard from "../../components/KanjiCard";
import { kanjiGroups } from "../../data/kanji";

export default function KanjiPage() {
  return (
    <>
      <KanjiHero />

      <section className="px-4 sm:px-6 py-12 max-w-5xl mx-auto">
        {kanjiGroups.map((group) => (
          <div key={group.title} className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
              {group.title}
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
              {group.items.map((item) => (
                <KanjiCard
                  key={item.char}
                  char={item.char}
                  meaning={item.meaning}
                  kunyomi={item.kunyomi}
                  onyomi={item.onyomi}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
