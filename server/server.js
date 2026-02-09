import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/mongoDb.js";
import { clerkWebhooks } from "./controllers/webhook.js";
import { clerkMiddleware } from "@clerk/express";
import educatorRoutes from "./routes/educatorRoutes.js";
import { connectCloudinary } from "./configs/cloudinary.js";

dotenv.config();

const app = express();

// DB
await connectDB();
// cloudinary
await connectCloudinary();


// Global middlewares
app.use(cors());
app.use(clerkMiddleware());

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
  res.send("Hello World")
})
app.use("/api/educator",educatorRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
