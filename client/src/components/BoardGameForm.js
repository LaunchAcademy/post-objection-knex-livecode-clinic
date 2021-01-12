import React, { useState } from "react"

const BoardGameForm = (props) => {
  const [newGame, setNewGame] = useState({
    title: "",
    minimumAmountOfPlayers: "",
    maximumAmountOfPlayers: "",
    description: ""
  })
  
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
    // debugger
    props.addNewBoardGame(newGame)
    setNewGame({
      title: "",
      minimumAmountOfPlayers: "",
      maximumAmountOfPlayers: "",
      description: ""
    })
  }

  return (
    <div className="callout">
      <h1>New Board Game Form</h1>

      <form onSubmit={handleSubmit}>
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