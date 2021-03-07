import React from 'react';
import dayjs from 'dayjs';
import durations from 'dayjs/plugin/duration';
import PropTypes from 'prop-types';

dayjs.extend(durations);

const FilmDetails = (props) => {
  const {starring, director, runTime, genre, released} = props.film;

  const getDuration = dayjs.duration(runTime, `minutes`);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((star) => star).join(`, `)}
          </span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getDuration.hours()}h {getDuration.minutes()}m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

const {shape, arrayOf, string, number} = PropTypes;

FilmDetails.propTypes = {
  film: shape({
    starring: arrayOf(string.isRequired),
    director: string.isRequired,
    runTime: number.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
  }),
};

export default FilmDetails;
