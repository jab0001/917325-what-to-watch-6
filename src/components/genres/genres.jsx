import React from 'react';
import PropTypes from 'prop-types';

const Genres = (props) => {
  const {genre} = props;

  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
};

const {string} = PropTypes;

Genres.propTypes = {
  genre: string.isRequired,
};

export default Genres;
