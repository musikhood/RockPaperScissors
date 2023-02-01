import React from "react";
import "./Score.scss";
import reset from "../../img/reset.svg";

type ScoreContnet = {
  choises: Array<string>;
  score: number;
  resetScore: React.Dispatch<React.SetStateAction<number>>;
};

function Score({ choises, score, resetScore }: ScoreContnet) {
  return (
    <div className="Score">
      <div
        className={
          choises.length > 3 ? "Score__Name Score__Name--longer" : "Score__Name"
        }
      >
        {choises.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="Score__Result">
        <p>Score</p>
        <h2>{score}</h2>
        <div className="Score__reset" onClick={() => resetScore(0)}>
          <img src={reset} alt="reset" />
        </div>
      </div>
    </div>
  );
}

export default Score;
