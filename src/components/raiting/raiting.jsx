import React from 'react';
import PropTypes from 'prop-types';

const Raiting = (props) => {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${props.raiting}`}
        type="radio"
        name="rating"
        defaultValue={props.raiting}
      />
      <label className="rating__label" htmlFor={`star-${props.raiting}`}>
        Rating {props.raiting}
      </label>
    </>
  );
};

Raiting.propTypes = {
  raiting: PropTypes.number.isRequired,
};

export default Raiting;
