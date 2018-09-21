const user_stats = require("../model/stats-object");
const queries = require("../model/index");

exports.get = (req, res) => {
  queries
    .getUserPoints(1)
    .then(points => points[0].points)
    .then(totalPoints => {
      const actualPoints = totalPoints;
      const level = Math.floor(actualPoints / 10);
      for (let i = 0; i < user_stats.length; i++) {
        if (user_stats[i].challenges_completed === level) {
          console.log(user_stats[i]);
          const userStats = user_stats[i];
          res.render("congrats", {
            layout: "congrats-layout",
            userStats: userStats
          });
        }
      }
    });
};
