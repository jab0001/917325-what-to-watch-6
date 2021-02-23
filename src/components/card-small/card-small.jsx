import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CardPlayer from '../card-player/card-player';

const CardSmall = (props) => {
  const {setFilm, film} = props;
  const {posterImage, name, id, previewVideoLink} = props.film;

  const isEventSet = () => {
    if (setFilm) {
      return setFilm(film);
    }
    return null;
  };

  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onMouseEnterHandler = () => {
    setIsActive(true);
    setIsPlaying(true);
  };

  const onMouseLeaveHeandler = () => {
    setIsActive(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        isEventSet();
        onMouseEnterHandler();
      }}
      onMouseLeave={() => {
        onMouseLeaveHeandler();
      }}
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
  }),
  setFilm: func,
};

export default CardSmall;
