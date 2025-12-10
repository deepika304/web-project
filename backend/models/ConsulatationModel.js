const mongoose = require("mongoose");


const consultationSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true },
mobile: { type: String },
city: { type: String }
}, { timestamps: true });


module.exports = mongoose.model("Consultation", consultationSchema);