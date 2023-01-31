import React from "react";
import { Link } from "react-router-dom";
import "../style/Game.scss";

function Extra() {
  return (
    <div className="Extra">
      Extra
      <div className="Button">Rules</div>
      <div className="Button Button--2">
        <Link to="/">Change Game Mode </Link>
      </div>
    </div>
  );
}

export default Extra;
