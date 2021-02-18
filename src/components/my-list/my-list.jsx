import React from 'react';
import CardSmall from '../card-small/card-small';
import Header from '../header/header';
import UserLogo from '../user-logo/user-logo';
import propMyList from './prop-my-list';
import {Link} from 'react-router-dom';

const MyList = (props) => {

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
        <UserLogo />
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {props.films.map((film, id) => (
            <CardSmall film={film} key={id} />
          ))}
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = propMyList;

export default MyList;
