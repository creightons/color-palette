import reducer from '../reducers/saved-palettes';
import { assert } from 'chai';

describe('Saved Palettes Reducer', function() {
	it('should return the initial state', function() {
		let state = reducer(undefined, { type: '' });

		assert.deepEqual(state, {
			palettes: [],
			isFetching: false,
			error: false,
		});
	});
	
	it('should store data when a palette is saved', function() {
		let newPalette = {
				_id: '123',
				title: 'test',
				colors: [ 'color1', 'color2' ],
			},
			newState = reducer(undefined, {
				type: 'CREATE_SUCCESS',
				newPalette,
			});
			
		assert.deepEqual(newState.palettes[0], newPalette);
	});
});