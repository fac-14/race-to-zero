const queries = require("../model/index");

exports.get = (req, res) => {
    res.send(queries.statsObj);
    res.end();
};
