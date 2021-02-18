import React from 'react';
import PropTypes from 'prop-types';

const Raiting = (props) => {
  const raitingStars = `star-${props.raiting}`;

  return (
    <>
      <input
        className="rating__input"
        id={raitingStars}
        type="radio"
        name="rating"
        defaultValue={props.raiting}
        onChange={(evt) => {
          props.setUserReview(+evt.target.value);
        }}
      />
      <label className="rating__label" htmlFor={raitingStars}>
        Rating {props.raiting}
      </label>
    </>
  );
};

Raiting.propTypes = {
  raiting: PropTypes.number.isRequired,
  setUserReview: PropTypes.func.isRequired,
};

export default Raiting;
