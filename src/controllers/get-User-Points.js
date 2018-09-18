const queries = require("../model");

exports.get = (req, res) => {
  queries.getUserPoints(1).then(points => {
    console.log(points);
    res.render("test", {
      user_points: points[0]
    });
  });
};
