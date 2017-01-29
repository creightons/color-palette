import { connect } from 'react-redux';
import {
    addRandomColor,
    removeColor,
    updateActiveColor,
    updateTitle,
	saveNewPalette,
	updateCurrentPalette,
	newPalette,
	loadSavedPage,
	loadPalettePage,
	fetchSavedPalettes,
	loadSavedPalette,
} from '../actions';
import Sidebar from '../components/sidebar';

const mapStateToProps = (state) => {
    return {
        activeColor: state.mainPalette.activeColor,
		activeTitle: state.mainPalette.activeTitle,
		activeId: state.mainPalette.activeId,
		activePage: state.pageNav.activePage,
		palettes: state.savedPalettes.palettes,
		loading: state.savedPalettes.loading,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		fetchSavedPalettes: () => { dispatch( fetchSavedPalettes() ); },
        addRandomColor: (color) => { dispatch( addRandomColor() ); },
        removeColor: () => { dispatch( removeColor() ); },
        updateActiveColor: (color) => {
            dispatch( updateActiveColor(color) );
        },
		updateTitle: (title) => { dispatch(updateTitle(title)); },
		updatePalette: () => { dispatch( updateCurrentPalette() ); },
		saveNewPalette: () => { dispatch( saveNewPalette() ); },
		newPalette: () => { dispatch( newPalette() ); },
		loadSavedPage: () => { dispatch( loadSavedPage() ); },
		loadPalettePage: () => { dispatch( loadPalettePage() ); },
		loadSavedPalette: (palette) => { dispatch( loadSavedPalette(palette) ); },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
