const queries = require("../model/index");

exports.get = (req, res) => {
    queries.getAcceptedChallenges().then(acceptedChallenges => {
        res.render("dashboard", { acceptedChallenges: acceptedChallenges });
    });
};
