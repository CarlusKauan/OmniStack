// express micro-framework, para criar server, routes
const express = require('express')
// mongoose
const mongoose = require ('mongoose') 
const routes = require('./routes') // import

// Criando app
const app = express() 

// connect 
// user: omnistack
// password: vRiZAqVKmSv6qy6
mongoose.connect('mongodb+srv://omnistack:vRiZAqVKmSv6qy6@omnistack.p0kcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // configurações do mongo
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json()) // Utilizar formato Json
app.use(routes) // usar routes

// rodando server 
app.listen(3333, (req, res) => console.log('server running 🤖'));
