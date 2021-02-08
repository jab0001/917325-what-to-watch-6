import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {FILMS, GENRES} from './const';

ReactDOM.render(<App films={FILMS} genres={GENRES} />, document.querySelector(`#root`));
