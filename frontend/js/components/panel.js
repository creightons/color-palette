import React from 'react';

export default (props) => {
  let classes = ['color-panel'];
              
  if (props.selected) {
    classes.push('selected');
  }
              
  let styles = {
    backgroundColor: props.color,
  };
  
  
  return (
    <div className={classes.join(' ')} >
      <div className='marker' style={styles} />
    </div>
  );
};
