/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("boardgames", (table) => {
    table.bigIncrements("id").primary()
    table.string("title").notNullable()
    table.integer("minimumAmountOfPlayers").notNullable()
    table.integer("maximumAmountOfPlayers").notNullable()

    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("boardgames")
}
