import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const Error = () => {
  return (
    <div className="user-page">
      <Header/>
      <div className="sign-in user-page__content">
        <h1>404 Not Found</h1>
        <Link to="/"><p>Ссылка на главную</p></Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
