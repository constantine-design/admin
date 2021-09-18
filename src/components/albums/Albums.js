import Container from "@material-ui/core/Container";
import React from 'react';
import AlbumsAll from "./AlbumsAll"
import AlbumCurrent from "./AlbumCurrent"
import {Route, Switch, useRouteMatch} from "react-router-dom";

const Albums = (props) => {

  const match = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route path={match.path + "/"} exact>
          <AlbumsAll />
        </Route>
        <Route path={match.path + "/:id"}>
          <AlbumCurrent />
        </Route>
      </Switch>
    </ Container>
  );
}

export default Albums;
