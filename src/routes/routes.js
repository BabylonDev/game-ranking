const express = require("express");

function router() {
  const router = express.Router();
  router.use("/", require("./home"));
  router.use("/about", require("./about"));
  router.use("/toprank", require("./toprank"));
  router.use("/portfolio", require("./portfolio"));
  router.use("/topics", require("./topics"));
  router.use("/community", require("./community"));
  router.use("/contact", require("./contact"));
  return router;
}

module.exports = { router };