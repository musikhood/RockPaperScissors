import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.scss";

type ButtonsInput = {
  setRulesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playerChoosed: boolean;
  linkTo: string;
};

function Buttons({ setRulesOpen, playerChoosed, linkTo }: ButtonsInput) {
  return (
    <>
      <div
        className="Button"
        onClick={() => {
          setRulesOpen(true);
        }}
      >
        Rules
      </div>
      <div
        className={
          playerChoosed
            ? "Button Button--deactivated Button--2"
            : "Button Button--2"
        }
      >
        <Link to={linkTo}>Change Game Mode </Link>
      </div>
    </>
  );
}

export default Buttons;
