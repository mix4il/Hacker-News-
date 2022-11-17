import React from 'react';
import ButtonReloadComments from '../components/ButtonReloadComments';
import Header from '../components/Header/Header';
import { useParams } from 'react-router-dom';
import NewsInfo from '../components/NewsInfo/NewsInfo';
import { CommentList } from '../components/CommentList/CommentList';
import BackButton from '../components/BackButton/BackButton';

type QuizParams = {
  id: string;
};

const NewsPage = () => {
  const { id } = useParams<QuizParams>();

  return (
    <div>
      <Header>
        <BackButton />
        <ButtonReloadComments />
      </Header>
      <main>
        <div className="main__container">
          <NewsInfo id={id} />
          <CommentList idParent={id} />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
