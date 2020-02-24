const fs = require("fs");
const assert = require("assert");
const dbConnection = require("./db_connection");

const initialiseDatabase = () => {
  fs.readFile(`${__dirname}/db_build.sql`, 'utf8', (err, sql) => {
    assert(!err, err);

    dbConnection.query(sql);
  });
}

module.exports = initialiseDatabase;
