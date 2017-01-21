import { getRandomColor } from '../utils';

export function addRandomColor() {
    return {
        type: 'ADD_RANDOM_COLOR',
        color: getRandomColor(),
    };
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


export function updateTitle(title) {
    return {
        type: 'UPDATE_ACTIVE_TITLE',
        title: title,
    };
};
