import React, { useContext } from "react";
import "../../../styles/toolbox/Toolbox.scss";
import dice10 from "../../../assets/images/dice-10.svg";
import dice9 from "../../../assets/images/dice-9.svg";
import dice8 from "../../../assets/images/dice-8.svg";
import dice7 from "../../../assets/images/dice-7.svg";
import dice6 from "../../../assets/images/dice-6.svg";
import dice5 from "../../../assets/images/dice-5.svg";
import map from "../../../assets/images/Eyedropper.svg";
import king from "../../../assets/images/Crown.svg";
import square from "../../../assets/images/Polygon.svg";
import circle from "../../../assets/images/Circle.svg";
import Play from "../../../assets/images/Play.svg";
import PlayActive from "../../../assets/images/Play2.svg";
import CloseIcon from "../../../assets/images/Close.svg";

import { DiceContext } from "../../../context/dice-context";
import { ColorContext } from "../../../context/color-context";
import { BoardContext } from "../../../context/board-context";
import PieceDesignCard from "../../PieceDesignCard";
import DiceCard from "../../DiceCard";
import OptionCard from "./OptionCard";

interface ToolboxProps {
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const Toolbox: React.FC<ToolboxProps> = ({
  activeCategory,
  onCategoryClick,
}) => {
  const { board, toggleBoard } = useContext(BoardContext);
  const { dice, changeDice } = useContext(DiceContext);
  const { design, changeDesign } = useContext(ColorContext);

  const boardOptions = [
    { name: "Classic", option: "Web3" },
    { name: "Modern", option: "Minimal" },
    { name: "Retro", option: "Sharp" },
  ];

  const diceOptions = [
    { name: "Basic Dice", option: "basic", img: dice5 },
    { name: "Gold Dice", option: "gold", img: dice6 },
    { name: "Black Dice", option: "black", img: dice7 },
    { name: "Unique Dice", option: "unique", img: dice8 },
    { name: "Red Dice", option: "red", img: dice9 },
    { name: "Silver Dice", option: "silver", img: dice10 },
  ];

  const pieceDesigns = [
    { name: "Default", option: "default", img: map },
    { name: "King", option: "king", img: king },
    { name: "Box", option: "box", img: square },
    { name: "Circle", option: "circle", img: circle },
  ];


  console.log(activeCategory)
  
  return (
    <div className="toolbox-content">
      <div className="categories">
        <button
          className={`category ${activeCategory === "BOARD" ? "active" : ""}`}
          onClick={() => onCategoryClick("BOARD")}
        >
          <img
            src={activeCategory === "BOARD" ? PlayActive : Play}
            alt="new-game"
          />
          Select board
        </button>
        <button
          className={`category ${activeCategory === "DICE" ? "active" : ""}`}
          onClick={() => onCategoryClick("DICE")}
        >
          <img
            src={activeCategory === "DICE" ? PlayActive : Play}
            alt="new-game"
          />
          Choose dice
        </button>
        <button
          className={`category ${activeCategory === "PIECE" ? "active" : ""}`}
          onClick={() => onCategoryClick("AVATER")}
        >
          <img
            src={activeCategory === "PIECE" ? PlayActive : Play}
            alt="new-game"
          />
          Your avatar
        </button>
        <button
          className={`category ${activeCategory === "COLOR" ? "active" : ""}`}
          onClick={() => onCategoryClick("COLOR")}
        >
          <img
            src={activeCategory === "COLOR" ? PlayActive : Play}
            alt="new-game"
          />
          Pick colour
        </button>
      </div>

      {activeCategory === "BOARD" && (
        <div className="board">
          <div className="header">
            <p>Choose a Board To Play With</p>
            <div onClick={() => onCategoryClick("")}>
              <img src={CloseIcon} alt="close-icon" />
            </div>
          </div>
          <div className="options">
            {boardOptions.map((item) => (
              <OptionCard
                key={item.option}
                option={item}
                active={board === item.option}
                onSelect={() => toggleBoard(item.option)}
              />
            ))}
          </div>
        </div>
      )}

      {activeCategory === "DICE" && (
        <div className="dice-options">
          {diceOptions.map((item) => (
            <DiceCard
              img={item.img}
              key={item.option}
              option={item}
              active={dice === item.option}
              onSelect={() => changeDice(item.option, item.img)}
            />
          ))}
        </div>
      )}
      {activeCategory === "COLOR" && (
        <div className="piece-options">
          {pieceDesigns.map((item) => (
            <PieceDesignCard
              key={item.option}
              option={item}
              active={design === item.option}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onSelect={() => changeDesign(item.option as any)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Toolbox;
