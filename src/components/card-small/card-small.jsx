import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CardSmall = (props) => {
  const {setFilm, film} = props;
  const {posterImage, name, id} = props.film;

  const isEventSet = () => {
    if (setFilm) {
      return setFilm(film);
    }
    return null;
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => isEventSet()}
    >
      <div className="small-movie-card__image">
        <img
          src={posterImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

const {shape, string, number, func} = PropTypes;

CardSmall.propTypes = {
  film: shape({
    name: string.isRequired,
    posterImage: string.isRequired,
    id: number.isRequired,
  }),
  setFilm: func,
};

export default CardSmall;
