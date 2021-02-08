import React from 'react';
import PropTypes from 'prop-types';

const CardSmall = (props) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src="img/midnight-special.jpg"
          alt="Midnight Special"
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {props.film.title}
        </a>
      </h3>
    </article>
  );
};

CardSmall.propTypes = {
  film: PropTypes.objectOf(PropTypes.string.isRequired),
};

export default CardSmall;
