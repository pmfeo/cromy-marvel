import { useEffect } from "react";
import Card from "./Card";

import "./PlayerDeck.scss";

function PlayerDeck({ player, playerDeck, handlePlayerChoice, turn }) {
//   const reverseStack = () => {
//     let stack = document.querySelector(".player-deck");
//     [...stack.children].reverse().forEach((i) => stack.append(i));
//     console.log(stack);
//   };

//   useEffect(() => {
//     reverseStack();
//     return;
//   }, );

  return (
    <div className="player-deck">
      {playerDeck.map((card, idx) => (
        <Card
          key={card.id}
          id={idx}
          card={card}
          handlePlayerChoice={handlePlayerChoice}
          disabled={idx !== 0 || turn !== player ? true : false}
        ></Card>
      ))}
    </div>
  );
}

export default PlayerDeck;
