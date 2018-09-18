// select * from inventory left join inventory_status ON inventory_status.inventory_id = inventory.id WHERE inventory_status.inventory_id is null;a

const db = require("../../db/db_connection");

const getSuggestedItems = () =>
  new Promise((resolve, reject) => {
    db.query(
      `select inventory.id, title, what, why, ext_link, img_link, reward_points, repeatable from inventory left join inventory_status ON inventory_status.inventory_id = inventory.id WHERE inventory_status.inventory_id is null;`
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = getSuggestedItems;
