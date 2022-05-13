import { useState, useEffect, useRef } from "react";
import MD5 from "crypto-js/md5";

import { CARDS } from "../utils/cardsDeck";
import shuffleArray from "../utils/shuffleArray";

import PlayerDeck from "./PlayerDeck";
import BattlePile from "./BattlePile";

import "./Game.scss";

function Game() {
  const [newG, setNewG] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(1);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [attackValues, setAttackValues] = useState({});
  const [defenseValues, setDefenseValues] = useState({});
  const [attacker, setAttacker] = useState(null);
  const [defender, setDefender] = useState(null);
  const [battlePile, setBattlePile] = useState([]);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handlePlayerChoice = (card, skill, skillValue) => {
    setPlayerChoice({ card, skill, skillValue });
  };

  const handleSendToBattle = () => {
    const cardPlayedBy = turn;
    const player1CurrentCard = player1Deck[0];
    const player2CurrentCard = player2Deck[0];

    if (!playerChoice) {
      console.log(`error: no choice selected`);
      return;
    }

    let attackCard;
    let defenseCard;
    let defenseSkill;
    let defenseSkillValue;

    if (cardPlayedBy === 1) {
      setAttacker(1);
      setDefender(2);
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
      setAttacker(2);
      setDefender(1);
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
  };

  const resetBattle = () => {
    setPlayerChoice(null);
    setBattlePile([]);
    setAttackValues({});
    setDefenseValues({});
  };

  const battle = () => {
    if (battlePile.length > 0) {
      console.log(`calling battle`);
      console.log(attackValues);
      console.log(defenseValues);

      console.log(`starting battle`);
      if (attackValues.skillValue > defenseValues.skillValue) {
        console.log(`attacker wins`);
        if (attacker === 1) {
          setPlayer1Deck([...player1Deck, ...battlePile]);
          setTurn(1);
        } else {
          setPlayer2Deck([...player2Deck, ...battlePile]);
          setTurn(2);
        }
        setRound(round + 1);
        setTimeout(() => {
          resetBattle();
        }, 2000);
      } else if (attackValues.skillValue < defenseValues.skillValue) {
        console.log(`defender wins`);
        if (defender === 1) {
          setPlayer1Deck([...player1Deck, ...battlePile]);
          setTurn(1);
        } else {
          setPlayer2Deck([...player2Deck, ...battlePile]);
          setTurn(2);
        }
        setRound(round + 1);
        setTimeout(() => {
          resetBattle();
        }, 2000);
      } else {
        // TODO
        // EMPATE
        console.log(`DRAW!!!`);
        return;
      }
      return;
    }
  };

  const checkWinner = (player1Deck, player2Deck) => {
    if (player1Deck && player2Deck) {
      if (player1Deck.length === 0) {
        setWinner("Player 2");
        if (round !== 0) {
          setGameOver(true);
        }
      } else if (player2Deck.length === 0) {
        setWinner("Player 1");
        if (round !== 0) {
          setGameOver(true);
        }
      } else {
        return;
      }
    }
    return;
  };

  useEffect(() => {
    checkWinner(player1Deck, player2Deck);
  }, [round]);

  // battle
  useEffect(() => {
    battle();
  }, [battlePile]);

  const resetGame = () => {
    setPlayerChoice(null);
    setPlayer1Deck([]);
    setPlayer2Deck([]);
    setBattlePile([]);
    // set round
    setRound(0);
    // set turn
    setTurn(1);
  };

  const newGame = () => {
    resetGame();
    setNewG(true);

    // shuffle cards
    const shuffledCards = shuffleArray(CARDS);

    // draw randomly half deck for player1
    const player1Deck = shuffledCards.splice(0, CARDS.length / 2);
    setPlayer1Deck(player1Deck);

    // draw rest of deck for player2
    const player2Deck = shuffledCards.splice(0);
    setPlayer2Deck(player2Deck);
  };

  return (
    <>
      <div>
        <button onClick={newGame}>New Game</button>
      </div>
      <div>
        <div>Round: {round}</div>
        <div>Player1Deck: {player1Deck.length}</div>
        <div>Player2Deck: {player2Deck.length}</div>
        <div>Game Over: {gameOver.toString()}</div>
        <div>Turn: {turn}</div>
      </div>
      <br />
      <div className="game-table">
        <div className="player1-view game-sector">
          <div>PLAYER 1</div>
          <PlayerDeck
            player={1}
            turn={turn}
            handlePlayerChoice={handlePlayerChoice}
            handleSendToBattle={handleSendToBattle}
            playerDeck={player1Deck}
            playerChoice={playerChoice}
          ></PlayerDeck>
        </div>
        <div className="player2-view game-sector">
          <div>PLAYER 2</div>
          <PlayerDeck
            player={2}
            turn={turn}
            handlePlayerChoice={handlePlayerChoice}
            handleSendToBattle={handleSendToBattle}
            playerDeck={player2Deck}
            playerChoice={playerChoice}
          ></PlayerDeck>
        </div>
        <div className="battle-view game-sector">
          {battlePile.length > 0 ? (
            <BattlePile battlePile={battlePile} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Game;
