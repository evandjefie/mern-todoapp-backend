// import express from 'express'
const express = require('express')
const bodyParser = require('body-parser')

// import dotenv from "dotenv"
const cors = require('cors')
require('dotenv').config()

// import connectionDB from "./database/connectionDB.js"
const connectionDB = require('./database/connectionDB.js')
import cookieParser from "cookie-parser"

// import todosRoutes from "./routes/todos.js"
const todosRoutes = require('./routes/todos.js')
// import usersRoutes from "./routes/users.js"
const usersRoutes = require('./routes/users.js')
 
// init
const app = express()
const apiPort = process.env.PORT

// for cookieParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

// dotenv.config()
connectionDB()

app.use("/api/todos", todosRoutes)
app.use("/api/users", usersRoutes)

app.listen(apiPort, ()=> console.log(`Server is running on PORT ${apiPort}`))

