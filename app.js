var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var moviesRouter = require("./routes/movies");
var fantasyRouter = require("./routes/fantasy");

var mongoose = require("mongoose");

var app = express();

mongoose.connect(
  "mongodb+srv://shadia:divinchi@cluster0-agoes.mongodb.net/sample_mflix?retryWrites=true&w=majority", {
    useNewUrlParser: true
  },
  function (err) {
    if (err) {
      console.log("error connecting", err);
    } else {
      console.log("connected");
    }
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/movies", moviesRouter);
app.use("/fantasy", fantasyRouter);


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
  res.render("error");
});

module.exports = app;