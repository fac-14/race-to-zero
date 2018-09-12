// boooo index.js
const express = require('express');
const router = express.Router();

const landing = require("./landing");
const signup = require("./signup");
const login = require("./login");
const dashboard = require("./dashboard");
const challSelect = require("./challSelect");
const inventory = require("./inventory");
const errorRoute = require("./error-route");
const error = require("./error");

router.get("/", landing.get);
// router.get("signup", signup.get);
// router.post("signup", signup.post);
// router.get("login", login.get);
// router.post("login", login.post);
router.get("/dashboard", dashboard.get);
router.get("/challSelect", challSelect.get);
router.get("/inventory", inventory.get);

if (process.env.NODE_ENV === "test") {
    router.get("/make-error", errorRoute);
}


router.use(error.client);
router.use(error.server);


module.exports = router;