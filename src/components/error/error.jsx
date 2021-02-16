import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';

const Error = () => {
  return (
    <div className="user-page">
      <Header className={``}/>
      <div className="sign-in user-page__content">
        <h1>404 Not Found</h1>
        <Link to="/"><p>Ссылка на главную</p></Link>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default Error;
