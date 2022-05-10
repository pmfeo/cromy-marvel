import { useState, useEffect, useRef } from "react";
import MD5 from "crypto-js/md5";

import { CARDS } from "../utils/cardsDeck";
import shuffleArray from "../utils/shuffleArray";
import Card from "./Card";

import "./Game.css";

function Game() {
  const isMounted = useRef(false);
  const [newG, setNewG] = useState(false);
  const [data, setData] = useState();
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

  useEffect(() => {
    if (battlePile.length > 0) {
      console.log(`calling battle`);
      console.log(attackValues);
      console.log(defenseValues);

      console.log(`starting battle`);
      if (attackValues.skillValue > defenseValues.skillValue) {
        // gana el atacante
        console.log(`attacker wins`);
        if (attacker === 1) {
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
        if (defender === 1) {
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
        return;
      }
      return;
    }
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
    // console.log("shuffledCards", { shuffledCards });

    // draw randomly half deck for player1
    const player1Deck = shuffledCards.splice(0, CARDS.length / 2);
    setPlayer1Deck(player1Deck);

    // draw rest of deck for player2
    const player2Deck = shuffledCards.splice(0);
    setPlayer2Deck(player2Deck);
  };

  useEffect(() => {
    const pubKey = "69d78ecbc2c258800e4f6dde0e59139c";
    const priKey = "f78016d287a2045ae112532635f771a946cebef5";
    const ts = Date.now();
    const hash = MD5(ts + priKey + pubKey).toString();
    const heroName = `Spider-Man (Peter Parker)`;
    // const api = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&apikey=${pubKey}&hash=${hash}`;
    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${heroName}&apikey=${pubKey}&hash=${hash}`;
    (async function () {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const data = res.data.results;
          console.log(data);
          setData(data);
          return data;
        })
        .catch((e) => {
          console.log(e);
          return e;
        });
    })();
  }, []);

  // Do something else with the data
  useEffect(() => {
    if (isMounted.current) {
      console.log(`is mounted`);
    } else {
      isMounted.current = true;
    }
  }, [data]);

  return (
    <>
      <div>Turn: {turn}</div>
      <br />
      <div>
        <button onClick={newGame}>New Game</button>
      </div>
      <br />
      <div>
        PLAYER 1
      </div>
      <div className="player-deck">
        {player1Deck.map((card, idx) => (
          <Card
            key={card.id}
            card={card}
            handlePlayerChoice={handlePlayerChoice}
            disabled={idx !== 0 ? true : false}
          ></Card>
        ))}
        <br />
        {turn === 1 && playerChoice ? (
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
        {turn === 2 && playerChoice ? (
          <button onClick={handleSendToBattle}>Send to battle</button>
        ) : null}
      </div>
      <br />
      <div className="battle-pile">
        {battlePile.map((card) => (
          <Card key={card.id} card={card} disabled={true}></Card>
        ))}
      </div>
    </>
  );
}

export default Game;
