// booo index.js
const acceptChallenge = require("./acceptChallenge");
const completeChallenge = require("./completeChallenge");
const getAcceptedChallenges = require("./getAcceptedChallenges");
const getChallenges = require("./getChallenges");
// const getCompletedChallenges = require('./getCompletedChallenges')
const getSingleChallenge = require("./getSingleChallenge");
const getBoughtItems = require("./getBoughtItems");
const getSuggestedItems = require("./getSuggestedItems");

module.exports = {
  acceptChallenge,
  completeChallenge,
  getAcceptedChallenges,
  getChallenges,
  // getCompletedChallenges,
  getSingleChallenge,
  getBoughtItems,
  getSuggestedItems
};
