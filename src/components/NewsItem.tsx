import React from 'react'
import { useHistory } from 'react-router-dom'
import dateFormatter from '../utils/dateFormatter'
import Preloader from './Preloader'


interface NewsProps {
  id: number,
  listId: number,
  by: string,
  score: number,
  time: number,
  title: string
}

const NewsItem: React.FC<NewsProps> = ({ id, title, by, score, time, listId }: NewsProps) => {
  const history = useHistory();
  return (
    <div className="news" onClick={() => history.push('/news/' + id)}>
      <div className="news__title">{listId+1}. {title}</div>
      <div className="news__info">
        <div className="">
          <div>Author: {by}</div>
          <div>Rating: {score}</div>
        </div>
        <div>{dateFormatter(time)}</div>
      </div>
    </div>
  )
}

export default NewsItem