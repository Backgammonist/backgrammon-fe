import { combineReducers, createStore } from 'redux';
import { matches } from '../feature/new/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initializeStore = () => createStore(
    combineReducers({
        matches,
    }),
    composeWithDevTools()
);
