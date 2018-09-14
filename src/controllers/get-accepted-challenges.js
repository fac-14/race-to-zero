const queries = require("../model/index");

exports.get = (req, res) => {
    queries.getAcceptedChallenges(1, 1).then(acceptedChallenges => {
        console.log("HELLO");
        res.render("dashboard", { acceptedChallenges });
    });
};
