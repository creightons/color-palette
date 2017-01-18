function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export function addColor(color) {
    return {
        type: 'ADD_COLOR',
        color,
    }
};

export function addRandomColor() {
    return {
        type: 'ADD_RANDOM_COLOR',
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

export function updateActiveColor(color) {
    return {
        type: 'UPDATE_ACTIVE_COLOR',
        color,
    };
};
