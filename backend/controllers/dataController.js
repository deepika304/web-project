const fs = require("fs");


exports.uploadFile = async (req, res) => {
try {
if (!req.file) return res.status(400).json({ error: "No file uploaded" });


const file = new UploadedFile({
filename: req.file.filename,
originalName: req.file.originalname,
category: req.body.category || "general",
size: req.file.size
});


await file.save();
res.json({ message: "File uploaded successfully", file });
} catch (err) {
console.error(err);
res.status(500).json({ error: err.message });
}
};


exports.getFiles = async (req, res) => {
try {
const files = await UploadedFile.find().sort({ createdAt: -1 });
res.json(files);
} catch (err) {
console.error(err);
res.status(500).json({ error: err.message });
}
};


exports.saveConsultation = async (req, res) => {
try {
const { name, email, mobile, city } = req.body;
if (!name || !email) return res.status(400).json({ error: "Name and email required" });


const newData = new Consultation({ name, email, mobile, city });
await newData.save();
res.status(201).json({ message: "Saved successfully" });
} catch (err) {
console.error(err);
res.status(500).json({ error: "Failed to save" });
}
};


exports.subscribe = async (req, res) => {
try {
const { email } = req.body;
if (!email) return res.status(400).json({ error: "Email is required" });
const existing = await Subscription.findOne({ email });
if (existing) return res.status(200).json({ message: "Already subscribed" });


const newSub = new Subscription({ email });
await newSub.save();
res.status(201).json({ message: "Subscribed successfully" });
} catch (err) {
console.error(err);
res.status(500).json({ error: "Failed to subscribe" });
}
};