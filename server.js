import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/dbConnect.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
  connectToDb();
});
