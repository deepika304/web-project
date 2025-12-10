const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();


const dataRoutes = require("./routes/dataRoutes");


const app = express();


// ----- CORS and body parsing must be BEFORE routes -----
const allowedOrigins = [
process.env.FRONTEND_URL || "https://genuine-frangollo-847f04.netlify.app",
"http://localhost:3000",
"http://localhost:8000"
];


app.use(cors({
origin: function (origin, callback) {
if (!origin) return callback(null, true); // allow curl, Postman, server-to-server
if (allowedOrigins.includes(origin)) {
callback(null, true);
} else {
callback(new Error("Not allowed by CORS"));
}
}
}));


app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: true })); // parse form data


// Serve frontend static if frontend folder is placed next to backend
const frontendPath = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendPath));


// API routes
app.use("/api", dataRoutes);


// fallback for SPA (optional) — serve index.html for unknown routes
app.get("*", (req, res) => {
res.sendFile(path.join(frontendPath, "index.html"), err => {
if (err) res.status(404).send("Not found");
});
});


// DB connection
mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("DB error:", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));