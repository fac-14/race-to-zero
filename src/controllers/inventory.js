const queries = require("../model/index");

exports.get = (req, res) => {
  const getBoughtItems = queries.getBoughtItems(1);
  const getSuggestedItems = queries.getSuggestedItems();

  Promise.all([getBoughtItems, getSuggestedItems])
    .then(items => {
      console.log("totalItems", items);

      res.render("inventory", {
        boughtItems: items[0],
        suggestedItems: items[1]
      });
    })
    .catch(err => console.log(err));
};
