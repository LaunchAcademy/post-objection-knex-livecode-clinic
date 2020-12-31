const Model = require("./Model")

class BoardGame extends Model {
  static get tableName() {
    return "boardgames"
  }

  static get jsonSchema() {
    return  {
      type: "object",
      required: ["title", "minimumAmountOfPlayers", "maximumAmountOfPlayers"],
      properties: {
        title: { 
          "type": "string", 
          "minLength": 1
        },
        minimumAmountOfPlayers: { "type": ["integer", "string"] },
        maximumAmountOfPlayers: { "type": ["integer", "string"] },
        description: { "type": "string" }
      }
    }
  }
}

module.exports = BoardGame
