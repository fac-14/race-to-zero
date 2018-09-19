/* eslint-disable */
const db = require("../db/db_connection");
const initialiseTestDatabase = require("../db/test_build");
const clearTestDatabase = require("../db/test_clear");
const queries = require("../src/model/index");
const challengeObject = require("./queries-dummy-data");

beforeEach(() => initialiseTestDatabase());
afterEach(() => clearTestDatabase());
afterAll(() => db.$pool.end());

describe("getting all challenges", () => {
  test("get challenges from db", () => {
    expect.assertions(1);
    return queries.getChallenges().then(res => {
      expect(res).toBeTruthy();
    });
  });
  test("returns an object", () => {
    expect.assertions(1);
    return queries.getChallenges().then(res => {
      expect(res[1]).toMatchObject(challengeObject);
    });
  });
});

describe("accept challenge", () => {
  test("inserting challlenge id into challenge status", () => {
    expect.assertions(1);
    return queries.acceptChallenge(1, 1).then(res => {
      expect(res).toBeTruthy();
    });
  });
  test("inserting challlenge id into challenge status", () => {
    expect.assertions(1);
    queries.acceptChallenge(1, 1);
    return queries.getAcceptedChallenges(1, 1).then(res => {
      expect(res.length).toBe(2);
    });
  });
});

describe("get accepted challenges", () => {
  test("returns the accepted challenges of specific user", () => {
    expect.assertions(1);
    return queries.getAcceptedChallenges(1, 1).then(res => {
      expect(res).toBeTruthy();
    });
  });
  test("returns an array of objects", () => {
    expect.assertions(1);
    return queries.getAcceptedChallenges(1, 1).then(res => {
      expect(res[0]).toMatchObject(challengeObject);
    });
  });
});

describe("get single challenge", () => {
  test("returns the information for a specified challenge", () => {
    expect.assertions(1);
    return queries.getSingleChallenge(2).then(res => {
      expect(res).toBeTruthy();
    });
  });
  test("returns an object", () => {
    expect.assertions(1);
    return queries.getSingleChallenge(2).then(res => {
      expect(res[0]).toMatchObject(challengeObject);
    });
  });
});

describe("complete a challenge", () => {
  test("change the challenge status to complete", () => {
    expect.assertions(1);
    return queries.completeChallenge(1, 1).then(res => {
      expect(res).toBeTruthy();
    });
  });
});

describe("buy an item", () => {
  test("change the item bought status to true", () => {
    expect.assertions(1);
    return queries.buyItem(1, 1).then(res => {
      expect(res).toBeTruthy();
    });
  });
});

describe("Update points for single user", () => {
  test("Check if we can get reward points for user 1", () => {
    expect.assertions(1);
    return queries.updatePoints(1, 1).then(res => {
      expect(res).toBeTruthy();
    });
  });
});

describe("Get a users points", () => {
  test("Check if a number is returned", () => {
    // expect.assertions(4);
    return queries.getUserPoints(1).then(res => {
      console.log(res);

      expect(res).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            points: expect.any(Number)
          })
        ])
      );
    });
  });
});

describe("Get single query", () => {
  test("Check that a single challenge is returned", () => {
    expect.assertions(1);
    return queries.getSingleChallenge(1.1).then(res => {
      expect(res).toBeTruthy();
    });
  });
});
