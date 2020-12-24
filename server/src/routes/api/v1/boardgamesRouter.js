import express from "express"

import BoardGame from "../../../models/BoardGame.js"

const boardGamesRouter = new express.Router()

boardGamesRouter.get("/", async (req, res) => {
  const boardGames = await BoardGame.query()
  return res.set({ "Content-Type": "application/json" }).json(boardGames)
})

boardGamesRouter.get("/:id", async (req, res) => {
  const boardGame = await BoardGame.query().findById(req.params.id)
  return res.set({ "Content-Type": "application/json" }).json(boardGame)
})

boardGamesRouter.post("/", async (req, res) => {
  let validatedGame = await BoardGame.schema.isValid(req.body)
  // debugger
  if (validatedGame) {
    // debugger
    const newGame = await BoardGame.query().insertAndFetch(req.body)
    return res.set({ "Content-Type": "application/json"}).json(newGame)
  } else {
    // debugger
    let errorMessages = []
    await BoardGame.schema.validate(req.body, { abortEarly: false }).catch((err) => { 
      debugger
      errorMessages = err.errors
    })
    return res.set({ "Content-Type": "application/json"}).json({ errors: errorMessages })
    // return res.status(422).json({ errors: errorMessages })
  }
  // await BoardGame.schema.validate(newGame, { abortEarly: false }).catch((err) => { console.error(err.errors) })
})

export default boardGamesRouter
