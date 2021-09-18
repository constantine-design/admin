import Container from "@material-ui/core/Container";
import React from 'react';
import UserTable from './UserTable';
import UserEdit from './UserEdit';
import {Route, Switch, useRouteMatch} from "react-router-dom";

const Users = (props) => {

    const match = useRouteMatch();

    return (
        <Container>
          <Switch>
            <Route path={match.path + "/"} exact>
              <UserTable />
            </Route>
            <Route path={match.path + "/:id"}>
              <UserEdit />
            </Route>
          </Switch>
        </ Container>
    );

}

export default Users;
