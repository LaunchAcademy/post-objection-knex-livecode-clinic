/* eslint-disable no-console */
import { connection } from "../boot.js"
import configuration from "../config.js"
import BoardgameSeeder from "./seeders/BoardgameSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding boardgames")
    await BoardgameSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
