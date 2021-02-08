import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import {FILMS} from './const';

ReactDOM.render(<App films={FILMS} />, document.querySelector(`#root`));
