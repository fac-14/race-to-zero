const queries = require("../model/index");

exports.get = (req, res) => {
    queries.getCompletedChallenges().then(completedChallenges => {
        res.render("dashboard", { completedChallenges: completedChallenges });
    });
};
