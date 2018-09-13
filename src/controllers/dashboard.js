const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getChallenges().then(allChallenges => {
    console.log("test: ", allChallenges);
    res.render("dashboard", { challenges: allChallenges });
  });
};
