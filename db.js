const mongoose = require("mongoose");
const {MONGOURI} = require("./key")

// car rental database
// username:tikavalery
// password: dZwpsE0h0mUM2Tpq

function connection(){
    mongoose.connect(MONGOURI)
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