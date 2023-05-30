import React, { createContext, useReducer } from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { Images } from "./assets/images";

export const ACTIONS = {
  INCREASE: "increase",
  MATCH: "match",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.INCREASE:
      return {
        ...state,
        correct: state.correct + 1,
      };
    case ACTIONS.MATCH:
		console.log(payload)
      if (payload) {
        return { ...state, correct: state.correct + 1 };
      } else {
        return { ...state, incorrect: state.incorrect + 1 };
      }
  }
};

const initialState = {
  incorrect: 0,
  correct: 0,
  fish: [
    {
      name: "trout",
      url: Images.trout,
    },
    {
      name: "salmon",
      url: Images.salmon,
    },
    {
      name: "tuna",
      url: Images.tuna,
    },
    {
      name: "shark",
      url: Images.shark,
    },
  ],
};

export const FishContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const total = state.correct + state.incorrect;

  return (
    <FishContext.Provider value={{ state, total, dispatch }} className="App">
      {total === state.fish.length ? (
        <FinalScore />
      ) : (
        <>
          <ScoreBoard />
          <GameBoard />
        </>
      )}
    </FishContext.Provider>
  );
}

export default App;
