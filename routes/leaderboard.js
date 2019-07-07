const express = require('express'),
	router = express.Router(),
	Player = require('../models/player'),
	handler = require('../handlers/playerHandlers');

const player = new handler();

//TIME LEADERBOARD
router.get('/time', (req, res, next) => {
	res.send('Times Leaderboard');
});

//CLICKS LEADERBOARD
router.get('/turns', (req, res, next) => {
	res.send('Clicks Leaderboard');
});

//ADD PLAYER STATS
router.post('/update_score', (req, res, next) => {
	player.addNewPlayer(req, res);
});

module.exports = router;
