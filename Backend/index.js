import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/database/db.js";
import app from "./app.js";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8080;

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
