import React, {useState} from 'react';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import PropTypes from 'prop-types';

const FilmTabs = (props) => {
  const {film} = props;

  const [tab, setTab] = useState(``);

  const getComponent = (tabButton) => {
    switch (tabButton) {
      case `Details`:
        return <FilmDetails film = {film}/>;
      case `Reviews`:
        return <FilmReviews film = {film}/>;
      default:
        return <FilmOverview film = {film}/>;
    }
  };

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item" onClick={()=> setTab(``)}>
            <a href="#" onClick={(event) => event.preventDefault()} className="movie-nav__link">
              Overview
            </a>
          </li>
          <li className="movie-nav__item" onClick={()=> setTab(`Details`)}>
            <a href="#" onClick={(event) => event.preventDefault()} className="movie-nav__link">
              Details
            </a>
          </li>
          <li className="movie-nav__item" onClick={()=> setTab(`Reviews`)}>
            <a href="#" onClick={(event) => event.preventDefault()} className="movie-nav__link">
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      {getComponent(tab)}
    </>
  );
};

const {shape, arrayOf, string, number} = PropTypes;

FilmTabs.propTypes = {
  film: shape({
    description: string.isRequired,
    rating: number.isRequired,
    scoresCount: number.isRequired,
    director: string.isRequired,
    starring: arrayOf(string.isRequired),
    runTime: number.isRequired,
    genre: string.isRequired,
    released: number.isRequired,
  })
};

export default FilmTabs;
