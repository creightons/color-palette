import { connect } from 'react-redux';
import {
    addRandomColor,
    removeColor,
    updateActiveColor,
    updateTitle,
} from '../actions';
import Sidebar from '../components/sidebar';

const mapStateToProps = (state) => {
    return {
        activeColor: state.mainPalette.activeColor,
	activeTitle: state.mainPalette.activeTitle,
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
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
