const queries = require("../model/index");

exports.get = (req, res) => {
  queries.getSingleChallenge(2).then(challengeDetails => {
    // console.log("challenge details: ", challengeDetails);
    res.render("challSelect", {
      layout: "content-selected",
      challenge: challengeDetails[0]
    });
  });
};
