const db = require("../../db/db_connection");

const buyItem = (itemId, userId) =>
  new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO inventory_status (inventory_id, user_id, bought) VALUES ($1, $2, $3);`,
      [itemId, userId, true]
    )
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });

module.exports = buyItem;
