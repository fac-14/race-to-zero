const queries = require("../model/index");

exports.get = (req, res) => {
    queries.getAcceptedChallenges().then(acceptedChallenges => {
        console.log("acceptedChall: ", acceptedChallenges);
        res.render("dashboard", { acceptedChallenges: acceptedChallenges });
    });
};
