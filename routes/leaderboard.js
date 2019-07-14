const express = require('express'),
	router = express.Router(),
	Player = require('../models/player'),
	handler = require('../handlers/playerHandlers');

const player = new handler();

//TIME LEADERBOARD
router.get('/time', (req, res, next) => {
	player.getTimeLeaderboard(req, res);
});

//CLICKS LEADERBOARD
router.get('/turns', (req, res, next) => {
	player.getTurnsLeaderboard(req, res);
});

//ADD PLAYER STATS
router.post('/update_score', (req, res, next) => {
	player.addNewPlayer(req, res);
});

module.exports = router;
