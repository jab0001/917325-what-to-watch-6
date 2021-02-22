import React, {useState} from 'react';
import CardSmall from '../card-small/card-small';
import CardBig from '../card-big.jsx/card-big';
import Genres from '../genres/genres';
import Logo from '../logo/logo';
import UserLogo from '../user-logo/user-logo';
import PropTypes from 'prop-types';
import Copyright from '../copyright/copyright';

const Main = (props) => {
  const {genres, films} = props;
  const [headerFilm, setFilm] = useState(props.headerFilm);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={headerFilm.backgroundImage} alt={headerFilm.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo>
            <UserLogo />
          </Logo>
        </header>
        <div className="movie-card__wrap">
          <CardBig film={headerFilm} />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {genres.map((genre) => (
              <Genres genre={genre} key={genre} />
            ))}
          </ul>
          <div className="catalog__movies-list">
            {films.map((el, i) => (
              <CardSmall key={i} film={el} setFilm={setFilm} />
            ))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <Logo className="logo__link--light">
            <Copyright />
          </Logo>
        </footer>
      </div>
    </>
  );
};

const {number, string, arrayOf, shape, bool} = PropTypes;

Main.propTypes = {
  films: arrayOf(
      shape({
        id: number.isRequired,
        name: string.isRequired,
        posterImage: string.isRequired,
        previewImage: string.isRequired,
        backgroundImage: string.isRequired,
        backgroundColor: string.isRequired,
        videoLink: string.isRequired,
        previewVideoLink: string.isRequired,
        description: string.isRequired,
        rating: number.isRequired,
        scoresCount: number.isRequired,
        director: string.isRequired,
        starring: arrayOf(string.isRequired),
        runTime: number.isRequired,
        genre: string.isRequired,
        released: number.isRequired,
        isFavorite: bool.isRequired,
      })
  ),
  genres: arrayOf(string.isRequired),
  headerFilm: shape({
    backgroundImage: string.isRequired,
    name: string.isRequired,
  })
};

export default Main;
