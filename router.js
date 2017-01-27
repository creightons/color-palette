let express = require('express'),
	bodyParser = require('body-parser'),
	jsonParser = bodyParser.json();

module.exports = function(app) {
	app.use('/public', express.static(
		__dirname + '/public'
	));

	app.use((req, res, next) => {
		let fullUrl = req.method + ' ' + req.protocol + '://' + req.get('host') + req.originalUrl;
		console.log(fullUrl);
		next();
	});

	app.get('/', (req, res) => {
		res.status(200).render('index');
	});

	app.use(jsonParser);
	
	app.use('/api/palette', require('./api/palette.routes'));
};