const mongoose = require('mongoose');

const geolocation = new mongoose.Schema({
    cood: [[Number]],
    distance: Number
});

module.exports = Geolocation = mongoose.model('geolocation', geolocation);