import React, { useEffect } from 'react';
import { setUsers, setAlbums } from '../../store/actions';
import { connect } from 'react-redux';
import {useHistory} from "react-router-dom";
import AlbumsAllItem from "./AlbumsAllItem";

const AlbumsAll = (props) => {

    useEffect(() => {
      if (!props.users) props.setUsers();
      if (!props.albums) props.setAlbums();
    }, []);
    const authorNameInUsers = (id) => {
      if (props.users) return props.users.find(user=>user.id===id).name ;
    }
    const history = useHistory();

    return (
        <div align="center">
          <h1>Albums List</h1>
          { props.albums.length>0 &&
              props.albums.map(album=>(
                <AlbumsAllItem onClick={() => history.push("/albums/"+ album.id)} >
                  <i>«{album.title}»</i>&nbsp; - &nbsp;<b>{ authorNameInUsers(album.userId) }</b>
                </ AlbumsAllItem>

              ))
          }
        </ div>
    );
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    albums: state.albums.albums,
})
const mapDispatchToProps = {
  setUsers, setAlbums
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumsAll);
