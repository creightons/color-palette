import React from 'react';

export default (props) => {
	const saveHandler = () => {
		if (props.activeId !== null) {
			props.updatePalette();
		}
		else {
			props.createPalette();
		}
	};
	
	return (
		<header>
			<div id='logo'>Color Palette</div>
			<ul id='options'>
				<li>New</li>
				<li onClick={saveHandler}>Save</li>
				<li>Palettes</li>
			</ul>
		</header>
	);
};
