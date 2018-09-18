const fs = require("fs");
const dbConnection = require("./db_connection");
const assert = require("assert");

const initialiseTestDatabase = () => {
  fs.readFile(`${__dirname}/test_build.sql`, 'utf8', (err, sql) => {
    assert(!err, err);

    dbConnection.query(sql);
  });
}

module.exports = initialiseTestDatabase;
