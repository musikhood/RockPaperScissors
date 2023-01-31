import React from "react";
import "./Rules.scss";
import iconClose from "../../img/icon-close.svg";

type Rul = {
  image: any;
  rules: any;
  setRules: any;
};

function Rules({ image, rules, setRules }: Rul) {
  return (
    <div className={rules ? "Rules Rules--active" : "Rules"}>
      <div className="Rules__bg" onClick={() => setRules(false)}></div>
      <div className="Rules__Modal">
        <h2>Rules</h2>
        <div className="Rules__Close" onClick={() => setRules(false)}>
          <img src={iconClose} alt="close" />
        </div>
        <div className="Rules__imgWrapper">
          <img src={image} alt="rules" />
        </div>
      </div>
    </div>
  );
}

export default Rules;
