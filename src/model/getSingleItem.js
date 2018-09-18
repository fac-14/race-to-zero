const db = require("../../db/db_connection");

const getSingleItem = itemId =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM inventory WHERE id = $1;`, [itemId])
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = getSingleItem;
