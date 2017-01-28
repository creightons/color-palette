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
	
	return (
		<header>
			<div id='logo'>Color Palette</div>
			<ul id='options'>
				<li onClick={props.newPalette} >New</li>
				<li onClick={saveHandler} >Save</li>
				<li onClick={props.loadSavedPage} >Palettes</li>
			</ul>
		</header>
	);
};
