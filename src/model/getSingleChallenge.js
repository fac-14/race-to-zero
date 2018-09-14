
// Gets all the info for a single challenge using the specified id

const db = require('../../db/db_connection');

const getSingleChallenge = (challenge_id) => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM challenges WHERE id = $1;`, [challenge_id])
    .then(res => resolve(res))
    .catch(err => reject(err))
})

module.exports = getSingleChallenge;

// DUMMY CODE!!!!!!

// const getSingleChallenge = () => {
//   return new Promise((resolve, reject) => {
//     const result = [
//       {
//         id: 5,
//         inventory_id: null,
//         title: "Something else importat",
//         what: "maybe buy refillable bottle",
//         why: "saving lots of plastic",
//         ext_link:
//           "https://www.independent.co.uk/environment/plastic-bottles-waste-recycling-pollution-single-use-keep-britain-tidy-water-a8307591.html",
//         img_link:
//           "https://www.banthebottle.net/wp-content/uploads/2009/06/ban-all-bottles-300x225.jpg",
//         reward_points: 10,
//         repeatable: true
//       }
//     ];

//     resolve(result);
//   });
// };

// module.exports = getSingleChallenge;
