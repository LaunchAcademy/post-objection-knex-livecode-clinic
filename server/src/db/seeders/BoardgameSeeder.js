/* eslint-disable no-await-in-loop, no-restricted-syntax */
import Boardgame from "../../models/Boardgame.js"

class BoardgameSeeder {
  static async seed() {
    const gamesData = [
      {
        title: "Risk",
        minimumAmountOfPlayers: 2,
        maximumAmountOfPlayers: 6,
        description: "A Game of world domination. Seek shelter in Australia.",
      },
      {
        title: "Monopoly",
        minimumAmountOfPlayers: 2,
        maximumAmountOfPlayers: 6,
        description: "Money Money Money $$$",
      },
    ]

    for (const singleGameData of gamesData) {
      const currentGame = await Boardgame.query().findOne({ title: singleGameData.title })
      if (!currentGame) {
        await Boardgame.query().insert(singleGameData)
      }
    }
  }
}

export default BoardgameSeeder
