import Card from "./Card";

import "./PlayerDeck.scss";

function PlayerDeck({ player, playerDeck, playerChoice, handlePlayerChoice, handleSendToBattle, turn }) {
  return (
    <div className="player-deck">
      {playerDeck.map((card, idx) => (
        <Card
          key={card.id}
          id={idx}
          card={card}
          handlePlayerChoice={handlePlayerChoice}
          handleSendToBattle={handleSendToBattle}
          playerChoice={playerChoice}
          disabled={idx !== 0 || turn !== player ? true : false}
        ></Card>
      ))}
    </div>
  );
}

export default PlayerDeck;
