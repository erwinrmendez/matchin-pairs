import { FC } from "react";
import Tile from "./Tile";

const Board = () => {
  return (
    <main>
      <div className="flex justify-center my-4 gap-4">
        <ScoreBoard title="matched" score="0/10" />
        <ScoreBoard title="attempts" score={0} />
      </div>
      <div className="border border-slate-700 p-2 gap-2 sm:p-4 grid grid-cols-5 sm:gap-4 rounded">
        {[...Array(20).keys()].map((index) => (
          <Tile key={index} index={index >= 10 ? index - 10 : index} />
        ))}
      </div>
      <div className="flex py-4 w-full justify-center">
        <button className="bg-slate-700 px-4 py-2 text-white text-center rounded w-40 border border-slate-600">
          Reset Game
        </button>
      </div>
    </main>
  );
};

const ScoreBoard: FC<{ score: string | number; title: string }> = ({
  score,
  title,
}) => {
  return (
    <div className="bg-slate-700 px-4 py-2 text-white rounded sm:w-40 flex justify-between items-center border border-slate-600 gap-4">
      <span className="text-slate-400">{title}:</span>
      <span className="sm:text-2xl">{score}</span>
    </div>
  );
};

export default Board;
