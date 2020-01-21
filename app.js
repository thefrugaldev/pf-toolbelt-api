const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { promisify } = require("es6-promisify");
const expressValidator = require("express-validator");
const routes = require("./routes/index");
const errorHandlers = require("./handlers/error-handlers");

const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data.
// Used heavily on userController.validateRegister
// app.use(expressValidator());

// Populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Promisify some callback based APIs
// app.use((req, res, next) => {
//   req.login = promisify(req.login, req);
//   next();
// });

// After the above middleware, handle internal routes
app.use("/", routes); //TODO: update route to prefix 'api'
// If above routes didnt work, return 404 and forward to error handler
app.use(errorHandlers.notFound);
// One of the error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);
// Otherwise more extreme errors are logged in dev env
if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}
// production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
