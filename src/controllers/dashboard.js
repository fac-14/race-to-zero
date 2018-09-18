const queries = require("../model/index");

exports.get = (req, res) => {

  const newChallenges = queries.getChallenges();
  const acceptedChallenges = queries.getAcceptedChallenges(1, 1);
  const completedChallenges = queries.getAcceptedChallenges(1, 2);
  // const getUserPoints = queries.getUserPoints(1);

  Promise.all([newChallenges, acceptedChallenges, completedChallenges])
    .then(challenges => {
      res.render("dashboard", {
        newChallenges: challenges[0],
        acceptedChallenges: challenges[1],
        completedChallenges: challenges[2]
      });
    })
    .catch(err => console.log(err));
};
