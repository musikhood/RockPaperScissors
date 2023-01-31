import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Game.scss";
import { Score, Rules } from "../../Components";

import bg from "../../img/bg-triangle.svg";
import paper from "../../img/icon-paper.svg";
import rock from "../../img/icon-rock.svg";
import scissors from "../../img/icon-scissors.svg";
import rules from "../../img/image-rules.svg";

function Basic() {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="Basic">
      <Score choises={["Rock", "Paper", "Scissors"]} score={score} />
      <div className="Basic__Game">
        <div className="Circle Circle--1 Circle--Paper">
          <div className="Circle__imgWrapper">
            <img src={paper} alt="paper" />
          </div>
        </div>
        <div className="Circle Circle--2 Circle--Scissors">
          <div className="Circle__imgWrapper">
            <img src={scissors} alt="scissors" />
          </div>
        </div>
        <div className="Circle Circle--3 Circle--Rock">
          <div className="Circle__imgWrapper">
            <img src={rock} alt="rock" />
          </div>
        </div>
        <div className="Basic__imgWrapper">
          <img src={bg} alt="bg" />
        </div>
      </div>
      <div
        className="Button"
        onClick={() => {
          setRulesOpen(true);
        }}
      >
        Rules
      </div>
      <div className="Button Button--2">
        <Link to="/extra">Change Game Mode </Link>
      </div>
      <Rules image={rules} rules={rulesOpen} setRules={setRulesOpen} />
    </div>
  );
}

export default Basic;
