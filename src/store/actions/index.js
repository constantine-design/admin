import { SET_USERS } from "../reducers/users";
import { NEW_USER } from "../reducers/users";
import { DELETE_USER } from "../reducers/users";
import { UPDATE_USER } from "../reducers/users";
import { SET_ALBUMS } from "../reducers/albums";
import { SET_LAST_PHOTOS } from "../reducers/albums";
import users from "../../apis/users.js";
import albums from "../../apis/albums.js";
import photos from "../../apis/photos.js";


// actions USERS
// -----------------------
export const setUsers = () => {
  return (dispatch) => {
    users.get()
      .then(
        response => dispatch({type: SET_USERS, payload: response.data})
      );
  }
}
export const newUser = (user) => {
  return (dispatch) => {
    users.post("", user)
      .then(
        response => dispatch({type: NEW_USER, payload: user})
      );
  }
}
export const deleteUser = (id) => {
  return (dispatch) => {
    users.delete(`/${id}`)
      .then(
        response => dispatch({type: DELETE_USER, payload: id})
      );
  }
}
export const updateUser = (user) => {
  return (dispatch) => {
    users.put(`/${user.id}`, user )
      .then(
        response => dispatch({type: UPDATE_USER, payload: user})
      );
  }
}


// actions ALBUM
// -----------------------
export const setAlbums = () => {
  return (dispatch) => {
    albums.get()
      .then(
        response => dispatch({type: SET_ALBUMS, payload: response.data})
      );
  }
}
export const setLastPhotos = (id) => {
  return (dispatch) => {
    photos.get(`/?albumId=${id}`)
      .then(
        response => dispatch({type: SET_LAST_PHOTOS, payload: response.data})
      );
  }
}
