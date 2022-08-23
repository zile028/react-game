import React, { useEffect, useState } from "react";
import "./poker.scss";
import { cards, backCard } from "../../assets/img/cards/cards";
import Card from "./Card";

import DrawnCards from "./DrawnCards";

function Poker() {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    setDeck(shufleCards(cards));
  }, []);

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
        <button onClick={drawCard}>Draw</button>
        <div className="card">
          <img src={backCard} alt="" />
        </div>
        {drawnCards.length && <DrawnCards drawnCards={drawnCards} />}
      </div>
    </div>
  );
}

export default Poker;
