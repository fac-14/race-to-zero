const queries = require("../model/index");

exports.get = (req, res) => {

  const newChallenges = queries.getChallenges();
  const acceptedChallenges = queries.getAcceptedChallenges();
  const completedChallenges = queries.getCompletedChallenges();

  Promise.all([newChallenges, acceptedChallenges, completedChallenges])
    .then(challenges => {
      res.render("dashboard", {
        newChallenges: challenges[0],
        acceptedChallenges: challenges[1],
        completedChallenges: challenges[2]
      });
    })
};
