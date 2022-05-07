import { useState, useEffect } from "react";

import { CARDS } from "../utils/cardsDeck";
import shuffleArray from "../utils/shuffleArray";
import Card from "./Card";

import "./Game.css";

function Game() {
  // const [gameOver, setGameOver] = useState(false);
  // const [winner, setWinner] = useState("");
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(1);
  // const [player1Choice, setPlayer1Choice] = useState({});
  // const [player2Choice, setPlayer2Choice] = useState({});
  const [playerChoice, setPlayerChoice] = useState({});
  const [attackValues, setAttackValues] = useState({});
  const [defenseValues, setDefenseValues] = useState({});
  const [attacker, setAttacker] = useState("");
  const [defender, setDefender] = useState("");

  const [battlePile, setBattlePile] = useState([]);
  // const [drawCardPile, setDrawCardPile] = useState("");
  // const [currentCard, setCurrentCard] = useState("");

  //runs once on component mount
  // useEffect(() => {
  //   newGame();
  // }, []);

  const handlePlayerChoice = (card, skill, skillValue) => {
    // what player chose
    // set player and choice
    // if (turn === 1) {
    //   setPlayer1Choice({ card, skill, skillValue });
    // } else {
    //   setPlayer2Choice({ card, skill, skillValue });
    // }

    setPlayerChoice({ card, skill, skillValue });
  };

  const handleSendToBattle = () => {
    const cardPlayedBy = turn;
    const player1CurrentCard = player1Deck[0];
    const player2CurrentCard = player2Deck[0];

    if (!playerChoice) {
      console.log(`error`);
    }

    let attackCard;
    let defenseCard;
    let defenseSkill;
    let defenseSkillValue;

    if (cardPlayedBy === 1) {
      setAttacker("P1");
      setDefender("P2");
      attackCard = player1CurrentCard;
      defenseCard = player2CurrentCard;
      defenseSkill = playerChoice.skill;
      defenseSkillValue = defenseCard[playerChoice.skill];
      setAttackValues({
        skill: playerChoice.skill,
        skillValue: playerChoice.skillValue,
      });
      setDefenseValues({
        skill: defenseSkill,
        skillValue: defenseSkillValue,
      });
    } else {
      setAttacker("P2");
      setDefender("P1");
      attackCard = player2CurrentCard;
      defenseCard = player1CurrentCard;
      defenseSkill = playerChoice.skill;
      defenseSkillValue = defenseCard[playerChoice.skill];
      setAttackValues({
        skill: playerChoice.skill,
        skillValue: playerChoice.skillValue,
      });
      setDefenseValues({
        skill: defenseSkill,
        skillValue: defenseSkillValue,
      });
    }

    // remove first card from both decks and
    let newDeck1 = [...player1Deck];
    newDeck1.shift();
    setPlayer1Deck(newDeck1);
    let newDeck2 = [...player2Deck];
    newDeck2.shift();
    setPlayer2Deck(newDeck2);
    // send it to the battle deck
    setBattlePile([attackCard, defenseCard]);

    // check player 1 card against player 2 card
    // send both cards to the winner
    // const checkBattle = () => {
    //   console.log(`starting battle`);
    //   console.log(attackValues);
    //   console.log(defenseValues);

    //   if (attackValues.skillValue > defenseValues.skillValue) {
    //     // gana el atacante
    //     console.log(`attacker wins`);
    //     if (attacker === "P1") {
    //       setPlayer1Deck([...player1Deck, ...battlePile]);
    //       setTurn(1);
    //     } else {
    //       setPlayer2Deck([...player2Deck, ...battlePile]);
    //       setTurn(2);
    //     }
    //     setRound(round + 1);
    //     resetBattle();
    //   } else if (attackValues.skillValue < defenseValues.skillValue) {
    //     //gana el defensor
    //     console.log(`defender wins`);
    //     if (defender === "P1") {
    //       setPlayer1Deck([...player1Deck, ...battlePile]);
    //       setTurn(1);
    //     } else {
    //       setPlayer2Deck([...player2Deck, ...battlePile]);
    //       setTurn(2);
    //     }
    //     setRound(round + 1);
    //     resetBattle();
    //   } else {
    //     // EMPATE
    //     console.log(`DRAW!!!`);
    //   }
    // };

    // // setTimeout(checkBattle(), 2000);
    // if (
    //   battlePile.length > 0
    //   // &&
    //   // attackValues.length > 0 &&
    //   // defenseValues.length > 0
    // ) {
  };

  const resetBattle = () => {
    // setPlayer1Choice([]);
    // setPlayer2Choice([]);
    setPlayerChoice([]);
    setBattlePile([]);
    setAttackValues({});
    setDefenseValues({});
  };

  useEffect(() => {
    if (battlePile.length > 0) {
      console.log(`calling battle`);
      console.log(`starting battle`);
      console.log(attackValues);
      console.log(defenseValues);

      if (attackValues.skillValue > defenseValues.skillValue) {
        // gana el atacante
        console.log(`attacker wins`);
        if (attacker === "P1") {
          setPlayer1Deck([...player1Deck, ...battlePile]);
          setTurn(1);
        } else {
          setPlayer2Deck([...player2Deck, ...battlePile]);
          setTurn(2);
        }
        setRound(round + 1);
        resetBattle();
      } else if (attackValues.skillValue < defenseValues.skillValue) {
        //gana el defensor
        console.log(`defender wins`);
        if (defender === "P1") {
          setPlayer1Deck([...player1Deck, ...battlePile]);
          setTurn(1);
        } else {
          setPlayer2Deck([...player2Deck, ...battlePile]);
          setTurn(2);
        }
        setRound(round + 1);
        resetBattle();
      } else {
        // EMPATE
        console.log(`DRAW!!!`);
      }
    }
  }, [battlePile]);

  const reset = () => {
    setPlayer1Deck([]);
    setPlayer2Deck([]);
    setBattlePile([]);
    // set round
    setRound(0);
    // set turn
    setTurn(1);
  };

  const newGame = () => {
    reset();

    // shuffle cards
    const shuffledCards = shuffleArray(CARDS);
    // console.log("shuffledCards", { shuffledCards });

    // draw randomly half deck for player1
    const player1Deck = shuffledCards.splice(0, CARDS.length / 2);
    setPlayer1Deck(player1Deck);

    // draw rest of deck for player2
    const player2Deck = shuffledCards.splice(0);
    setPlayer2Deck(player2Deck);
  };

  return (
    <>
      <div>Turn: {turn}</div>
      <br />
      <div>
        <button onClick={newGame}>New Game</button>
      </div>
      <br />
      <div className="player-deck">
        PLAYER 1
        {player1Deck.map((card, idx) => (
          <Card
            key={card.id}
            card={card}
            handlePlayerChoice={handlePlayerChoice}
            disabled={idx !== 0 ? true : false}
          ></Card>
        ))}
        <br />
        {turn === 1 ? (
          <button onClick={handleSendToBattle}>Send to battle</button>
        ) : null}
      </div>
      <br />
      <div className="player-deck">
        PLAYER 2
        {player2Deck.map((card, idx) => (
          <Card
            key={card.id}
            card={card}
            handlePlayerChoice={handlePlayerChoice}
            disabled={idx !== 0 ? true : false}
          ></Card>
        ))}
        <br />
        {turn === 2 ? (
          <button onClick={handleSendToBattle}>Send to battle</button>
        ) : null}
      </div>
      <br />
      <div className="battle-pile">
        {battlePile.map((card) => (
          <Card
            key={card.id}
            card={card}
            // handlePlayerChoice={handlePlayerChoice}
            disabled={true}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default Game;
