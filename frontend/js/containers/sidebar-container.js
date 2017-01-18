import { connect } from 'react-redux';
import {
    addColor,
    addRandomColor,
    removeColor,
    updateActiveColor,
} from '../actions';
import Sidebar from '../components/sidebar';

const mapStateToProps = (state) => {
    return {
        activeColor: state.mainPalette.activeColor,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addColor: (color) => { dispatch( addColor(color) ); },
        addRandomColor: (color) => { dispatch( addRandomColor() ); },
        removeColor: () => { dispatch( removeColor() ); },
        updateActiveColor: (color) => {
            dispatch( updateActiveColor(color) );
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
