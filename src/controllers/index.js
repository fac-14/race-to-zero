// boooo index.js
const express = require("express");
const router = express.Router();

const landing = require("./landing");
// const signup = require("./signup");
// const login = require("./login");
const dashboard = require("./dashboard");
const challSelect = require("./challSelect");
const inventory = require("./inventory");
const suggestedItem = require("./suggested-item-select");
const boughtItem = require("./bought-item-select");
const learn = require("./learn");
const userStats = require("./user-stats");
const queries = require("../model/index");
const singleTopic = require("./getSingleTopic");
const errorRoute = require("./error-route");
const error = require("./error");
const getUserPoints = require("./get-user-points");

router.get("/", landing.get);
// router.get("signup", signup.get);
// router.post("signup", signup.post);
// router.get("login", login.get);
// router.post("login", login.post);
router.get("/dashboard", dashboard.get);
// enables u to click to go to single challenge page
router.get("/new-challenges/:id", challSelect.get);
router.get("/acc-challenges/:id", challSelect.get);
router.get("/comp-challenges/:id", challSelect.get);

// routes for inventory section
router.get("/inventory", inventory.get);
router.get("/inventory/suggested-item/:id", suggestedItem.get);
router.get("/inventory/bought-item/:id", boughtItem.get);
router.get("/make-error", errorRoute);
router.get("/learn", learn.get);
router.get("/stats", userStats.get);
router.get("/learn/:singleTopic", singleTopic.get);

// Sending the points object
router.get("/userpoints", getUserPoints.get);

// accepting and completing challenges
router.post("/challenge/accepted/", (req, res) => {
  // insert query here to add accepted challenge to database
  queries.acceptChallenge(req.body.challenge_id, 1);
  res.redirect(302, "/dashboard");
  res.end();
});

router.post("/challenge/completed/", (req, res) => {
  // insert query here to add completed challenge to database
  queries.completeChallenge(req.body.challenge_id, 1);
  // console.log("Challenge completed!");
  res.redirect(302, "/dashboard");
  res.end();
});

// buying an item
router.post("/inventory/item-bought/", (req, res) => {
  queries.buyItem(req.body.item_id, 1);
  console.log("Item bought!");
  res.redirect(302, "/inventory");
  res.end();
});

if (process.env.NODE_ENV === "test") {
  router.get("/make-error", errorRoute);
}
router.use(error.client);
// router.use(error.server);

module.exports = router;
