import { getRandomColor } from '../utils';

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

export function updateColor() {
    return {
        type: 'UPDATE_COLOR_FOR_ACTIVE_INDEX',
    };
};
