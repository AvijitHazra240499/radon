const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require("./route/route")
const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://avijithazra12:Avijit16@cluster0.b7ob9.mongodb.net/practice1234-DB?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => console.log("MongoDb Connected...✔✔🟢"))
.catch(err => console.log(err))

app.use("/",route)
let port=process.env.PORT||3000
app.listen( port,() =>
    console.log("Express App Is Running On "+port)
)
