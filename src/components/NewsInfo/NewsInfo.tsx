import React, { useEffect, useState } from 'react';
import INews from '../../types/INews';
import dateFormatter from '../../utils/dateFormatter';
import { fetchNewsItem } from '../api/fetchNews';

import style from './NewsInfo.module.scss';

interface NewsInfoProps {
  id: string;
}

const NewsInfo: React.FC<NewsInfoProps> = ({ id }) => {
  const [news, setNews] = useState<INews | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetchNewsItem(id);
    setNews(data);
  }
  return (
    <div className={style.wrapper}>
      <h1 className={style.news__title}>{news?.title}</h1>
      <div className={style.news__center}>
        <a href={news?.url} className={style.news__link}>
          Open original story
        </a>
      </div>
      <hr />
      <p className={style.news__text}>
        Author: {news?.by} | rating: {news?.score} | {news?.time ? dateFormatter(news?.time) : ''}
      </p>
    </div>
  );
};

export default NewsInfo;
