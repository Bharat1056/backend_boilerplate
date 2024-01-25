import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "../src/db/index.js";

dotenv.config({
    path: "./env"
})

// Database connection

 // 1.  using await method

await connectDB() 
// you might be wondering that here we use await keyword but not inside the async function but in node version greater than 14 we use global await keyword and node treat it like a hidden async function outside of that

app.on("error", (error) => {
    console.log("Express doesn't connect to our database: ", error);
    throw error
})

// if listens properly then do this

app.listen(process.env.PORT, () => {
    console.log(`App listening on: ${process.env.PORT} PORT Number`);
})




// 2. using .then() and .catch() method

// connectDB
// .then(()=>{
//     app.listen(process.env.PORT, () => {
//         console.log(`App listening on: ${process.env.PORT} PORT Number`);
//     })
    
//     app.on("error", (error) => {
//         console.log("ERROR in express: ", error);
//         throw error
//     })
// })
// .catch((error)=>{
//     console.log(error);
// })











// here we use same things but database connection is inside the index.js file only


// import express from "express";
// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        // app.on("error", (error) => {
        //     console.log("ERROR: ", error);
        //     throw error
        // })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App listening on: ${process.env.PORT} PORT Number`);
//         })

//     } catch (error) {
//         console.log("Error: ", error);
//         throw error;
//     }
//  })()