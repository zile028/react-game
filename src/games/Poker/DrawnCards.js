import React, { useEffect, useState } from "react";
import Card from "./Card";

function DrawnCards({ drawnCards }) {
  const [dealCard, setDealCard] = useState([]);
  const renderCards = drawnCards.map((el, index) => {
    return <Card card={el} key={index} />;
  });

  useEffect(() => {
    // renderSlow();
    setTimeout(() => {}, 2000);
  }, [dealCard]);

  return (
    <div className="cards">
      {/* {renderCards} */}
      {dealCard}
      {/* <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div>
  <div className="card"></div> */}
    </div>
  );
}

export default DrawnCards;
