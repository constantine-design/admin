import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import UserTableRow from "./UserTableRow";
import React, { useEffect } from 'react';
import { setUsers } from '../../store/actions';
import { connect } from 'react-redux';
import {useHistory} from "react-router-dom";

const UserTable = (props) => {

  useEffect(() => {
    if (!props.users) props.setUsers();
  }, []);
  const history = useHistory();

  return(
    <>
      <h1> Users List </h1>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { props.users.length>0 &&
          props.users.map((user) =>
          <UserTableRow  key={"user-id-"+user.id} user={user} />
        )}
        </TableBody>
        </Table>
        <div align="right" style={{margin: "1rem 0"}}>
          <Button
            variant="contained" color="primary"
            onClick={() => history.push("/users/0")}
          >
            New User
          </Button>
        </div>
      </TableContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
    users: state.users.users
})
const mapDispatchToProps = {
  setUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
