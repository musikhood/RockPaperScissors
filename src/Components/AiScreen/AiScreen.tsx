import React, { useState, useEffect } from "react";
import "./AiScreen.scss";
import paper from "../../img/icon-paper.svg";
import rock from "../../img/icon-rock.svg";
import scissors from "../../img/icon-scissors.svg";
import lizard from "../../img/icon-lizard.svg";
import spock from "../../img/icon-spock.svg";
import ConfettiExplosion from "react-confetti-explosion";

type AiScreenItems = {
  setPlayerChoosed: React.Dispatch<React.SetStateAction<boolean>>;
  playerItem: string;
  playerItemImage: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  extraMode: boolean;
  score: number;
};

function AiScreen({
  setPlayerChoosed,
  playerItem,
  setScore,
  playerItemImage,
  extraMode,
  score,
}: AiScreenItems) {
  const [computerChoosed, setComputerChoosed] = useState(false);
  const [computerItem, setComputerItem] = useState("");
  const [computerItemImage, setComputerItemImage] = useState("");
  const [message, setMessage] = useState("");
  const [isExploding, setIsExploding] = useState(false);
  function ComputerChoose() {
    let index;
    if (extraMode) {
      index = Math.ceil(Math.random() * 5);
    } else {
      index = Math.ceil(Math.random() * 3);
    }
    switch (index) {
      case 1:
        setComputerItem("Rock");
        setComputerItemImage(rock);
        break;
      case 2:
        setComputerItem("Paper");
        setComputerItemImage(paper);
        break;
      case 3:
        setComputerItem("Scissors");
        setComputerItemImage(scissors);
        break;
      case 4:
        setComputerItem("Lizard");
        setComputerItemImage(lizard);
        break;
      case 5:
        setComputerItem("Spock");
        setComputerItemImage(spock);
        break;
    }
  }
  function CheckWinner() {
    let mess: string;
    if (playerItem === computerItem) {
      mess = "Draw";
    }
    switch (playerItem) {
      case "Rock":
        if (computerItem === "Paper" || computerItem === "Spock") {
          mess = "You Lost";
        } else if (computerItem === "Scissors" || computerItem === "Lizard") {
          mess = "You Won";
        }
        break;
      case "Paper":
        if (computerItem === "Scissors" || computerItem === "Lizard") {
          mess = "You Lost";
        } else if (computerItem === "Rock" || computerItem === "Spock") {
          mess = "You Won";
        }
        break;
      case "Scissors":
        if (computerItem === "Rock" || computerItem === "Spock") {
          mess = "You Lost";
        } else if (computerItem === "Paper" || computerItem === "Lizard") {
          mess = "You Won";
        }
        break;
      case "Lizard":
        if (computerItem === "Scissors" || computerItem === "Rock") {
          mess = "You Lost";
        } else if (computerItem === "Spock" || computerItem === "Paper") {
          mess = "You Won";
        }
        break;
      case "Spock":
        if (computerItem === "Lizard" || computerItem === "Paper") {
          mess = "You Lost";
        } else if (computerItem === "Scissors" || computerItem === "Rock") {
          mess = "You Won";
        }
        break;
    }
    setTimeout(() => {
      setComputerChoosed(true);
      setMessage(mess);
      if (mess === "You Won") {
        setScore((prevState) => (prevState += 1));
        setIsExploding(true);
      } else if (mess === "You Lost" && score > 0) {
        setScore((prevState) => (prevState -= 1));
      }
    }, 1000);
  }
  function PlayAgain() {
    setPlayerChoosed(false);
    setComputerItem("");
    setComputerItemImage("");
    setMessage("");
  }
  useEffect(() => {
    ComputerChoose();
  }, []);

  useEffect(() => {
    CheckWinner();
  }, [computerItem]);

  const MediumExplosion = {
    force: 0.6,
    duration: 5000,
    particleCount: 200,
    height: 1600,
    width: 1600,
  };

  return (
    <div className="AiScreen">
      <div className="AiScreen__Section">
        <h3>You Picked</h3>
        <div className={`CircleAi CircleAi--${playerItem}`}>
          <div className="Circle__imgWrapper">
            <img src={playerItemImage} alt="playerItem" />
            {isExploding && <ConfettiExplosion {...MediumExplosion} />}
          </div>
        </div>
      </div>
      {message !== "" && (
        <div className="AiScreen__MessageSection">
          <h2>{message}</h2>
          <div className="AiScreen__Button" onClick={() => PlayAgain()}>
            Play Again
          </div>
        </div>
      )}
      <div className="AiScreen__Section">
        <h3>The House Picked</h3>
        {computerChoosed ? (
          <div className={`CircleAi CircleAi--${computerItem}`}>
            <div className="Circle__imgWrapper">
              <img src={computerItemImage} alt="ComputerItem" />
            </div>
          </div>
        ) : (
          <div className="CircleAi CircleAi__Empty"></div>
        )}
      </div>
    </div>
  );
}

export default AiScreen;
