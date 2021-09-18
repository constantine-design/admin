import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Albums from './components/albums/Albums';
import Users from './components/users/Users';
import Navigation from './components/Navigation';

export default function App(props) {
  return (
    <Router>
        <Navigation />
          <Switch>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route path="/users" >
              <Users />
            </Route>
            <Redirect from="/" to="/albums" />
          </Switch>
    </Router>
  );
}
