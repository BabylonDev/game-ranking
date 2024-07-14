var express = require("express");
var router = express.Router();

router.get("/*", async (req, res) => {
  try {
    res.render("../Test/contact", {
      req,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;