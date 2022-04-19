// mongoose
const mongoose = require('mongoose') 

// Esquema do nosso mongoose
const UserSchema = new mongoose.Schema({
    // propriedades
    email: String
})

module.exports = mongoose.model('User', UserSchema)