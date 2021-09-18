import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { setUsers } from '../../store/actions';
import { connect } from 'react-redux';
import {useHistory} from "react-router-dom";

const UserEdit = (props) => {

  useEffect(() => {
    if (!props.users) props.setUsers();
  }, []);
  const history = useHistory();
  const { id } = useParams();
  const findMatch = props.users.length ? props.users.find(u => u.id==id) : false;
  const startVal = findMatch ? findMatch : {name:"", phone:"", email:"", website:""}
  const [currentUser, setCurrentUser] = useState(startVal)
  const changeForm = (name, val) => {
    let newObj = { ...currentUser, [name]: val };
    setCurrentUser(newObj);
  }
  const makeFormDefault = () => {
    setCurrentUser(startVal);
  }

  return(
    <Container maxWidth="sm" align="center">
      <h1> { findMatch ? "Edit User #"+id : "Create new user" } </h1>
      <TextField
        margin="normal" label="Name" variant="outlined" fullWidth
        value={currentUser.name}
        onChange={(e)=>changeForm('name',e.target.value)}
      />
      <br />
      <TextField
        margin="normal" label="Phone" variant="outlined" fullWidth
        value={currentUser.phone}
        onChange={(e)=>changeForm('phone',e.target.value)}
      />
      <br />
      <TextField
        margin="normal" label="Email" variant="outlined" fullWidth
        value={currentUser.email}
        onChange={(e)=>changeForm('email',e.target.value)}
      />
      <br />
      <TextField
        margin="normal" label="Website" variant="outlined" fullWidth
        value={currentUser.website}
        onChange={(e)=>changeForm('website',e.target.value)}
      />
      <br />
      <Button
        variant="contained" color="primary" style={{margin:"1rem 0.4rem"}}
        onClick={()=>{
          if (findMatch) console.log('UPDATE');
          else console.log('NEW')
        }}
      >
        { findMatch ? "Edit" : "Create" }
      </Button>
      <Button
        variant="contained" style={{margin:"1rem 0.4rem"}}
        onClick={()=>makeFormDefault()}
      >
        { findMatch ? "Revert" : "Clean" }
      </Button>
      { findMatch &&
        <Button
          variant="contained" color="primary" style={{margin:"1rem 0.4rem"}}
          onClick={() => console.log('DELETE '+id ) }
        >
          Delete
        </Button>
      }
      <Button
        variant="contained" style={{margin:"1rem 0.4rem"}}
        onClick={() => history.push("/users")}
      >
        Cancel
      </Button>
    </ Container>
  );
}

const mapStateToProps = (state) => ({
    users: state.users.users
})
const mapDispatchToProps = {
  setUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
