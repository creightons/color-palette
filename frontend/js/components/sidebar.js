import React from 'react';
import ColorPicker from './color-picker';

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
    const handleUpdateColor = () => {
	props.updateColor();
    };

    return (
        <aside id='sidebar'>
        <input id='title' />
        <div
            className='button'
            onClick={handleAdd}
        >
            Add Color
        </div>
        <div
            className='button'
            onClick={handleAddRandom}
        >
            Add Random Color
        </div>
        <div
            className='button'
            onClick={handleRemove}
        >
            Remove Color
        </div>

	<div id='color-picker'>
		<ColorPicker
		    activeColor={props.activeColor}
		    updateActiveColor={props.updateActiveColor}
		/>
	</div>
	<div
		className='button'
		onClick={ handleUpdateColor }
	>
		Update Selected Color
	</div>

        </aside>
    );
};
