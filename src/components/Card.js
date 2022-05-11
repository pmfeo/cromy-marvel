import "./Card.scss";

function Card({ card, id, disabled, handlePlayerChoice, className }) {
  const handleClick = (skillName, card) => {
    if (disabled) {
      console.log(`card disabled`);
      return;
    }
    handlePlayerChoice(card, skillName, card[skillName]);
  };

  return (
    <>
      <div id={id} className={`card ${className}`}>
        <div className="card__image">
          <img
            src="https://dummyimage.com/150x150/red/fff"
            alt="hero illustration"
          />
        </div>
        <div className="card__name">{card.name}</div>
        <div className="card__skills">
          <div
            className="card-skill"
            onClick={() => handleClick("height", card)}
          >
            <span className="skill-key">Altura:</span>
            <span className="skill-value">{card.height} m</span>
          </div>
          <div
            className="card-skill"
            onClick={() => handleClick("weight", card)}
          >
            <span className="skill-key">Peso:</span>
            <span className="skill-value">{card.weight} Kg</span>
          </div>
          <div
            className="card-skill"
            onClick={() => handleClick("power", card)}
          >
            <span className="skill-key">Fuerza:</span>
            <span className="skill-value">{card.power} Kg</span>
          </div>
          <div className="card-skill" onClick={() => handleClick("won", card)}>
            <span className="skill-key">Peleas Ganadas:</span>
            <span className="skill-value">{card.won}</span>
          </div>
          <div
            className="card-skill"
            onClick={() => handleClick("speed", card)}
          >
            <span className="skill-key">Velocidad:</span>
            <span className="skill-value">{card.speed} Km/h</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
