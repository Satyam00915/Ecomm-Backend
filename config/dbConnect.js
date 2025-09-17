import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();

const dbname= process.env.DB_NAME;
const username= process.env.DB_USER;
const password= process.env.DB_PASSWORD;
const host= process.env.HOST;
const sequelize = new Sequelize(dbname, username, password, {
  host: host,
  port: process.env.DB_PORT,
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  logging: false,
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectToDb, sequelize };
