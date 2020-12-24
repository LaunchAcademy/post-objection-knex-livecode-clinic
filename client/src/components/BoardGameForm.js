import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"

import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const BoardGameForm = (props) => {
  const [newGame, setNewGame] = useState({
    title: "",
    minimumAmountOfPlayers: "",
    maximumAmountOfPlayers: "",
    description: ""
  })
  const [redirect, setRedirect] = useState({
    status: false,
    redirectId: ""
  })
  const [errors, setErrors] = useState([])

  const handleInputChange = (event) => {
    setNewGame({
      ...newGame, 
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    event.preventDefault()

    setNewGame({
      title: "",
      minimumAmountOfPlayers: "",
      maximumAmountOfPlayers: "",
      description: ""
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const response = await fetch("/api/v1/boardgames", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newGame)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const responseBody = await response.json()
        if (responseBody.errors) {
          debugger
          const serverErrors = translateServerErrors(responseBody.errors)
          debugger
          setErrors(serverErrors)
        } else {
          const newGameId = responseBody.id
          setRedirect({
            status: true,
            redirectId: newGameId
          })
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  if (redirect.status === true) {
    return(
      <Redirect to={`/boardgames/${redirect.redirectId}`} />
    )
  }

  return (
    <div className="callout">
      <Link to="/boardgames">
        <h3>Back to All Games</h3>
      </Link>

      <h1>New Board Game Form</h1>
      
      <form onSubmit={handleSubmit}>
        <ErrorList errors={errors} />
      
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={newGame.title}
          />
        </label>

        <label>
          Minimum Number of Players:
          <input
            type="number"
            name="minimumAmountOfPlayers"
            onChange={handleInputChange}
            value={newGame.minimumAmountOfPlayers}
          />
        </label>

        <label>
          Maximum Number of Players:
          <input
            type="number"
            name="maximumAmountOfPlayers"
            onChange={handleInputChange}
            value={newGame.maximumAmountOfPlayers}
          />
        </label>

        <label>
          Description:
          <textarea
            type="text"
            name="description"
            onChange={handleInputChange}
            value={newGame.description}
          />
        </label>

        <div className="button-group">
          <input 
            type="submit" 
            value="Submit New Game"
            className="button"
          />

          <button onClick={clearForm} className="button">Clear Form</button>
        </div>
      </form>
    </div>
  )
}

export default BoardGameForm