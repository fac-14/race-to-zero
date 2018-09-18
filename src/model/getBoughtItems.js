// DUMMY CODE!!!!!!

const db = require("../../db/db_connection");

const getBoughtItems = userId =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT inventory.id, title, what, why, ext_link, img_link, reward_points, repeatable FROM inventory INNER JOIN inventory_status ON inventory_status.inventory_id = inventory.id WHERE inventory_status.bought is true AND inventory_status.user_id = $1;`,
      [userId]
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = getBoughtItems;

// select * from inventory inner join inventory_status ON inventory_status.inventory_id = inventory.id WHERE inventory_status.bought is true;
