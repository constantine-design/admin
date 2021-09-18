import { SET_USERS } from "../reducers/users";
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
