import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import Copyright from '../copyright/copyright';

const Error = () => {
  return (
    <div className="user-page">
      <div className="sign-in user-page__content">
        <h1>404 Not Found</h1>
        <Link to="/">Ссылка на главную</Link>
      </div>
      <footer className="page-footer">
        <Logo className="logo__link--light">
          <Copyright />
        </Logo>
      </footer>
    </div>
  );
};

export default Error;
