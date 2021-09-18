export const SET_USERS = "SET_USERS";

const initialState = {
  users: false
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(SET_USERS):
      return {...state, users: payload}
    default:
      return state;
  }
}

export default reducer;
