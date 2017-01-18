let initialPaletteState = {
  colors: ['#fff'],
  currentIndex: 0,
};

let mainPalette = (state = initialPaletteState, action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            return Object.assign({}, state, {
                colors: [ ...state.colors, action.color ]
            });

        case 'REMOVE_COLOR':
            let shortenedColorArray = Object.assign([], state.colors);

            // Remove the element at the end of the array
            shortenedColorArray = shortenedColorArray.splice(
                0, shortenedColorArray.length - 1
            );

            return Object.assign({}, state, {
                colors: shortenedColorArray,
            });

        case 'SET_CURRENT_INDEX':
            return Object.assign({}, state, {
                currentIndex: action.index,
            });
        
        default:
            return state;
    }
};

export default mainPalette;
