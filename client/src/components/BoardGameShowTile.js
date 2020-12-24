import React from "react"
import { Link } from "react-router-dom"

const BoardGameShowTile = ({ boardGame }) => {
  let descriptionText = boardGame.description

  if (!boardGame.description) {
    descriptionText = <i>No description provided</i>
  }

  return (
    <div>
      <Link to="/boardgames">
        <h3>Back to All Games</h3>
      </Link>
      
      <h1>{boardGame.title}</h1>
      <ul>
        <li>Minimum Players Needed: {boardGame.minimumAmountOfPlayers}</li>
        <li>Maximum Amount of Players: {boardGame.maximumAmountOfPlayers}</li>
        <li>Description: {descriptionText}</li>
      </ul>
    </div>
  )
}

export default BoardGameShowTile
