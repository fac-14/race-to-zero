const queries = require("../model/index");

module.exports = (req, res) => {
    queries.completeChallenge(req.body.challenge_id, 1);
    res.redirect(302, "/dashboard");
    res.end();
};