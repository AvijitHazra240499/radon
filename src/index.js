const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require("./route/route")
const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://avijithazra1234:Techno16@cluster0.b7ob9.mongodb.net/project4-DB", { useNewUrlParser: true })
.then(() => console.log("MongoDb Connected..."))
.catch(err => console.log(err))

app.use("/", route)

app.listen(3000, () =>
    console.log("Express App Is Running On 3000")
)
