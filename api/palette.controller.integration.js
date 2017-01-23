let app = require('../app'),
	request = require('supertest'),
	assert = require('chai').assert,
	mongoose = require('mongoose'),
	Palette = require('./palette.model'),
	config = require('../config');

mongoose.connect(config.TEST_DB_URL);

// Create some palettes and return a promise containing
// the new palette items
function setupPalettes() {
	let palettes = [
		Palette({
			title: 'Test Palette 1',
			colors: ['color 1', 'color 2']
		}),
		Palette({
			title: 'Test Palette 2',
			colors: ['color 3', 'color 4']
		}),
		Palette({
			title: 'Test Palette 3',
			colors: ['color 5', 'color 6', 'color 7']
		}),
	];

	let promises = [];

	palettes.forEach(palette => {
		promises.push(
			palette.saveAsync()
		);
	});

	return Promise.all(promises).then(() => {
		return palettes;
	});
}

// Overwrite the default error handler so it
// doesn't log a huge amount of text.
app.use(function(err, req, res, next) {
	res.status(500).end();
});

describe('Test palette routes', function() {

	// Clear the database of Palette data before and after each test
	beforeEach(function(done) {
		Palette.removeAsync().then(() => done());
	});

	afterEach(function(done) {
		Palette.removeAsync().then(() => done());
	});

	it('should get all palette data when requesting the index', function(done) {
		let url = '/api/palette';
		setupPalettes().then(() => {
			request(app)
				.get(url)
				.expect(200)
				.expect(function(res) {
					let palettes = res.body;
					assert.strictEqual(palettes.length, 3);
				})
				.end(done);
		});
	});

	it('should create a new palette and return its ID', function(done) {
		let url = '/api/palette',
			title = 'A Test Palette',
			colors = [ 'color1', 'color2' ];

		request(app)
			.post(url)
			.send({ title, colors })
			.expect(200)
			.expect(res => {
				assert.strictEqual(typeof res.body.id, 'string');
			})
			.expect(res => {
				let id = res.body.id;
				Palette.findOneAsync({ _id: id }).then(palette => {
					assert.strictEqual(palette.title, title);
					assert.strictEqual(palette.colors[0], colors[0]);
					assert.strictEqual(palette.colors[1], colors[1]);
				});
			})
			.end(done);
	});

	it('should update an existing palette without error', function(done) {
		setupPalettes().then(palettes => {
			let testPalette = palettes[0],
				id = testPalette._id,
				url = '/api/palette/' + id,
				title = 'My test palette',
				colors = ['the color'];

			request(app)
				.put(url)
				.send({ title, colors })
				.expect(200)
				.expect(res => {
					Palette.findByIdAsync(id).then(palette => {
						assert.strictEqual(palette.title, title);
						assert.strictEqual(palette.colors[0], colors[0]);
					});
				})
				.end(done);
		});
	});

	it('should error when updating a non-existent palette', function(done) {
		let url = '/api/palette/does-not-exist';

		request(app)
			.put(url)
			.expect(500)
			.end(done);
	});

	it('should delete a palette succesfully', function(done) {
		setupPalettes().then(palettes => {
			let testPalette = palettes[0],
				id = testPalette._id,
				url = '/api/palette/' + id;

			request(app)
				.delete(url)
				.expect(200)
				.expect(res => {
					Palette.findByIdAsync(id).then(palette => {
						assert.strictEqual(palette, null);
					});
				})
				.end(done);
		});
	});
});