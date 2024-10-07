import config from "./config/config";
import mongoose from "mongoose";
import app from "./server";
const PORT = config.port || 3000;

mongoose
  .connect(config.mongodbUri)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
