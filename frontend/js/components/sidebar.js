import React from 'react';
import ColorPicker from './color-picker';

export default (props) => {
  return (
    <aside id='sidebar'>
      <input id='title' />
      <div id='add' className='button' onClick={props.addColor}>Add Color</div>
      <div id='remove' className='button'>Remove Color</div>
	  <ColorPicker />
    </aside>
  )
};
