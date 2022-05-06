const express = require('express')
const logger = require('./middleware/logger')
const connectDB = require('./services/database')
const cors = require('cors')

const app = express()

//DB connection
connectDB()

//Middleware
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CORS
app.use(cors())

//** ROUTES **//
//API route [users]
app.use('/api/users/', require('./api/users'))

module.exports = app
