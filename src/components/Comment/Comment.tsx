import React, { useState } from 'react';
import IComment from '../../types/IComment';
import dateFormatter from '../../utils/dateFormatter';
import fetchCommentsKids from '../../api/fetchCommentsKids';

import style from './Comment.module.scss';

interface CommentProps {
  by: string;
  id: number;
  kids: number[];
  text: string;
  time: number;
}

const Comment: React.FC<CommentProps> = ({ by, id, kids, text, time }) => {
  const [isShowAnswers, setIsShowAnswers] = useState<boolean>(false);
  const [answers, setAnswers] = useState<IComment[]>([]);

  async function showAnswers() {
    if (!isShowAnswers) {
      const data = await fetchCommentsKids(kids);
      setAnswers(data);
    }
    setIsShowAnswers(!isShowAnswers);
  }

  return (
    <div className={style.comment}>
      <div>
        <p className={style.comment__title}>
          By {by} | {dateFormatter(time)}
        </p>
        <hr />
        <div className={style.comment__html} dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
      {kids?.length ? (
        <div onClick={() => showAnswers()} className={style.comment__show}>
          {isShowAnswers ? 'hide answers' : `show ${kids.length} answers`}
        </div>
      ) : null}
      {isShowAnswers
        ? answers.map((answer) => (
          <div className={style.comment__padding}>
            <Comment key={answer.id} {...answer} />
          </div>
        ))
        : ''}
    </div>
  );
};

export default Comment;
