const dbConnection = require('../../db/db_connection'); 

module.exports = () => 
    new Promise((resolve,reject) => {
        dbConnection.query(
            `SELECT * FROM challenges`,
        (err,res) =>{
            if (err) return reject(err);
            resolve(res);
        }
    )
    });