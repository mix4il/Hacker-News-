import { NewsActionTypes } from '../../types/news';
import { UserAction } from '../../types/news';
import { Dispatch } from 'redux';
import axios from 'axios';
import INews from '../../types/INews';

export const fetchNews = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const response = await axios.get(
        'https://hacker-news.firebaseio.com/v0/newstories.json',
      );
      const newsIds = response.data;
      const news100Ids = newsIds.slice(0, 100);
      console.log(news100Ids);
      const news100: INews[] =await Promise.all(news100Ids.map(async (id: string) => {
        const responseNews = await axios.get<INews>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return responseNews.data;
      }));
      console.log(news100);
      dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: news100 });
    } catch (err) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: 'Ошибка при загрузке новостей...',
      });
    }
  };
};
