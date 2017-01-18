import { connect } from 'react-redux';
import { addColor, removeColor } from '../actions';
import Sidebar from '../components/sidebar';

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addColor: () => { dispatch( addColor() ); },
		removeColor: () => { dispatch( removeColor() ); },
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);