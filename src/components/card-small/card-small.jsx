import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CardPlayer from '../card-player/card-player';

const CardSmall = (props) => {
  const {setFilm, film} = props;
  const {posterImage, name, id, previewVideoLink} = film;

  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        if (setFilm) {
          setFilm(film);
        }
        handleMouseEnter();
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        {isActive ? (
          <CardPlayer
            url={previewVideoLink}
            poster={posterImage}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        ) : (
          <img src={posterImage} alt={name} width={280} height={175} />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

const {shape, string, number, func} = PropTypes;

CardSmall.propTypes = {
  film: shape({
    name: string.isRequired,
    posterImage: string.isRequired,
    id: number.isRequired,
    previewVideoLink: string.isRequired,
  }),
  setFilm: func,
};

export default CardSmall;
