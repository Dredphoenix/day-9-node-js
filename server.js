import express from "express";
import cors from "cors";
import {connectDB} from "./src/config/db.js"
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users",userRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("API Running...");
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
