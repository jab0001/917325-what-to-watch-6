import React from 'react';
import PropTypes from 'prop-types';

const CardBig = (props) => {

  return (
    <div className="movie-card__info">
      <div className="movie-card__poster">
        <img
          src={props.film.posterImage}
          alt={props.film.name}
          width={218}
          height={327}
        />
      </div>
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{props.film.name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{props.film.genre}</span>
          <span className="movie-card__year">{props.film.released}</span>
        </p>
        <div className="movie-card__buttons">
          <button className="btn btn--play movie-card__button" type="button">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <button className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width={19} height={20}>
              <use xlinkHref="#add" />
            </svg>
            <span>My list</span>
          </button>
        </div>
      </div>
    </div>
  );
};

CardBig.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
  }),
};

export default CardBig;
