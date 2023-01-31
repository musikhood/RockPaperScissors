import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Game.scss";
import { Score, Rules } from "../../Components";

import bg from "../../img/bg-pentagon.svg";
import paper from "../../img/icon-paper.svg";
import rock from "../../img/icon-rock.svg";
import scissors from "../../img/icon-scissors.svg";
import lizard from "../../img/icon-lizard.svg";
import spock from "../../img/icon-spock.svg";
import rules from "../../img/image-rules-bonus.svg";

function Extra() {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="Extra">
      <Score
        choises={["Rock", "Paper", "Scissors", "Lizard", "Spock"]}
        score={score}
      />
      <div className="Extra__Game">
        <div className="Circle Circle--4 Circle--Paper">
          <div className="Circle__imgWrapper">
            <img src={paper} alt="paper" />
          </div>
        </div>
        <div className="Circle Circle--5 Circle--Scissors">
          <div className="Circle__imgWrapper">
            <img src={scissors} alt="scissors" />
          </div>
        </div>
        <div className="Circle Circle--6 Circle--Rock">
          <div className="Circle__imgWrapper">
            <img src={rock} alt="rock" />
          </div>
        </div>
        <div className="Circle Circle--7 Circle--Lizard">
          <div className="Circle__imgWrapper">
            <img src={lizard} alt="lizard" />
          </div>
        </div>
        <div className="Circle Circle--8 Circle--Spock">
          <div className="Circle__imgWrapper">
            <img src={spock} alt="spock" />
          </div>
        </div>
        <div className="Extra__imgWrapper">
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
        <Link to="/">Change Game Mode </Link>
      </div>
      <Rules image={rules} rules={rulesOpen} setRules={setRulesOpen} />
    </div>
  );
}

export default Extra;
