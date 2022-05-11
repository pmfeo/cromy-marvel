import Card from "./Card";

import "./PlayerDeck.scss";

function PlayerDeck({ player, playerDeck, handlePlayerChoice, turn }) {
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
