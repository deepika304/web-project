const express = require("express");
const multer = require("multer");
const { uploadFile, getFiles } = require("../controllers/dataController");
const File = require("../models/FileModel");
const Subscription = require("../models/SubscriptionModel"); // only once

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// File upload routes
router.post("/upload", upload.single("file"), uploadFile);
router.get("/files", getFiles);

// Hero form route
router.post("/consultations", async (req, res) => {
  try {
    const newData = new File(req.body);
    await newData.save();
    res.status(201).json({ message: "Saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save" });
  }
});

// Footer subscription route
router.post("/subscribe", async (req, res) => {
  try {
    const newSub = new Subscription(req.body);
    await newSub.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

module.exports = router;
