const mongoose = require("mongoose");

function connection(){
    mongoose.connect("mongodb+srv://tikavalery:wflZtlNL5pLHxdkM@cluster0.3giist4.mongodb.net/")
// mongodb+srv://tikavalery:<password>@cluster0.3giist4.mongodb.net/
    const connection = mongoose.connection

    connection.on("connected",()=>{
        console.log("Mongo on connection succesfull")
    })
    connection.on("error",()=>{
        console.log("mongo on connection error")
    })
}

connection()

module.exports = mongoose