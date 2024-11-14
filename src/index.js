import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

const port = process.env.PORT;

connectDB()
  .then(() => {
    app
      .on("error", () => {
        console.log("Error : ", error.message);
      })
      .listen(port, () => {
        console.log("Server running at port : ", port);
      });
  })
  .catch((error) => {
    console.log("MongoDB connection error :", error);
  });
