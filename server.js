import express from "express";
import dotenv from "dotenv";
import {connectToDb,sequelize} from "./config/dbConnect.js";
import "./models/index.js"
import "./models/auth/adminModel.js"
import apiRoutes from "./api/api.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async() => {
  console.log(`Listening on PORT ${PORT}`);
  connectToDb();
  await sequelize.sync();
  console.log("✅ Tables synced");

});
