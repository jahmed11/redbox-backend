import dotenv from "dotenv";
import { IConfig } from "../types/config";
dotenv.config();

const config: IConfig = {
  port: process.env.PORT!,
  mongodbUri:process.env.MONGO_URI!
};

export default config;
