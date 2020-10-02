import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

module.exports = () => {
  const connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
      dbName: "WooTube",
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  };
  connect();

  const db = mongoose.connection;

  db.once("open", () => console.log("connect to db"));
  db.on("error", (error) => console.log(`db connect error ${error}`));

  require("./video.js");
  require("./comment.js");
};
