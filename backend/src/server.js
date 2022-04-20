// express micro-framework, para criar server, routes
const express = require('express')
// mongoose
const mongoose = require ('mongoose') 
const routes = require('./routes') // import

// Criando app
const app = express() 
// dotenv
require('dotenv').config

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

// connect 
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@omnistack.p0kcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    // configurações do mongo
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json()) // Utilizar formato Json
app.use(routes) // usar routes

// rodando server 
app.listen(3333, (req, res) => console.log('server running 🤖'));
