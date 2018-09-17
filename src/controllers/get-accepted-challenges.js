// const queries = require("../model/index");

<<<<<<< HEAD
// exports.get = (req, res) => {
//     queries.getAcceptedChallenges(userId, challengeStatus).then(challenges => {
//         res.render("dashboard", { challenges });
//     });
// };
||||||| merged common ancestors
exports.get = (req, res) => {
    queries.getAcceptedChallenges(1, 1).then(acceptedChallenges => {
        console.log("HELLO");
        res.render("dashboard", { acceptedChallenges });
    });
};
=======
exports.get = (req, res) => {
    queries.getAcceptedChallenges(1, 1).then(acceptedChallenges => {
        res.render("dashboard", { acceptedChallenges });
    });
};
>>>>>>> master
