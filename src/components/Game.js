import React from 'react'
import '../styles/Game.css'

function Game({name, timePlayed, price}) {

  return (
    <div className='game'>
        <p>{name}</p>
        <p>Price: £{price}</p>
        <p>Played: {(timePlayed/60).toFixed(1)} hours</p>
        <p>Value: £{(price/(timePlayed/60).toFixed(1)).toFixed(2)}/hr</p>
    </div>
  )
}

export default Game
