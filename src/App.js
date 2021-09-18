import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Albums from './components/albums/Albums';
import Users from './components/users/Users';
import Navigation from './components/Navigation';

export default function App(props) {
  return (
    <Router>
        <Navigation />
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <Switch>
            <Route path="/albums">
              <Albums />
            </Route>
            <Route path="/users" >
              <Users />
            </Route>
          </Switch>
          </Grid>
        </Grid>
    </Router>
  );
}
