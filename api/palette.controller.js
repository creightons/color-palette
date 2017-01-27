let Palette = require('./palette.model');

/*
Rails convention for api endpoints

GET 	/api/palette 		-> index
POST 	/api/palette 		-> create
PUT		/api/palette/:id	-> update
DELETE	/api/palette/:id	-> destroy
*/

// GET
function index(req, res, next) {
	Palette.findAsync().then(palettes => {
		res.status(200).send(palettes);
	}).catch(err => next(err));
}

// POST
function create(req, res, next) {
 	let title = req.body.title,
		colors = req.body.colors;

	let newPalette = Palette({ title, colors });

	newPalette.saveAsync().then(() => {
		res.status(200).send({ id: newPalette._id });
	}).catch(err => next(err));
}

// PUT
function update(req, res, next) {
	let id = req.params.id,
		colors = req.body.colors,
		title = req.body.title;
	console.log('body = ', req.body);
	Palette.findByIdAsync(id).then(palette => {
		palette.title = title;
		palette.colors = colors;
		return palette.saveAsync();
	}).then(() => {
		res.status(200).end();
	}).catch(err => next(err));
}

// DELETE
function destroy(req, res, next) {
	let id = req.params.id;

	Palette.findByIdAndRemoveAsync(id).then(() => {
		res.status(200).end();
	}).catch(err => next(err));
}

module.exports = {
	index,
	create,
	update,
	destroy,
};