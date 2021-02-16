import React from 'react';
import CardSmall from '../card-small/card-small';
import PropTypes from 'prop-types';
import Header from '../header/header';
import UserLogo from '../user-logo/user-logo';

const MyList = (props) => {
  const films = [...props.films];
  films.shift();
  films.length = 7;

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
        <UserLogo />
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {films.map((film, id) => (
            <CardSmall film={film} key={id} />
          ))}
        </div>
      </section>
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

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
  ),
};

export default MyList;
