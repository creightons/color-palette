import { combineReducers } from 'redux';
import mainPalette from './main-palette';
import savedPalettes from './saved-palettes';
import pageNav from './page-nav';

let reducer = combineReducers({
	mainPalette,
	savedPalettes,
	pageNav,
});

export default reducer;