import React from "react";
import { Link } from "react-router-dom";

const style = {
  wrapper: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function NewGame() {
  return (
    <div className="new-game-wrapper">
      <Link to="/play">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          New Game
        </button>
      </Link>
    </div>
  );
}

export default NewGame;
