import express from "express"

import Boardgame from "../../../models/Boardgame.js"

const boardgamesRouter = new express.Router()

boardgamesRouter.get("/", async (req, res) => {
  const boardgames = await Boardgame.query()
  return res.set({ "Content-Type": "application/json" }).json(boardgames)
})

boardgamesRouter.get("/:id", async (req, res) => {
  const boardgame = await Boardgame.query().findById(req.params.id)
  return res.set({ "Content-Type": "application/json" }).json(boardgame)
})

export default boardgamesRouter
