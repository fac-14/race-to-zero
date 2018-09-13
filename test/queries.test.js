// go tests

const db = require("../db/db_connection");
const initialiseTestDatabase = require("../db/test_build");
const clearTestDatabase = require("../db/test_clear");
const getChallenges = require("../src/model/getAllChallenges");
// const runDbTestBuild = require('../db/test_build');
// const pg = require('pg');

beforeEach(() => initialiseTestDatabase());
afterEach(() => clearTestDatabase());
afterAll(() => db.$pool.end());

console.log("db ", db);

describe("getting challenges", () => {
  test("get challenges from db", () => {
    expect.assertions(1);
    return getChallenges().then(res => {
      console.log(res);
      expect(res).toBeTruthy();
    });
  });
});
