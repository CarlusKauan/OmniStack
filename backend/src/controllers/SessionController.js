const User = require('../models/User')

// exportar métodos
module.exports = {
    // index, show, store, update, destroy

    // create
    async store (req, res){
        // req.body = corpo da requisição
        const { email } = req.body;
        // create email
        const user = await User.create({ email });
        
        // return user
        return res.json(user);
    }
};