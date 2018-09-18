const db = require("../../db/db_connection");

const updatePoints = (challenge_id, user_id) =>
  new Promise((resolve, reject) => {
    db.query(
      "update users set points = points + reward_points FROM challenges where challenges.id = $1 AND users.id = $2",
      [challenge_id, user_id]
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = updatePoints;
