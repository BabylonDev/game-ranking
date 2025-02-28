// var createError = require("http-errors");
var express = require("express");
var path = require("path");
// var logger = require("morgan");
var { router } = require("./src/routes/routes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "Test"));
app.set("view engine", "ejs");

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("page/error/error");
});

app.listen(3000);

module.exports = app;