import { FishContext } from "../App";
import "./styles/score-board.css";
import React, { useContext } from "react";
//  Where the score is presented

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const {
    state: { correct, incorrect, fish },
    total,
  } = useContext(FishContext);
  //   const { correct, incorrect, fish } = state;
  const fishNames = fish.map((item) => item.name);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrect}</div>
      <div id="choices-left">
        {fishNames.slice(total).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
};
