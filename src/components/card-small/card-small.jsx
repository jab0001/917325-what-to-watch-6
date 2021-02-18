import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CardSmall = (props) => {
  const event = props.hover ? () => props.hover(props.film) : () => {};

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={event}>
      <div className="small-movie-card__image">
        <img
          src={props.film.posterImage}
          alt={props.film.name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${props.film.id}`}>
          {props.film.name}
        </Link>
      </h3>
    </article>
  );
};

CardSmall.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  hover: PropTypes.func,
};

export default CardSmall;
