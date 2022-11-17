import IComment from './IComment'

export interface CommentsState{
    descendants: number | null,
    comments: IComment[],
    loading: boolean,
    error: string | null
}

export enum CommentActionTypes {
    FETCH_COMMENTS = 'FETCH_NEWS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_NEWS_ERROR',
}

export interface FetchCommentsAction{
    type: CommentActionTypes.FETCH_COMMENTS
}

export interface FetchCommentsSuccesAction{
    type: CommentActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: {
        descendants: number,
        comments: IComment[],
    }
}

export interface FetchCommentsErrorAction{
    type: CommentActionTypes.FETCH_COMMENTS_ERROR,
    payload: string
}



export type CommentAction = FetchCommentsAction | FetchCommentsSuccesAction | FetchCommentsErrorAction

