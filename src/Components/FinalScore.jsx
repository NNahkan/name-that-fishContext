import React, { useContext } from "react";
import { FishContext } from "../App";

// ! Do Not Add Props Here
export const FinalScore = () => {
  const {
    state: { correct },
    total,
  } = useContext(FishContext);
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correct}</p>
        <hr />
        <p>{total}</p>
      </div>
    </div>
  );
};
