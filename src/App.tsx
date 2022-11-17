import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Main from './pages/Main';
import NewsPage from './pages/NewsPage';

import './scss/app.scss';

function App() {
  return (
    <>
      <Route path={'/'} exact>
        <Redirect to="/main"/>
      </Route>
      <Route path={'/main'} exact>
        <Main />
      </Route>
      <Route path={'/news/:id'}>
        <NewsPage />
      </Route>
    </>
  );
}

export default App;
