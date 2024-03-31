require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const port = process.env.PORT || 5007;
// const cookieParser = require("cookie-parser");
const products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
require("./db/connection");
// const router = require("./routes/router");
// const jwt = require("jsonwebtoken");


// // middleware
// app.use(express.json());
// app.use(cookieParser(""));

// app.use(router);
// // app.get("/",(req,res)=>{
// //     res.send("your server is running");
// // });


// if(process.env.NODE_ENV == "production"){
//     app.use(express.static("client/build"));
// }

const port = 8009;

app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();