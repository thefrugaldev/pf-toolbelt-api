const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please provide a name for this category"
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Category", categorySchema);
