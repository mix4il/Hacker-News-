import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchNews } from '../../store/ActionCreator/newsAction';
import NewsItem from '../NewsItem';
import Preloader from '../Preloader';

const NewsList: React.FC = () => {
  const { news, loading } = useTypedSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
    const refreshNews = setInterval(() => {
      dispatch(fetchNews());
    }, 60000);
    return () => clearInterval(refreshNews);
  }, []);


  return (
    <>
      {loading ? (
        <div className="center"><Preloader width={200} border={10} /></div>
      ) : (
        news.map((item, index) => {
          return <NewsItem key={item.id} {...item} listId={index}/>;
        })
      )}
    </>
  );
};

export default NewsList;
