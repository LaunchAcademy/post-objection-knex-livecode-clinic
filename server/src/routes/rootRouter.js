import express from "express"
import clientRouter from "./clientRouter.js"
import boardgamesRouter from "./api/v1/boardgamesRouter.js"
const rootRouter = new express.Router() //place your server-side routes here

rootRouter.use("/", clientRouter)
rootRouter.use("/boardgames", clientRouter)
rootRouter.use("/boardgames/:id", clientRouter)

rootRouter.use("/api/v1/boardgames", boardgamesRouter)

export default rootRouter
