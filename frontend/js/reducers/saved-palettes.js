let initialState = {
	palettes: [],
	loading: false,
	error: false,
};

let changedPalettes,
	changedPalette,
	index;

let savedPalettes = (state = initialState, action) => {
	switch(action.type) {
		
		case 'CREATE':
		case 'UPDATE':
		case 'FETCH':
		case 'DESTROY':
			return Object.assign({}, state, {
				loading: true,
				error: false,
			});

		case 'FETCH_SUCCESS':
			return Object.assign({}, state, {
				palettes: action.palettes,
				loading: false,
				error: false,
			});
			
		case 'CREATE_SUCCESS':
			return Object.assign({}, state, {
				palettes: [
					...state.palettes,
					action.newPalette,
				],
				loading: false,
				error: false,
			});
			
		case 'UPDATE_SUCCESS':
			changedPalettes = [...state.palettes];
			
			index = changedPalettes.findIndex(
				palette => palette.id === action.palette.id
			);
			
			// Clone the changed palette so that there is a new
			// copy without a reference elsewhere in the code
			changedPalette = JSON.parse(
				JSON.stringify(
					action.palette
				)
			);
			
			changedPalettes.splice(index, 1, changedPalette);
			
			return Object.assign({}, state, {
				palettes: changedPalettes,
				loading: false,
				error: false,
			});
		
		case 'DESTROY_SUCCESS':
			changedPalettes = [...state.palettes];

			index = changedPalettes.findIndex(
				palette => palette.id === action.id
			);

			changedPalettes.splice(index, 1);

			return Object.assign({}, state, {
				palettes: changedPalettes,
				loading: false,
				error: false,
			});
		
		case 'CREATE_FAILURE':
		case 'UPDATE_FAILURE':
		case 'FETCH_FAILURE':
		case 'DESTROY_FAILURE':
			return Object.assign({}, state, {
				loading: false,
				error: true,
			});
		
		default:
			return state;
			
	}
};

export default savedPalettes;