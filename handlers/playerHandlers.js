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

	this.getTimeLeaderboard = async (req, res) => {
		try {
			const stats = await Player.find()
				.sort({ time: 1 })
				.limit(10);
			console.log('get Leaderboard');
			res.json(stats);
		} catch (error) {
			res.json({ success: false, msg: 'Empty Leaderboard' });
		}
	};

	this.getTurnsLeaderboard = async (req, res) => {
		try {
			const stats = await Player.find().sort({ turns: -1 });
			res.json(stats);
		} catch (error) {
			res.json({ success: false, msg: 'Empty Leaderboard' });
		}
	};
}

module.exports = handler;
