const queries = require("../model/index");

exports.get = (req, res) => {
  const userPoints = queries.getUserPoints(1);
  const completedChallenges = queries.getAcceptedChallenges(1, 2);

  Promise.all([userPoints, completedChallenges])
    .then(stats => {
      const userPoints = stats[0][0].points;
      const nextLevel = (Math.floor(userPoints / 10) + 1);
      const pointsLeft = (nextLevel * 10) - userPoints;
      const challengesCompleted = stats[1].length;
      const statsObject = { userPoints: userPoints, challengesCompleted: challengesCompleted, pointsLeft: pointsLeft };
      res.send(statsObject)
      res.end()
    });
}




