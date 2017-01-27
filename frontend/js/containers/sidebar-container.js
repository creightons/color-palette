import { connect } from 'react-redux';
import {
    addRandomColor,
    removeColor,
    updateActiveColor,
    updateTitle,
	createNewPalette,
	updateCurrentPalette,
} from '../actions';
import Sidebar from '../components/sidebar';

const mapStateToProps = (state) => {
    return {
        activeColor: state.mainPalette.activeColor,
		activeTitle: state.mainPalette.activeTitle,
		activeId: state.mainPalette.activeId,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRandomColor: (color) => { dispatch( addRandomColor() ); },
        removeColor: () => { dispatch( removeColor() ); },
        updateActiveColor: (color) => {
            dispatch( updateActiveColor(color) );
        },
		updateTitle: (title) => { dispatch(updateTitle(title)); },
		updatePalette: () => { dispatch( updateCurrentPalette() ); },
		createPalette: () => { dispatch( createNewPalette() ); },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
