import React, {useState} from 'react';
import CardSmall from '../card-small/card-small';
import CardBig from '../card-big.jsx/card-big';
import Genres from '../genres/genres';
import Header from '../header/header';
import UserLogo from '../user-logo/user-logo';
import propMain from './prop-main';
import Footer from '../footer/footer';

const Main = (props) => {
  const [headerFilm, setFilm] = useState(props.headerFilm);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src={headerFilm.backgroundImage}
            alt={headerFilm.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header className="movie-card__head">
          <UserLogo />
        </Header>
        <div className="movie-card__wrap">
          <CardBig film={headerFilm} />
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {props.genres.map((genre) => (
              <Genres genre={genre} key={genre} />
            ))}
          </ul>
          <div className="catalog__movies-list">
            {props.films.map((el, i) => (
              <CardSmall key={i} film={el} hover={setFilm}/>
            ))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

Main.propTypes = propMain;

export default Main;
