import React from 'react';
import CardSmall from '../card-small/card-small';
import CardBig from '../card-big.jsx/card-big';
import Genres from '../genres/genres';
import PropTypes from 'prop-types';

const Main = (props) => {
  const films = [...props.films];
  films.shift();

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          </div>
        </header>
        <div className="movie-card__wrap">
          <CardBig film={props.films[0]} />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {props.genres.map((genre) => (
              <Genres genre={genre} key={genre} />
            ))}
          </ul>
          <div className="catalog__movies-list">
            {films.map((el, i) => (
              <CardSmall key={i} film={el} />
            ))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string,
        year: PropTypes.number,
      }),
  ),
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Main;
