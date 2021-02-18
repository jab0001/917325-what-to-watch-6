import React, {useState} from 'react';
import Raiting from '../raiting/raiting';
import Header from '../header/header';
import UserLogo from '../user-logo/user-logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import propReview from './prop-review';

const AddReview = (props) => {
  const film = props.films.find((item) => item.id === +props.match.params.id);
  const [userFormText, setUserFormText] = useState(``);
  const [userReview, setUserReview] = useState(10);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleTextChange = (evt) => {
    setUserFormText(evt.target.value);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header>
          <Breadcrumbs film={film} />
          <UserLogo />
        </Header>
        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
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
                <Raiting
                  raiting={el}
                  key={i}
                  id={i}
                  userReview={userReview}
                  setUserReview={setUserReview}
                />
              ))}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              placeholder="Review text"
              onChange={handleTextChange}
              value={userFormText}
            >
              {userFormText}
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = propReview;

export default AddReview;
