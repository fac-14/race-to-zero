
// Adds the accepted challenges id, the users id and the status for accepted(1) to the table challenge_status

const db = require('../../db/db_connection');

const acceptChallenge = (id, userId) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO challenge_status(user_id, challenge_id, status) VALUES ($1, $2, $3)`, [id, userId, 1])
        .then(res => resolve(res))
        .catch(err => reject(err))
})

module.exports = acceptChallenge;
