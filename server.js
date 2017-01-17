let express = require('express'),
	config = require('./config');
	
let app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

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

app.listen(config.PORT, () => {
	console.log(`Server is live on port ${config.PORT}...`);
});