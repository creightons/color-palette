let initialPaletteState = {
  colors: ['#345fe1'],
  currentIndex: 0,
  activeColor: '#345fe1'
};

let mainPalette = (state = initialPaletteState, action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            return Object.assign({}, state, {
                colors: [ ...state.colors, action.color ]
            });

        case 'ADD_RANDOM_COLOR':
            return Object.assign({}, state, {
                colors: [ ...state.colors, action.color ],
                activeColor: action.color,
            });

        case 'REMOVE_COLOR':
            // Clone the current array so we don't affect the previous state
            let shortenedColorArray = Object.assign([], state.colors);

            // Remove the element at the end of the array
            shortenedColorArray.splice( state.currentIndex, 1);

            return Object.assign({}, state, {
                colors: shortenedColorArray,
            });

        case 'SET_CURRENT_INDEX':
            return Object.assign({}, state, {
                currentIndex: action.index,
            });
        

        case 'UPDATE_ACTIVE_COLOR':
            return Object.assign({}, state, {
                activeColor: action.color,
            });

        default:
            return state;
    }
};

export default mainPalette;
