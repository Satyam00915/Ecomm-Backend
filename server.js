import express from "express";
import dotenv from "dotenv";
import {connectToDb,sequelize} from "./config/dbConnect.js";
import "./models/index.js"
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, async() => {
  console.log(`Listening on PORT ${PORT}`);
  connectToDb();
  await sequelize.sync({ alter: true});
  console.log("✅ Tables synced");

});
