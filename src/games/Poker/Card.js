import React from "react";

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.card} alt={card.value} />
    </div>
  );
}

export default Card;
