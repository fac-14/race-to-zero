const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getUserPoints(1).then(points => {
    res.send({ user_points: points[0] });
    res.end();
  });
};
