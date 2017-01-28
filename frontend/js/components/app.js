import React from 'react';
import SidebarContainer from '../containers/sidebar-container';
import MainPaletteContainer from '../containers/main-palette-container';

const App = (props) => {
	return (
		<div>
			<MainPaletteContainer />
			<SidebarContainer />
		</div>
	);
};

export default App;