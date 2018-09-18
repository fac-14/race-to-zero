const queries = require("../model");

const getPoints = () =>{
  queries.getUserPoints(1).then(points => {
    console.log(points)  
   
  })
}

module.exports = getPoints;
