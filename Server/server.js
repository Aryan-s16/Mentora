import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoutes.js";

// Initialise express
const app = express();

// Middlewares
app.use(cors());
app.use(clerkMiddleware());

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Routes
app.get("/", (req, res) => res.send("API Working"));
app.post("/clerk", express.json(), clerkWebhooks);
app.use("/api/educator", express.json(), educatorRouter);
app.use("/api/course", express.json(), courseRouter);
app.use("/api/user", express.json(), userRouter);

// Start server only after DB is connected
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectCloudinary();
    await connectDB(); // ✅ wrapped inside async
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect DB", error);
    process.exit(1);
  }
};

startServer();
