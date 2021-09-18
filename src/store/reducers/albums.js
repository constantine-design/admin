export const SET_ALBUMS = "SET_ALBUMS";
export const SET_LAST_PHOTOS = "SET_LAST_PHOTOS";

const initialState = {
  albums: false,
  lastPhotos: false
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(SET_ALBUMS):
      return {...state, albums: payload};
    case(SET_LAST_PHOTOS):
      return {...state, lastPhotos: payload};
    default:
      return state;
  }
}

export default reducer;
