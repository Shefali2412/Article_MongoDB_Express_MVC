const express = require("express")
require('dotenv').config()
const app = express()
 const route = require("./config/routes")
 require("./config/mongoose")
// app.set(express.static("public"))
 app.set("view engine", "ejs")
 app.use(express.urlencoded({ extended: true }))
// //require mongoose


// //requitre router
 app.use(route)

let port = process.env.PORT

app.listen(port, console.log(`app is on ${port}`))