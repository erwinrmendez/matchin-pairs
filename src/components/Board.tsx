import { FC, useState } from "react";
import { getMatches } from "../utils/getMatches";
import { shuffle } from "../utils/shuffle";
import Modal from "./Modal";
import Tile from "./Tile";

const Board = () => {
  const matches = getMatches(10);
  const [board, setBoard] = useState(shuffle(matches));
  const [openTiles, setOpenTiles] = useState<number[]>([]);
  const [prev, setPrev] = useState<number | null>(null); // previous opened tile
  const [matched, setMatched] = useState(0); // number of matches
  const [attempts, setAttempts] = useState(0); // number of attempts
  let isFinished = openTiles.length === matches.length;

  // regenerate matches
  const resetGame = () => {
    const newMatches = shuffle(matches);
    setBoard(newMatches);
    setOpenTiles([]);
    setAttempts(0);
    setMatched(0);
    setPrev(null);
  };

  // reveal tile
  const revealTile = (curr: number) => {
    // if already matched, return
    if (openTiles.includes(curr)) return;

    // if clicking on same tile, hide it
    if (curr === prev) {
      hideTiles(curr);
      setPrev(null);
      return;
    }

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
      setOpenTiles([...openTiles, prev, curr]);
      // TODO: add animation
    } else {
      setTimeout(() => hideTiles(curr, prev), 750);
    }

    setAttempts(attempts + 1);
    setPrev(null);
  };

  // hide tiles if there is no match
  const hideTiles = (curr: number, prev?: number) => {
    const modified = board.map((match, i) =>
      i === curr || i === prev ? { index: match.index, show: false } : match
    );

    // reset board and open tiles
    setBoard(modified);
    setOpenTiles(openTiles.filter((n) => n !== curr || n !== prev));
  };

  return (
    <>
      <main>
        <div className="flex justify-center my-4 gap-4">
          <ScoreBoard
            title="matched"
            score={`${matched}/10`}
            isFinished={isFinished}
          />
          <ScoreBoard
            title="attempts"
            score={attempts}
            isFinished={isFinished}
          />
        </div>
        <div className="border border-slate-700 p-2 gap-2 sm:p-4 grid grid-cols-5 sm:gap-4 rounded">
          {board.map((match, i) => (
            <Tile
              key={i}
              tileIndex={i}
              match={match.index}
              animateMatched={openTiles.includes(i)}
              show={match.show}
              revealTile={revealTile}
            />
          ))}
        </div>
        <div className="flex py-4 w-full justify-center">
          <button
            className={`${
              isFinished ? "bg-slate-600" : "bg-slate-700"
            } px-4 py-2 text-white text-center rounded w-40 border border-slate-600 transition-colors duration-500`}
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>
      </main>
      {isFinished && <Modal totalAttempts={attempts} reset={resetGame} />}
    </>
  );
};

const ScoreBoard: FC<{
  score: string | number;
  title: string;
  isFinished: boolean;
}> = ({ score, title, isFinished }) => {
  return (
    <div
      className={`${
        isFinished ? "bg-slate-600" : "bg-slate-700"
      } bg-slate-700 px-4 py-2 text-white rounded flex justify-between items-center border border-slate-600 gap-4 transition-colors duration-500`}
    >
      <span className="text-slate-400">{title}:</span>
      <span className="sm:text-2xl">{score}</span>
    </div>
  );
};

export default Board;
