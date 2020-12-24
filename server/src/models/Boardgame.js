const Model = require("./Model")

class BoardGame extends Model {
  static get tableName() {
    return "boardgames"
  }
}

module.exports = BoardGame
