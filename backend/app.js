const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const dataRoutes = require("./routes/dataRoutes");

const app = express();

// CORS first
app.use(cors());

// Body parser
app.use(express.json());

// Routes
app.use("/api", dataRoutes);

// DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error:", err));

// Default route (safe)
app.get("/", (req, res) => {
  res.send("Backend working");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
