const dbConnection = require('../../db/db_connection');

module.exports = () =>
    dbConnection.query('SELECT * FROM challenges');