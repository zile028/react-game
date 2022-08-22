import logo from "./logo.svg";
import "./App.scss";
import { cards } from "./assets/img/cards/cards";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Poker from "./games/Poker/Poker";

function App() {
  useEffect(() => {
    // console.log(cards);
  }, []);
  return (
    <div className="App container">
      {/* <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">Poker</Link>
      </div> */}
      <Poker />
    </div>
  );
}

export default App;
