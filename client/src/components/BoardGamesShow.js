import React, { useState, useEffect } from "react"

import BoardGameShowTile from "./BoardGameShowTile"

const BoardGamesShow = (props) => {
  const [boardGame, setBoardGame] = useState({})

  const getGame = async () => {
    let id = props.match.params.id
    try {
      const response = await fetch(`http://localhost:3000/api/v1/boardgames/${id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setBoardGame(responseBody)
    } catch (err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }

  useEffect(() => {
    getGame()
  }, [])

  return (
    <div>
      <BoardGameShowTile boardGame={boardGame} />
    </div>
  )
}

export default BoardGamesShow
