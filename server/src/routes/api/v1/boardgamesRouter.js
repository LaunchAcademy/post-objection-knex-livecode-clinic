import express from "express"
import objection from "objection"
const { ValidationError } = objection

import BoardGame from "../../../models/BoardGame.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
  try {
    const boardGames = await BoardGame.query()
    return res.status(200).json({ boardGames: boardGames})
  } catch(err) {
    return res.status(422).json({ errors: err })
  }
})

boardGamesRouter.get("/:id", async (req, res) => {
  try {
    const boardGame = await BoardGame.query().findById(req.params.id)
    return res.status(200).json({ boardGame: boardGame })
  } catch(err) {
    return res.status(422).json({ errors: err })
  }
})

boardGamesRouter.post("/", async (req, res) => {
  const body = req.body
  const formInput = cleanUserInput(body)
  
  try {
    const newGame = await BoardGame.query().insertAndFetch(formInput)
    return res.status(200).json({ boardGame: newGame })
  } catch(err) {
    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err })
  }
})


export default boardGamesRouter
