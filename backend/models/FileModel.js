const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String },
  city: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("File", fileSchema);
