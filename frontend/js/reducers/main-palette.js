import { getRandomColor } from '../utils';

let initialColor = getRandomColor();

let initialPaletteState = {
  activeId: null,
  colors: [initialColor],
  currentIndex: 0,
  activeColor: initialColor,
  activeTitle: '',
};

let newIndex;

const mainPalette = (state = initialPaletteState, action) => {
    switch (action.type) {

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
33
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
	    let newColorArray = [...state.colors];
	    newColorArray[state.currentIndex] = state.activeColor;

            return Object.assign({}, state, {
		colors: newColorArray,
                activeColor: action.color,
            });

		case 'UPDATE_ACTIVE_TITLE':
			return Object.assign({}, state, {
				activeTitle: action.title,
			});

		case 'CREATE_SUCCESS':
			return Object.assign({}, state, {
				activeId: action.newPalette.id,
			});
		
		case 'NEW_PALETTE':
			return Object.assign({}, state, {
				activeId: null,
				colors: [action.color],
				currentIndex: 0,
				activeTitle: '',
				activeColor: action.color,
			});
			
		case 'LOAD_SAVED_PALETTE':
			return Object.assign({}, state, {
				activeId: action.palette.id,
				colors: [...action.palette.colors],
				activeTitle: action.palette.title,
				currentIndex: 0,
				activeColor: action.palette.colors[0] || '#fff',
			});

		default:
			return state;
    }
};

export default mainPalette;
