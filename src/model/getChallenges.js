
// Gets all info for all the challenges

const db = require('../../db/db_connection');

const getChallenges = () => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM challenges;`)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

module.exports = getChallenges;
