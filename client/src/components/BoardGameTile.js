import React from "react"
import { Link } from "react-router-dom"

const BoardGameTile = ({ gameData }) => {
  return (
    <li>
      <Link to={`/boardgames/${gameData.id}`}>{gameData.title}</Link>
    </li>
  )
}

export default BoardGameTile
