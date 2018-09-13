const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getSingleChallenge().then(challengeDetails => {
    console.log("challenge details: ", challengeDetails);
    res.render("challSelect", {
      layout: "content-selected",
      challenge: challengeDetails[0]
    });
  });
};
