let app = require('./app'),
	mongoose = require('mongoose'),
	config = require('./config');
	
mongoose.connect(config.DB_URL);

app.listen(config.PORT, () => {
	console.log(`Server is live on port ${config.PORT}...`);
});
