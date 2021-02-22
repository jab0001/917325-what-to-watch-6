import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = (props) => {
  const {id, name} = props.film;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}`} className="breadcrumbs__link">
            {name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

const {shape, string, number} = PropTypes;

Breadcrumbs.propTypes = {
  film: shape({
    name: string.isRequired,
    id: number.isRequired,
  }),
};

export default Breadcrumbs;
