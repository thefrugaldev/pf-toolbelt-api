const mongoose = require("mongoose");

// Import environmental variables from variables.env file
require("dotenv").config({ path: "variables.env" });

// Connect to our database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Import models
require("./models/Budget");
require("./models/Category");
require("./models/LineItem");

// Start application
const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
