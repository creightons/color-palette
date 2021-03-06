import React from 'react';
import ColorPicker from './color-picker';
import TitleBox from './title-box';
import Header from './header';
import SavedScreen from './saved-screen';

export default (props) => {
	let body;
	
	if (props.activePage === 'PALETTE_PAGE') {
		body = (
			<div className='sidebar-menu'>
				<TitleBox 
					activeTitle={props.activeTitle}
					updateTitle={props.updateTitle}
				/>
				
				<div className='controls'>
					<div
						className='button'
						onClick={props.addRandomColor}
					>
						Add Color
					</div>
					<div
						className='button'
						onClick={props.removeColor}
					>
						Remove Color
					</div>
				</div>
				
				<div id='color-picker'>
					<ColorPicker
						activeColor={props.activeColor}
						updateActiveColor={props.updateActiveColor}
					/>
				</div>
			</div>
		);
	}
	else {
		body = (
			<SavedScreen
				fetchSavedPalettes={props.fetchSavedPalettes}
				palettes={props.palettes}
				loading={props.loading}
				loadSavedPalette={props.loadSavedPalette}
				deletePalette={props.deletePalette}
			/>
		);
	}
	
	let classes = [];
	
	if (props.activePage === 'SAVED_PAGE') {
		classes.push('expand')
	}
	
	let loadingScreen;
	if (props.loading) {
		loadingScreen = (
			<div className='loading-overlay'>
				<div className='spinner' />
			</div>
		);
	};
	
	return (
		<aside id='sidebar' className={classes.join(' ')} >
			{loadingScreen}
			<Header
				activeId={props.activeId}
				updatePalette={props.updatePalette}
				saveNewPalette={props.saveNewPalette}
				newPalette={props.newPalette}
				activePage={props.activePage}
				loadPalettePage={props.loadPalettePage}
				loadSavedPage={props.loadSavedPage}
			/>
			{body}
		</aside>
	);
};
