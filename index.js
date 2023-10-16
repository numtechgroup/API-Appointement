const express = require('express')

const bodyParser = require("body-parser")
const morgan = require('morgan')

const app = express()

require("dotenv").config({  path: "./.env"})

require('./config/database')

const doctorRoute = require('./routes/doctorRoute')
const appointmentRoute = require('./routes/appointmentRoute')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/doctors', doctorRoute)
app.use('/appointments', appointmentRoute)


app.listen(process.env.PORT, () =>{
    console.log("Notre application est demarrée sur : http://localhost:"+process.env.PORT)
})