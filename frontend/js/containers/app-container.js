import App from '../components/app';
import { connect } from 'react-redux';
import { fetchSavedPalettes } from '../actions';

const mapStateToProps = (state) => {
	return {
			palettes: state.savedPalettes.palettes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSavedPalettes: () => dispatch( fetchSavedPalettes() ),
	};
};


let AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;