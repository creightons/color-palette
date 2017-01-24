import { combineReducers } from 'redux';
import mainPalette from './main-palette';
import savedPalettes from './saved-palettes';

let reducer = combineReducers({
	mainPalette,
	savedPalettes,
});

export default reducer;