
// Gets all the info for a single challenge using the specified id

const db = require('../../db/db_connection');

const getSingleChallenge = (challenge_id) => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM challenges WHERE id = $1;`, [challenge_id])
    .then(res => resolve(res))
    .catch(err => reject(err))
})

module.exports = getSingleChallenge;