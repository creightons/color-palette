import React from 'react';

export default (props) => {
	const saveHandler = () => {
		if (props.activeId !== null) {
			props.updatePalette();
		}
		else {
			props.saveNewPalette();
		}
	};
	
	let options;
	if (props.activePage === 'PALETTE_PAGE') {
		options = (
			<ul id='options'>
				<li onClick={props.newPalette} >New</li>
				<li onClick={saveHandler} >Save</li>
				<li onClick={props.loadSavedPage} >Palettes</li>
			</ul>
		);
	}
	else {
		options = (
			<ul id='options'>
				<li onClick={props.loadPalettePage}>
					Back
				</li>
			</ul>
		);
	}
	
	return (
		<header>
			<div id='logo'>Color Palette</div>
			{options}
		</header>
	);
};
