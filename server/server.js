import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/mongoDb.js";
import { clerkWebhooks } from "./controllers/webhook.js";

dotenv.config();

const app = express();

// DB
await connectDB();

// Global middlewares
app.use(cors());

// Webhook route FIRST (raw body)
app.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

// JSON parser for EVERYTHING ELSE
app.use(express.json());

// Normal routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
