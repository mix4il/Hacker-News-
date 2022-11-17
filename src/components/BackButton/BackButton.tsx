import React from 'react';
import { useHistory } from 'react-router-dom';

import style from './BackButton.module.scss';

const BackButton = () => {
  const history = useHistory();
  return (
    <button className={style.button} onClick={() => history.push('/')}>
      back to main
    </button>
  );
};

export default BackButton;
