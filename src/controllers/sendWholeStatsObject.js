const queries = require("../model");

exports.get = (req, res) => {
    res.send(queries.statsObj);
    res.end();
};
