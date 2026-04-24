import express from "express";
import { errorHandler } from "./src/middleware/errorhandler.middleware";
import { healthCheck } from "./src/controllers/healthcheck.controller";

const app = express();

//basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);


//import routes
import {healthCheck} from "./src/controllers/healthcheck.controller.js"
app.use("/api/v1/healthcheck", healthCheck);


app.get("/", (req, res) => {
  res.send("hellow");
});

app.use(errorHandler);
export default app;
