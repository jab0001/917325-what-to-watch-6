import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${props.film.id}`} className="breadcrumbs__link">
            {props.film.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default Breadcrumbs;
