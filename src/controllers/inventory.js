// hi

const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getBoughtItems().then(boughtItems => {
    console.log("boughtItems", boughtItems);
    console.log("bought items reached");
    res.render("inventory", { boughtItems: boughtItems[0] });
  });
};
