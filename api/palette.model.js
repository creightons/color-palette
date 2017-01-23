let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let paletteSchema = new Schema({
	title: { type: String, unique: true },
	colors: { type: [String], default: [] },
});

module.exports = mongoose.model('Palette', paletteSchema);