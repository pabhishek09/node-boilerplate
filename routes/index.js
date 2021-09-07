const express = require("express");
const ping = require("./ping");
const users = require("./users/index");

const router = express.Router();


const routes = [ping, ...users];

routes.forEach((route) => {
  router[route.method](route.path, route.handler);
});

module.exports = router;
