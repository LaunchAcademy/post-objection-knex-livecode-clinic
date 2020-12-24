/* eslint-disable no-console */
import { connection } from "../boot.js"
import configuration from "../config.js"
import BoardGameSeeder from "./seeders/BoardGameSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding boardgames")
    await BoardGameSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
