const File = require("../models/FileModel");
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  uploadFile,
  getFiles,
  saveConsultation,
  subscribe
} = require("../controllers/dataController");

// File upload
router.post("/upload", upload.single("file"), uploadFile);
router.get("/files", getFiles);

// Hero form (consultation)
router.post("/consultations", saveConsultation);

// Footer subscription
router.post("/subscribe", subscribe);

// Add this route for saving File directly
router.post("/save", async (req, res) => {
  try {
    const file = new File(req.body);
    await file.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ error: "Failed to save" });
  }
});

module.exports = router;
