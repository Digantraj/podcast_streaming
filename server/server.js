const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const connectDb = require("./config/db");
const userApi = require("./routes/user");
const catApi = require("./routes/categories.js");
const podcastApi = require("./routes/podcast.js");

app.use(express.json());
app.use(cookieParser());
require("dotenv").config();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);

// Connect to Database
connectDb();

// All routes
app.use("/api/v1", userApi);
app.use("/api/v1", catApi);
app.use("/api/v1", podcastApi);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
