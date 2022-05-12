import { RabbitLegacy } from "crypto-js";
import "./Card.scss";
import Pulse from "./Pulse";
import Spinner from "./Spinner";

function Card({
  card,
  id,
  disabled,
  handlePlayerChoice,
  handleSendToBattle,
  playerChoice,
  className,
}) {
  const handleClick = (skillName, card) => {
    if (disabled) {
      console.log(`card disabled`);
      return;
    }
    handlePlayerChoice(card, skillName, card[skillName]);
  };

  function addDefaultSrc(ev) {
    ev.target.src = "https://dummyimage.com/150x150/red/fff";
  }

  return (
    <>
      <div id={id} className={`card ${className}`}>
        {/* {!card.imageSrc ? <div>loading...</div> : <div>cucurucho</div>}
         */}
        <div className="card__image">
          <Spinner inlineStyle={{position: "absolute", zIndex: "-2"}} />
          {!disabled && playerChoice ? <Pulse/> : null}
          <img
            onError={addDefaultSrc}
            className="animate__animated animate__zoomIn"
            src={card.imageSrc}
            alt="hero illustration"
            onClick={!disabled && playerChoice ? handleSendToBattle : null}
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
