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
  // const { body } = req
  try {
    const newBoardGame = await BoardGame.query().insertAndFetch(body)
    // debugger
    return res.status(201).json({ boardGame: newBoardGame })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default boardGamesRouter
