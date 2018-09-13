// boooo index.js
const express = require("express");
const router = express.Router();

const landing = require("./landing");
const signup = require("./signup");
const login = require("./login");
const dashboard = require("./dashboard");
const challSelect = require("./challSelect");
const inventory = require("./inventory");
const learn = require("./learn");
const userStats = require("./user-stats");
const itemSelect = require("./item-select");
const acceptedChallSelect = require("./accepted-challenge-select");

const errorRoute = require("./error-route");
const error = require("./error");

router.get("/", landing.get);
// router.get("signup", signup.get);
// router.post("signup", signup.post);
// router.get("login", login.get);
// router.post("login", login.post);
router.get("/dashboard", dashboard.get);
router.get("/challenge", challSelect.get);
router.get("/inventory", inventory.get);
router.get("/make-error", errorRoute);
router.get("/learn", learn.get);
router.get("/stats", userStats.get);
router.get("/inventory-item", itemSelect.get);
router.get("/my-challenge/", acceptedChallSelect.get);
// accepting and completing challenges
router.post("/challenge/accepted", (req, res) => {
  // insert query here to add accepted challenge to database
  console.log("Challenge accepted!");
  res.redirect(302, "/dashboard");
  res.end();
});
router.post("/challenge/completed", (req, res) => {
  // insert query here to add completed challenge to database
  console.log("Challenge completed!");
  res.redirect(302, "/dashboard");
  res.end();
});
if (process.env.NODE_ENV === "test") {
    router.get("/make-error", errorRoute);
}
router.use(error.client);
// router.use(error.server);

module.exports = router;
