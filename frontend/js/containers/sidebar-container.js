import { connect } from 'react-redux';
import { addColor } from '../actions';
import Sidebar from '../components/sidebar';

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addColor: () => { dispatch( addColor() ); },
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);