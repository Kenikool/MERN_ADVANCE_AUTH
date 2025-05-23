import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
// Define your routes here
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//  routes
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
