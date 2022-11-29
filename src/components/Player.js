import { useEffect } from "react";

function Player(props) {
  let { player, score, activePlayer } = props;
  let style = {
            height: 500,
            width: 500,
            backgroundColor: activePlayer == player ? "green" : "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            borderRadius: 10,
            margin: 10,
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            
  }

  
    return (
      <div
        style={ {...style} }
        className="player">
        
        <h2>Player: {player} </h2> 
        <h2>{activePlayer == player ? "Your turn" : ""}</h2>
        <h2>Score: {score} </h2>

        </div>
    );
}

export default Player;
