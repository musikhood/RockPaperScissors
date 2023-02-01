import React, { useState, useEffect } from "react";
import "../style/Game.scss";
import { Score, Rules, Buttons, AiScreen } from "../../Components";

import bg from "../../img/bg-triangle.svg";
import paper from "../../img/icon-paper.svg";
import rock from "../../img/icon-rock.svg";
import scissors from "../../img/icon-scissors.svg";
import rules from "../../img/image-rules.svg";

function Basic() {
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
    const storedScore = JSON.parse(localStorage.getItem("BasicScore")!);
    if (storedScore) {
      setScore(storedScore);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("BasicScore", JSON.stringify(score));
  }, [score]);
  return (
    <div className="Basic">
      <Score
        choises={["Rock", "Paper", "Scissors"]}
        score={score}
        resetScore={setScore}
      />
      {playerChoosed ? (
        <AiScreen
          setPlayerChoosed={setPlayerChoosed}
          playerItem={playerItem}
          setScore={setScore}
          playerItemImage={playerItemImage}
          extraMode={false}
          score={score}
        />
      ) : (
        <div className="Basic__Game">
          <div
            className="Circle Circle--1 Circle--Paper"
            onClick={() => {
              Player("Paper", paper);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={paper} alt="paper" />
            </div>
          </div>
          <div
            className="Circle Circle--2 Circle--Scissors"
            onClick={() => {
              Player("Scissors", scissors);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={scissors} alt="scissors" />
            </div>
          </div>
          <div
            className="Circle Circle--3 Circle--Rock"
            onClick={() => {
              Player("Rock", rock);
            }}
          >
            <div className="Circle__imgWrapper">
              <img src={rock} alt="rock" />
            </div>
          </div>
          <div className="Basic__imgWrapper">
            <img src={bg} alt="bg" />
          </div>
        </div>
      )}
      <Buttons
        setRulesOpen={setRulesOpen}
        playerChoosed={playerChoosed}
        linkTo="/extra"
      />
      <Rules image={rules} rules={rulesOpen} setRules={setRulesOpen} />
    </div>
  );
}

export default Basic;
