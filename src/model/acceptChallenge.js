
// Adds the accepted challenges id, the users id and the status for accepted(1) to the table challenge_status
// Only inserts if the challenge is not already accepted by that user, if it is the query does nothing

const db = require('../../db/db_connection');

const acceptChallenge = (challengeId, userId) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO challenge_status (challenge_id, user_id, status) VALUES ($1, $2, $3) ON CONFLICT ON CONSTRAINT chall_stat_unique DO NOTHING;`, [challengeId, userId, 1])
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
})

module.exports = acceptChallenge;
