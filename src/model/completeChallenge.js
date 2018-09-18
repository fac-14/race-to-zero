const updatePoints = require('./updatePoints')
// Deletes the selected challenge from challenge_status if it's already been completed 
// then updates the accepted challenge to complete
// this ensures there are never any duplicate completed challenges in the db

const db = require('../../db/db_connection');

const completeChallenge = (challengeId, userId) => new Promise((resolve, reject) => {
  db.query('DELETE from challenge_status WHERE challenge_id = $1 AND user_id = $2 AND status = 2; UPDATE challenge_status SET status = 2 WHERE challenge_id = $1 AND user_id = $2 RETURNING *;', [challengeId, userId])
    .then(res => updatePoints(res[0].challenge_id, res[0].user_id))
    .then(res => resolve(res))
    .catch(err => reject(err))
})

// add a query to take reward_points from the challenge and add them to the users points

module.exports = completeChallenge;