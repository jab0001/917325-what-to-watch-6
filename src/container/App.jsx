import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../components/main/main';
import SignIn from '../components/sign-in/sign-in';
import MyList from '../components/my-list/my-list';
import Film from '../components/film/film';
import AddReview from '../components/add-review/add-review';
import Player from '../components/player/player';
import Error from '../components/error/error';
import propApp from './prop-app';

const App = (props) => {
  const headerFilm = props.films[0];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={props.films} genres={props.genres} headerFilm={headerFilm} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={props.films} />
        </Route>
        <Route exact path="/films/:id?/review" render={(routerProps) => <AddReview films={props.films} raiting={props.raiting} {...routerProps} />}/>
        <Route exact path="/films/:id?" render={(routerProps) => <Film films={props.films} {...routerProps}/>} />
        <Route exact path="/player/:id?" render={(routerProps) => <Player films={props.films} {...routerProps} />} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = propApp;

export default App;
