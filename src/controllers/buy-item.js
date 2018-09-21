const queries = require("../model/index");

module.exports = (req, res) => {
    console.log(req.body);

    queries.buyItem(req.body.item_id, 1);
    res.redirect(302, "/inventory");
    res.end();
};