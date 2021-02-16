import React from 'react';
import Raiting from '../raiting/raiting';
import Header from '../header/header';
import UserLogo from '../user-logo/user-logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import PropTypes from 'prop-types';

const AddReview = (props) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header className={``}>
          <Breadcrumbs />
          <UserLogo />
        </Header>
        <div className="movie-card__poster movie-card__poster--small">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {props.raiting.map((el, i) => (
                <Raiting raiting={el} key={i} />
              ))}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              placeholder="Review text"
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  raiting: PropTypes.arrayOf(PropTypes.number.isRequired),
};

export default AddReview;
