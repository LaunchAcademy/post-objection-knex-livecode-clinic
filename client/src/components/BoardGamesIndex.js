import React, { useState, useEffect } from "react"

import BoardGameTile from "./BoardGameTile"
import BoardGameForm from "./BoardGameForm"

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

  const addNewBoardGame = async (newBoardGame) => {
    try {
      const response = await fetch("/api/v1/boardgames", {
        method: "POST",
        credentials: "same-origin",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newBoardGame)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const responseBody = await response.json()
        // debugger
        if (responseBody.boardGame) {
          setBoardGames([
            ...boardGames,
            responseBody.boardGame
          ])
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const boardGameComponents = boardGames.map((boardGame) => {
    return <BoardGameTile key={boardGame.id} gameData={boardGame} />
  })

  return (
    <div>
      <h1>Current Game Inventory</h1>
      <BoardGameForm 
        addNewBoardGame={addNewBoardGame}
      />

      <ul>{boardGameComponents}</ul>
    </div>
  )
}

export default BoardGamesIndex
