const queries = require("../model/index");

exports.get = (req, res) => {
  const getBoughtItems = queries.getBoughtItems(1);
  const getSuggestedItems = queries.getSuggestedItems();

  Promise.all([getBoughtItems, getSuggestedItems])
    .then(items => {
      res.render("inventory", {
        activePage: { inventory: true },
        boughtItems: items[0],
        suggestedItems: items[1]
      });
    })
    .catch(err => console.log(err));
};
