import React from 'react';
import SidebarContainer from '../containers/sidebar-container';
import MainPaletteContainer from '../containers/main-palette-container';
import SavedScreenContainer from '../containers/saved-screen-container';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	};

	componentWillMount() {
		this.props.fetchSavedPalettes();
	}
	
	render() {
		let content;
		
		switch(this.props.activePage) {
			case 'PALETTE_PAGE':
				content = (
					<div>
						<MainPaletteContainer />
						<SidebarContainer />
					</div>
				);

				break;
				
			case 'SAVED_PAGE':
				content = <SavedScreenContainer />;
				break;
		}

		return (
			<div>{content}</div>
		);
	}
};
