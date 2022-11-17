import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Preloader from '../Preloader';
import { useParams } from 'react-router-dom';

import style from './ButtonReloadComments.module.scss';
import { fetchComments } from '../../store/ActionCreator/commentAction';

type QuizParams = {
  id: string;
};

const ButtonReloadComments = () => {
  const { id } = useParams<QuizParams>();
  const loading = useTypedSelector((state) => state.comment.loading);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchComments(id));
  };

  return (
    <>
      <button className={style.button} onClick={() => handleClick()}>
        {loading ? (
          <div className={style.center}>
            <Preloader width={35} border={5} />{' '}
          </div>
        ) : (
          'refresh comment'
        )}
      </button>
    </>
  );
};

export default ButtonReloadComments;
