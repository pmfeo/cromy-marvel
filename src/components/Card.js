import "./Card.scss";

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
        <div className="card--image">
          <img src="https://dummyimage.com/150x150/red/fff" alt="hero illustration" />
        </div>
        <div className="card--name">
          <strong>{card.name}</strong>
        </div>
        <br />
        <div
          className="card--skill"
          onClick={() => handleClick("height", card)}
        >
          Altura: {card.height} m
        </div>
        <div
          className="card--skill"
          onClick={() => handleClick("weight", card)}
        >
          Peso: {card.weight} Kg
        </div>
        <div className="card--skill" onClick={() => handleClick("power", card)}>
          Fuerza: {card.power} Kg
        </div>
        <div className="card--skill" onClick={() => handleClick("won", card)}>
          Peleas Ganadas: {card.won}
        </div>
        <div className="card--skill" onClick={() => handleClick("speed", card)}>
          Velocidad: {card.speed} Km/h
        </div>
      </div>
    </>
  );
}

export default Card;
