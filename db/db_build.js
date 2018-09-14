const fs = require("fs");
const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const initialiseDatabase = () => dbConnection.query(sql);

initialiseDatabase();

module.exports = initialiseDatabase;


