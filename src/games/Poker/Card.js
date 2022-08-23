import React from "react";

function Card({ card }) {
  const holdCard = (params) => {};
  return (
    <div className="card">
      <img src={card.card} alt={card.value} />
      <button onClick={holdCard}>HOLD</button>
    </div>
  );
}

export default Card;
