import INews from './INews'

export interface NewsState{
    news: INews[],
    loading: boolean,
    error: null | string
}

export enum NewsActionTypes {
    FETCH_NEWS = 'FETCH_NEWS',
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
}

export interface FetchNewsAction{
    type: NewsActionTypes.FETCH_NEWS
}

export interface FetchNewsSuccesAction{
    type: NewsActionTypes.FETCH_NEWS_SUCCESS,
    payload: INews[]
}

export interface FetchNewsErrorAction{
    type: NewsActionTypes.FETCH_NEWS_ERROR,
    payload: string
}

export type UserAction = FetchNewsAction | FetchNewsSuccesAction | FetchNewsErrorAction

