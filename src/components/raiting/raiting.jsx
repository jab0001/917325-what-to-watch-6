import React from 'react';
import PropTypes from 'prop-types';

const Raiting = (props) => {
  const {raiting, userReview, setUserReview} = props;
  const raitingStars = `star-${raiting}`;

  return (
    <>
      <input
        className="rating__input"
        id={raitingStars}
        type="radio"
        name="rating"
        defaultValue={raiting}
        onChange={(evt) => {
          setUserReview(+evt.target.value);
        }}
        checked={userReview === raiting}
      />
      <label className="rating__label" htmlFor={raitingStars}>
        Rating {raiting}
      </label>
    </>
  );
};

const {number, func} = PropTypes;

Raiting.propTypes = {
  raiting: number.isRequired,
  setUserReview: func.isRequired,
  userReview: number.isRequired,
};

export default Raiting;
