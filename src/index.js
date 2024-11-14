import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

const port = process.env.PORT;

//Connection with database
connectDB()
  .then(() => {
    //Register error handler first
    app.on("error", () => {
      console.log("Error : ", error.message);
    });

    //Start the server
    app.listen(port, () => {
      console.log("Server running at port : ", port);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error :", error);
  });
