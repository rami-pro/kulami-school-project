import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Player from "./components/Player";

function App() {
  const boardInit = [2, 0, 0, 0, 0, 0, 0, 0];
  const [board, setBoard] = useState(boardInit.map(() => [...boardInit]));
  let [activePlayer, setActivePlayer] = useState("One");
  
  let changePlayer = () => {
    if (activePlayer == "1") {
      setActivePlayer("2")
    } else {
      setActivePlayer("1")
    }
  }

  return (
    <div className="App">
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        right: 0,
      }}>
        <Player player="1" score="0" activePlayer={activePlayer} />
        <Player player="2" score="0" activePlayer={activePlayer} />
      </div> 

      <Board board={board} setBoard={setBoard} activePlayer changePlayer={changePlayer} />

    </div>
  );
}

export default App;
