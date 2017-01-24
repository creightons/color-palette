let initialState = {
	palettes: [],
	isFetching: false,
	error: false,
};

let savedPalettes = (state = initialState, action) => {
	switch(action.type) {
		case 'CREATE_SUCCESS':
			return Object.assign({}, state, {
				palettes: [
					...state.palettes,
					action.newPalette,
				],
			});
		default:
			return state;
	}
};

export default savedPalettes;