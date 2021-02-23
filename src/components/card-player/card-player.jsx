import React, {createRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const CardPlayer = (props) => {
  const {url, poster, isPlaying, setIsPlaying} = props;

  const videoRef = createRef();
  let timer = null;
  useEffect(() => {
    if (isPlaying) {
      timer = setTimeout(() => {
        videoRef.current.play();
      }, 1000);
    }

    return () => {
      setIsPlaying(false);
      timer = clearTimeout(timer);
    };
  }, [isPlaying]);

  return (
    <video src={url} ref={videoRef} width={280} height={175} poster={poster} muted></video>
  );
};

const {string, func, bool} = PropTypes;

CardPlayer.propTypes = {
  url: string.isRequired,
  poster: string.isRequired,
  isPlaying: bool.isRequired,
  setIsPlaying: func.isRequired,
};

export default CardPlayer;
