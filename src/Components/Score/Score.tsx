import React from "react";
import "./Score.scss";

type ScoreContnet = {
  choises: Array<string>;
  score: number;
};

function Score({ choises, score }: ScoreContnet) {
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
      </div>
    </div>
  );
}

export default Score;
