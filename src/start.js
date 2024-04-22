import config from "./models/dbConfig.js";
import pkg from "pg"
const {Client} = pkg
const client = new Client(config)
await client.connect()

let sql = "Select * from provinces";
let result = await client.query(sql);
await client.end();
console.log(result.rows);