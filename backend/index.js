const express = require('express');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/netflix").then(()=>console.log("connected successfully")).catch(err=>console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running.");
})
