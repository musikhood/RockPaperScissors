import React, { useState, useEffect } from "react";
import "../style/Game.scss";
import { Score, Rules, Buttons, AiScreen } from "../../Components";

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
  const [playerChoosed, setPlayerChoosed] = useState(false);
  const [playerItem, setPlayerItem] = useState("");
  const [playerItemImage, setPlayerItemImage] = useState("");

  function Player(item: string, image: string) {
    setPlayerChoosed(true);
    setPlayerItem(item);
    setPlayerItemImage(image);
  }
  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem("ExtraScore")!);
    if (storedScore) {
      setScore(storedScore);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("ExtraScore", JSON.stringify(score));
  }, [score]);

  return (
    <div className="Extra">
      <Score
        choises={["Rock", "Paper", "Scissors", "Lizard", "Spock"]}
        score={score}
      />
      {playerChoosed ? (
        <AiScreen
          setPlayerChoosed={setPlayerChoosed}
          playerItem={playerItem}
          setScore={setScore}
          playerItemImage={playerItemImage}
          extraMode={true}
          score={score}
        />
      ) : (
        <div className="Extra__Game">
          <div
            className="Circle Circle--4 Circle--Paper"
            onClick={() => {
              Player("Paper", paper);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={paper} alt="paper" />
            </div>
          </div>
          <div
            className="Circle Circle--5 Circle--Scissors"
            onClick={() => {
              Player("Scissors", scissors);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={scissors} alt="scissors" />
            </div>
          </div>
          <div
            className="Circle Circle--6 Circle--Rock"
            onClick={() => {
              Player("Rock", rock);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={rock} alt="rock" />
            </div>
          </div>
          <div
            className="Circle Circle--7 Circle--Lizard"
            onClick={() => {
              Player("Lizard", lizard);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={lizard} alt="lizard" />
            </div>
          </div>
          <div
            className="Circle Circle--8 Circle--Spock"
            onClick={() => {
              Player("Spock", spock);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={spock} alt="spock" />
            </div>
          </div>
          <div className="Extra__imgWrapper">
            <img src={bg} alt="bg" />
          </div>
        </div>
      )}
      <Buttons
        setRulesOpen={setRulesOpen}
        playerChoosed={playerChoosed}
        linkTo="/"
      />
      <Rules image={rules} rules={rulesOpen} setRules={setRulesOpen} />
    </div>
  );
}

export default Extra;
