import React from 'react';
import CardSmall from '../card-small/card-small';
import Logo from '../logo/logo';
import UserLogo from '../user-logo/user-logo';
import Copyright from '../copyright/copyright';
import PropTypes from 'prop-types';

const MyList = (props) => {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo>
          <h1 className="page-title user-page__title">My list</h1>
          <UserLogo />
        </Logo>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {films.map((film, i) => (
            <CardSmall film={film} key={i} />
          ))}
        </div>
      </section>
      <footer className="page-footer">
        <Logo className="logo__link--light">
          <Copyright />
        </Logo>
      </footer>
    </div>
  );
};

const {number, string, arrayOf, shape, bool} = PropTypes;

MyList.propTypes = {
  films: arrayOf(
      shape({
        id: number.isRequired,
        name: string.isRequired,
        posterImage: string.isRequired,
        previewImage: string.isRequired,
        backgroundImage: string.isRequired,
        backgroundColor: string.isRequired,
        videoLink: string.isRequired,
        previewVideoLink: string.isRequired,
        description: string.isRequired,
        rating: number.isRequired,
        scoresCount: number.isRequired,
        director: string.isRequired,
        starring: arrayOf(string.isRequired),
        runTime: number.isRequired,
        genre: string.isRequired,
        released: number.isRequired,
        isFavorite: bool.isRequired,
      })
  ),
};

export default MyList;
