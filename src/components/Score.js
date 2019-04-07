import React from "react";

//stateless component
const Score = props => (
  <div className="gameScore">
    <h3 className="score">Your score is {props.score}</h3>
    <h3 className="goal">Your goal is {props.goal}</h3>
    <h3 className="message">{props.message}</h3>
  </div>
);

export default Score;