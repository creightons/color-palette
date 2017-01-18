import React from 'react';

export default (props) => {
    let classes = ['color-panel'];
          
    if (props.selected) {
        classes.push('selected');
    }
          
    let styles = {
        backgroundColor: props.color,
    };

    function clickHandler() {
        props.setCurrentIndex(
            props.index
        );
    }

    return (
        <div
            className={classes.join(' ')}
            style={styles}
            onClick={clickHandler}
        >
            <div className='marker' />
        </div>
    );
};
