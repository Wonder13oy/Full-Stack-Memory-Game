const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	config = require('./config/database');

//CONNECT TO DATABASE
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});
mongoose.connection.on('error', error => {
	console.log('Database error ' + error);
});

const app = express();

const leaderboard = require('./routes/leaderboard');

const port = 3000;

//MIDDLWARE
app.use(cors());
app.use(bodyParser.json());

//STATIC FILE
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/leaderboard', leaderboard);
app.get('/', (req, res) => {
	res.send('Invalid endpoint');
});

//STARTING SERVER
app.listen(port, () => {
	console.log('Server Running...');
});
