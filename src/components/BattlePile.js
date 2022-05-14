import Card from "./Card";
import "./BattlePile.scss";
import { useEffect, useState } from "react";

function BattlePile({ battlePile }) {
  // let card1 = battlePile[0];
  // let card2 = battlePile[1];
  const [isBusy, setIsBusy] = useState(true);
  const [odds, setOdds] = useState([]);
  const [evens, setEvens] = useState([]);

  // useEffect(() => {
  //   // let oddArr = [];
  //   // let evenArr = [];
  //   console.log(`spliting array`);
  //   battlePile.map((card, idx) => {
  //     return idx % 2 === 0
  //       ? setEvens([card, ...evens])
  //       : setOdds([card, ...odds]);
  //   });
  //   // setEvens(evenArr);
  //   // setOdds(oddArr);
  //   setIsBusy(false);
  //   console.log(`odds`, odds);
  //   console.log(`evens`, evens);
  // }, [battlePile]);

  // TODO RETORNAR EL BATTLEPILE!!!

  return (
    <div className="battle-pile">
      <div className="battle-pile__deck">
        {battlePile &&
          battlePile.map((card, idx) => {
            if (idx % 2 === 0) {
              return (
                <Card
                  className="battle-card animate__animated animate__zoomIn"
                  key={card.id}
                  card={card}
                  disabled={true}
                ></Card>
              );
            }
            return false;
          })}
      </div>
      <div className="versus animate__animated animate__bounceIn">VS</div>
      <div className="battle-pile__deck">
        {battlePile &&
          battlePile.map((card, idx) => {
            if (idx % 2 !== 0) {
              return (
                <Card
                  className="battle-card animate__animated animate__zoomIn"
                  key={card.id}
                  card={card}
                  disabled={true}
                ></Card>
              );
            }
            return false;
          })}
      </div>
      {/* <Card
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
      ></Card> */}
    </div>
  );
}

export default BattlePile;
