const queries = require("../model/index");

exports.get = (req, res) => {
    queries.getAcceptedChallenges(1, 1).then(acceptedChallenges => {
        res.render("dashboard", { acceptedChallenges });
    });
};