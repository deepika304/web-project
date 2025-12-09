require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const dataRoutes = require("./routes/dataRoutes");

const app = express();

// Middleware
   
app.use(express.json());

// Serve uploaded files (VERY IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS fix for frontend
app.use(
  cors({
    origin: "http://localhost:8000", // your frontend
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Routes
app.use("/api", dataRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
