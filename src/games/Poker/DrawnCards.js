import React, { useEffect, useState } from "react";
import Card from "./Card";

function DrawnCards({ drawnCards }) {
  const [dealCard, setDealCard] = useState([]);

  const renderCards = drawnCards.map((el, index) => {
    return <Card card={el} key={index} />;
  });

  return <div className="cards">{renderCards}</div>;
}

export default DrawnCards;
