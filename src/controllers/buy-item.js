const queries = require("../model/index");

module.exports = (req, res) => {
    queries.buyItem(req.body.item_id, 1);
    res.redirect(302, "/inventory");
    res.end();
};