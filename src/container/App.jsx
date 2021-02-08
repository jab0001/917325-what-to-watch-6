import React from 'react';
import PropTypes from 'prop-types';
import PageMain from '../components/page-main/page-main';

const App = (props) => {
  return <PageMain films={props.films} />;
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.number
  })),
};

export default App;
