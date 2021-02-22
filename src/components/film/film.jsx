import React from 'react';
import CardSmall from '../card-small/card-small';
import Logo from '../logo/logo';
import UserLogo from '../user-logo/user-logo';
import {Link} from 'react-router-dom';
import Copyright from '../copyright/copyright';
import PropTypes from 'prop-types';

const Film = (props) => {
  const film = props.films.find(({id}) => id === +props.match.params.id);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo>
              <UserLogo />
            </Logo>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
                <Link
                  to={`${props.match.params.id}/review`}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="movie-rating">
                <div className="movie-rating__score">{film.scoresCount}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">
                    {film.rating} ratings
                  </span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>{film.description}</p>
                <p className="movie-card__director">
                  <strong>Director: {film.director}</strong>
                </p>
                <p className="movie-card__starring">
                  <strong>
                    Starring: {film.starring.map((star) => star).join(`, `)}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            {props.films.map((el, i) => (
              <CardSmall film={el} key={i} />
            ))}
          </div>
        </section>
        <footer className="page-footer">
          <Logo className="logo__link--light">
            <Copyright />
          </Logo>
        </footer>
      </div>
    </>
  );
};

const {number, string, arrayOf, shape, bool} = PropTypes;

Film.propTypes = {
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
  match: shape({
    params: shape({
      id: string.isRequired,
    }),
  }),
};

export default Film;
