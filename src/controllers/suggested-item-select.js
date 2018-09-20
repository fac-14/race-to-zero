const queries = require("../model/index");

exports.get = (req, res) => {
  const { id } = req.params;
  queries.getSingleItem(id).then(itemDetails => {
    res.render("suggested-item-select", {
      layout: "content-selected",
      item: itemDetails[0]
    });
  });
};
