import {ADD_TO_MATCHES} from './action';

export const matches = (state = [], action) => {
    if (action.type === ADD_TO_MATCHES) {
        return [...state, ...action.payload]
    }
    return state;
};