import React from 'react';
import ColorPicker from './color-picker';

export default (props) => {
  return (
    <aside id='sidebar'>
      <input id='title' />
      <ColorPicker />
      <div id='add' className='button'>Add Color</div>
      <div id='remove' className='button'>Remove Color</div>
    </aside>
  )
};
