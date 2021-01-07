import express from "express"
import clientRouter from "./clientRouter.js"
import boardGamesRouter from "./api/v1/boardGamesRouter.js"
const rootRouter = new express.Router() //place your server-side routes here

rootRouter.use("/", clientRouter)
rootRouter.use("/boardgames", clientRouter)
rootRouter.use("/boardgames/:id", clientRouter)

rootRouter.use("/api/v1/boardgames", boardGamesRouter)

export default rootRouter
