import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validGameProps from "../Errors/validGameProps";

function NewGame() {
  const navigate = useNavigate();

  const timeOptions = ["Please select time of round", "none", "30", "45", "60"];

  const skippingPenaltyOptions = [
    "Please select penalty for skipping",
    "none",
    "0.5",
    "1",
  ];

  const initialGame = {
    player_name: "",
    timer: timeOptions[0],
    skippingPenalty: skippingPenaltyOptions[0],
  };

  const [game, setGame] = useState({ ...initialGame });
  const [error, setError] = useState(null);

  const handleChange = ({ target }) => {
    setGame({ ...initialGame, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const errors = validGameProps(game);
    if (errors.length) {
      setError(errors);
    } else {
      let gameNum = Math.random().toString(36).substring(2, 7);
      navigate(`/${gameNum}`);
    }
    return () => abortController.abort();
  };

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
        <select>
          <option value={timeOptions[0]}>{timeOptions[0]}</option>
          <option value={timeOptions[1]}>{timeOptions[1]}</option>
          <option value={timeOptions[2]}>{timeOptions[2]}</option>
          <option value={timeOptions[3]}>{timeOptions[3]}</option>
        </select>
        <select>
          <option value={skippingPenaltyOptions[0]}>
            {skippingPenaltyOptions[0]}
          </option>
          <option value={skippingPenaltyOptions[1]}>
            {skippingPenaltyOptions[1]}
          </option>
          <option value={skippingPenaltyOptions[2]}>
            {skippingPenaltyOptions[2]}
          </option>
          <option value={skippingPenaltyOptions[3]}>
            {skippingPenaltyOptions[3]}
          </option>
        </select>
        <button type="submit">Submit</button>
        <button type="cancel" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewGame;
