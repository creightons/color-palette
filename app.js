let express = require('express'),
	Promise = require('bluebird'),
	mongoose = require('mongoose'),
	app = express();

Promise.promisifyAll(mongoose);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Apply routes to the app
require('./router')(app);

module.exports = app;