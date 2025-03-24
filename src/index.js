import connectDB from "./db/index.js";
import 'dotenv/config'


connectDB();



// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) =>{
//     console.log("ERROR",error);
//     throw new Error(error.message);
//     });


// app.listen(process.env.PORT,() => {
//     console.log(`Server started on port ${process.env.PORT}`)
// })

//   } catch (error) {
//     console.error("Error connecting to MongoDB", error);
//     throw new Error(error.message);
//   }
// }
// )();