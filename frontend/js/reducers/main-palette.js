let initialPaletteState = {
  colors: ['#fff'],
  currentIndex: 0,
};

let mainPalette = (state = initialPaletteState, action) => {
	switch (action.type) {
		case 'ADD_COLOR':
			let newState = Object.assign({}, state);
			newState.colors.push(action.color);
			return newState;
			
		default:
			return state;
	}
};

export default mainPalette;