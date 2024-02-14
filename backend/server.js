// npm i express dotenv cookir-parser bcryptjs mongoose socket.io jsonwebtoken

// npm run server

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require("./Routes/Auth_Routes");
const messageRoutes = require("./Routes/Message_Routes");
const userRoute = require("./Routes/UserRoutes");
const { serverSocket } = require('./socket/socket');
// const { app, server, serverSocket } = require('./socket/socket');
// import { app, server } from "./socket/socket.js";

// const { connectToMongoDB } = require('./Db/connectToMongoDB');

const { app, server} = serverSocket
// console.log(`Connecting to MongoDB` , server , 'server' );


// const app = express();          // this express is used in socket.io
const PORT = process.env.PORT || 4000


const __dirname1 = path.resolve()
dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth" , authRoutes)
app.use("/api/messages" , messageRoutes)
app.use("/api/users" , userRoute)

app.use(express.static(path.join(__dirname1,"/frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname1, "frontend" , "dist" , "index.html"));
})


app.get("/",(req,res,next)=>{
    res.send("Hello World");
})






mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    // app.listen(process.env.PORT)
    server.listen(PORT)
    console.log("Connect to mongoDB " )
}).then(()=>{
    console.log("listening on port " , PORT)
}).catch((error)=>{
    console.log("error" , error.message)
})