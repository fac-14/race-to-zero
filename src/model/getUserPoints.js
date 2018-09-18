const db = require("../../db/db_connection");

const getUserPoints = (user_id) =>
  new Promise((resolve, reject) => {
    db.query(
        'SELECT points FROM users WHERE id = $1', [user_id]
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });


module.exports = getUserPoints;