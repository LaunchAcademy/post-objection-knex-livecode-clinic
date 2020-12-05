const Model = require("./Model")

class Boardgame extends Model {
  static get tableName() {
    return "boardgames"
  }
}

module.exports = Boardgame
