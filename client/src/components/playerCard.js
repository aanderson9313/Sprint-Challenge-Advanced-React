import React from "react";
import "../components/playerCard.css";


function PlayerCard(props) {
    console.log ("PlayerCard: Props: ", props);

    return (
        <div className = "container">
            {
                props.players.map(player => (
                    <div className = "card-wrapper" 
                    key ={player.id}>
                        <h1 className = "player-info">
                            {player.name}
                        </h1>
                        <p className = "player-info">
                            {player.country}
                        </p>
                    </div>
                ))
            }
        </div>
    )
};

export default PlayerCard;