import React from "react";
import "./Score.scss";

function Score() {
  return (
    <div className="Score">
      <div className="Score__Name">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <div className="Score__Result">
        <p>Score</p>
        <h2>12</h2>
      </div>
    </div>
  );
}

export default Score;
