import React from "react";
import { Link } from "react-router-dom";

const style = {
  wrapper: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

function NewGame() {
  return (
    <div className="new-game-wrapper" style={style.wrapper}>
      <Link to="/play">
        <button type="button">New Game</button>
      </Link>
    </div>
  );
}

export default NewGame;
