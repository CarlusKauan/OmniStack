const express = require('express');
const multer = require('multer'); // multer, upload
const uploadConfig = require('./config/upload');

const BookingController = require('./controllers/BookingController');
const DashboadController = require('./controllers/DashboadController');
const SessionController = require ('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboadController.show);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes