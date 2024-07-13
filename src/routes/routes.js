const express = require("express");

function router() {
  const router = express.Router();
  router.use("/", require("./home"));
  router.use("/about", require("./about"));
  router.use("/toprank", require("./toprank"));

  return router;
}

module.exports = { router };