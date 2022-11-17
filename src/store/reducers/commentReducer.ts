import { CommentAction } from '../../types/comments'
import { CommentsState } from '../../types/comments'
import { CommentActionTypes } from '../../types/comments'


const initialState: CommentsState = {
    descendants: 0,
    comments: [],
    loading: true, 
    error: null
}

export const commentsReducer = (state = initialState, action: CommentAction): CommentsState => {
    switch (action.type){
        case CommentActionTypes.FETCH_COMMENTS: {
            return {loading: true, error: null, descendants: 0, comments: []}
        }
        case CommentActionTypes.FETCH_COMMENTS_SUCCESS: {
            return {...state, loading: false, error: null, comments: action.payload.comments, descendants: action.payload.descendants}
        }
        case CommentActionTypes.FETCH_COMMENTS_ERROR: {
            return {loading: false, error: action.payload, descendants: 0, comments: []}
        }
        default:
            return state
    }
}