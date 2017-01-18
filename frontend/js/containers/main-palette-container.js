
import MainPalette from '../components/main-palette';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		colors: state.mainPalette.colors,
		currentIndex: state.mainPalette.currentIndex,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
}
let MainPaletteContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPalette);

export default MainPaletteContainer;
