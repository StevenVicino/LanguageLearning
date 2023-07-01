import React, { useState } from "react";

const timeOptions = ["none", 30, 45, 60];

const skippingPenaltyOptions = ["none", 0.5, 1];

const initialGame = {
  player_name: "",
  timer: timeOptions[0],
  skippingPenalty: skippingPenaltyOptions[0],
};

const [game, setGame] = useState({ ...initialGame });
const [error, setError] = useState(null);

function NewGame() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="num_players">
          How Many Players Do You Have?
          <input
            id="player_name"
            type="number"
            name="player_name"
            onChange={handleChange}
            value={game.player_name}
          />
        </label>
      </form>
    </div>
  );
}

export default NewGame;
