import { useState, useEffect } from "react";

import { CARDS } from "../utils/cardsDeck";
import shuffleArray from "../utils/shuffleArray";

function Game() {
  // const [gameOver, setGameOver] = useState(false);
  // const [winner, setWinner] = useState("");
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [turn, setTurn] = useState(null);
  // const [playerCardPile, setPlayerCardPile] = useState([]);
  // const [drawCardPile, setDrawCardPile] = useState("");
  // const [currentCard, setCurrentCard] = useState("");

  //runs once on component mount
  // useEffect(() => {
  //   newGame();
  // }, []);

  const onPlayedCardHandler = () => {
    // check turn
    // check selected character power
    // remove from players deck
    // send to battle
  };

  const battle = () => {
    // check player 1 card against player 2 card
    // send both cards to the winner
  };

  const reset = () => {
    setPlayer1Deck([]);
    setPlayer2Deck([]);
    setTurn(null);
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

    // set turn to player1
    setTurn(1);
  };

  return (
    <>
      <button onClick={newGame}>New Game</button>
      <br />
      <div>
        PLAYER 1
        <ul>
          {player1Deck.map((card) => (
            <li key={card.id}>{card.name}</li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        PLAYER 2
        <ul>
          {player2Deck.map((card) => (
            <li key={card.id}>{card.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Game;
