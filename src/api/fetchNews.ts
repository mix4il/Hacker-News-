import axios from 'axios';
import INews from '../types/INews';

export async function fetchNewsItem(id: string) {
  const response = await axios.get<INews>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  console.log(response.data);
  return response.data;
}
