const user_stats = require('../model/stats-object');
const queries = require('../model/index');

exports.get = (req, res) => {
  queries.getUserPoints(1)
    .then(points => points[0].points)
    .then(totalPoints => {
      const level = Math.floor(totalPoints / 10);
      for (let i = 0; i < user_stats.length; i++) {
        if (user_stats[i].my_level === level) {
          const userStats = user_stats[i];
          res.render('user-stats', { userStats: userStats })
        }
      }
    })
};

