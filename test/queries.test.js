/* eslint-disable */
const db = require("../db/db_connection");
const initialiseTestDatabase = require("../db/test_build");
const clearTestDatabase = require("../db/test_clear");
const getChallenges = require("../src/model/getAllChallenges");
const queries = require('../src/model/index')


beforeEach(() => initialiseTestDatabase());
afterEach(() => clearTestDatabase());
afterAll(() => db.$pool.end());

// console.log("db ", db);

describe("getting challenges", () => {
  test("get challenges from db", () => {
    expect.assertions(1);
    return queries.getChallenges().then(res => {
      // console.log(res);
      expect(res).toBeTruthy();
    });
  });
});

describe("accept challenge", () => {
  test("inserting challlenge id into challenge status", () => {
    expect.assertions(1);
    queries.acceptChallenge(1, 1);
    return queries.getAcceptedChallenges(1,1).then(res => {
      console.log(res.length);
      // getAccepted challenge required here :|
      expect(res.length).toBe(2);
    })
  })
})
 
describe('get accepted challenges', () => {
  test('returns the accepted challenges of specific user', () => {
    expect.assertions(1);
    return queries.getAcceptedChallenges(1, 1).then(res => {
      // console.log(res);
      expect(res).toBeTruthy();
    })
  })
})

