function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export function addColor() {
    return {
        type: 'ADD_COLOR',
        color: getRandomColor(),
    }
};

export function removeColor() {
    return {
        type: 'REMOVE_COLOR',
    };
};

export function setCurrentIndex(index) {
    return  {
        type: 'SET_CURRENT_INDEX',
        index,
    };
};
