const queries = require("../../model/index");

const getPoints = () => {
  queries.getUserPoints(1).then(points => {
    console.log(points);
  });
};

module.exports = getPoints;
