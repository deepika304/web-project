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


module.exports = router;