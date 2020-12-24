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
  const newGame = await BoardGame.query().insertAndFetch(req.body)
  return res.set({ "Content-Type": "application/json"}).json(newGame)
})

export default boardGamesRouter
