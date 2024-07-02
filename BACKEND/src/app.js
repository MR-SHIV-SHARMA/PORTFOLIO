// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// const app = express();

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

// import contectRouter from "./routes/contect.routes.js";

// app.use("/api/v1/users", contectRouter);

// export { app };


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import contectRouter from "./routes/contect.routes.js";

dotenv.config({
  path: "./.env",
});

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", contectRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Backend deployed on Vercel!");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`⚙️ Server is running at port: ${PORT}`);
});

export { app };
