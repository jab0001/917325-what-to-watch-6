import React from 'react';
import PropTypes from 'prop-types';

const Genres = (props) => {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {props.genre}
      </a>
    </li>
  );
};

Genres.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Genres;
