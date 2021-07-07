import express from "express"

import BoardGame from "../../../models/BoardGame.js"

const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
  try {
    const boardGames = await BoardGame.query()
    return res.status(200).json({ boardGames: boardGames})
  } catch(error) {
    return res.status(422).json({ errors: error })
  }
})

boardGamesRouter.get("/:id", async (req, res) => {
  try {
    const boardGame = await BoardGame.query().findById(req.params.id)
    return res.status(200).json({ boardGame: boardGame })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

boardGamesRouter.post("/", async (req, res) => {
  const body = req.body

  try {
    const newGame = await BoardGame.query().insertAndFetch(body)
    return res.status(200).json({ boardGame: newGame })
  } catch(err) {
    return res.status(422).json({ errors: err })
  }
})

export default boardGamesRouter
