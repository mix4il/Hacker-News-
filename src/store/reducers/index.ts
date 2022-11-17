import { combineReducers } from 'redux';
import { commentsReducer } from './commentReducer';
import { newsReducer } from './newsReducer';

export const rootReducers = combineReducers({
    news: newsReducer,
    comment: commentsReducer
});

export type RootState = ReturnType<typeof rootReducers> 
