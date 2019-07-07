const express = require('express'),
	router = express.Router(),
	Player = require('../models/player');

function handler() {
	this.addNewPlayer = async (req, res) => {
		let newPlayer = new Player({
			name: req.body.name,
			time: req.body.time,
			turns: req.body.turns,
		});

		try {
			const savedPlayer = await newPlayer.save();
			res.json(savedPlayer);
		} catch (error) {
			res.json({ success: false, msg: 'Failed to register player' });
		}
	};
}

module.exports = handler;
