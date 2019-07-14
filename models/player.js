const mongoose = require('mongoose');
const config = require('../config/database');

//PLAYER SCHEMA
const PlayerSchema = mongoose.Schema({
	name: String,
	time: String,
	turns: Number,
});

module.exports = mongoose.model('Player', PlayerSchema);
