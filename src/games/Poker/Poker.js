import React, { useContext, useEffect, useReducer, useState } from "react";
import { cards, backCard } from "../../assets/img/cards/cards";
import DrawnCards from "./DrawnCards";
import "./poker.scss";
import PokerContext from "../../store/context";
import reducer from "../../store/reducer";

function Poker() {
  const { state } = useContext(PokerContext);
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  const [decks, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    let shufle = shufleCards(cards);
    dispatch({ type: "set_deck", payload: shufle });
    console.log(state);
    setDeck(shufle);
  }, []);

  useEffect(() => {
    console.log(decks);
  }, [decks]);

  const shufleCards = (arr) => {
    let copyArr = [...arr];
    let shufle = [];
    for (let i = 0; i < arr.length; i++) {
      let rnd = Math.floor(Math.random() * copyArr.length);
      shufle.push(copyArr[rnd]);
      copyArr.splice(rnd, 1);
    }
    return shufle;
  };

  const drawCard = () => {
    let copyDeck = [...deck];
    let selectedCards = copyDeck.splice(0, 5);
    setDrawnCards(
      selectedCards.map((el) => {
        return { ...el, isHold: false };
      })
    );
    setDeck(copyDeck);
  };

  return (
    <div className="poker">
      <h1>poker</h1>
      <div className="poker-wrapper">
        <div className="poker-deck">
          <div className="card">
            <img src={backCard} alt="" />
            <button onClick={drawCard}>Draw - {deck.length}</button>
          </div>
        </div>
        <div className="poker-drawn-cards">
          {drawnCards.length && <DrawnCards drawnCards={drawnCards} />}
        </div>
      </div>
    </div>
  );
}

export default Poker;
