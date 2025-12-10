const mongoose = require("mongoose");


const uploadedFileSchema = new mongoose.Schema({
filename: { type: String, required: true },
originalName: { type: String, required: true },
category: { type: String },
size: { type: Number }
}, { timestamps: true });


module.exports = mongoose.model("UploadedFile", uploadedFileSchema);