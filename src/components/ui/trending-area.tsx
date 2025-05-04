import { TredingItemScheleton, TrendingItem } from "./trending-item";

export const TrendingArea = () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">O que esá acontecendo</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#Test" count={1293} />
        <TrendingItem label="#Test" count={1293} />
        <TredingItemScheleton />
        <TredingItemScheleton />
      </div>
    </div>
  );
};
