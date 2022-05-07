import "./Card.css";

function Card({ card, disabled, handlePlayerChoice }) {
  const handleClick = (skillName, card) => {
    if (disabled) {
      console.log(`card disabled`);
      return;
    }
    handlePlayerChoice(card, skillName, card[skillName]);
  };

  return (
    <>
      <div className="card">
        <div className="card--skill">
          Name: <br />
          {card.name}
        </div>
        <br />
        <div
          className="card--skill"
          onClick={() => handleClick("height", card)}
        >
          Height: {card.height}
        </div>
        <div
          className="card--skill"
          onClick={() => handleClick("weight", card)}
        >
          Weight: {card.weight}
        </div>
        <div className="card--skill" onClick={() => handleClick("power", card)}>
          Power: {card.power}
        </div>
      </div>
    </>
  );
}

export default Card;
