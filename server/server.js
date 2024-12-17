import dotenv from "dotenv";
import connectDb from "./config/connectdb.js";
dotenv.config();

import express from "express";
import cors from "cors";

const DATABASE_URL = process.env.DATABASE_URL;
connectDb(DATABASE_URL);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
