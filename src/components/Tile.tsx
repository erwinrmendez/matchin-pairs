import { FC } from "react";

// import all animals
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

const Tile: FC<{ index: number }> = ({ index }) => {
  return (
    <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center bg-slate-900 rounded border border-slate-700">
      <img
        src={animals[index].image}
        alt={animals[index].name}
        className="bg-slate-100 p-1 rounded"
      />
    </div>
  );
};

export default Tile;
