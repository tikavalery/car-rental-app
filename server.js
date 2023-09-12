const express = require("express");
const app = express();
const port = process.env.PORT || 5000
const dbconnection = require("./db")
//tikavalery
// wflZtlNL5pLHxdkM

app.get("/",(req,res) => res.send("Hello world"))
app.listen(port,()=> console.log(`app is listening on port ${port}`))