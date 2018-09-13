// go connections
"use strict";

const pgp = require("pg-promise")();
const url = require("url");
require("env2")("./config.env");

let DB_URL = process.env.DATABASE_URL;
console.log("overall process env ", process.env.DATABASE_URL);
if (process.env.NODE_ENV === "test") {
  DB_URL = process.env.TEST_DB_URL;
  console.log("in if condition ", process.env.TEST_DB_URL);
}

if (!DB_URL) throw new Error("Environment vatialbe must be set");

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(":");

const testDB = {
  host: "localhost",
  port: "5432",
  database: "test_race2",
  user: "simon",
  password: "pw123"
};

const connection =
  process.env.NODE_ENV === "test" ? testDB : "testDB not found";

const db = pgp(connection);

module.exports = db;
