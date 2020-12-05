import React from "react"

const BoardGameShowTile = ({ boardGame }) => {
  return (
    <div>
      <h1>{boardGame.title}</h1>
      <ul>
        <li>Minimum Players Needed: {boardGame.minimumAmountOfPlayers}</li>
        <li>Maximum Amount of Players: {boardGame.maximumAmountOfPlayers}</li>
        <li>Description: {boardGame.description}</li>
      </ul>
    </div>
  )
}

export default BoardGameShowTile
