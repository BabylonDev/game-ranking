const express = require("express");

function router() {
  const router = express.Router();
  router.use("/", require("./home"));
  router.use("/about", require("./about"));

  return router;
}

module.exports = { router };