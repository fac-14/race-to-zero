// completeChallenges
const db = require('../../db/db_connection');

const completeChallenge = (challengeId, userId) => new Promise((resolve, reject) => {
  db.query('UPDATE challenge_status SET status = 2 WHERE challenge_id = $1 AND user_id = $2 RETURNING *', [challengeId, userId])
    .then(res => resolve(res))
    .catch(err => reject(err))
})

module.exports = completeChallenge;