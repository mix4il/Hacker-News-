import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchComments } from '../../store/ActionCreator/commentAction';
import Comment from '../Comment/Comment'
import Preloader from '../Preloader';

import style from './CommentList.module.scss'

interface CommentListProps {
  idParent: string;
}

export const CommentList: React.FC<CommentListProps> = ({ idParent }) => {
  const { comments, loading, descendants } = useTypedSelector((state) => state.comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(idParent));
  }, []);
  return (
    <div className={style.wrapper}>
      <h1 className={style.comments__title}>Comments: {descendants}</h1>
      {loading ? (
        <div className="center"><Preloader width={100} border={10} /></div>
      ) : (
        comments?.map((comment, index) => <Comment key={index} {...comment} />)
      )}
    </div>
  );
};
