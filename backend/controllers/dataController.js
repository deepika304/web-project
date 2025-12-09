const File = require("../models/FileModel");

exports.uploadFile = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      originalName: req.file.originalname,
      category: req.body.category || "general",
      size: req.file.size,
    });
    await file.save();
    res.json({ message: "File uploaded successfully", file });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
