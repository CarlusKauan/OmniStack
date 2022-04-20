// mongoose
const mongoose = require('mongoose') 

// Esquema do nosso mongoose
const SpotSchema = new mongoose.Schema({
    // propriedades
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Spot', SpotSchema)