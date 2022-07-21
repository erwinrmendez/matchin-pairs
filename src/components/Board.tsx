import { FC, useState } from "react";
import { getMatches } from "../utils/getMatches";
import { shuffle } from "../utils/shuffle";
import Tile from "./Tile";

const Board = () => {
  const matches = getMatches(10);
  const [board, setBoard] = useState(shuffle(matches));
  const [prev, setPrev] = useState<number | null>(null);
  const [matched, setMatched] = useState(0);
  const [attempts, setAttempts] = useState(0);

  // regenerate matches
  const resetGame = () => {
    const newMatches = shuffle(matches);
    setBoard(newMatches);
    setAttempts(0);
    setMatched(0);
  };

  // reveal tile
  const revealTile = (curr: number) => {
    // show tile
    const tiles = [...board];
    tiles[curr].show = true;
    setBoard(tiles);

    // if not previous value, then set previous as current and return
    if (prev === null) {
      setPrev(curr);
      return;
    }

    // add animation if there is a match, else hide tiles
    if (tiles[prev].index === tiles[curr].index) {
      setMatched(matched + 1);
      // TODO: add animation
    } else {
      setTimeout(() => hideTiles(curr, prev), 750);
    }

    setPrev(null);
    setAttempts(attempts + 1);
  };

  // hide tiles if there is no match
  const hideTiles = (curr: number, prev: number) => {
    const modified = board.map((match, i) =>
      i === curr || i === prev ? { index: match.index, show: false } : match
    );
    setBoard(modified);
  };

  return (
    <main>
      <div className="flex justify-center my-4 gap-4">
        <ScoreBoard title="matched" score={`${matched}/10`} />
        <ScoreBoard title="attempts" score={attempts} />
      </div>
      <div className="border border-slate-700 p-2 gap-2 sm:p-4 grid grid-cols-5 sm:gap-4 rounded">
        {board.map((match, i) => (
          <Tile
            key={i}
            tileIndex={i}
            match={match.index}
            show={match.show}
            revealTile={revealTile}
          />
        ))}
      </div>
      <div className="flex py-4 w-full justify-center">
        <button
          className="bg-slate-700 px-4 py-2 text-white text-center rounded w-40 border border-slate-600"
          onClick={resetGame}
        >
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
