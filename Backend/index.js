import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/database/db.js";
import app from "./app.js";


dotenv.config({
  path: "./env",
});

const app = express();
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Server listening error", error);
    process.exit(1);
  });
