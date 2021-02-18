import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {GENRES, RAITING} from './const';
import FILMS from './mock/films';

ReactDOM.render(<App films={FILMS} genres={GENRES} raiting={RAITING} />, document.querySelector(`#root`));
