import Card from "./Card";
import "./BattlePile.scss";

function BattlePile({ battlePile }) {
  let card1 = battlePile[0];
  let card2 = battlePile[1];
  return (
    <div className="battle-pile">
      <Card
        className="battle-card"
        key={card1.id}
        card={card1}
        disabled={true}
      ></Card>
      <div className="versus">VS</div>
      <Card
        className="battle-card"
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
