import App from '../components/app';
import { connect } from 'react-redux';
import { fetchSavedPalettes } from '../actions';

const mapStateToProps = (state) => {
	return {
		activePage: state.pageNav.activePage,
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