import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../components/main/main';
import SignIn from '../components/sign-in/sign-in';
import MyList from '../components/my-list/my-list';
import Film from '../components/film/film';
import AddReview from '../components/add-review/add-review';
import Player from '../components/player/player';
import Error from '../components/error/error';
import PropTypes from 'prop-types';

const App = (props) => {
  const {films, genres, raiting} = props;
  const headerFilm = films[0];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={films} genres={genres} headerFilm={headerFilm} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact path="/films/:id?/review" render={(routerProps) => <AddReview films={films} raiting={raiting} {...routerProps} />}/>
        <Route exact path="/films/:id?" render={(routerProps) => <Film films={films} {...routerProps}/>} />
        <Route exact path="/player/:id?" render={(routerProps) => <Player films={films} {...routerProps} />} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const {arrayOf, shape, number, string, bool} = PropTypes;

App.propTypes = {
  films: arrayOf(
      shape({
        id: number.isRequired,
        name: string.isRequired,
        posterImage: string.isRequired,
        previewImage: string.isRequired,
        backgroundImage: string.isRequired,
        backgroundColor: string.isRequired,
        videoLink: string.isRequired,
        previewVideoLink: string.isRequired,
        description: string.isRequired,
        rating: number.isRequired,
        scoresCount: number.isRequired,
        director: string.isRequired,
        starring: arrayOf(string.isRequired),
        runTime: number.isRequired,
        genre: string.isRequired,
        released: number.isRequired,
        isFavorite: bool.isRequired,
      })
  ),
  genres: arrayOf(string.isRequired),
  raiting: arrayOf(number.isRequired),
};

export default App;
