// const queries = require("../model/index");

<<<<<<< HEAD
// exports.get = (req, res) => {
//     queries.getCompletedChallenges().then(completedChallenges => {
//         res.render("dashboard", { completedChallenges: completedChallenges });
//     });
// };
||||||| merged common ancestors
exports.get = (req, res) => {
    queries.getCompletedChallenges().then(completedChallenges => {
        res.render("dashboard", { completedChallenges: completedChallenges });
    });
};
=======
exports.get = (req, res) => {
    queries.getCompletedChallenges(1, 2).then(completedChallenges => {
        res.render("dashboard", { completedChallenges });
    });
};
>>>>>>> master
