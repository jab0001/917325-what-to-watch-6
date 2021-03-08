import React, {useState} from 'react';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import PropTypes from 'prop-types';

const FilmTabs = (props) => {
  const {film} = props;

  const Tab = {
    OVERVIEW: `overview`,
    DETAILS: `details`,
    REVIEWS: `reviews`,
  };

  const [tab, setTab] = useState(Tab.OVERVIEW);

  const handleClick = ({target: {dataset}}) => {
    setTab(dataset.tab);
  };

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item">
            <p className="movie-nav__link" data-tab={Tab.OVERVIEW} onClick={handleClick}>
              Overview
            </p>
          </li>
          <li className="movie-nav__item">
            <p className="movie-nav__link" data-tab={Tab.DETAILS} onClick={handleClick}>
              Details
            </p>
          </li>
          <li className="movie-nav__item">
            <p className="movie-nav__link" data-tab={Tab.REVIEWS} onClick={handleClick}>
              Reviews
            </p>
          </li>
        </ul>
      </nav>
      {tab === Tab.OVERVIEW && <FilmOverview film={film} />}
      {tab === Tab.REVIEWS && <FilmReviews film={film} />}
      {tab === Tab.DETAILS && <FilmDetails film={film} />}
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
