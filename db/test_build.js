// go tests
const fs = require('fs');
const dbConnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString();

const initialiseTestDatabase = () => dbConnection.query(sql);

// const runDbTestBuild = () =>
//     new Promise((resolve, reject) => {
//         dbConnection.query(sql, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });

module.exports = initialiseTestDatabase;