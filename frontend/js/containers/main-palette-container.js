import MainPalette from '../components/main-palette';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return state.mainPalette;
}

function mapDispatchToProps(dispatch) {
	return {};
}

let MainPaletteContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPalette);

export default MainPaletteContainer;
