const user_stats = require('../model/stats-object');
exports.get = (req, res) => {
  console.log(user_stats[0]);
  const userStats = user_stats[0];
  res.render('user-stats', { userStats: userStats })


};

