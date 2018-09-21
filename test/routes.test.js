/* eslint-disable */

const supertest = require("supertest");
const app = require("../src/app.js");

describe("Test the root", () => {
  test("It should respond to the GET method", done => {
    supertest(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the dashboard page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/dashboard/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the challSelect page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/new-challenges/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the inventory page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/inventory/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the learn page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/learn/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the accepted challenge page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/acc-challenges/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the stats page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/stats/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the bought inventory item page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/inventory/suggested-item/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the suggested inventory item page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/inventory/bought-item/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test challenge accepted", () => {
  test("Expecting a 302 status return", done => {
    supertest(app)
      .post("/challenge/accepted/")
      .then(response => {
        expect(response.statusCode).toBe(302);
        done();
      });
  });
});


describe("Test the error-route page", () => {
  test("Expecting a 500 status return", done => {
    supertest(app)
      .get("/make-error/")
      .then(response => {
        expect(response.statusCode).toBe(500);
        done();
      });
  });
});

describe("Test an incorrect route for 404", () => {
  test("Expecting a 404 status return", done => {
    supertest(app)
      .get("/armandisgreat/")
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});

describe("Test a single topic route", () => {
  test("Expecting a 200 status response", done => {
    supertest(app)
      .get("/learn/Plastic")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test user-points route", () => {
  test("Don't know what to expect yet", done => {
    supertest(app)
      .get("/userpoints")
      .then(response => {
        expect(response.statusCode).toBe(301);
        done();
      });
  });
});

describe("Test the send user stats page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/send-stats/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the send total stats page", () => {
  test("Expecting a 200 status return", done => {
    supertest(app)
      .get("/total-stats-object/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test challenge completed", () => {
  test("Expecting a 302 status return", done => {
    supertest(app)
      .post("/challenge/completed/")
      .then(response => {
        expect(response.statusCode).toBe(302);
        done();
      });
  });
});

