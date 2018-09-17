const queries = require("../model/index");

exports.get = (req, res) => {
  const { id } = req.params;
  console.log("this should be the id ", id);
  queries.getSingleItem(id).then(itemDetails => {
    res.render("bought-item-select", {
      layout: "content-selected",
      item: itemDetails[0]
    });
  });
};
