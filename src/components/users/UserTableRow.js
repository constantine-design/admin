import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

const UserTableRow = ({user}) => {

    const history = useHistory();

    return (
      <TableRow className={"user-id-"+user.id}>
        <TableCell align="right">{user.id}</TableCell>
        <TableCell align="right">{user.name}</TableCell>
        <TableCell align="right">{user.phone}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.website}</TableCell>
        <TableCell align="right">
          <Button
            variant="outlined"
            onClick={() => history.push("/users/"+ user.id)}
          >
            Edit
          </Button>
        </TableCell>
      </TableRow>
    );
}

export default React.memo(UserTableRow);
