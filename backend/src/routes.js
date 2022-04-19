const express = require('express');
// routes
const routes = express.Router();
const SessionController = require ('./controllers/SessionController')

routes.get('/users', (req, res) => {
    // req.query = Acessa query params (para filtro)
    return res.json({ idade : req.query.idade })
})

routes.put('/users/:id', (req, res) => {
    // req.params = Acessar route params (para put, patch or delete)
    return res.json({ id: req.params.id })
})

routes.post('/sessions', SessionController.store);


module.exports = routes