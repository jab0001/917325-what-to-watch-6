import React from 'react';
import PropTypes from 'prop-types';

const filmRatings = [
  {
    TEXT: `Bad`,
    RATING: 0
  },
  {
    TEXT: `Normal`,
    RATING: 3
  },
  {
    TEXT: `Good`,
    RATING: 5
  },
  {
    TEXT: `Very Good`,
    RATING: 8
  },
  {
    TEXT: `Awesome`,
    RATING: 10
  }
];

const getTextRating = (rating) => {
  let result;
  for (let i = 0; i < filmRatings.length; i++) {
    if (rating <= filmRatings[i].RATING) {
      result = filmRatings[i - 1].TEXT;
      break;
    }
  }
  return result;
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
