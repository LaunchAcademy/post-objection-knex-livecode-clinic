/* eslint-disable no-await-in-loop, no-restricted-syntax */
import BoardGame from "../../models/BoardGame.js"

class BoardGameSeeder {
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
      const currentGame = await BoardGame.query().findOne({ title: singleGameData.title })
      if (!currentGame) {
        await BoardGame.query().insert(singleGameData)
      }
    }
  }
}

export default BoardGameSeeder
