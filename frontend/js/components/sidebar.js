import React from 'react';
import ColorPicker from './color-picker';
import TitleBox from './title-box';
import Header from './header';

export default (props) => {
    const handleAdd = () => {
        props.addColor(
            props.activeColor
        );
    };

    const handleRemove = () => {
        props.removeColor();
    };

    const handleAddRandom = () => {
        props.addRandomColor();
    };
    
    return (
        <aside id='sidebar'>
                <Header
					activeId={props.activeId}
					updatePalette={props.updatePalette}
					createPalette={props.createPalette}
				/>
                <div className='sidebar-menu'>
                        <TitleBox 
				activeTitle={props.activeTitle}
				updateTitle={props.updateTitle}
			/>
			<div className='controls'>
				<div
				    className='button'
				    onClick={handleAddRandom}
				>
				    Add Color
				</div>
				<div
				    className='button'
				    onClick={handleRemove}
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
        </aside>
    );
};
