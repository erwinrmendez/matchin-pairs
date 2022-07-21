// import all animals
import { useEffect, useState } from "react";
import dog from "../images/001-dog.png";
import cat from "../images/002-cat.png";
import duck from "../images/003-duck.png";
import pig from "../images/004-pig.png";
import chameleon from "../images/005-chameleon.png";
import beetle from "../images/006-beetle.png";
import jellyfish from "../images/007-jellyfish.png";
import cow from "../images/008-cow.png";
import walrus from "../images/009-walrus.png";
import dolphin from "../images/010-dolphin.png";

type Animal = {
  name: string;
  image: string;
};

const animals: Animal[] = [
  { name: "dog", image: dog },
  { name: "cat", image: cat },
  { name: "duck", image: duck },
  { name: "pig", image: pig },
  { name: "chameleon", image: chameleon },
  { name: "beetle", image: beetle },
  { name: "jellyfish", image: jellyfish },
  { name: "cow", image: cow },
  { name: "walrus", image: walrus },
  { name: "dolphin", image: dolphin },
];

type TileProps = {
  tileIndex: number;
  match: number;
  show: boolean;
  revealTile: (curr: number) => void;
  animateMatched: boolean;
};

const Tile = ({
  tileIndex,
  match,
  show,
  revealTile,
  animateMatched,
}: TileProps) => {
  const [transform, setTransform] = useState("rotateY(0deg)");

  useEffect(() => {
    show ? setTransform("rotateY(180deg)") : setTransform("rotateY(0deg)");
  }, [show]);

  return (
    <div
      className="flex items-center justify-center bg-slate-900 rounded border border-slate-700 cursor-pointer hover:bg-slate-900/70 transition-all ease-in-out"
      style={{ perspective: "1000px" }}
      onClick={() => revealTile(tileIndex)}
    >
      <div
        className={`${
          animateMatched ? "animate-matched" : ""
        } rounded relative transition-all duration-300 w-12 h-12 sm:w-20 sm:h-20`}
        style={{ transformStyle: "preserve-3d", transform }}
      >
        {show && (
          <img
            src={animals[match].image}
            alt={animals[match].name}
            className={`${animateMatched ? "" : "bg-slate-300"} rounded p-3`}
            style={{ transform: "rotateY(180deg)" }}
          />
        )}
      </div>
    </div>
  );
};

export default Tile;
