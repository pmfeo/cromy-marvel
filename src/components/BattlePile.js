import Card from "./Card";
import "./BattlePile.scss";

function BattlePile({ battlePile }) {
  let card1 = battlePile[0];
  let card2 = battlePile[1];
  return (
    <div className="battle-pile">
      <Card
        className="battle-card animate__animated animate__zoomIn"
        key={card1.id}
        card={card1}
        disabled={true}
      ></Card>
      <div className="versus animate__animated animate__bounceIn">VS</div>
      <Card
        className="battle-card animate__animated animate__zoomIn"
        key={card2.id}
        card={card2}
        disabled={true}
      ></Card>
      {/* {battlePile.map((card) => (
        <Card key={card.id} card={card} disabled={true}></Card>
      ))} */}
    </div>
  );
}

export default BattlePile;
