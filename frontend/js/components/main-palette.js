import React from 'react';
import Panel from './panel';

const MainPalette = (props) => {
  return (
    <div id='palette-container'>
      <div id='palette'>
        {props.colors.map((color, index) => {
          return <Panel
						key={index}
            color={color}
            selected={index === props.currentIndex}
          />;
        })}
      </div>
    </div>
  );
};

export default MainPalette