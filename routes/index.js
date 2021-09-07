const express = require("express");
const ping = require("./ping");
const users = require("./users/index");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

console.log("users", users);

const routes = [ping, ...users];

routes.forEach((route) => {
  router[route.method](route.path, route.handler);
});

module.exports = router;
