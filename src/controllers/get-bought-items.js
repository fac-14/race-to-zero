// select * from inventory inner join inventory_status ON inventory_status.inventory_id = inventory.id WHERE inventory_status.bought is true;

const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getBoughtItems().then(boughtItems => {
    console.log("bought items reached");
    res.render("inventory", { boughtItems });
  });
};
