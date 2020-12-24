const Model = require("./Model")
const { object, string, number, boolean } = require("yup")

class BoardGame extends Model {
  static get tableName() {
    return "boardgames"
  }

  static get schema() {
    return object().shape({
      title: string().required(),
      minimumAmountOfPlayers: number().required().positive().integer(),
      maximumAmountOfPlayers: number().required().positive().integer(),
      description: string()
    })
  }
}

module.exports = BoardGame
