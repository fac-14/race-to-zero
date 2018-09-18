const fs = require("fs");
const db = require("./db_connection");
const assert = require("assert");


const clearTestDatabase = () => {
  fs.readFile(`${__dirname}/test_clear.sql`, 'utf8', (err, sql) => {
    assert(!err, err);

    db.query(sql);
  });
}

module.exports = clearTestDatabase;
