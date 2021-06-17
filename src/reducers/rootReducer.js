import { combineReducers } from 'redux';

import { alertReducer } from './alertReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    alert: alertReducer
});
