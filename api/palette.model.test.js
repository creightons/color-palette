let Palette = require('./palette.model'),
	assert = require('chai').assert;

describe('Test Palette model', function() {
	it('should be initialized with the passed in data', function() {
		let title = 'Test Palette',
			colors = ["color-1", "color-2", "color-3"],
			palette = Palette({ title, colors });

		assert.strictEqual(palette.title, title);
		assert.strictEqual(palette.colors[0], colors[0]);
		assert.strictEqual(palette.colors[1], colors[1]);
		assert.notEqual(palette._id, undefined);
		assert.notEqual(palette._id, null);
	});
});