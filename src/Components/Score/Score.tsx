import React from "react";
import "./Score.scss";

type ScoreContnet = {
  choises: Array<string>;
  score: number;
};

function Score({ choises, score }: ScoreContnet) {
  return (
    <div className="Score">
      <div className="Score__Name">
        {choises.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="Score__Result">
        <p>Score</p>
        <h2>{score}</h2>
      </div>
    </div>
  );
}

export default Score;
