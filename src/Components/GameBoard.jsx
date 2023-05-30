import "./styles/game-board.css";
import React, { useContext, useState } from "react";
import { ACTIONS, FishContext } from "../App";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const [answerInput, setAnswerInput] = useState("");
  const {
    state: { fish },
    dispatch,
    total,
  } = useContext(FishContext);

  const nextFishToName = fish[total];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answerInput.trim()) {
      alert("Empty Input");
    } else {
      dispatch({
        type: ACTIONS.MATCH,
        payload: nextFishToName.name === answerInput.toLocaleLowerCase(),
      });
    }
    setAnswerInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
          type="text"
          name="fish-guess"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
