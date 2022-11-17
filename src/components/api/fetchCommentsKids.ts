import axios from 'axios';
import IComment from '../../types/IComment';

export default async function fetchComments(kids: number[]) {
  const comments: IComment[] = await Promise.all(
    kids.map(async (id) => {
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return response.data;
    }),
  );
  comments.sort((a: IComment, b: IComment) => b.time - a.time);
  console.log(comments);
  return comments;
}
