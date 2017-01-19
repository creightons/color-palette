import { getRandomColor } from '../utils';

let initialColor = getRandomColor();

let initialPaletteState = {
  colors: [initialColor],
  currentIndex: 0,
  activeColor: initialColor,
};

let newIndex;

let mainPalette = (state = initialPaletteState, action) => {
    switch (action.type) {
        case 'ADD_COLOR':

	    newIndex = state.colors.length === 0 ? 0 : state.currentIndex;

	    return Object.assign({}, state, {
                colors: [ ...state.colors, action.color ],
		currentIndex: newIndex,
            });

        case 'ADD_RANDOM_COLOR':

	    newIndex = state.colors.length === 0 ? 0 : state.currentIndex;

            return Object.assign({}, state, {
                colors: [ ...state.colors, action.color ],
                activeColor: action.color,
		currentIndex: newIndex,
            });

        case 'REMOVE_COLOR':
            // Clone the current array so we don't affect the previous state
            let shortenedColorArray = Object.assign([], state.colors);

            // Remove the element at the end of the array
            shortenedColorArray.splice( state.currentIndex, 1);

	    newIndex = state.currentIndex >= shortenedColorArray.length
		? shortenedColorArray.length - 1
		: state.currentIndex;

            return Object.assign({}, state, {
                colors: shortenedColorArray,
		currentIndex: newIndex,
            });

        case 'SET_CURRENT_INDEX':
            return Object.assign({}, state, {
                currentIndex: action.index,
            });
        

        case 'UPDATE_ACTIVE_COLOR':
            return Object.assign({}, state, {
                activeColor: action.color,
            });

	case 'UPDATE_COLOR_FOR_ACTIVE_INDEX':
	    let newColorArray = [...state.colors];

	    newColorArray[state.currentIndex] = state.activeColor;

            return Object.assign({}, state, {
                colors: newColorArray,
            });

        default:
            return state;
    }
};

export default mainPalette;
