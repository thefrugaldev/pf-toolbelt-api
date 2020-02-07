const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const reportSchema = new mongoose.Schema({
  start: {
    type: Date,
    default: Date.now
  },
  end: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Report", reportSchema);
