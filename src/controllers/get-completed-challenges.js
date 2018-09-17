// const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getCompletedChallenges(1, 2).then(completedChallenges => {
    res.render("dashboard", { completedChallenges });
  });
};
