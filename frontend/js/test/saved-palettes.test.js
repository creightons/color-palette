import reducer from '../reducers/saved-palettes';
import { assert } from 'chai';

describe('Saved Palettes Reducer', function() {
	it('should return the initial state', function() {
		let state = reducer(undefined, { type: '' });

		assert.deepEqual(state, {
			palettes: [],
			loading: false,
			error: false,
		});
	});
	

	it('should commit the palettes to the store when they are fetched', function() {
		let palettes = [{
				_id: '123',
				title: 'test',
				colors: [ 'color1', 'color2' ],
			}],
			newState =  reducer(undefined, {
				type: 'FETCH_SUCCESS',
				palettes,
			});
			
		assert.deepEqual(newState.palettes, palettes);
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
	
	it('should update the appropriate data set when updating a particular palette', function() {
		let firstState = {
				palettes: [{
					id: 'test-id',
					colors: ['color-1'],
					title: 'test-title',
				}],
				loading: true,
				error: false,
			},
			updatedPalette = {
				id: 'test-id',
				colors: [ 'color-2', 'color-3' ],
				title: 'new-title',
			};
			
		let state = reducer(firstState, {
			type: 'UPDATE_SUCCESS',
			palette: updatedPalette,
		});

		assert.deepEqual([updatedPalette], state.palettes);
		assert.strictEqual(state.loading, false);
		assert.strictEqual(state.error, false);
	});
	
	it('should remove the deleted palette from the palette store on succesful delete', function() {
		let firstState = {
				palettes: [{
					id: 'test-id',
					colors: ['color-1'],
					title: 'test-title',
				}],
				loading: true,
				error: false,
			};
			
		let state = reducer(firstState, {
			type: 'DESTROY_SUCCESS',
			id: 'test-id',
		});

		assert.deepEqual(state.palettes, []);
		assert.strictEqual(state.loading, false);
		assert.strictEqual(state.error, false);
	});

	// Should set data when it is initially fetched
	// This also tests the cases for 'UPDATE_FAILURE', 'FETCH_FAILURE',
	// and 'DESTROY_FAILURE'
	it('should set error on a failed create', function() {
		let firstState = { palettes: [], loading: true, error: false },
			newState = reducer(firstState, { type: 'CREATE_FAILURE' });
		
			assert.strictEqual(newState.loading, false);
			assert.strictEqual(newState.error, true);
	});
	
	// This also tests the cases for 'UPDATE', 'FETCH', and 'DESTROY'
	it('should set loading parameter when initiating a CREATE', function() {
		let firstState = { palettes: [], loading: true, error: false},
			newState = reducer(firstState, { type: 'CREATE' });
		
		assert.strictEqual(newState.loading, true);
		assert.strictEqual(newState.error, false);
	});
});