
// Gets the users accepted or completed challenges depending on the status code given (1 = accepted and 2 = complete)

const db = require('../../db/db_connection');

const getAccepetedChallenges = (userId, challengeStatus) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM challenges INNER JOIN challenge_status ON challenges.id = challenge_status.challenge_id WHERE user_id = $1 AND status = $2;`, [userId, challengeStatus])
        .then(res => resolve(res))
        .catch(err => reject(err))
})

// should work for accepted and completed challenges just change challengeStatus

module.exports = getAccepetedChallenges;