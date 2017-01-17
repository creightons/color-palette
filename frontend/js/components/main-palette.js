import React from 'react';
import Panel from './panel';

export default (props) => {
  return (
    <div id='palette-container'>
      <div id='palette'>
        {props.colors.map((color, index) => {
          return <Panel
            color={color}
            selected={index === props.currentIndex}
          />;
        })}
      </div>
    </div>
  );
};
