import { CommentActionTypes } from '../../types/comments'
import { CommentAction } from '../../types/comments';
import IComment from '../../types/IComment'
import { Dispatch } from 'redux';

import axios from 'axios';


export const fetchComments = (idParent: string) => {
    return async (dispatch: Dispatch<CommentAction>) => {
      try{
        dispatch({ type: CommentActionTypes.FETCH_COMMENTS});
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${idParent}.json`);
        const {descendants, kids} = response.data;
        const comments = await Promise.all(kids.map(async (item: number )=> {
          const responseComment = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
          return responseComment.data;
        }));
        comments.sort((a: IComment, b:IComment) => b.time - a.time)
        dispatch({type: CommentActionTypes.FETCH_COMMENTS_SUCCESS, payload: {descendants, comments}})
      }catch(err){
        dispatch({
          type: CommentActionTypes.FETCH_COMMENTS_ERROR,
          payload: 'Ошибка при загрузке комментариев...',
        });
      }
    }
}