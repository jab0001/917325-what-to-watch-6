import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../components/main/main';
import SignIn from '../components/sign-in/sign-in';
import MyList from '../components/my-list/my-list';
import Film from '../components/film/film';
import AddReview from '../components/add-review/add-review';
import Player from '../components/player/player';
import Error from '../components/error/error';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={props.films} genres={props.genres} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={props.films}/>
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReview raiting={props.raiting} />
        </Route>
        <Route exact path="/films/:id?">
          <Film films={props.films}/>
        </Route>
        <Route exact path="/player/:id?">
          <Player />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string,
        year: PropTypes.number,
      })
  ),
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  raiting: PropTypes.arrayOf(PropTypes.number.isRequired),
};

export default App;
