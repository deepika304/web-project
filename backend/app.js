const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const dataRoutes = require("./routes/dataRoutes");

const app = express();

// app.use(express.static("../frontend"));

// app.use("/", dataRoutes);

// CORS FIX
// const allowedOrigins = [
//   "http://localhost:8000",
//   "https://genuine-frangollo-847f04.netlify.app"
// ];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(express.json());

app.use(express.static("../frontend"));

// Routes
app.use("/", dataRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("DB error:", err));

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
