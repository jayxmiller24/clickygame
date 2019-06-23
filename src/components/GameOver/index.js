import React from 'react';


const GameOver = (props) => {
  if (props.score >= 12) {
    return(
      <div className="text-center container-fluid">  
        <button className="new-game btn" onClick={() => props.handleClick(props.gameover)}>new game</button>
      </div>
    )
  } else {
    return(
      <div className="container text-center">
        <h1 className="gameover">{props.countdown}</h1>
      </div>
    )
  }
}
;

export default GameOver;