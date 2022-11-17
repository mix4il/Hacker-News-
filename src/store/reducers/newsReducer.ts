import { UserAction } from '../../types/news'
import { NewsState } from '../../types/news'
import { NewsActionTypes } from '../../types/news'


const initialState: NewsState = {
    news: [],
    loading: true,
    error: null
}

export const newsReducer = (state = initialState, action: UserAction): NewsState => {
    switch (action.type){
        case NewsActionTypes.FETCH_NEWS: {
            return {loading: true, error: null, news: []}
        }
        case NewsActionTypes.FETCH_NEWS_SUCCESS: {
            return {loading: false, error: null, news: action.payload}
        }
        case NewsActionTypes.FETCH_NEWS_ERROR: {
            return {loading: false, error: action.payload, news: []}
        }
        default:
            return state
    }
}