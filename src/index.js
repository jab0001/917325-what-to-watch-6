import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {FILMS, GENRES, RAITING} from './const';

ReactDOM.render(<App films={FILMS} genres={GENRES} raiting={RAITING} />, document.querySelector(`#root`));
