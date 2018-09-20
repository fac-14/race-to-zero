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

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost'
};

const db = pgp(options);

module.exports = db;
