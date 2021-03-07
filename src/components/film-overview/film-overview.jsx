import React from 'react';
import PropTypes from 'prop-types';

const FilmRatings = {
  Bad: {
    TEXT: `Bad`,
    RATING: 0
  },
  Normal: {
    TEXT: `Normal`,
    RATING: 3
  },
  Good: {
    TEXT: `Good`,
    RATING: 5
  },
  VeryGood: {
    TEXT: `Very Good`,
    RATING: 8
  },
  Awesome: {
    TEXT: `Awesome`,
    RATING: 10
  }
};

const getTextRating = (rating) => {
  if (rating < FilmRatings.Normal.RATING) {
    return FilmRatings.Bad.TEXT;
  } else if (rating >= FilmRatings.Normal.RATING && rating < FilmRatings.Good.RATING) {
    return FilmRatings.Normal.TEXT;
  } else if (rating >= FilmRatings.Good.RATING && rating < FilmRatings.VeryGood.RATING) {
    return FilmRatings.Good.TEXT;
  } else if (rating >= FilmRatings.VeryGood.RATING && rating < FilmRatings.Awesome.RATING) {
    return FilmRatings.VeryGood.TEXT;
  }

  return FilmRatings.Awesome.TEXT;
};

const FilmOverview = (props) => {
  const {rating, scoresCount, description, director, starring} = props.film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextRating(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        {description}
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>
            Starring: {starring.map((star) => star).join(`, `)}
          </strong>
        </p>
      </div>
    </>
  );
};

const {shape, arrayOf, string, number} = PropTypes;

FilmOverview.propTypes = {
  film: shape({
    starring: arrayOf(string.isRequired),
    director: string.isRequired,
    description: string.isRequired,
    scoresCount: number.isRequired,
    rating: number.isRequired,
  }),
};

export default FilmOverview;
