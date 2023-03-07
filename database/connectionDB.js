
import mongoose from "mongoose";

const connectionDB = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => console.log("Connected to DB")).catch((error) => console.error(error.message));
};

export default connectionDB;

// exports.connect = () => {
//     // Connecting to the database
//     mongoose
//       .connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//       })
//       .then(() => {
//         console.log("Successfully connected to database");
//       })
//       .catch((error) => {
//         console.log("database connection failed. exiting now...");
//         console.error(error);
//         process.exit(1);
//       });
//   };