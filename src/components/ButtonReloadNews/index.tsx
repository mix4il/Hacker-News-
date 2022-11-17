import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchNews } from '../../store/ActionCreator/newsAction';
import style from './ButtonReloadNews.module.scss';
import Preloader from '../Preloader';

const ButtonReloadNews = () => {
  const loading = useTypedSelector((state) => state.news.loading);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchNews());
  }

  return (
    <>
      <button className={style.button} onClick={() => handleClick()}>{
        loading ? <div className={style.center}><Preloader width={35} border={5} /> </div>: 'refresh news'
      }</button>
    </>
  )
}


export default ButtonReloadNews;