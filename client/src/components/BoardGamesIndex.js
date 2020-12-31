import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import BoardGameTile from "./BoardGameTile"

const BoardGamesIndex = (props) => {
  const [boardGames, setBoardGames] = useState([])

  const getGames = async () => {
    try {
      const response = await fetch("/api/v1/boardgames")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setBoardGames(responseBody.boardGames)
    } catch (err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  const boardGameComponents = boardGames.map((boardGame) => {
    return <BoardGameTile key={boardGame.id} gameData={boardGame} />
  })

  return (
    <div>
      <h1>Current Game Inventory</h1>
      <h3><Link to="/boardgames/new">Add a New Game!</Link></h3>
      <ul>{boardGameComponents}</ul>
    </div>
  )
}

export default BoardGamesIndex
