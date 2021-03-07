import React, {useState} from 'react';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';

const FilmTabs = (props) => {
  const {film} = props;

  const [tab, setTab] = useState(``);

  const getComponent = (tab) => {
    switch (tab) {
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

export default FilmTabs;
