"use strict";

const pgp = require("pg-promise")();

const testDB = {
  host: "localhost",
  port: "5432",
  database: "test_race2",
  user: "simon",
  password: "pw123"
};

const localDB = {
  host: "localhost",
  port: 5432,
  database: "race_zero",
  user: "simon",
  password: "pw123"
};


const connection =
  process.env.NODE_ENV === "test" ? testDB : localDB;

const db = pgp(connection);

module.exports = db;
