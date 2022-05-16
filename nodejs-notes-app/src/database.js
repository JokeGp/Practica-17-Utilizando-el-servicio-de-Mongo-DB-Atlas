// import mongoose from "mongoose";
// const mongoose = require("mongoose");

// mongoose.connect(
//   `mongodb+srv://Heisenberg:los_pollos_hermanos@cluster0.vvh4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully"); //Al conectarse exitosamente enviara el anterior mensaje
// });
import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://Heisenberg:los_pollos_hermanos@cluster0.vvh4y.mongodb.net/FastTutorial?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
