import SavedScreen from '../components/saved-screen';
import { connect } from 'react-redux';
import { loadPalettePage } from '../actions';

const mapStateToProps = (state) => {
	return {
		palettes: state.savedPalettes.palettes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadPalettePage: () => dispatch( loadPalettePage() ),
	};
};

let SavedScreenContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SavedScreen);

export default SavedScreenContainer;