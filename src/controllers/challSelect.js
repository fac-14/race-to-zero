const queries = require("../model/index");

exports.get = (req, res) => {
  const { id } = req.params;
  queries.getSingleChallenge(id).then(challengeDetails => {
    // console.log("challenge details: ", challengeDetails);
    res.render("challSelect", {
      layout: "content-selected",
      challenge: challengeDetails[0]
    });
  });
};
