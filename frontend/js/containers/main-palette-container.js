import MainPalette from '../components/main-palette';
import { connect } from 'react-redux';
import { setCurrentIndex, fetchSavedPalettes  } from '../actions';

const mapStateToProps = (state) => {
	return {
		colors: state.mainPalette.colors,
		currentIndex: state.mainPalette.currentIndex,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
            setCurrentIndex: (index) => {
                dispatch( setCurrentIndex(index) );
            },
			fetchSavedPalettes: () => dispatch( fetchSavedPalettes() ),
        };
}
let MainPaletteContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPalette);

export default MainPaletteContainer;
